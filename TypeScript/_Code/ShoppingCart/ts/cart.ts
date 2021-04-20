import { CartItem } from "./cart-item";
import { Product } from "./product";
import { Helpers } from "./libs/helpers";

export class Cart {
    private cartItems: CartItem[] = [];
    private totalQuantity: number = 0;
    private totalPrice: number = 0;

    public getProductPosition (product: Product): number {
        let total: number = this.cartItems.length;
        for (let i: number = 0; i < total; i++) {
            if (this.cartItems[i].product.id == product.id) {
                return i;
            };
        };
        return -1;
    };

    public addProduct (product: Product, quantity: number = 1): void {
        let position: number = this.getProductPosition(product);
        // existed in cart
        if (position > -1) {
            this.cartItems[position].quantity += quantity;
        } else {
            // no existed in cart
            this.cartItems[this.cartItems.length] = new CartItem(product, quantity);
        };
        this.totalQuantity += quantity;
        this.totalPrice += product.price * quantity;
    };

    public updateProduct (product: Product, quantity: number = 1): void {
        let position: number = this.getProductPosition(product);
        if (position > -1) {
            this.totalQuantity = this.totalQuantity - this.cartItems[position].quantity + quantity;
            this.totalPrice = this.totalPrice - product.price * (this.cartItems[position].quantity - quantity);
            this.cartItems[position].quantity = quantity;
        };
    };

    public removeProduct (product: Product) : void {
        let position: number = this.getProductPosition(product);
        if (position > -1) {
			this.totalQuantity = this.totalQuantity - this.cartItems[position].quantity;
			this.totalPrice = this.totalPrice - product.price * this.cartItems[position].quantity;
			this.cartItems.splice(position, 1);
		};
    };

    public isEmpty(): boolean {
        return (this.cartItems.length == 0);
    };

    public showCartBodyInHTML() : string {
        let HTMLResult: string = ``;
		if (!this.isEmpty()) {
			let total: number = this.cartItems.length;
			for (let i: number = 0; i < total; i++) {
				let cartItemCurrent: CartItem = this.cartItems[i];
				HTMLResult += cartItemCurrent.showCartItemInHTML(i + 1);
			};
		};
		return HTMLResult;
    };

    public showCartFooterInHTML(): string {
		let HTMLResult: string = `<tr><th colspan="6">Empty product in your cart</th></tr>`;
		if (!this.isEmpty()) {
			HTMLResult = `<tr>
								<td colspan="4">There are <b>${this.totalQuantity}</b> items in your shopping cart.</td>
								<td colspan="2" class="total-price text-left">${Helpers.toCurrency(this.totalPrice, "USD", "right")}</td>
							</tr>`;
		}
		return HTMLResult;
	}
};
