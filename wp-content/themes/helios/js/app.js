import * as bootstrap from "bootstrap";
// import {  Navbar, Popper } from 'bootstrap';

document.addEventListener("click", function (e) {
  // Hamburger menu
  // console.log(e.target.classList.contains("hamburger-toggle"));
  if (e.target.classList.contains("hamburger-toggle")) {
    // console.log(e.target.children[0].classList);
    e.target.children[0].classList.toggle("active");
  }
});
