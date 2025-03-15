




gsap.registerPlugin(ScrollTrigger);


const showAnim = gsap.from('.header', { 
    yPercent: -100,
    paused: true,
    duration: 0.4,
    ease: "power2.inOut",
}).progress(1);

ScrollTrigger.create({
    trigger :"body",
    scroller:"main",
    start: "top top",
    end: "max",
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});


/* ******************************************
prealoder animation starts here
******************************************
*/

// Create GSAP timeline for the preloader animations
let preloderTime = gsap.timeline();

// Function to reveal site after animations
function revealSite() {
    preloderTime.to(".pre-loader",0.4,{
        opacity: 0,
        display: "none",
        ease: "power2.inOut",
    })
    /* ******************************************
hero page  animation starts here
******************************************
*/

preloderTime.from(".hero-text h1 ",{
    y: "100%",
    // rotation: 15,
    duration :1,
    stagger: 0.1,
    ease: 'power 4.out',
},
"-=0.8")
.from(".mainPage-header",{
    y :"-105%",
    opacity:0,
    duration: 0.8,
    ease:'power 4.out'
},
"-=0.8")
.from(".mainPage-header #brand-logo , .mainPage-header #nav-link a , .mainPage-header #nav-link button",{
    y :"-50%",
    opacity:0,
    stagger:0.2,
    duration: 0.6,
    ease:'power 4.out'
},
"-=0.4")
.from(".tagline h4",{
    y: 30,
    opacity: 0,
    stagger:0.2,
    duration: 0.8,
    ease: 'power 4.out',
},
"-=0.9")
.from(".button-wrapper a",{
    y: "30",
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: 'power 4.out',
},
"-=0.4")
.from(".image-container span",{
    opacity: 0,
    scale: 0,
    // rotate:'-360',
    // stagger: 0.2,
    duration :1.5,
    ease: "power 4.out",
},"-=0.8")
.from(".sliderbtn-wrapper",{
    y: "30",
    opacity: 0,
    scale: 0,
    // stagger: 0.2,
    duration: 0.8,
    ease: 'power 4.out',
},"-=0.6")
.from("#main-hero-bg img",{
    y :"100",
    opacity:0,
    scale: 0,
    ease: 'power 4.out',
    duration: 1,
},"-=0.6");

/* ******************************************
hero page  animation ends here
******************************************
*/
}
// Ensure button exists before adding an event listener
const preBtn = document.querySelector(".pre-loader");
preBtn.addEventListener("click", revealSite);

preloderTime.to(".header > h1",2, {
    top:0,
    ease: "power4.inOut",
    stagger: {
        amount:0.3
    }
}).to(".pre-loader-btn",0.2,{
    opacity:1,
    delay:1.5,
    ease: "power2.Out",
})



/* ******************************************
prealoader animation  end here
******************************************
*/





/* ******************************************
Page-2  animation starts here --> scroller trigger
******************************************
*/
// document.addEventListener("DOMContentLoaded", function() {
//     // **** content-1 animation statrt here ****

//     gsap.from(".page2-containt-1 .box", {
//         opacity: 0,
//         duration :1,
//         stagger: 0.2,
//         ease: 'power 4.out',
//         scrollTrigger: {
//             trigger :".page2-containt-1",
//             scroller:"main",
//             // scrub: 0.4,
//             // once:true,
//             start:"top 80%",
//             end:"bottom 20%",
//             // markers:true,
//         }
//     })

//     gsap.from(".page2-containt-1 .box .text-area h1 , .page2-containt-1 .box .text-area h2 ", {
//         y: "100%",
//         opacity:0,
//         // rotation: 15,
//         duration :1,
//         stagger: 0.2,
//         ease: 'power 4.out',
//         scrollTrigger: {
//             trigger :".page2-containt-1",
//             scroller:"main",
//             // scrub: 0.4,
//             // once:true,
//             start:"top 80%",
//             end:"bottom 20%",
//         }
//     })
//     gsap.from(".page2-containt-1 .box .img img , .page2-containt-1 .box .left-box img , .page2-containt-1 .box img ", {
//         y: "100%",
//         // rotation: 15,
//         duration :1,
//         stagger: 0.2,
//         ease: 'power 4.out',
//         scrollTrigger: {
//             trigger :".page2-containt-1",
//             scroller:"main",
//             // scrub: 0.4,
//             // once:true,
//             start:"top 80%",
//             end:"bottom 20%",
//         }
//     })

