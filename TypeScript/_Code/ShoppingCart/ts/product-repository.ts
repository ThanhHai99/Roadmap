import { Product } from "./product";
import { Helpers } from "./libs/helpers";

export class ProductRepository {
    private products: Array<Product> = [];

    constructor() {
        this.addItem(new Product(100, "bulbasaur", "bulbasaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 69));
		this.addItem(new Product(101, "charmander", "charmander.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 18));
		this.addItem(new Product(102, "ivysaur", "ivysaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 22));
		this.addItem(new Product(103, "squirtle", "squirtle.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 65));
		this.addItem(new Product(104, "venusaur", "venusaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 19, false));
    };

    public addItem (product: Product) {
        this.products[this.products.length] = product;
    };

    public getItems () : Array<Product> {
        return this.products;
    };

    public getItemByID(id: number): Product {
        for (let i: number = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return this.products[i];
            };
        }
        return null;
    };

    public showItemsInHTML(): string {
        let total = this.products.length;
        let HtmlResults = "";
        if (total > 0) {
            for (let i = 0; i < total; i++) {
                let currentItem: Product = this.products[i];
                HtmlResults += `<div class="media product">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="img/characters/${currentItem.image}" alt="${currentItem.name}">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">${currentItem.name}</h4>
                                        <p>${currentItem.summary}</p>
                                        ${this.showBuyItemInHTML(currentItem)}
                                    </div>
                                </div>`;
            }; 
        } else {
            HtmlResults = "Empty product in your shop";
        };
        return HtmlResults;
    };

    public showBuyItemInHTML(product: Product) : string {
        let HtmlResults : string = "";
        if (product.canBuy == true) {
            HtmlResults = `<input name="quantity-product-${product.id}" type="number" value="1" min="1">
                            <a data-product="${product.id}" href="#" class="price"> ${Helpers.toCurrency(product.price, "USD", "right")} </a>`;
        } else {
            HtmlResults = `<span class="price">${Helpers.toCurrency(product.price, "$")}</span>`;
        };
        return HtmlResults;
    };
};
