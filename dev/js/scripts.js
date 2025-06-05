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
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav-container');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('active');
    });
  }
});