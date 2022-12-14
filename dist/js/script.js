  // Link menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";

  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    infoList.classList.remove("showInfo");
    menuInfo.style.display = "block";
    closeInfo.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  ) 

  // info menu
const infoList = document.querySelector(".infoList");
const infoItems = document.querySelectorAll(".infoItem");
const infobtn= document.querySelector(".infobtn");
const closeInfo= document.querySelector(".closeInfo");
const menuInfo = document.querySelector(".menuInfo");

function toggleMenuInfo() {
  if (infoList.classList.contains("showInfo")) {
    infoList.classList.remove("showInfo");
    closeInfo.style.display = "none";
    menuInfo.style.display = "block";
  } else {
    infoList.classList.add("showInfo");
    closeInfo.style.display = "block";
    menuInfo.style.display = "none";    
  }
}

infobtn.addEventListener("click", toggleMenuInfo);
menuInfo.forEach(
  function(menuItem) {
  menuItem.addEventListener("click", toggleMenuInfo)
  }
)
  