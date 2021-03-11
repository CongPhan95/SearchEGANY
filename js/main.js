var products = {
    "products": [
        {
            "handle": "ega-botconn",
            "id": 1,
            "title": "egaBotConn",
            "vendor": "EGANY",
            "tags": "platform__cross-platform, type__apps, doc__ega-botconn, demo__https://egany.com",
            "image": {
                "id": 11,
                "src": "https://picsum.photos/id/14/600"
            },
            "variants": [
                {
                    "id": 111,
                    "sku": "egabotconn",
                    "price": "0",
                    "compare_at_price": "0",
                    "inventory_management": null,
                    "inventory_policy": "deny",
                    "inventory_quantity": 1
                }
            ]
        },
        {
            "handle": "ega-shop",
            "id": 2,
            "title": "egaShop",
            "vendor": "EGANY",
            "tags": "platform__haravan_sapo_cross-platform, type__apps, doc__ega-shop, demo__https://egany.com",
            "image": {
                "id": 22,
                "src": "https://picsum.photos/id/15/600"
            },
            "variants": [
                {
                    "id": 222,
                    "sku": "egashop",
                    "price": "149000",
                    "compare_at_price": "199000",
                    "inventory_management": null,
                    "inventory_policy": "deny",
                    "inventory_quantity": 1
                }
            ]
        },
        {
            "handle": "ega-countdown",
            "id": 3,
            "title": "egaCountdown",
            "vendor": "EGANY",
            "tags": "platform__haravan_cross-platform, type__apps, doc__ega-countdown, demo__https://egany.com",
            "image": {
                "id": 33,
                "src": "https://picsum.photos/id/16/600"
            },
            "variants": [
                {
                    "id": 333,
                    "sku": "egabotconn",
                    "price": "99000",
                    "compare_at_price": "149000",
                    "inventory_management": "manual",
                    "inventory_policy": "allow",
                    "inventory_quantity": 0
                }
            ]
        },
        {
            "handle": "ega-salebox",
            "id": 4,
            "title": "egaSaleBox",
            "vendor": "EGANY",
            "tags": "platform__haravan_cross-platform, type__apps, doc__ega-salebox, demo__https://egany.com",
            "image": {
                "id": 44,
                "src": "https://picsum.photos/id/14/600"
            },
            "variants": [
                {
                    "id": 444,
                    "sku": "egasalebox",
                    "price": "99000",
                    "compare_at_price": "149000",
                    "inventory_management": "manual",
                    "inventory_policy": "allow",
                    "inventory_quantity": -1
                }
            ]
        },
        {
            "handle": "ega-cro",
            "id": 5,
            "title": "egaCRO",
            "vendor": "EGANY",
            "tags": "platform__haravan_cross-platform_sapo, type__apps, doc__ega-salebox, demo__https://egany.com",
            "image": {
                "id": 55,
                "src": "https://picsum.photos/id/14/600"
            },
            "variants": [
                {
                    "id": 555,
                    "sku": "egasalebox",
                    "price": "99000",
                    "compare_at_price": "149000",
                    "inventory_management": null,
                    "inventory_policy": "deny",
                    "inventory_quantity": 10
                }
            ]
        }
    ]
}

function start() {
    // getProducts(renderProducts);
    handleSearchForm()
}

start();

function getProducts(keyword) {
    product = products.products.find(function (product, index) {
        return product.title === keyword;
    });
    renderProducts(product)
}

function renderProducts(product) {
    var tbody = document.querySelector('#content');
    if (product.variants.inventory_management == null || product.variants.inventory_quantity > 0 || product.variants.inventory_policy == 'allow') {
        var status = 'Stocking'
    }
    var htmls =
        `
            <tr>
                <td><img style="width:120px;" src="${product.image.src}" alt=""></td>
                <td>${product.title}</td>
                <td>${product.variants[0].price}</td>
                <td>${status}</td>
            </tr>
        `
    tbody.innerHTML = htmls;
}

function handleSearchForm() {
    var btnSearch = document.querySelector('#btnSearch');
    btnSearch.onclick = function () {
        var keyword = document.querySelector('input[name="keyword"]').value;
        if (!keyword) return;
        getProducts(keyword);
    }
}