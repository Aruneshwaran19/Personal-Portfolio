$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // Simplified scroll spy for faster response
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top >= offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // Smooth scrolling with reduced duration for faster scroll
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      300,
      "linear"
    );
  });

  // Emailjs to mail contact form data
  $("#contact-form").submit(function (event) {
    emailjs.init("bArl-3WRrI9tQWnus");

    emailjs
      .sendForm("service_jz3hlhs", "template_9uq3ej9", "#contact-form")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset();
          alert("Form Submitted Successfully");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Form Submission Failed! Try Again");
        }
      );
    event.preventDefault();
  });
});

// Document visibility change event
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Aruneshwaran";
    $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
    document.title = "Hey, You Forgot Me! 😢";
    $("#favicon").attr("href", "assets/images/favhand.png");
  }
});

// Typed.js effect starts
var typed = new Typed(".typing-text", {
  strings: [
    "frontend development",
    "backend development",
    "web designing",
    "web development",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

// Disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

// Scroll reveal animations
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

// Scroll reveal for home section
srtop.reveal(".home .content h3", { delay: 200, reset: true });
srtop.reveal(".home .content p", { delay: 200, reset: true });
srtop.reveal(".home .content .btn", { delay: 200, reset: true });
srtop.reveal(".home .image", { delay: 400, reset: true });
srtop.reveal(".home .linkedin", { interval: 600, reset: true });
srtop.reveal(".home .github", { interval: 800, reset: true });
srtop.reveal(".home .instagram", { interval: 600, reset: true });

// Scroll reveal for about section
srtop.reveal(".about .content h3", { delay: 200, reset: true });
srtop.reveal(".about .content .tag", { delay: 200, reset: true });
srtop.reveal(".about .content p", { delay: 200, reset: true });
srtop.reveal(".about .content .box-container", { delay: 200, reset: true });
srtop.reveal(".about .content .resumebtn", { delay: 200, reset: true });

// Scroll reveal for skills section
srtop.reveal(".skills .container", { interval: 200, reset: true });
srtop.reveal(".skills .container .bar", { delay: 400, reset: true });

// Scroll reveal for education section
srtop.reveal(".education .box", { interval: 200, reset: true });

// Scroll reveal for projects section
srtop.reveal(".work .box", { interval: 200, reset: true });

// Scroll reveal for experience section
srtop.reveal(".experience .timeline", { delay: 400, reset: true });
srtop.reveal(".experience .timeline .container", {
  interval: 400,
  reset: true,
});

// Scroll reveal for contact section
srtop.reveal(".contact .container", { delay: 400, reset: true });
srtop.reveal(".contact .container .form-group", { delay: 400, reset: true });

// Hero section - Tooltip effect
document.querySelectorAll(".social-icon").forEach((icon) => {
  const tooltip = icon.querySelector(".tooltip");
  icon.addEventListener("mouseenter", () => {
    tooltip.classList.add("visible");
  });
  icon.addEventListener("mouseleave", () => {
    tooltip.classList.remove("visible");
  });
});

// Footer Section - Tooltip effect
document.querySelectorAll(".share a").forEach((link) => {
  let timeout;
  link.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      link.querySelector(".tooltip").style.opacity = "1";
      link.querySelector(".tooltip").style.visibility = "visible";
    }, 200);
  });
  link.addEventListener("mouseleave", () => {
    clearTimeout(timeout);
    link.querySelector(".tooltip").style.opacity = "0";
    link.querySelector(".tooltip").style.visibility = "hidden";
  });
});
