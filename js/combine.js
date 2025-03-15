
// const today = dayjs();
// const deliveryDate = today.add(7,'days');
// const deliveryDateFormat= deliveryDate.format('dddd, MMMM D');
function getProduct(ProductId) {
    let matchingProduct;
    
        products.forEach((product) => {
            if (product.Id === ProductId) {
                matchingProduct = product;
            } 
        });

        return matchingProduct;
};

let cart = JSON.parse(localStorage.getItem('cart'));

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
}

function saveToStorages() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
// ******** Array for data of products  start  ********//

const products = [
{
    Id: "12febwm322n",
    name: "Sonic Bliss StudioMax",
    description: "Immersive sound, all-day comfort",
    price: "140",
    imgSrc: "./assets/images/hammer headphone (1).png", // Replace with actual image path
},
{
    Id: "42dhbwm323n",
    name: "Sonic Bliss ProSound",
    description: "Premium audio, noise cancellation",
    price: "100",
    imgSrc: "./assets/images/buds t310 (2).png", // Replace with actual image path
},
];

let finalQuantity;
function incrementDcrementcount(){
    const MAX_QUANTITY = 4;
    // Select all the plus and minus buttons
    document.querySelectorAll(".wrapper").forEach((btn) => {
        btn.addEventListener("click", () => {
            const itemId = btn.dataset.productId;
            const numDisplay = document.querySelector(`.js-num-${itemId}`);
            let quantity =parseInt(numDisplay.innerText, 10) || 1;
            console.log(itemId);
            const plusButtons = document.querySelectorAll(`.js-plus-${itemId}`);
            const minusButtons = document.querySelectorAll(`.js-minus-${itemId}`);


            btn.addEventListener("click", (event) => {
                // Check if the clicked element is a plus or minus button
                if (event.target.closest(`.js-plus-${itemId}`)) {
                    if (quantity < MAX_QUANTITY) {  // Check if quantity is less than the maximum limit
                        quantity++;  // Increment the quantity
                        numDisplay.innerText = (quantity < 4 ? "0" : "") + quantity;  // Update the quantity display
                        finalQuantity = quantity;

                    }
                } else if (event.target.closest(`.js-minus-${itemId}`)) {
                    if (quantity > 1) {  // Only decrement if quantity is greater than 1
                        quantity--;  // Decrement the quantity
                        numDisplay.innerText = (quantity < 4 ? "0" : "") + quantity;  // Update the quantity display
                        finalQuantity = quantity ;

                    }
                }
                finalQuantity = quantity ;

                console.log(finalQuantity);
            });
        });
    });

};



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




/// ******** Array for data of Reviews  start  ********//

// Array of Reviews
const reviews = [
    {
        userName: "Ethan Hunt",
        date: "March 10, 2023",
        userImage: "./assets/images/avatar4.png",
        stars: 4, // Number of filled stars
        review: "For the price, these TWS earbuds offer great sound and build quality. They’re a steal compared to other premium brands. The only downside is the lack of noise-cancellation."
    },
    {
        userName: "Jane Doe",
        date: "April 15, 2023",
        userImage: "./assets/images/avatar3.png",
        stars: 5,
        review: "Amazing headphones! The sound quality is top-notch, and the battery life exceeds expectations. Highly recommend!"
    },
    {
        userName: "John Smith",
        date: "May 20, 2023",
        userImage: "./assets/images/avatar2.png",
        stars: 3,
        review: "Good value for the price, but the sound could be better. The design is sleek and comfortable."
    },
    {
        userName: "Alice Johnson",
        date: "June 5, 2023",
        userImage: "./assets/images/avatar1.png",
        stars: 4,
        review: "Very satisfied with this purchase. The earbuds fit snugly and the audio quality is clear. Great for casual use."
    },
    {
        userName: "Jane Doe",
        date: "April 15, 2023",
        userImage: "./assets/images/avatar3.png",
        stars: 5,
        review: "Amazing headphones! The sound quality is top-notch, and the battery life exceeds expectations. Highly recommend!"
    },
    {
        userName: "John Smith",
        date: "May 20, 2023",
        userImage: "./assets/images/avatar2.png",
        stars: 3,
        review: "Good value for the price, but the sound could be better. The design is sleek and comfortable."
    },
];

// ******** Array for data of Review  end  ********//


//Function to display reviews in a list format
function displayComments() {
// Get the container element
    const reviewsContainer = document.getElementById("list");

    // Generate and append review items
    reviews.forEach((review) => {
        // Create a new div with class "item"
        const reviewItem = `
            <div class="item">                
                <div class="top">
                    <div class="top-left">
                        <div class="user"><img src="${review.userImage}" alt="User Avatar"></div>
                        <div class="user-info">
                            <h2>${review.userName}</h2>
                            <h3>${review.date}</h3>
                        </div>
                    </div>
                    <span class="star">
                        ${"&#9733; ".repeat(review.stars)}<span class="span2">${"&#9733; ".repeat(5 - review.stars)}</span>
                    </span>
                </div>
                <div class="line"></div>
                <div class="content">
                    <h4>${review.review}</h4>
                </div>
            </div>
        `;

        // Append to container
        reviewsContainer.innerHTML += reviewItem;
    });
};


function run(){
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
            
            console.log(cart);
            addToCart(productId);
            
            // orderSummary();
        });
    
    });
};

run();

function cartQuantity(){
    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });

    // console.log(totalQuantity);
    document.querySelector(".product-quantity").innerHTML = totalQuantity;      
    document.querySelector(".item-quantity").innerHTML = totalQuantity;       

};

cartQuantity();
renderPaymentSummary();




let cartSummaryHTML = "";

// Check if the cart is empty
function renderCart(){
    
    if (cart.length === 0) {
        cartSummaryHTML = `
            <div class="order-summary-div">
                <img src="./assets/images/cart.png">
                    <h3>Your Cart is Empty</h3>
                    <h4>Add something to make me happy :)</h4>
                    <button class="cart-shop-btn" >continue shopping</button>	
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
renderCart();


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

    document.querySelector(".shippingCharges").innerHTML = "$2.50";       

}



function deleteQuantity(){
    document.querySelectorAll('.delete-quantity').forEach((link) =>{


        link.addEventListener('click', () =>{
            const productId = link.dataset.productId;
            // const container = document.querySelector(`.js-product-${productId}`);
            
            // // container.remove();
            removeFromCart(productId);
            saveToStorages();
            console.log(cart);


             // Check if the cart is now empty
            if (cart.length === 0) {
                document.querySelector('.left-cart-part').innerHTML = `
                    <div class="order-summary-div">
                        <img src="./assets/images/cart.png">
                        <h3>Your Cart is Empty</h3>
                        <h4>Add something to make me happy :)</h4>
                        <button  class="cart-shop-btn" onclick="location.href='shoppingPage.html'" >continue shopping</button>	
                    </div>
                `;


                // after cart is empty it will update price to $00.00
                document.querySelector(".shippingCharges").innerHTML = "$0.00"; 
                document.querySelector(".productPrice").innerHTML = "$0.00";       
                document.querySelector(".totalBeforeTax").innerHTML = "$0.00";       
                document.querySelector(".taxPrice").innerHTML = "$0.00";       
                document.querySelector(".totalPrice").innerHTML = "$0.00";        
                renderPaymentSummary();

            };
            
        });
    });
};


deleteQuantity();

const button = document.querySelector(".cart-shop-btn");

// Set the click event to navigate to the desired page
button.onclick = function () {
    location.href = 'shoppingPage.html';
};

function renderPaymentSummary(){

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
renderPaymentSummary();
