
import { products } from './data/utils.js';
import { hamburgerMenu } from './data/data.js';
import {incrementDcrementcount  ,finalQuantity , saveToStorages , run} from './data/utils.js'

hamburgerMenu();
// Function to display products
function displayProducts() {
    const container = document.getElementById("products-container");

    products.forEach((product) => {
        // Create product item structure
        const productItem = `
        <div class="item-1 js-item-${product.Id}">
            <div class="item1-top">
            <img src="${product.imgSrc}" alt="${product.name}">
            </div>
            <div class="item1-middle">
                <div class="left-part">
                    <h1>${product.name}</h1>
                    <h2>${product.description}</h2>
                </div>
                <div class="right-part">
                    <div class="wrapper " data-product-id="${product.Id}">
                        <span class="minus js-minus-${product.Id}"><i class="fa-solid fa-minus"></i></span>
                        <span class="num  js-num-${product.Id}">01</span>
                        <span class="plus js-plus-${product.Id}"><i class="fa-solid fa-plus"></i></span>
                    </div>
                </div>
            </div>
            <div class="item1-bottom">
                <h3>$${product.price}</h3>
                <button class="js-add-to-cart" data-product-id="${product.Id}">Add to cart</button>
            </div>
        </div>
        `;

        // Append to container
        container.innerHTML += productItem;
        incrementDcrementcount();
    });
}

displayProducts();
incrementDcrementcount();
run();