//     // **** content-2 animation statrt here ****
//     gsap.from(".page2-containt-2 .upper-part .text-area h1 , .page2-containt-2 .upper-part .text-area h2 , .page2-containt-2 .upper-part .text-area h3 ", {
//         y: "300%",
//         // rotation: 15,
//         duration :1,
//         stagger: 0.2,
//         ease: 'power 4.inOut',
//         scrollTrigger: {
//             trigger :".page2-containt-2",
//             scroller:"main",
//             // scrub: 0.4,
//             // once:true,
//             start:"top 100%",
//             end:"bottom 20%",
//             // markers:true,
//         }
//     })

//     gsap.from(".page2-containt-2 .image-area img ", {
//         y: "100%",
//         // rotation: 15,
//         duration :1,
//         stagger: 0.2,
//         ease: 'power 4.inOut',
//         scrollTrigger: {
//             trigger :".page2-containt-2",
//             scroller:"main",
//             start:"top 100%",
//             end:"bottom 20%",
//         }
//     })

//     // **** content-3 animation statrt here ****


//     gsap.from(".page2-containt-3 .upper-part .text-area h1 , .page2-containt-3 .upper-part .text-area h2 , .page2-containt-3 .upper-part .text-area h3 ", {
//         y: "300%",
//         // opacity:0,
//         // rotation: 10,
//         duration :1,
//         stagger: 0.2,
//         ease: 'power 4.inOut',
//         scrollTrigger: {
//             trigger :".page2-containt-3",
//             scroller:"main",
//             // scrub: 0.4,
//             // once:true,
//             start:"top 80%",
//             end:"bottom 20%",
//             // markers:true,
//         }
//     })

//     gsap.from(".page2-containt-3 .image-area img ", {
//         y: "100%",
//         opacity:0,
//         // rotation: 15,
//         duration :1,
//         stagger: 0.2,
//         ease: 'power 4.inOut',
//         scrollTrigger: {
//             trigger :".page2-containt-3",
//             scroller:"main",
//             start:"top 60%",
//             end:"bottom 20%",
//         }
//     })


//     // **** content-4 animation statrt here ****


//     gsap.from(".page2-containt-4 .upper-part .text-area h1 , .page2-containt-4 .upper-part .text-area h2 , .page2-containt-4 .upper-part .text-area h3 ", {
//         y: "300%",
//         // opacity:0,
//         // rotation: 10,
//         duration :1,
//         stagger: 0.2,
//         ease: 'power 4.inOut',
//         scrollTrigger: {
//             trigger :".page2-containt-4",
//             scroller:"main",
//             // scrub: 0.4,
//             // once:true,
//             start:"top 80%",
//             end:"bottom 20%",
//             // markers:true,
//         }
//     })

//     gsap.from(".page2-containt-4 .image-area img ", {
//         y: "100%",
//         opacity:0,
//         // rotation: 15,
//         duration :1,
//         stagger: 0.2,
//         ease: 'power 4.inOut',
//         scrollTrigger: {
//             trigger :".page2-containt-4",
//             scroller:"main",
//             start:"top 60%",
//             end:"bottom 20%",
//         }
//     })

//     // **** content-5 animation statrt here ****


//     gsap.from(".page2-containt-5 .upper-part .text-area h1 , .page2-containt-5 .upper-part .text-area h2", {
//         y: "300%",
//         // opacity:0,
//         // rotation: 15,
//         duration :0.8,
//         stagger: 0.2,
//         ease: 'power 4.inOut',
//         scrollTrigger: {
//             trigger :".page2-containt-5",
//             scroller:"main",
//             // scrub: 0.4,
//             // once:true,
//             start:"top 80%",
//             end:"bottom 20%",
//             // markers:true,
//         }
//     })

//     gsap.from(".page2-containt-5 .btn-area a", {
//         delay:0.5,
//         y: "200%",
//         opacity:0,
//         duration :1,
//         ease: 'power 4.inOut',
//         scrollTrigger: {
//             trigger :".page2-containt-5",
//             scroller:"main",
//             start:"top 60%",
//             end:"bottom 20%",
//         }
//     })

//     // **** content-9 animation statrt here ****

