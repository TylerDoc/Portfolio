// dev/js/headingColorChanger.js
function changeHeadingColors(color = "red") {
  const headings = document.querySelectorAll("h1");
  headings.forEach(h => h.style.color = color);
}


document.addEventListener('DOMContentLoaded', () => {
  changeHeadingColors("#000435");
});