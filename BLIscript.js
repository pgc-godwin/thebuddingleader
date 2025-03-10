
const navBtn = document.getElementById("navbar-btn");
const navCase = document.getElementById("navbarNav");
const nextEventBtn = document.getElementById("next-event");
const acasyMoreInfoBtn = document.getElementById("acasym-more-info-btn");

const closeModal = document.getElementById("close-modal");
const registerBtn = document.getElementById("register-btn");
const homepageNav = document.getElementById("home-page-nav");
const brainkrigNav = document.getElementById("brainkrig-nav");
const projectNav = document.getElementById("project-nav");
const partnershipNav = document.getElementById("partnership-nav");
const aboutUsNav = document.getElementById("about-us-nav");
const contactUsNav = document.getElementById("contact-us-nav");
const homepageSection = document.getElementById("carousel-section");
const brainkrigSection = document.getElementById("brainkrig-register");
const projectSection = document.getElementById("project-page");
const partnershipPage = document.getElementById("partnership");
const aboutUsPage = document.getElementById("about-us-page");
const contactUsPage = document.getElementById("contactSection");


/* Wrong code
navBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    if (e.target.closest('#navbarNav')) {
    homepageNav.click()
    };
    navCase.classList.toggle("collapse");

    const navbar = document.getElementById('navbar');

    document.addEventListener('click', function(event) {
      const isClickInsideNavbar = navCase.contains(event.target);

      if (!isClickInsideNavbar) {
        navbar.classList.add('hidden');
      }
    });
  });   */

  document.addEventListener('click', function(event) {
    const isClickInsideNavbar = navCase.contains(event.target);

    if (!isClickInsideNavbar) {
    }
  });



navBtn.addEventListener("click", ()=>navCase.classList.toggle("collapse"));

acasyMoreInfoBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    homepageSection.classList.add("hide");
    aboutUsPage.classList.add("hide");
    partnershipPage.classList.add("hide");
    projectSection.classList.remove("hide");
    projectSection.scrollIntoView();
    document.getElementById("close-modal").click()
});

registerBtn.addEventListener("click", (event)=>{
    event.preventDefault();
     window.open("https://docs.google.com/forms/d/e/1FAIpQLScU3Bz8WoYnCpmbI07E8tXJwgME-joAe247LYiiFrFdZXvTmg/viewform?usp=dialog", "_blank")
});

$(document).ready(function () {
    $('.navbar-nav a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
});

$(document).ready(function(){
    $(".navbar-toggler").click(function() {
      $("#navbarNav").collapse('toggle');
    });
  });

  
const collapseFooter = (e) => {
    e.preventDefault();
    document.getElementById("contact-us-collapsible").click();
    window.scrollTo(0, document.body.scrollHeight)
    document.getElementById("last-invisible-line").scrollIntoView();
};


projectNav.addEventListener("click", (e)=>{
    e.preventDefault();
    homepageSection.classList.add("hide");
    aboutUsPage.classList.add("hide");
    partnershipPage.classList.remove("hide");
    projectSection.classList.remove("hide");
    projectSection.scrollIntoView();
});

aboutUsNav.addEventListener("click", (e)=>{
    e.preventDefault();
    homepageSection.classList.add("hide");
    partnershipPage.classList.add("hide");
    projectSection.classList.add("hide");

    aboutUsPage.classList.remove("hide");
    aboutUsPage.scrollIntoView();
});

brainkrigNav.addEventListener("click", (e)=>{
    e.preventDefault();
    registerBtn.click()
});

homepageNav.addEventListener("click", (e)=> {
  e.preventDefault();
  homepageSection.classList.remove("hide");
  aboutUsPage.classList.remove("hide");
  projectSection.classList.add("hide");
  partnershipPage.classList.add("hide");

  homepageSection.scrollIntoView();
});

partnershipNav.addEventListener("click", (e)=> {
  e.preventDefault();
  homepageSection.classList.add("hide");
  aboutUsPage.classList.add("hide");
  projectSection.classList.add("hide");
  partnershipPage.classList.remove("hide");
  partnershipPage.scrollIntoView();
});



contactUsNav.addEventListener("click", (e)=>{
  e.preventDefault();
  document.getElementById("contact-us-collapsible").click();
  homepageSection.classList.add("hide");
  aboutUsPage.classList.add("hide");
  projectSection.classList.add("hide");
  partnershipPage.classList.remove("hide");
  contactUsPage.classList.remove("collapse");
  window.scrollTo(0, document.body.scrollHeight)

 // document.getElementById("last-invisible-line").scrollIntoView()

});

document.getElementById("contact-us-collapsible").addEventListener("click", (e)=>{
  e.preventDefault();
  contactUsPage.classList.remove("collapse");
  window.scrollTo(0, document.body.scrollHeight);
  })