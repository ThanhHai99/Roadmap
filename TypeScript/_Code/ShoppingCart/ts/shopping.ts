import { Cart } from "./cart";
import { Product } from "./product";
import { ProductRepository } from "./product-repository";
import { Validate } from "./libs/validate";

namespace MElement {
	export const ELM_LIST_PRODUCT: string = "#list-product";
	export const ELM_NOTIFICATION: string = "#mnotification";
	export const ELM_CART_BODY: string = "#my-cart-body";
	export const ELM_CART_FOOTER: string = "#my-cart-footer";
};

namespace MNotification {
	export const NOTI_READY_TO_BUY: string = "Ready to buy product";
	export const NOTI_GREATER_THAN_ONE: string = "Quantity must equal or greater than 1";
	export const NOTI_ACT_ADD: string = "Added successfull !!";
	export const NOTI_ACT_UPDATE: string = "Updated successfull !!";
	export const NOTI_ACT_DELETE: string = "Deleted successfull !!";
};

let productRepository = new ProductRepository();
let cartObj = new Cart();
let products: Product[] = productRepository.getItems();

// show list product
function showListProduct (): void {
    $(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemsInHTML());
};

// show cart
function showCart(): void {
	$(MElement.ELM_CART_BODY).html(cartObj.showCartBodyInHTML());
	$(MElement.ELM_CART_FOOTER).html(cartObj.showCartFooterInHTML());
};

// show notification
function showNotification(str: string): void {
	$(MElement.ELM_NOTIFICATION).html(str);
};

// Add Product
function addProduct(id: number, quantity: number) {
	if (Validate.checkQuantity(quantity)) {
		let product: Product = productRepository.getItemByID(id);
		cartObj.addProduct(product, quantity);
		showCart();
		showNotification(MNotification.NOTI_ACT_ADD);
	} else {
		showNotification(MNotification.NOTI_GREATER_THAN_ONE);
	};
};

// Update Product
function updateProduct(id: number, quantity: number) {
	if (Validate.checkQuantity(quantity)) {
		let product: Product = productRepository.getItemByID(id);
		cartObj.updateProduct(product, quantity);
		showCart();
		showNotification(MNotification.NOTI_ACT_UPDATE);
	} else {
		showNotification(MNotification.NOTI_GREATER_THAN_ONE);
	};
};

// Delete Product
function deleteProduct(id: number) {
	let product: Product = productRepository.getItemByID(id);
	cartObj.removeProduct(product);
	showCart();
	showNotification(MNotification.NOTI_ACT_DELETE);
};

$(document).ready(function () {
	showListProduct();
	showCart();
	showNotification(MNotification.NOTI_READY_TO_BUY);

	// Buy Product
	$("a.price").click(function () {
		let id: number = $(this).data("product");
		let quantity: number = parseInt($("input[name='quantity-product-" + id + "']").val());
		addProduct(id, quantity);
		return false;
	});

	// Update Product
	$(document).on("click", "a.update-cart-item", function () {
		let id: number = $(this).data("product");
		let quantity: number = parseInt($("input[name='cart-item-quantity-" + id + "']").val());
		updateProduct(id, quantity);
		return false;
	});

	// Delete Product
	$(document).on("click", "a.delete-cart-item", function () {
		let id: number = $(this).data("product");
		deleteProduct(id);
		return false;
	});
});

