namespace KB11775_BlazorServerApp1.Data;

public class Product
{
    public int ProductID { get; set; }
    public String ProductName { get; set; } = "";
    public int StockedAmount { get; set; }

    public Product()
    {
    }
}
