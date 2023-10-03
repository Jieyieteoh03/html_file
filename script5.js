let navBrand = document.getElementById("navBrand");
let sideBar = document.getElementById("sideBar");
let navbarNav = document.getElementById("navbarNav");
let socialIcon = document.getElementsByClassName("social-icon");

window.onscroll = function () {
  if (window.scrollY > 300) {
    navBrand.style.opacity = "1";
    navbarNav.style.opacity = "0";
  } else {
    navBrand.style.opacity = "0";
    navbarNav.style.opacity = "1";
  }
};
