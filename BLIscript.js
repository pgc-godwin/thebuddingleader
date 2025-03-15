
const navBtn = document.getElementById("navbar-btn");
const navCase = document.getElementById("navbarNav");
const nextEventBtn = document.getElementById("next-event");
const acasyMoreInfoBtn = document.getElementById("acasym-more-info-btn");

const closeModal = document.getElementById("close-modal");
const registerBtn = document.getElementById("register-btn");
const registerBtn2 = document.getElementById("register-btn2");
const homepageNav = document.getElementById("home-page-nav");
const brainkrigNav = document.getElementById("brainkrig-nav");
const projectNav = document.getElementById("project-nav");
const partnershipNav = document.getElementById("partnership-nav");
const aboutUsNav = document.getElementById("about-us-nav");
const contactUsNav = document.getElementById("contact-us-nav");
const homepageSection = document.getElementById("carousel-section");
const brainkrigSection = document.getElementById("brainkrig-page");
const projectSection = document.getElementById("project-page");
const partnershipPage = document.getElementById("partnership");
const aboutUsPage = document.getElementById("about-us-page");
const contactUsPage = document.getElementById("contactSection");
const partnershipBtn = document.getElementById("partnership-btn");
const brainkrigBtn = document.getElementById("about-brainkrig-btn");
const brainkrigBtn2 = document.getElementById("about-brainkrig-btn2");
const subscribeBtn = document.getElementById("subscribe-btn");





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
    brainkrigSection.classList.add("hide");
    projectSection.classList.remove("hide");
    projectSection.scrollIntoView();
    document.getElementById("close-modal").click();
    window.scrollTo(0, 0)

});

subscribeBtn.addEventListener("click", (event)=>{
  event.preventDefault();
   window.open("https://www.youtube.com/@thebuddingleader", "_blank")
});


registerBtn.addEventListener("click", (event)=>{
    event.preventDefault();
     window.open("https://docs.google.com/forms/d/e/1FAIpQLScU3Bz8WoYnCpmbI07E8tXJwgME-joAe247LYiiFrFdZXvTmg/viewform?usp=dialog", "_blank")
});

registerBtn2.addEventListener("click", (event)=>{
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
    brainkrigSection.classList.add("hide");
    partnershipPage.classList.remove("hide");
    projectSection.classList.remove("hide");
    projectSection.scrollIntoView();
    window.scrollTo(0, 0)

});

aboutUsNav.addEventListener("click", (e)=>{
    e.preventDefault();
    homepageSection.classList.add("hide");
    partnershipPage.classList.add("hide");
    brainkrigSection.classList.add("hide");
    projectSection.classList.add("hide");
    aboutUsPage.classList.remove("hide");
    contactUsPage.classList.remove("collapse");
    aboutUsPage.scrollIntoView();
    window.scrollTo(0, 0)

});

brainkrigNav.addEventListener("click", (e)=>{
  e.preventDefault();
  homepageSection.classList.add("hide");
  aboutUsPage.classList.add("hide");
  projectSection.classList.add("hide");
  partnershipPage.classList.remove("hide");
  contactUsPage.classList.remove("collapse");
  brainkrigSection.classList.remove("hide");
  window.scrollTo(0, 0)
});

homepageNav.addEventListener("click", (e)=> {
  e.preventDefault();
  homepageSection.classList.remove("hide");
  aboutUsPage.classList.add("hide");
    brainkrigSection.classList.add("hide");
    projectSection.classList.add("hide");
  partnershipPage.classList.add("hide");

  homepageSection.scrollIntoView();
  window.scrollTo(0, 0)

});

partnershipNav.addEventListener("click", (e)=> {
  e.preventDefault();
  homepageSection.classList.add("hide");
    brainkrigSection.classList.add("hide");
    aboutUsPage.classList.add("hide");
  projectSection.classList.add("hide");
  partnershipPage.classList.remove("hide");
  partnershipPage.scrollIntoView();
  window.scrollTo(0, 0)

});



contactUsNav.addEventListener("click", (e)=>{
  e.preventDefault();
  document.getElementById("contact-us-collapsible").click();
    brainkrigSection.classList.add("hide");
    homepageSection.classList.add("hide");
  aboutUsPage.classList.add("hide");
  projectSection.classList.add("hide");
  partnershipPage.classList.remove("hide");
  contactUsPage.classList.remove("collapse");
  window.scrollTo(0, document.body.scrollHeight)

 // document.getElementById("last-invisible-line").scrollIntoView()

});

brainkrigBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  homepageSection.classList.add("hide");
  aboutUsPage.classList.add("hide");
  projectSection.classList.add("hide");
  partnershipPage.classList.remove("hide");
  contactUsPage.classList.remove("collapse");
  brainkrigSection.classList.remove("hide");
  window.scrollTo(0, 0)
});

brainkrigBtn2.addEventListener("click", (e)=>{
  e.preventDefault();
  homepageSection.classList.add("hide");
  aboutUsPage.classList.add("hide");
  projectSection.classList.add("hide");
  partnershipPage.classList.remove("hide");
  contactUsPage.classList.remove("collapse");
  brainkrigSection.classList.remove("hide");
  window.scrollTo(0, 0)
});


document.getElementById("contact-us-collapsible").addEventListener("click", (e)=>{
  e.preventDefault();
  contactUsPage.classList.toggle("collapse");
  window.scrollTo(0, document.body.scrollHeight);
  })


  partnershipBtn.addEventListener("click", (event)=>{
    event.preventDefault();
     window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGRIM32_UeWNT3H35fHpn2GPrc_a2jMzl5aD89tlOdRX4UBw/viewform?usp=sf_link)", "_blank")
});


//BRAINKRIG PICTURE SLIDE
let index = 0;
        showSlides(index);
        
        function changeSlide(n) {
            showSlides(index += n);
        }
        
        function showSlides(n) {
            let slides = document.getElementsByClassName("slides");
            if (n >= slides.length) index = 0;
            if (n < 0) index = slides.length - 1;
            
            for (let slide of slides) {
                slide.style.display = "none";
            }
            slides[index].style.display = "block";
        }
        
        setInterval(() => changeSlide(1), 5000); // Auto slide every 3 seconds


        $(document).ready(function() {
          $("#registrationForm").submit(function(event) {
              event.preventDefault(); // Prevent default form submission

              let formData = new FormData();
              formData.append("submission[schoolName]", $("#input_3").val());
              formData.append("submission[emailAddress]", $("#input_4").val());
              formData.append("submission[whatsappNumber]", $("#input_5").val());
              formData.append("submission[schoolAdress]", $("#input_6").val());
              console.log("Submitting Data:", Object.fromEntries(formData));

              $.ajax({
                  url: "https://api.jotform.com/form/250723385505052/submissions?apiKey=7c84151b2f6b143c3dd3a50eef175ee7",
                  type: "POST",
                  data: formData,
                  processData: false,
                  contentType: false,
                  success: function(response) {
                      $("#responseMessage").text("Registration successful!").css("color", "green");
                      $("#registrationForm")[0].reset();
                  },
                  error: function(xhr) {
                      $("#responseMessage").text("Error submitting form. Please try again.").css("color", "red");
                  }
              });
          });
      });