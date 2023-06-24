using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;

        public BasketController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            Basket basket = await RetriveBasket();

            if (basket == null)
            {
                return NotFound();
            }
            return Ok(MapBasketToDto(basket));

        }

        

        [HttpPost]
        public async Task<ActionResult<BasketDto>> AddItemToBasket(int productId, int quantity)
        {
            var basket = await RetriveBasket();
            if (basket == null)
            {
                basket = CreateBasket();
            }
            var product = await _context.Products.FindAsync(productId);
            if (product == null)
            {
                return NotFound();
            }
            basket.AddItem(product, quantity);
            var result = await _context.SaveChangesAsync() > 0;

            if (result)
            {
                //CreateAtRoute add location header to out response 
                return CreatedAtRoute("GetBasket",MapBasketToDto(basket));
            }
            return BadRequest(new ProblemDetails { Title = "Problem saving item into basket" });

        }



        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            var basket = await RetriveBasket();
            if (basket == null) { return NotFound(); }
            basket.RemoveItem(productId, quantity);
            var result = await _context.SaveChangesAsync()>0;
            if(result)
                return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem Removing Item From Basket" });
        }

        private async Task<Basket> RetriveBasket()
        {
            return await _context.Baskets
                            .Include(i => i.Items)
                            .ThenInclude(p => p.Product)
                            .FirstOrDefaultAsync(x => x.BuyingId == Request.Cookies["buyerId"]);
        }
        private Basket CreateBasket()
        {
            var buyerId = Guid.NewGuid().ToString();
            var cookieOption = new CookieOptions { IsEssential = true, 
                                                    Expires = DateTime.Now.AddDays(30), 
                                                    SameSite = SameSiteMode.None,
                                                    Secure = true,
                                                };
            Response.Cookies.Append("buyerId", buyerId, cookieOption);
            var basket = new Basket { BuyingId = buyerId };
            _context.Baskets.Add(basket);
            return basket;
        }
        private BasketDto MapBasketToDto(Basket basket)
        {
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyingId,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    PictureUrl = item.Product.PictureUrl,
                    Type = item.Product.Type,
                    Brand = item.Product.Brand,
                    Quantity = item.Quantity.ToString()
                }).ToList(),
            };
        }
    }
}
