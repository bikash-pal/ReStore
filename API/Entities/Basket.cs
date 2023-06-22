namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyingId { get; set; }
        public List<BaseketItem> Items { get; set; } =new();

        public void AddItem(Product product,int quantity)
        {
            if (Items.All(item => item.ProductId != product.Id))
            {
                Items.Add(new BaseketItem() { ProductId = product.Id, Quantity = quantity });
            }
            
            var existingItems=Items.FirstOrDefault(item=>item.ProductId==product.Id);
            if(existingItems!=null)
            {
                existingItems.Quantity += quantity;
            }
        }

        public void RemoveItem(int productId,int quantity) {
            var item = Items.FirstOrDefault(item => item.ProductId == productId);
            if (item != null)
            {
                item.Quantity -= quantity;
            }
            if (item.Quantity == 0)
            {
                Items.Remove(item);
            }

        }
    }
}
