const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

// burger menu and toggle
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

// accordion at my project section
const items = document.querySelectorAll('.accordion button')

items.forEach(item => item.addEventListener('click', toggleAccordion))

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded")
  for(let item of items) {
    item.setAttribute("aria-expanded", false)
  }
  if (itemToggle === 'false') {
    this.setAttribute("aria-expanded", true)
  }
}