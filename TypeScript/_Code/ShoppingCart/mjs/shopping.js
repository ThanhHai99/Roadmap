"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = require("./cart");
const product_repository_1 = require("./product-repository");
const validate_1 = require("./libs/validate");
var MElement;
(function (MElement) {
    MElement.ELM_LIST_PRODUCT = "#list-product";
    MElement.ELM_NOTIFICATION = "#mnotification";
    MElement.ELM_CART_BODY = "#my-cart-body";
    MElement.ELM_CART_FOOTER = "#my-cart-footer";
})(MElement || (MElement = {}));
;
var MNotification;
(function (MNotification) {
    MNotification.NOTI_READY_TO_BUY = "Ready to buy product";
    MNotification.NOTI_GREATER_THAN_ONE = "Quantity must equal or greater than 1";
    MNotification.NOTI_ACT_ADD = "Added successfull !!";
    MNotification.NOTI_ACT_UPDATE = "Updated successfull !!";
    MNotification.NOTI_ACT_DELETE = "Deleted successfull !!";
})(MNotification || (MNotification = {}));
;
let productRepository = new product_repository_1.ProductRepository();
let cartObj = new cart_1.Cart();
let products = productRepository.getItems();
// show list product
function showListProduct() {
    $(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemsInHTML());
}
;
// show cart
function showCart() {
    $(MElement.ELM_CART_BODY).html(cartObj.showCartBodyInHTML());
    $(MElement.ELM_CART_FOOTER).html(cartObj.showCartFooterInHTML());
}
;
// show notification
function showNotification(str) {
    $(MElement.ELM_NOTIFICATION).html(str);
}
;
// Add Product
function addProduct(id, quantity) {
    if (validate_1.Validate.checkQuantity(quantity)) {
        let product = productRepository.getItemByID(id);
        cartObj.addProduct(product, quantity);
        showCart();
        showNotification(MNotification.NOTI_ACT_ADD);
    }
    else {
        showNotification(MNotification.NOTI_GREATER_THAN_ONE);
    }
    ;
}
;
// Update Product
function updateProduct(id, quantity) {
    if (validate_1.Validate.checkQuantity(quantity)) {
        let product = productRepository.getItemByID(id);
        cartObj.updateProduct(product, quantity);
        showCart();
        showNotification(MNotification.NOTI_ACT_UPDATE);
    }
    else {
        showNotification(MNotification.NOTI_GREATER_THAN_ONE);
    }
    ;
}
;
// Delete Product
function deleteProduct(id) {
    let product = productRepository.getItemByID(id);
    cartObj.removeProduct(product);
    showCart();
    showNotification(MNotification.NOTI_ACT_DELETE);
}
;
$(document).ready(function () {
    showListProduct();
    showCart();
    showNotification(MNotification.NOTI_READY_TO_BUY);
    // Buy Product
    $("a.price").click(function () {
        let id = $(this).data("product");
        let quantity = parseInt($("input[name='quantity-product-" + id + "']").val());
        addProduct(id, quantity);
        return false;
    });
    // Update Product
    $(document).on("click", "a.update-cart-item", function () {
        let id = $(this).data("product");
        let quantity = parseInt($("input[name='cart-item-quantity-" + id + "']").val());
        updateProduct(id, quantity);
        return false;
    });
    // Delete Product
    $(document).on("click", "a.delete-cart-item", function () {
        let id = $(this).data("product");
        deleteProduct(id);
        return false;
    });
});
