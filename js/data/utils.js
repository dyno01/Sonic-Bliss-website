import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();
const deliveryDate = today.add(7,'days');
const deliveryDateFormat= deliveryDate.format('dddd, MMMM D');

export const products = [
    {
        Id: "12febwm322n",
        name: "Sonic Bliss StudioMax",
        description: "Immersive sound, all-day comfort",
        price: "140",
        imgSrc: "../assets/images/hammer headphone (1).webp", // Replace with actual image path
    },
    {
        Id: "42dhbwm323n",
        name: "Sonic Bliss ProSound",
        description: "Premium audio, noise cancellation",
        price: "100",
        imgSrc: "../assets/images/buds t310 (2).webp", // Replace with actual image path
    },
];
export function getProduct(ProductId) {
    let matchingProduct;
    
    products.forEach((product) => {
        if (product.Id === ProductId) {
            matchingProduct = product;
        } 
    });

    return matchingProduct;
};
export let finalQuantity;
export function incrementDcrementcount(){
    const MAX_QUANTITY = 4;
    // Select all the plus and minus buttons
    document.querySelectorAll(".wrapper").forEach((btn) => {
        const itemId = btn.dataset.productId;
        const numDisplay = document.querySelector(`.js-num-${itemId}`);
        let quantity =parseInt(numDisplay.innerText, 10) || 1;
        // console.log(itemId);
        const plusButtons = document.querySelector(`.js-plus-${itemId}`);
        const minusButtons = document.querySelector(`.js-minus-${itemId}`);

            // Check if the clicked element is a plus or minus button
        plusButtons.addEventListener("click", () => {
            if (quantity < MAX_QUANTITY) {  // Check if quantity is less than the maximum limit
                quantity++;  // Increment the quantity
                numDisplay.innerText = (quantity < 4 ? "0" : "") + quantity;  // Update the quantity display
                finalQuantity = quantity;

            }
        });
        minusButtons.addEventListener("click", () => {
            if (quantity > 1) {  // Only decrement if quantity is greater than 1
                quantity--;  // Decrement the quantity
                numDisplay.innerText = (quantity < 4 ? "0" : "") + quantity;  // Update the quantity display
                finalQuantity = quantity ;

            }
        });
        finalQuantity = quantity ;

        // console.log(finalQuantity);
    });

};


export function run(){
    function addToCart(productId){

        let matchingitem;

        cart.forEach((cartItem) => {
            if (productId === cartItem.Id ) {
                matchingitem = cartItem;
            }
        });
    
        if(matchingitem) {
            matchingitem.quantity += finalQuantity;
            saveToStorages();
        }else{
            cart.push({ 
                Id: productId, 
                quantity: finalQuantity || 1,
            });           
            saveToStorages();
        }
        saveToStorages();
        
    };
    
    document.querySelectorAll(".js-add-to-cart").forEach((btn) => {
        btn.addEventListener("click", () => {
            const productId = btn.dataset.productId;
            
            // console.log(cart);
            addToCart(productId);
            
            // orderSummary();
        });
    
    });
};

export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
    cart = [
        {
            Id: "12febwm322n",
            quantity: 1,
        },
        {
            Id: "42dhbwm323n",
            quantity: 2,
        },
    
    ];
};

export function saveToStorages() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


let cartSummaryHTML = "";