//     gsap.from(".page2-containt-9 .upper-part .text-area h1 , .page2-containt-9 .upper-part .text-area h2", {
//         y: "300%",
//         // opacity:0,
//         // rotation: 15,
//         duration :0.8,
//         stagger: 0.2,
//         ease: 'power 4.inOut',
//         scrollTrigger: {
//             trigger :".page2-containt-9",
//             scroller:"main",
//             // scrub: 0.4,
//             // once:true,
//             start:"top 80%",
//             end:"bottom 20%",
//         }
//     })

//     gsap.from(".page2-containt-9 .formList .item", {
//         y: "100%",
//         opacity:0,
//         duration :1,
//         // stagger: 0.2,
//         ease: 'power 4.in',
//         scrollTrigger: {
//             trigger :".page2-containt-9",
//             scroller:"main",
//             start:"top 60%",
//             end:"bottom 20%",
//         }
//     });
    
// });

function page2TwsAnime(){
    gsap.registerPlugin(ScrollTrigger);
    
    // Function to create a ScrollTrigger animation (DRY principle)
    gsap.from(".page2-containt-1 .box", {
        opacity: 0,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.out',
        scrollTrigger: {
            trigger :".page2-containt-1",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 100%",
            end:"bottom 20%",
            // markers:true,
        }
    })

    gsap.from(".page2-containt-1 .box .text-area h1 , .page2-containt-1 .box .text-area h2 ", {
        y: "100%",
        opacity:0,
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.out',
        scrollTrigger: {
            trigger :".page2-containt-1",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
        }
    })
    gsap.from(".page2-containt-1 .box .img img , .page2-containt-1 .box .left-box img , .page2-containt-1 .box img ", {
        y: "100%",
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.out',
        scrollTrigger: {
            trigger :".page2-containt-1",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
        }
    })

    // **** content-2 animation statrt here ****
    gsap.from(".page2-containt-2 .upper-part .text-area h1 , .page2-containt-2 .upper-part .text-area h2 , .page2-containt-2 .upper-part .text-area h3 ", {
        y: "300%",
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".page2-containt-2",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 100%",
            end:"bottom 20%",
            // markers:true,
        }
    })

    gsap.from(".page2-containt-2 .image-area img ", {
        y: "100%",
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".page2-containt-2",
            scroller:"main",
            start:"top 100%",
            end:"bottom 20%",
        }
    })

    // **** content-3 animation statrt here ****


    gsap.from(".page2-containt-3 .upper-part .text-area h1 , .page2-containt-3 .upper-part .text-area h2 , .page2-containt-3 .upper-part .text-area h3 ", {
        y: "300%",
        // opacity:0,
        // rotation: 10,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".page2-containt-3",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
            // markers:true,
        }
    })

    gsap.from(".page2-containt-3 .image-area img ", {
        y: "100%",
        opacity:0,
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".page2-containt-3",
            scroller:"main",
            start:"top 60%",
            end:"bottom 20%",
        }
    })


    // **** content-4 animation statrt here ****


    gsap.from(".page2-containt-4 .upper-part .text-area h1 , .page2-containt-4 .upper-part .text-area h2 , .page2-containt-4 .upper-part .text-area h3 ", {
        y: "300%",
        // opacity:0,
        // rotation: 10,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".page2-containt-4",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
            // markers:true,
        }
    })

    gsap.from(".page2-containt-4 .image-area img ", {
        y: "100%",
        opacity:0,
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".page2-containt-4",
            scroller:"main",
            start:"top 60%",
            end:"bottom 20%",
        }
    })

    // **** content-5 animation statrt here ****


    gsap.from(".page2-containt-5 .upper-part .text-area h1 , .page2-containt-5 .upper-part .text-area h2", {
        y: "300%",
        // opacity:0,
        // rotation: 15,
        duration :0.8,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".page2-containt-5",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
            // markers:true,
        }
    })

    gsap.from(".page2-containt-5 .btn-area a", {
        delay:0.5,
        y: "200%",
        opacity:0,
        duration :1,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".page2-containt-5",
            scroller:"main",
            start:"top 60%",
            end:"bottom 20%",
        }
    })

    // **** content-9 animation statrt here ****

    gsap.from(".page2-containt-9 .upper-part .text-area h2 , .page2-containt-9 .upper-part .text-area h3", {
        y: "300%",
        // opacity:0,
        // rotation: 15,
        duration :0.8,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".page2-containt-9",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
        }
    })

    gsap.from(".page2-containt-9 .formList .item", {
        y: "100%",
        opacity:0,
        duration :1,
        // stagger: 0.2,
        ease: 'power 4.in',
        scrollTrigger: {
            trigger :".page2-containt-9",
            scroller:"main",
            start:"top 60%",
            end:"bottom 20%",
        }
    });


    

    // Example of how to add a button trigger (if needed):
    const triggerButton = document.getElementById("circle2"); // Replace "myButton"

    if (triggerButton) { // Check if the button exists
        triggerButton.addEventListener("click", () => {
            ScrollTrigger.refresh(); // Refresh ScrollTrigger to recalculate positions and activate
            // OR, if you want a one-time animation on click (regardless of scroll):
            // gsap.to(".page2-containt-1 .box", { /* ...your animation properties... */ });
        });
    }
};
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("circle2").addEventListener("click", () => {
        page2TwsAnime();
    });
});

