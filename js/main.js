var elSiteHeader = document.querySelector(".site-header");
var elSiteNavOpen = elSiteHeader.querySelector(".site-header__button");
var elSiteNavClose = document.querySelector(".site-nav__btn")

elSiteNavOpen.addEventListener("click", function (){
  elSiteHeader.classList.add("site-nav--open");
});

elSiteNavClose.addEventListener("click", function(){
  elSiteHeader.classList.remove("site-nav--open");
});