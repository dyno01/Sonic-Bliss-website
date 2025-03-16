
export function hamburgerMenu(){
    // ***** hamburger menu start ******//

let menuToggle = document.getElementById("menu-toggle");

let menuBar = gsap.timeline();

menuBar.to('.bar-1', 0.5,{
    attr:{d: "M8, 2 L2,8"},
    x:1,
    ease:Power2.easeInOut
},'start')

menuBar.to('.bar-2', 0.5,{
    autoAlpha:0
},'start')

menuBar.to('.bar-3', 0.5,{
    attr:{d: "M8, 8 L2,2"},
    x:1,
    ease:Power2.easeInOut
},'start')

menuBar.reverse();

let hamtl = gsap.timeline({ paused: true});

hamtl.to('.fullpage-menu',{
    duration: 0,
    display: "block",
    ease: 'Expo.easeInOut',
});

hamtl.from('.menu-bg span', {
    duration:0.6,
    x:"100%",
    stagger:0.1,
    ease:'power2.InOut'
});

hamtl.from('.main-menu li a , .header-nav-footer a , .social-links li', {
    duration:0.6,
    x:"100%",
    opacity:0,
    stagger:0.08,
    ease:'power2.InOut'
}, "-=0.5");

// hamtl.from(" .header-nav-footer a , .social-links li", {
//     duration:0.8,
//     x:"-100%",
//     opacity:0,
//     stagger:0.1,
//     ease:'Expo.easeInOut'
// }, "-=0.8");

hamtl.reverse();

menuToggle.addEventListener('click', function(){
    menuBar.reversed(!menuBar.reversed());
    hamtl.reversed(!hamtl.reversed());
});
// ***** hamburger menu End ******//

};
export const page2HTML01 = `
        <div class="hero-bg">
            </div>
            <div class="page2-containt-1">
                <div class="container">
                    <div class="box" id="box-1">
                        <div class="img"> <img src="./assets/images/tws img 01 (1).webp" ></div>
                        <div class="lower-box">
                            <div class="text-area"><h1>360°</h1></div>
                            <div class="text-area"><h2>Spatial Audio Effect</h2></div>
                        </div>
                    </div>
                    <div class="box" id="box-2">
                        <div class="upper-box">
                            <div class="text-area"><h1>12.4mm</h1></div>
                            <div class="text-area"><h2>Dynamic Bass Driver</h2></div>
                        </div>
                        <div class="img"> <img src="./assets/images/tws img 02.webp" ></div>
                    </div>
                    <div class="box" id="box-3">
                        <div class="img"> <img src="./assets/images/tws img 03.webp" ></div>
                        <div class="lower-box">
                            <div class="text-area"><h1>46dB</h1></div>
                            <div class="text-area"><h2>Hybrid Noise Cancellation</h2></div>
                        </div>
                    </div>
                    <div class="box" id="box-4">
                        <div class="left-box"> <img src="./assets/images/tws_img_04.webp" ></div>
                        <div class="right-box">
                            <div class="text-area"><h1>45ms ultra Low</h1></div>
                            <div class="text-area"><h2>Latency</h2></div>
                        </div>
                    </div>
                    <div class="box" id="box-5">
                        <div class="left-box"> <img src="./assets/images/tws img 05.webp" ></div>
                        <div class="right-box">
                            <div class="text-area"><h1>AI Deep Call</h1></div>
                            <div class="text-area"><h2>Noise Cancellation</h2></div>
                        </div>
                    </div>
                    <div class="box" id="box-6">
                        <img src="./assets/images/tws img 06.webp" alt="">
                    </div>
                    <div class="box" id="box-7">
                        <img src="./assets/images/tws img 07.webp" alt="">
                    </div>
                </div>
            </div>
            <div class="page2-containt-2">
                <div class="upper-part">
                    <div class="text-area"><h1>Deeper Noise Cancellation</h1></div>
                    <div class="text-area"><h2>45dB Hybrid Noise Cancellation</h2></div>
                    <div class="text-area"><h3>Hear only what matters.</h3></div>
                </div>
                <div class="image-area"><img src="./assets/images/tws img 09.webp" alt=""></div>
            </div>
            <div class="page2-containt-3">
                <div class="upper-part">
                    <div class="text-area"><h1>Adjustable Three level Noise Cancellation</h1></div>
                    <div class="text-area"><h2>Personalized to your tastes.</h2></div>
                    <div class="text-area">
                        <div class="text"><h3>It features a three-tier noise reduction system, giving users the freedom to select the ideal level of noise cancellation to match their surroundings, ensuring a more relaxed and tailored noise reduction experience.</h3></div>
                    </div>
                </div>
                <div class="image-area"><img src="./assets/images/tws img 08.webp" alt=""></div>
            </div>
            <div class="page2-containt-4">
                <div class="upper-part">
                    <div class="text-area"><h1>Dual Device Connection³</h1></div>
                    <div class="text-area"><h2>Seamless transitions for uninterrupted audio.</h2></div>
                    <div class="text-area">
                        <div class="text"><h3>With simultaneous dual-device connectivity, you can effortlessly transition between entertainment, music, and phone calls, ensuring you never miss an important call.</h3></div>
                    </div>
                </div>
                <div class="image-area"><img src="./assets/images/pair .webp" alt=""></div>
            </div>
            <div class="page2-containt-5">
                <div class="upper-part">
                    <div class="text-area"><h1>Are You Ready to Hear What's Next?</h1></div>
                    <div class="text-area"><h2>Don’t miss out on the ultimate listening exprience. Order your headphones today!</h2></div>
                </div>
                <div class="btn-area">
                    <a href="./html/shoppingPage.html"><button>Shop now</button></a>
                </div>
            </div>
            <div class="page2-containt-9">
                <div class="upper-part">
                    <div class="text-area"><h2>What Our Customers Say ?</h2></div>
                    <div class="text-area"><h3>Hear from real people who have the magic of our headphones.</h3></div>
                </div>
                <div id="formList" class="formList">
                    <div id="list" class="list">
                    </div>
                </div>

                <div class="direction">
                    <div class="dir-btn" id="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="28" fill="currentColor"><path d="M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z"></path></svg></div>
                    <div class="dir-btn" id="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="28" fill="currentColor"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg></div>
                </div>
            </div>
    `;

