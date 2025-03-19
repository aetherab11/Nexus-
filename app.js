// Create a master timeline
const masterTl = gsap.timeline({
    defaults: {
      duration: 0.6, // Faster overall duration
      ease: "power3.out",
      opacity: 0,
    },
  });
  
  // First animate the logo
  masterTl
    .from(".logo", {
      y: -40, // Reduced movement for a snappier effect
      duration: 0.8, // Slightly faster
    })
  
    // Then animate each nav item one by one
    .from(
      ".nav-ele",
      {
        y: -25, // Reduced movement
        stagger: 0.08, // Faster staggering
      },
      "-=0.3" // Start even sooner before the logo finishes
    )
  
    // Finally animate the button
    .from(
      ".button",
      {
        scale: 0.85, // Less scaling for a sharper effect
        y: -15,
        duration: 0.5, // Reduced duration
      },
      "-=0.4"
    )
  
    .from(
      ".content", 
      {
        x: -80, // Less distance
        opacity: 0,
        duration: 0.6, // Faster fade-in
        ease: "power2.out",
        delay: 0.3 // Slightly reduced delay
      },
      "-=0.6"
    )
  
    // Image slides in from right
    .from(".hero-img", {
      x: 80, // Less distance
      opacity: 0,
      duration: 0.6, // Faster effect
      ease: "power2.out"
    }, "-=0.6");
  
  // Trigger animation on page load
  window.addEventListener("load", () => {
    masterTl.play();
  });
  




// First, make sure you've included the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// Create a timeline with ScrollTrigger
gsap.timeline({
    scrollTrigger: {
      trigger: ".why",
      start: "top center",
      end: "center top",
      toggleActions: "play none none none" // Play on enter, reverse on leave
    }
  })
  .from(".why-img", {
    x: -100, // Image slides in from left
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  })
  .from(".why h3", {
    y: 50, // Text slides up
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  }, "-=0.9"); // Start text animation before image animation completes






  gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "center top", // End animation parameters (optional)
      toggleActions: "play none none none" // Play on enter, reverse on leave
    }
  })
  .from(".about h3", {
    y: 50, // Text slides up
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  })
  .from(".about-img", {
    x: 100, // Image slides in from left
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  }, "-=0.9"); // Start image animation before text animation completes









gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top 75%", // Animation starts when top of section hits 75% down viewport
      end: "bottom 25%",
      toggleActions: "play none none none" // Play on enter, reverse on leave
    }
})
    .from(".column", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2
    })
    .from(".copyright", {
        opacity: 0,
        duration: 1.5,
    }, "-=0.9")





// load always on top 
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
