const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);

console.log(window.scrollY);
window.addEventListener("scroll", () => {
  if (
    window.scrollY > bottomContainerEl.offsetTop -navbarEl.offsetHeight-50
  ) {
    navbarEl.classList.add("active");
    console.log("Hello")
  } else {
    navbarEl.classList.remove("active");
  }
});