export const page2HTML02 = `
        <div class="hero-bg">
            </div>
            <div class="Earpage2-containt-1">
                <div class="left-part">
                    <div class="img-area"><img src="./assets/images/hammer headphone (1).webp" alt="Image 1"></div>
                </div>
                <div class="right-part">
                    <div class="text-area"><h2>Light As Air</h2></div>
                    <div class="text-area"><h4>Comfortable as cushion</h4></div>
                    <div class="span"><h5>Weight: 158gm</h5></div>
                </div>
            </div>
            <div class="Earpage2-containt-2">
                <div class="left-part">
                    <div class="img-area"><img src="./assets/images/tws img 10.webp" alt="Image 1"></div>
                </div>
                <div class="right-part">
                    <div class="text-area"><h2>On-Ear Headphones: Wired & Wireless</h2></div>
                    <div class="text-area"><h4>Switch effortlessly between wireless freedom and wired reliability with a 3.5mm jack for ultimate versatility.</h4></div>
                    
                </div>
            </div>
            <div class="Earpage2-containt-3">
                <div class="left-part">
                    <div class="text-area"><h2>TYPE - C</h2></div>
                    <div class="text-area"><h3>CHARGING PORT</h3></div>
                    <div class="text-area"><h4>Faster Charge, Longer Play Upto 
                        120 hours of Standby</h4></div>
                </div>
                <div class="right-part">
                    <div class="img-area"><img src="./assets/images/image 29.webp" alt="Image 1"></div>
                </div>
            </div>
            <div class="Earpage2-containt-4">
                <div class="left-part">
                    <div class="img-area"><img src="./assets/images/image 27.webp" alt="Image 1"></div>
                </div>
                <div class="right-part">
                    <div class="text-area"><h2>ADJUSTABLE</h2></div>
                    <div class="text-area"><h3>HEADBAND</h3></div>
                </div>
            </div>
            <div class="Earpage2-containt-5">
                <div class="left-part">
                    <div class="img-area"><img src="./assets/images/tws img 11.webp" alt="Image 1"></div>
                </div>
                <div class="right-part">
                    <div class="text-area"><h2>SOFT </h2></div>
                    <div class="text-area"><h2>EARMUFFS</h2></div>
                    <div class="text-area"><h3>For Relaxed Experience</h3></div>
                </div>
            </div>
            <div class="Earpage2-containt-6">
                <div class="left-part">
                    <div class="img-area"><img src="./assets/images/tws img 12.webp" alt="Image 1"></div>
                </div>
                <div class="right-part">
                    <div class="upper">
                        <div class="text-area"><h2>SOUND THAT TELEPORTS YOU</h2></div>
                        <div class="text-area"><h3>Deep bass to feel the rythm</h3></div>
                    </div>
                    <div class="lower">
                        <div class="text-area"><h2>40<span>mm</span></h2></div>
                        <div class="text-area"><h3>Heavy Sound Drivers</h3></div>
                    </div>
                </div>
            </div>
            <div class="Earpage2-containt-7">
                <div class="upper">
                    <div class="text-area"><h2>What’s in the <br> <span>Box</span></h2></div>
                </div>
                <div class="lower">
                    <div class="img-area"><img src="./assets/images/tws img 13.webp" alt=""></div>
                    <div class="img-area"><img src="./assets/images/tws img 14.webp" alt=""></div>
                    <div class="img-area"><img src="./assets/images/tws img 15.webp" alt=""></div>
                </div>
            </div>
            <div class="Earpage2-containt-8">
                <div class="upper-part">
                    <div class="text-area"><h1>Are You Ready to Hear What's Next?</h1></div>
                    <div class="text-area"><h2>Don’t miss out on the ultimate listening exprience. Order your headphones today!</h2></div>
                </div>
                <div class="btn-area">
                    <a href="./html/shoppingPage.html"><button>Shop now</button></a>
                </div>
            </div>
            <div class="Earpage2-containt-9">
                <div class="upper-part">
                    <div class="text-area"><h2>What Our Customers Say ?</h2></div>
                    <div class="text-area"><h3>Hear from real people who have the magic of our headphones.</h3></div>
                </div>
                <div id="formList">
                    <div id="list">
                    </div>
                </div>

                <div class="direction">
                    <div class="dir-btn" id="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="28" fill="currentColor"><path d="M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z"></path></svg></div>
                    <div class="dir-btn" id="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="28" fill="currentColor"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg></div>
                </div>
            </div>
    `;