// Check if the cart is empty
export function renderCart(){
    
    if (cart.length === 0) {
        cartSummaryHTML = `
            <div class="order-summary-div">
                <img src="../assets/images/cart.webp">
                    <h3>Your Cart is Empty</h3>
                    <h4>Add something to make me happy :)</h4>
                    <a href="../html/shoppingPage.html"><button class="cart-shop-btn" >continue shopping</button></a>
            </div>
        `;
    } else {
        // If the cart is not empty, generate the product list
        cart.forEach((cartItem) => {
            const ProductId = cartItem.Id
            const matchingProduct = getProduct(ProductId);
            
            cartSummaryHTML += 
            `
                <div class="product js-product-${matchingProduct.Id}">
                    <h3 class="delivery-info" >Delivery date: ${deliveryDateFormat}</h3>
                    <div class="item-down-part">
                        <div class="product-img"><img src="${matchingProduct.imgSrc}" alt="${matchingProduct.name}"></div>
                        <div class="product-info">
                            <h1 class="product-name" >${matchingProduct.name}</h1>
                            <h2 class="product-moto" >Immersive sound, all-day comfort</h2>
                            <h3 class="price">$${matchingProduct.price}</h3>
                            <div class="product-details">
                                <h1 class="quantity" >Quantity: ${cartItem.quantity}</h1>
                                <span class="delete-quantity" data-product-id="${matchingProduct.Id}" >delete</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        document.querySelector(".shippingCharges").innerHTML = "$2.50"; 
        
    
    }
    
    // Update the container with the appropriate HTML
    document.querySelector('.left-cart-part').innerHTML = cartSummaryHTML;
    // cartQuantity();
    // deleteQuantity();
    
};

export function cartQuantity(){
    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });

    // console.log(totalQuantity);
    document.querySelector(".product-quantity").innerHTML = totalQuantity;      
    document.querySelector(".item-quantity").innerHTML = totalQuantity;       

};


function removeFromCart(productId){
    let matchingitem;
    
    cart.forEach((cartItem) => {
        if (productId === cartItem.Id ) {
            matchingitem = cartItem;
            if (matchingitem) {
                if (matchingitem.quantity > 1) {
                    // Decrease quantity
                    matchingitem.quantity -= 1;
        
                    // Update quantity in the DOM
                    const productElement = document.querySelector(`.js-product-${productId}`);
                    const quantityElement = productElement.querySelector('.quantity');
                    quantityElement.innerHTML = `Quantity: ${matchingitem.quantity}`;
                } else if (matchingitem.quantity === 1) {
                    // Remove product if quantity is 1
                    cart = cart.filter(item => item.Id !== productId);
        
                    // Remove product from the DOM
                    const productRow = document.querySelector(`.js-product-${productId}`);
                    if (productRow) {
                        productRow.remove();
                    }
                }
            };
            // console.log(matchingitem.quantity, matchingitem);
            cartQuantity();
            // renderCart();
            renderPaymentSummary();
            saveToStorages();
        }
    });       

}

export function deleteQuantity(){
    document.querySelectorAll('.delete-quantity').forEach((link) =>{


        link.addEventListener('click', () =>{
            const productId = link.dataset.productId;
            // const container = document.querySelector(`.js-product-${productId}`);
            
            // // container.remove();
            removeFromCart(productId);
            saveToStorages();
            // console.log(cart);


             // Check if the cart is now empty
            if (cart.length === 0) {
                document.querySelector('.left-cart-part').innerHTML = `
                    <div class="order-summary-div">
                        <img src="../assets/images/cart.webp">
                        <h3>Your Cart is Empty</h3>
                        <h4>Add something to make me happy :)</h4>
                        <button  class="cart-shop-btn" onclick="location.href='shoppingPage.html'" >continue shopping</button>	
                    </div>
                `;


                // after cart is empty it will update price to $00.00
                document.querySelector(".shippingCharges").innerHTML = "$0.00"; 
                document.querySelector(".productPrice").innerHTML = "$0.00"; 
                document.querySelector(".shippingCharges").innerHTML = "$0.00";      
                document.querySelector(".totalBeforeTax").innerHTML = "$0.00";       
                document.querySelector(".taxPrice").innerHTML = "$0.00";       
                document.querySelector(".totalPrice").innerHTML = "$0.00";        
                renderPaymentSummary();

            };
            
        });
    });
};

export function renderPaymentSummary(){

    let productPrice = 0;
    const shippingPrice = 2.50
    cart.forEach((cartItem) =>{
        const product = getProduct(cartItem.Id);

        productPrice += product.price * cartItem.quantity;
        const totalBeforeTaxPrice = productPrice + shippingPrice;
        const taxPrice = totalBeforeTaxPrice * 0.1;

        const totalPrice = totalBeforeTaxPrice + taxPrice;

        document.querySelector(".productPrice").innerHTML = `$${productPrice}`;       
        document.querySelector(".totalBeforeTax").innerHTML = `$${totalBeforeTaxPrice}`;       
        document.querySelector(".taxPrice").innerHTML = `$${taxPrice}`;       
        document.querySelector(".totalPrice").innerHTML = `$${totalPrice}`;        
    });


}


    
export function updateOrderButton() {
    const orderButton = document.getElementById("message");
    if (cart.length === 0) {
        orderButton.style.opacity = "0"; // Dim the button
    } else {
        orderButton.style.opacity = "1"; // Fully visible
    }
}
    

export function clearCart() {

    cart = []; // Empty the cart array
    saveToStorages(); 
    // Update local storage
    renderCart(); // Re-render the cart UI
    renderPaymentSummary(); // Update the payment summary
}
