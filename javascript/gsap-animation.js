document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".carousel-images", {
        opacity: 0,
        duration: 3,
        ease: "power3.out",
    });

    gsap.from(".carousel-header", {
        y: 50,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: 1,
    });

    gsap.from(".primary-navbar", {
        y: -50, 
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: 1,
    });

    gsap.from(".vertical-dark-button", {
        y: -33, 
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        
    });


});

// scroll trigger animation 

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

 
    // Set initial position (push images slightly down)
    gsap.set(".image-1", { y: 80 }); // Start 50px lower
    gsap.set(".image-2", { y: 120 }); // Start 80px lower for staggered effect

    // Animate images back to original position as we scroll
    gsap.to(".image-1", {
        y: 0, // Returns to original position
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".image-wrapper",
            start: "top 90%", // Start animation early
            end: "top 50%", // Stop moving before reaching top
            scrub: 3,
        }
    });

    gsap.to(".image-2", {
        y: 0, // Returns to original position
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".image-wrapper",
            start: "top 90%",
            end: "top 50%",
            scrub: 3,
        }
    });

});