/**
 * Define Global Variables
 *
 */

//Collecting All Sections Of The page
let sections = document.querySelectorAll("section");

//Find Nav_Bar List
let navBar = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function isInViewport(element) {
  let bounding = element.getBoundingClientRect();
  return (
    bounding.top >
      -0.7 * (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.top <
      0.7 * (window.innerHeight || document.documentElement.clientHeight)
  );
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
function showTopBotton() {
  let btn = document.querySelector(".scrollTop");
  btn.style.display = "initial";
  if (document.documentElement.scrollTop == 0) {
    btn.style.display = "none";
  }
}

function navDisplay() {
  document.querySelector("nav").style.display = "none";
}
function showNavBar() {
  document.querySelector("nav").style.display = "block";
  if (document.documentElement.scrollTop != 0) setTimeout(navDisplay, 5000);
}
//Scroll to navitem
function scrollToMe(idName) {
  var element = document.querySelector(`section#${idName}`);
  element.scrollIntoView();
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (let i of sections) {
  navBar.innerHTML +=
    '<li><a class="menu__link" onclick ="scrollToMe(\'' +
    i.id +
    "')\">" +
    i.getAttribute("data-nav") +
    "</a></li>";
}

// Add class 'active' to section when near top of viewport
function activeClass() {
  let indicator = 1; //variable to check there is no active section
  for (let section of sections) {
    if (isInViewport(section) && indicator) {
      section.classList.add("your-active-class");
      document
        .querySelector(`nav ul li a[onclick="scrollToMe('${section.id}')"]`)
        .classList.add("active_nav"); //add active_nav class to nav bar item
      indicator = 0;
    } else {
      section.classList.remove("your-active-class");
      document
        .querySelector(`nav ul li a[onclick="scrollToMe('${section.id}')"]`)
        .classList.remove("active_nav");
    }
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */
function main() {
  showNavBar();
  activeClass();
  showTopBotton();
}

document.addEventListener("scroll", main);
