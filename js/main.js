window.addEventListener("load", () => {
  /* --------------------------------
  Page loader 
  -----------------------------------*/
  document.querySelector(".js-page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".js-page-loader").style.display = "none";
  }, 600);
});

/* ----------------------------- 
 header menu 
 -------------------------------*/
function headerMenu() {
  const menu = document.querySelector(".js-header-menu"),
    backdrop = document.querySelector(".js-header-backdrop"),
    menuCollapseBreakpoint = 991;

  function toggleMenu() {
    menu.classList.toggle("open");
    backdrop.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
  }

  document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });

  // close the menu by clicking outside of it
  backdrop.addEventListener("click", toggleMenu);

  function collapse() {
    menu.querySelector(".active .js-sub-menu").removeAttribute("style");
    menu.querySelector(".active").classList.remove("active");
  }

  menu.addEventListener("click", (event) => {
    const { target } = event;

    if (
      target.classList.contains("js-toggle-sub-menu") &&
      window.innerWidth <= menuCollapseBreakpoint
    ) {
      // prevent default anchor click behavior
      event.preventDefault();

      // if menu-item already expanded, collapse it and exit
      if (target.parentElement.classList.contains("active")) {
        collapse();
        return;
      }
      // if not already expaned... run below code

      // collapse the other expanded menu-item if exists
      if (menu.querySelector(".active")) {
        collapse();
      }

      // expand new menu-item
      target.parentElement.classList.add("active");
      target.nextElementSibling.style.maxHeight =
        target.nextElementSibling.scrollHeight + "px";
    }
  });

  // when resizing window
  window.addEventListener("resize", function () {
    if (
      this.innerWidth > menuCollapseBreakpoint &&
      menu.classList.contains("open")
    ) {
      toggleMenu();
    }
    if (
      this.innerWidth > menuCollapseBreakpoint &&
      menu.querySelector(".active")
    ) {
      collapse();
    }
  });
}
headerMenu();

/* ------------------------------------ 
  Scroll To Top
-----------------------------------------*/

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display = "block";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Theme Dark Mode */
function themeDarkMode() {
  const darkModeCheckbox = document.querySelector(".js-dark-mode");

  darkModeCheckbox.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("t-dark");
      localStorage.setItem("theme-dark", "true");
    } else {
      document.body.classList.remove("t-dark");
      localStorage.setItem("theme-dark", "false");
    }
  });

  if (localStorage.getItem("theme-dark") === "true") {
    darkModeCheckbox.checked = true;
    document.body.classList.add("t-dark");
  }
}
themeDarkMode();

/* Theme Glass Effect */
function enableGlassEffect() {
  const glassStyle = document.querySelector(".js-glass-style");
  glassStyle.removeAttribute("disabled");
}

enableGlassEffect(); // Enable glass effect by default


/* why choose */

const bannerText = document.getElementById("banner-text");
const cards = document.querySelectorAll(".wcu-card");

// Options for the Intersection Observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

// Intersection Observer callback function
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      // Show the card when it appears on the screen
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}

// Create the Intersection Observer
const observer = new IntersectionObserver(handleIntersect, options);

// Observe each card
cards.forEach((card) => {
  observer.observe(card);
});


/*carousel*/
/*let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 5000); 
}*/

var	imgBx = document.querySelectorAll('.imgBx');
		var	contentBx = document.querySelectorAll('.contentBx');
		
		for (var i = 0; i < imgBx.length; i++) {
			imgBx[i].addEventListener('mouseover', function() {
				for (var i = 0; i < contentBx.length; i++) {
					contentBx[i].className = 'contentBx';
				}
				document.getElementById(this.dataset.id).className = 'contentBx active';

				for (var i = 0; i < imgBx.length; i++) {
					imgBx[i].className = 'imgBx';
				}
				this.className = 'imgBx active';
			});
		}