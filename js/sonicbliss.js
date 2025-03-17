// **** import from other js files ****

import { reviews,page2HTML01, page2HTML02,hamburgerMenu } from './data/data.js';

document.getElementById("knowMore").addEventListener("click", function () {
    document.getElementById("page2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("feature").addEventListener("click", function () {
    document.getElementById("page2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("review").addEventListener("click", function () {
    document.getElementById("comment").scrollIntoView({ behavior: "smooth" });
});


hamburgerMenu();
document.addEventListener("DOMContentLoaded", function() {
    
    // initializefunction(); 
    // run(); 
    // incrementDcrementcount();
    page2OverEarAnime();
    // page2TwsAnime();



});
const page2HTMLContainer = document.getElementById("page2");
    // Append to container
    page2HTMLContainer.innerHTML = page2HTML02;
    

function displayComments() {
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
                        ${"&#9733;".repeat(review.stars)}<span class="span2">${"&#9733;".repeat(5 - review.stars)}</span>
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

displayComments();
    
    // let video = document.querySelector('video');
    // video.defaultPlaybackRate = 2;
    // video.load();





// const heading = document.querySelector(".heading");
// const letters = heading.textContent.split("");
// heading.innerHTML = "";
// letters.forEach((letter) => {
//     heading.innerHTML += `<span class="letter">${letter}</span>`;
// });

//********************************//


// ***** Product Image inside hero section Start ******//



// Function to show the respective image and set the active button
function showImage(imageId, btn) {
    // Hide all images
    document.querySelectorAll('.image-container').forEach(image => {
        image.classList.remove('show');
    });

    // Show the selected image
    document.getElementById(imageId).classList.add('show');

    // Remove active class from all buttons
    document.querySelectorAll('.button-container button').forEach(button => {
        button.classList.remove('active');
    });

    // Add active class to the clicked button
    btn.classList.add('active');
}
// displapage2HTML01();
// By default, show the first image and mark the first button as active when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const firstImage = document.getElementById('image1');
    if (firstImage) {
        firstImage.classList.add('show');
    }

    const firstButton = document.querySelector('.button-container button');
    if (firstButton) {
        firstButton.classList.add('active');
    }
});
const sliderImgBtn01 = document.getElementById("circle1");
const sliderImgBtn02 = document.getElementById("circle2");






sliderImgBtn01.addEventListener('click', () => {
    showImage('image1', sliderImgBtn01);

    const page2HTMLContainer = document.getElementById("page2");
    // Append to container
    page2HTMLContainer.innerHTML = page2HTML02;
    displayComments();
    commentsPrevNex();
});

sliderImgBtn02.addEventListener('click', () => {
    showImage('image2', sliderImgBtn02);
    const page2HTMLContainer = document.getElementById("page2");
    // Append to container
    page2HTMLContainer.innerHTML = page2HTML01;
    displayComments();
    commentsPrevNex();
});

//   // Event listeners for the buttons
// document.getElementById('circle1').addEventListener('click', displapage2HTML01());
// document.getElementById('circle2').addEventListener('click', displapage2HTML02());

  // By default, show Content 1 when the page loads
// document.addEventListener('DOMContentLoaded', () => {
//     displapage2HTML01();
// });
// comment section slider

function commentsPrevNex(){
    document.getElementById('next').onclick = function(){
        let widthItem = document.querySelector('.item').offsetWidth;
        document.getElementById('formList').scrollLeft += widthItem;
    }
    document.getElementById('prev').onclick = function(){
        let widthItem = document.querySelector('.item').offsetWidth;
        document.getElementById('formList').scrollLeft -= widthItem
    }
}

commentsPrevNex();
// ***** Product Image inside hero section End ******//


// ***** hero-section paige button toggle Start ******//

function buttonOneFunction() {
    // Perform specific action for Button 1
    console.log("Button 1 clicked");
    toggleActive('circle1');
}

function buttonTwoFunction() {
    // Perform specific action for Button 2
    console.log("Button 2 clicked");
    toggleActive('circle2');
}

function toggleActive(activeButtonId) {
    // Get the parent div that holds the buttons
    const container = document.getElementById('button-Container');

    // Get all buttons inside the container
    const buttons = container.querySelectorAll('.button');

    // Remove active class from all buttons in the container
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    const activeButton = document.getElementById(activeButtonId);
    if (activeButton) {
        activeButton.classList.add('active');
    }
};


// ***** hero-section paige button toggle End ******//

//*******************************//
