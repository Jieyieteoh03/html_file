let navBrand = document.getElementById("navBrand");
let sideBar = document.getElementById("sideBar");
let socialIcon = document.getElementsByClassName("social-icon");

window.onscroll = function () {
  if (window.scrollY > 300) {
    navBrand.style.opacity = "1";
  } else {
    navBrand.style.opacity = "0";
  }
};
