const buttons = document.querySelectorAll(".diri-card-buttons button");

const sections = document.querySelectorAll(".diri-card-section");

const card = document.querySelector(".diri-card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");

  const section = document.querySelector(targetSection);

  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");

  card.setAttribute("data-state", targetSection);

  sections.forEach((s) => s.classList.remove("is-active"));

  buttons.forEach((b) => b.classList.remove("is-active"));

  e.target.classList.add("is-active");

  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

//slide show

/*let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/