// console.log("JS file loaded!");
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init(); 

function changeHeadingColors(color = "red") {
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  headings.forEach(h => h.style.color = color);
}

// console.log("JS is working");
document.addEventListener('DOMContentLoaded', () => {
  const burgerContainer = document.getElementById('burger-container');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav-container');

  if (burgerContainer && burger && nav) {
    burgerContainer.addEventListener('click', () => {
      console.log('Burger clicked!');
      nav.classList.toggle('active');
      burger.classList.toggle('active');
    });
  }
});