//**** Array of products *****

// export const products = [
//     {
//         Id: "12febwm322n",
//         name: "Sonic Bliss StudioMax",
//         description: "Immersive sound, all-day comfort",
//         price: "140",
//         imgSrc: "../assets/images/hammer headphone (1).png", // Replace with actual image path
//     },
//     {
//         Id: "42dhbwm323n",
//         name: "Sonic Bliss ProSound",
//         description: "Premium audio, noise cancellation",
//         price: "100",
//         imgSrc: "../assets/images/buds t310 (2).png", // Replace with actual image path
//     },
// ];

//**** Array of Reviews *****

export const reviews = [
    {
        userName: "Ethan Hunt",
        date: "March 10, 2023",
        userImage: "./assets/images/avatar4.webp",
        stars: 4, // Number of filled stars
        review: "For the price, these TWS earbuds offer great sound and build quality. They’re a steal compared to other premium brands. The only downside is the lack of noise-cancellation."
    },
    {
        userName: "Jane Doe",
        date: "April 15, 2023",
        userImage: "./assets/images/avatar3.webp",
        stars: 5,
        review: "Amazing headphones! The sound quality is top-notch, and the battery life exceeds expectations. Highly recommend!"
    },
    {
        userName: "John Smith",
        date: "May 20, 2023",
        userImage: "./assets/images/avatar1.webp",
        stars: 3,
        review: "Good value for the price, but the sound could be better. The design is sleek and comfortable."
    },
    {
        userName: "Alice Johnson",
        date: "June 5, 2023",
        userImage: "./assets/images/avatar2.webp",
        stars: 4,
        review: "Very satisfied with this purchase. The earbuds fit snugly and the audio quality is clear. Great for casual use."
    }
];
