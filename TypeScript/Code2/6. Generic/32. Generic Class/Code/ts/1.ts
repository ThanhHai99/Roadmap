class Product<A, B, C> {
    id: A;
    name: B;
    price: C;
    constructor(id: A, name: B, price: C) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    };
}

let product1 = new Product<string, string, number>("1", "P1", 1);
let product2 = new Product<number, string, string>(2, "P2", "2");
let product3 = new Product<string, number, boolean>("3", 3, false);

product1.showProductInfo();
product2.showProductInfo();
product3.showProductInfo();