function page2OverEarAnime(){ 

    gsap.registerPlugin(ScrollTrigger);

    // Function to create a ScrollTrigger animation (DRY principle)
    gsap.from(".Earpage2-containt-1 .left-part .img-area img  , .Earpage2-containt-1 .right-part .text-area h2 , .Earpage2-containt-1 .right-part .text-area h4 , .Earpage2-containt-1 .right-part .span", {
        y: "100%",
        opacity:0,
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.out',
        scrollTrigger: {
            trigger :".Earpage2-containt-1",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
        }
    })
    gsap.from(".Earpage2-containt-2 .left-part .img-area img  , .Earpage2-containt-2 .right-part .text-area h2 , .Earpage2-containt-2 .right-part .text-area h4 ", {
        y: "100%",
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.out',
        scrollTrigger: {
            trigger :".Earpage2-containt-2",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
        }
    })

    // **** content-3 animation statrt here ****
    gsap.from(".Earpage2-containt-3 .left-part .text-area h2 , .Earpage2-containt-3 .left-part .text-area h3 , .Earpage2-containt-3 .left-part .text-area h4 ", {
        y: "100%",
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-3",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 100%",
            end:"bottom 20%",
            // markers:true,
        }
    })

    gsap.from(".Earpage2-containt-3 .right-part .img-area img ", {
        y: "100%",
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-3",
            scroller:"main",
            start:"top 100%",
            end:"bottom 20%",
        }
    })

    // **** content-4 animation statrt here ****


    gsap.from(".Earpage2-containt-4 .right-part .text-area h2 , .Earpage2-containt-4 .right-part .text-area h3 ", {
        y: "100%",
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-4",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 100%",
            end:"bottom 20%",
            // markers:true,
        }
    })

    gsap.from(".Earpage2-containt-4 .left-part .img-area img ", {
        y: "100%",
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-4",
            scroller:"main",
            start:"top 100%",
            end:"bottom 20%",
        }
    })


    // **** content-5 animation statrt here ****


    gsap.from(".Earpage2-containt-5 .right-part .text-area h2 , .Earpage2-containt-5 .right-part .text-area h3 ", {
        y: "100%",
        // opacity:0,
        // rotation: 10,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-5",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
            // markers:true,
        }
    })

    gsap.from(".Earpage2-containt-5 .left-part .img-area img ", {
        y: "100%",
        opacity:0,
        // rotation: 15,
        duration :1,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-5",
            scroller:"main",
            start:"top 60%",
            end:"bottom 20%",
        }
    })

    // **** content-6 animation statrt here ****


    gsap.from(".Earpage2-containt-6 .right-part .upper .text-area h2 , .Earpage2-containt-6 .right-part .upper .text-area h3 , .Earpage2-containt-6 .right-part .lower .text-area h2 , .Earpage2-containt-6 .right-part .lower .text-area h3 ", {
        y: "100%",
        // opacity:0,
        // rotation: 15,
        duration :0.8,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-6",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
            // markers:true,
        }
    })

    gsap.from(".Earpage2-containt-6 .left-part .img-area img", {
        y: "100%",
        opacity:0,
        // rotation: 15,
        duration :1,
        // stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-6",
            scroller:"main",
            start:"top 60%",
            end:"bottom 20%",
        }
    })
    // **** content-7 animation statrt here ****


    gsap.from(".Earpage2-containt-7 .upper .text-area h2", {
        y: "100%",
        opacity:0,
        // rotation: 15,
        duration :0.8,
        // stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-7",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
            // markers:true,
        }
    })

    gsap.from(".Earpage2-containt-7 .lower .img-area img", {
        y: "100%",
        opacity:0,
        stagger: 0.2,
        duration :1,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-7",
            scroller:"main",
            start:"top 60%",
            end:"bottom 20%",
        }
    })

    // **** content-8 animation statrt here ****

    gsap.from(".Earpage2-containt-8 .upper-part .text-area h1 , .Earpage2-containt-8 .upper-part .text-area h2", {
        y: "100%",
        opacity:0,
        // rotation: 15,
        duration :0.8,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-8",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
            // markers:true,
        }
    })

    gsap.from(".Earpage2-containt-8 .btn-area ", {
        y: "100%",
        opacity:0,
        duration :1,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-8",
            scroller:"main",
            start:"top 60%",
            end:"bottom 20%",
        }
    })

    // **** content-9 animation statrt here ****

    gsap.from(".Earpage2-containt-9 .upper-part .text-area h1 , .Earpage2-containt-9 .upper-part .text-area h2", {
        y: "100%",
        // opacity:0,
        // rotation: 15,
        duration :0.8,
        stagger: 0.2,
        ease: 'power 4.inOut',
        scrollTrigger: {
            trigger :".Earpage2-containt-9",
            scroller:"main",
            // scrub: 0.4,
            // once:true,
            start:"top 80%",
            end:"bottom 20%",
        }
    })

    gsap.from(".Earpage2-containt-9 #formList #list ", {
        y: "100%",
        opacity:0,
        duration :1,
        // stagger: 0.2,
        ease: 'power 4.in',
        scrollTrigger: {
            trigger :".Earpage2-containt-9",
            scroller:"main",
            start:"top 60%",
            end:"bottom 20%",
        }
    });

    // gsap.from(".footer .upper-part .line , .footer .upper-part .social-links .social-link-area , .footer .middle-part img , .footer .middle-part h3", {
    //     opacity:0,
    //     // rotation: 15,
    //     duration :0.8,
    //     stagger: 0.2,
    //     ease: 'power4.inOut',
    //     scrollTrigger: {
    //         trigger :".footer",
    //         scroller:"main",
    //         // scrub: 0.4,
    //         // once:true,
    //         start:"top 100%",
    //         end:"bottom 20%",
    //     }
    // })
    // gsap.from(".footer .lower-part .nav-links a , .footer .lower-part .policy a", {
    //     opacity:0,
    //     // rotation: 15,
    //     duration :0.8,
    //     stagger: 0.2,
    //     ease: 'power4.inOut',
    //     scrollTrigger: {
    //         trigger :".footer",
    //         scroller:"main",
    //         // scrub: 0.4,
    //         // once:true,
    //         start:"top 100%",
    //         end:"bottom 20%",
    //     }
    // }, "-=0.6")
    

    // // Example of how to add a button trigger (if needed):
    // const triggerButton = document.getElementById("circle1"); // Replace "myButton"

    // if (triggerButton) { // Check if the button exists
    // triggerButton.addEventListener("click", () => {
    //     ScrollTrigger.refresh(); // Refresh ScrollTrigger to recalculate positions and activate
    //     // OR, if you want a one-time animation on click (regardless of scroll):
    //     // gsap.to(".page2-containt-1 .box", { /* ...your animation properties... */ });
    // });
    // }
};


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("circle1").addEventListener("click", () => {
        page2OverEarAnime();
    });
});




const sliderImgBtn01 = document.getElementById("circle1");
const sliderImgBtn02 = document.getElementById("circle2");

document.addEventListener("DOMContentLoaded", function() {
    sliderImgBtn01.addEventListener('click', () => {
        // showImage('image1', sliderImgBtn01);
    
        const page2HTMLContainer = document.getElementById("page2");
        // Append to container
        // page2HTMLContainer.innerHTML = page2HTML02;
        // displayComments();
    });
    
    sliderImgBtn02.addEventListener('click', () => {
        // showImage('image2', sliderImgBtn02);
        const page2HTMLContainer = document.getElementById("page2");
        // Append to container
        // page2HTMLContainer.innerHTML = page2HTML01;
        // displayComments();
    });
});




/* ******************************************
Page-2  animation ends here --> scroller trigger
******************************************
*/


