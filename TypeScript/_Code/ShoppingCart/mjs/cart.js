"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const cart_item_1 = require("./cart-item");
const helpers_1 = require("./libs/helpers");
class Cart {
    constructor() {
        this.cartItems = [];
        this.totalQuantity = 0;
        this.totalPrice = 0;
    }
    getProductPosition(product) {
        let total = this.cartItems.length;
        for (let i = 0; i < total; i++) {
            if (this.cartItems[i].product.id == product.id) {
                return i;
            }
            ;
        }
        ;
        return -1;
    }
    ;
    addProduct(product, quantity = 1) {
        let position = this.getProductPosition(product);
        // existed in cart
        if (position > -1) {
            this.cartItems[position].quantity += quantity;
        }
        else {
            // no existed in cart
            this.cartItems[this.cartItems.length] = new cart_item_1.CartItem(product, quantity);
        }
        ;
        this.totalQuantity += quantity;
        this.totalPrice += product.price * quantity;
    }
    ;
    updateProduct(product, quantity = 1) {
        let position = this.getProductPosition(product);
        if (position > -1) {
            this.totalQuantity = this.totalQuantity - this.cartItems[position].quantity + quantity;
            this.totalPrice = this.totalPrice - product.price * (this.cartItems[position].quantity - quantity);
            this.cartItems[position].quantity = quantity;
        }
        ;
    }
    ;
    removeProduct(product) {
        let position = this.getProductPosition(product);
        if (position > -1) {
            this.totalQuantity = this.totalQuantity - this.cartItems[position].quantity;
            this.totalPrice = this.totalPrice - product.price * this.cartItems[position].quantity;
            this.cartItems.splice(position, 1);
        }
        ;
    }
    ;
    isEmpty() {
        return (this.cartItems.length == 0);
    }
    ;
    showCartBodyInHTML() {
        let HTMLResult = ``;
        if (!this.isEmpty()) {
            let total = this.cartItems.length;
            for (let i = 0; i < total; i++) {
                let cartItemCurrent = this.cartItems[i];
                HTMLResult += cartItemCurrent.showCartItemInHTML(i + 1);
            }
            ;
        }
        ;
        return HTMLResult;
    }
    ;
    showCartFooterInHTML() {
        let HTMLResult = `<tr><th colspan="6">Empty product in your cart</th></tr>`;
        if (!this.isEmpty()) {
            HTMLResult = `<tr>
								<td colspan="4">There are <b>${this.totalQuantity}</b> items in your shopping cart.</td>
								<td colspan="2" class="total-price text-left">${helpers_1.Helpers.toCurrency(this.totalPrice, "USD", "right")}</td>
							</tr>`;
        }
        return HTMLResult;
    }
}
exports.Cart = Cart;
;
