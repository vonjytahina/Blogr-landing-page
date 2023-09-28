const menuItem = document.querySelectorAll(
  ".container header .top .left ul.menu li"
);
const mobileMenuItem = document.querySelectorAll(".container .mobile-menu li");

const mobileMenu = document.querySelector(".container .mobile-menu");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].onclick = () => {
    if (
      !menuItem[i]
        .querySelector("ul.submenu")
        .classList.contains("show-submenu")
    ) {
      menuItem[i].style.color = "white";
      menuItem[i].style.textDecoration = "underline";
      menuItem[i].querySelector("svg").style.transform = "rotate(180deg)";
      menuItem[i].querySelector("ul.submenu").classList.add("show-submenu");
      menuItem[i].querySelector("ul.submenu").classList.remove("hide-submenu");
      menuItem[i].querySelector("ul.submenu").onmouseleave = () => {
        menuItem[i].style.color = "#ffe0d5";
        menuItem[i].style.textDecoration = "none";
        menuItem[i].querySelector("svg").style.transform = "rotate(0deg)";
        menuItem[i].querySelector("ul.submenu").classList.add("hide-submenu");
        menuItem[i]
          .querySelector("ul.submenu")
          .classList.remove("show-submenu");
      };
    } else if (
      menuItem[i].querySelector("ul.submenu").classList.contains("show-submenu")
    ) {
      menuItem[i].style.color = "#ffe0d5";
      menuItem[i].style.textDecoration = "none";
      menuItem[i].querySelector("svg").style.transform = "rotate(0deg)";
      menuItem[i].querySelector("ul.submenu").classList.add("hide-submenu");
      menuItem[i].querySelector("ul.submenu").classList.remove("show-submenu");
    }
  };
}

for (let i = 0; i < mobileMenuItem.length; i++) {
  mobileMenuItem[i].onclick = () => {
    if (
      !mobileMenuItem[i]
        .querySelector(".submenu-mobile")
        .classList.contains("show-mobile-submenu")
    ) {
      mobileMenuItem[i].style.color = "#6c7a83";
      mobileMenuItem[i].querySelector("svg").style.transform = "rotate(180deg)";
      mobileMenuItem[i]
        .querySelector(".submenu-mobile")
        .classList.add("show-mobile-submenu");
      mobileMenuItem[i]
        .querySelector(".submenu-mobile")
        .classList.remove("hide-mobile-submenu");
    } else if (
      mobileMenuItem[i]
        .querySelector(".submenu-mobile")
        .classList.contains("show-mobile-submenu")
    ) {
      mobileMenuItem[i].style.color = "#173046";
      menuItem[i].querySelector("svg").style.transform = "rotate(0deg)";
      mobileMenuItem[i].querySelector("svg").style.transform = "rotate(0deg)";
      mobileMenuItem[i]
        .querySelector(".submenu-mobile")
        .classList.remove("show-mobile-submenu");
      mobileMenuItem[i]
        .querySelector(".submenu-mobile")
        .classList.add("hide-mobile-submenu");
    }
  };
}

hamburger.onclick = () => {
  if (!mobileMenu.classList.contains("show-mobile-menu")) {
    mobileMenu.classList.add("show-mobile-menu");
    mobileMenu.classList.remove("hide-mobile-menu");
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
  }
};

closeBtn.onclick = () => {
  if (!mobileMenu.classList.contains("hide-mobile-menu")) {
    mobileMenu.classList.add("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
  }
};

function windowResize() {
  if (document.documentElement.clientWidth > 376) {
    hamburger.style.display = "none";
    closeBtn.style.display = "none";
  } else if (document.documentElement.clientWidth <= 376) {
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
  }
}

window.addEventListener("resize", windowResize);
