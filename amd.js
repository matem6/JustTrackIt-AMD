function appendAddToCartButton() {
    const productPage = document.getElementById("product-details-info");
    if (productPage == null) {
        const elements = Array.from(document.getElementsByClassName("view view-shop-product-search view-id-shop_product_search view-display-id-direct-buy-catalog")[0].getElementsByClassName("views-row"));

        Array.from(elements).forEach((item) => {
            if (item.getElementsByClassName("btn-shopping-cart btn-shopping-neutral use-ajax").length == 0) {
                var itemId = item.getElementsByClassName("shop-image-link")[0].getAttribute("href").replace(/^\D+/g, '').split("/")[0];
                var button = document.createElement("button");
                button.setAttribute("class", "btn-shopping-cart btn-shopping-neutral use-ajax");
                button.setAttribute("data-progress-type", "fullscreen");
                button.setAttribute("href", "/en/direct-buy/add-to-cart/" + itemId);
                button.setAttribute("style", "color: #282828 !important;background-color: #ff9c00 !important;border: 2px solid #282828 !important;");
                button.innerHTML = "Add to cart | JTI";
                item.getElementsByClassName("shop-links")[0].innerHTML = "";
                item.getElementsByClassName("shop-links")[0].appendChild(button);
            }
        });
    } else {
        if (document.getElementsByClassName("btn-shopping-cart btn-shopping-neutral use-ajax").length == 0) {
            if (productPage.getElementsByClassName("product-out-of-stock").length > 0) {
                document.getElementsByClassName("product-out-of-stock")[0].remove();
                var itemId = window.location.href.replace(/^\D+/g, '').split("/")[0];
                var button = document.createElement("button");
                button.setAttribute("class", "btn-shopping-cart btn-shopping-neutral use-ajax");
                button.setAttribute("href", "/en/direct-buy/add-to-cart/" + itemId);
                button.setAttribute("style", "color: #282828 !important;background-color: #ff9c00 !important;border: 2px solid #282828 !important;");
                button.innerHTML = "Add to cart | JTI";
                document.getElementsByClassName("product-page-description")[0].appendChild(button);
            }
        }
    }

    Drupal.ajax.bindAjaxLinks(document);
    return productPage;
}

if (window.location.href.includes("direct-buy")) {
    if (appendAddToCartButton() != null) {
        document.getElementsByClassName("btn-shopping-cart btn-shopping-neutral use-ajax")[0].click();
    }
}