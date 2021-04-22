class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
    ;
}
let product1 = new Product("1", "P1", 1);
let product2 = new Product(2, "P2", "2");
let product3 = new Product("3", 3, false);
product1.showProductInfo();
product2.showProductInfo();
product3.showProductInfo();
