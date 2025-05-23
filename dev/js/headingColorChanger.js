// dev/js/headingColorChanger.js
function changeHeadingColors(color = "red") {
  const headings = document.querySelectorAll("h1");
  headings.forEach(h => h.style.color = color);
}

// Optional: call it here if you want it to run on page load
document.addEventListener('DOMContentLoaded', () => {
  changeHeadingColors("black");
});