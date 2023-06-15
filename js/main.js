window.addEventListener("load", () => {
  /* --------------------------------
  Page loader 
  -----------------------------------*/
  document.querySelector(".js-page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".js-page-loader").style.display = "none";
  }, 600);
});

/* ------------------------------------------
 course preview video
---------------------------------------------*/
/*function coursePreviewVideo(){
    const coursePreviewModal = document.querySelector(".js-course-preview-modal");
    if(coursePreviewModal){ /*if the element exists*/
/*coursePreviewModal.addEventListener("shown.bs.modal", function(){
           this.querySelector(".js-course-preview-video").play();
           this.querySelector(".js-course-preview-video").currentTime = 0;
        });

        coursePreviewModal.addEventListener("hide.bs.modal", function() {
            this.querySelector(".js-course-preview-video").pause();
        });
    }
}
coursePreviewVideo();*/

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

/* ------------------------------------ 
  Style Switcher
-----------------------------------------*/
function styleSwitcherToggle() {
  const styleSwitcher = document.querySelector(".js-style-switcher"),
    styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

  styleSwitcherToggler.addEventListener("click", function () {
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
  });
}
styleSwitcherToggle();

/* -------------------------------------------
 theme colors
----------------------------------------------*/


/* theme light & dark mode */
function themeLightDark() {
  const darkModeCheckbox = document.querySelector(".js-dark-mode");

  darkModeCheckbox.addEventListener("click", function () {
    if (this.checked) {
      localStorage.setItem("theme-dark", "true");
    } else {
      localStorage.setItem("theme-dark", "false");
    }
    themeMode();
  });

  function themeMode() {
    if (localStorage.getItem("theme-dark") === "false") {
      document.body.classList.remove("t-dark");
    } else {
      document.body.classList.add("t-dark");
    }
  }

  if (localStorage.getItem("theme-dark") !== null) {
    themeMode();
  }
  if (document.body.classList.contains("t-dark")) {
    darkModeCheckbox.checked = true;
  }
}
themeLightDark();

/* theme glass effect */
function themeGlassEffect() {
  const glassEffectCheckbox = document.querySelector(".js-glass-effect"),
    glassStyle = document.querySelector(".js-glass-style");

  function glass() {
    glassStyle.removeAttribute("disabled");
  }

  glass(); // Apply the glass theme by default

  glassEffectCheckbox.checked = true;
}

themeGlassEffect();


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