using API.Data;
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

        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            Basket basket = await RetriveBasket();

            if (basket == null)
            {
                return NotFound();
            }
            return Ok(basket);
        }



        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            var basket = await RetriveBasket();
            if (basket == null)
            {
                basket = CreateBasket();
            }
            return StatusCode(201);

        }



        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            return Ok();
        }

        private async Task<Basket> RetriveBasket()
        {
            return await _context.Baskets
                            .Include(i => i.Items)
                            .ThenInclude(p => p.Product)
                            .FirstOrDefaultAsync(x => x.BuyingId == Request.Cookies["buyerId"]);
        }
        //private Basket CreateBasket()
        //{
        //    var buyerId =Guid.NewGuid().ToString();
        //}
    }
}
