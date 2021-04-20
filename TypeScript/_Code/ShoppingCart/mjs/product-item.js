"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const helpers_1 = require("./libs/helpers");
class CartItem {
    constructor(product, quantity) {
        this._product = product;
        this._quantity = quantity;
    }
    ;
    showCartItemInHTML(index) {
        return `<tr>
					<th scope="row">${index}</th>
					<td>${this.product.name}</td>
					<td>${helpers_1.Helpers.toCurrency(this.product.price, "USD", "right")}</td>
					<td><input name="cart-item-quantity-${this.product.id}" type="number" value="${this.quantity}" min="1"></td>
					<td><strong>${helpers_1.Helpers.toCurrency(this.getSubTotal(), "USD", "right")}</strong></td>
					<td>
						<a class="label label-info update-cart-item" href="#" data-product="${this.product.id}">Update</a>
						<a class="label label-danger delete-cart-item" href="#" data-product="${this.product.id}">Delete</a>
					</td>
				</tr>`;
    }
    ;
    getSubTotal() {
        return this.product.price * this.quantity;
    }
    ;
    // Getter, Setter    
    get product() {
        return this._product;
    }
    ;
    set product(v) {
        this._product = v;
    }
    ;
    get quantity() {
        return this._quantity;
    }
    ;
    set quantity(v) {
        this._quantity = v;
    }
    ;
}
exports.CartItem = CartItem;
;
