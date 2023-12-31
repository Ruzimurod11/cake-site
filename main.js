let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slides-container .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - (1 % slides.length)) % slides.length;
  slides[index].classList.add("active");
}

const icons = document.querySelectorAll(".products .box-container .box .icons");
icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.target.style.top = "-105%";
  });
});
