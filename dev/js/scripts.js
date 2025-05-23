import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(); 

function changeHeadingColors(color = "red") {
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  headings.forEach(h => h.style.color = color);
}

changeHeadingColors("red");