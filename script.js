// Words to cycle through
const words = ["Websites", "Journey"];
let currentWordIndex = 0;

// Function to change the word
function changeWord() {
    const highlight = document.getElementById("highlight-word");
    highlight.textContent = words[currentWordIndex]; // Set the new word

    // Update the index for the next word, looping back to 0 when reaching the end
    currentWordIndex = (currentWordIndex + 1) % words.length; 
}

// Change the word every 2.5 seconds
setInterval(changeWord, 2500);

// Header navigations 
// Function to handle the smooth scroll with offset
function smoothScrollToTarget(event) {
    event.preventDefault();
    const targetElement = document.querySelector('#home');
    const offset = -100; // Adjust this value to your desired offset

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Attach the event listener to both the image and the link
document.querySelector('.logo img').addEventListener('click', smoothScrollToTarget);
document.querySelector('a[href="#home"]').addEventListener('click', smoothScrollToTarget);


document.querySelector('a[href="#about"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth',
        block: 'center' // Use 'center' to align the element at the center of the screen
    });
});


document.querySelector('a[href="#services"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#services').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

document.querySelector('a[href="#portfolio"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

document.querySelector('a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".portfolio-container");

    sliders.forEach((slider) => {
        let randomSpeed = Math.random() * 20 + 10; // Speed between 10s and 30s
        let randomDirection = Math.random() > 0.5 ? "normal" : "reverse"; // Random direction

        slider.style.animation = `slideLoop ${randomSpeed}s linear infinite ${randomDirection}`;
    });
});




const banner = document.querySelector('.banner-container');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

// Update dots
function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Navigate to specific slide
function goToSlide(index) {
    currentSlide = index;
    banner.style.transform = `translateX(-${currentSlide * 20}%)`;
    updateDots(currentSlide);
}

// Event listeners for navigation
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + 5) % 5;
    goToSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % 5;
    goToSlide(currentSlide);
});

// Add click events to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Newsletter start

  window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
  window.LOCALE = 'en';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

  window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

  window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";




  window.translation = {
    common: {
      selectedList: '{quantity} list selected',
      selectedLists: '{quantity} lists selected'
    }
  };

  var AUTOHIDE = Boolean(0);
//   Newsletter start


// Plan See More
function onChangeGold(){
    event.preventDefault()
    var gold = document.getElementById('gold');
    var gold_plan = document.getElementById('gold-plan');
    let seeMoreParagraph = document.getElementById('seeMoreGold').querySelector('p');

    if (gold.style.height != '700px'){
        gold.style.height = '700px'; //change height of gold to 700px
        gold_plan.style.height = '1000px';
        seeMoreParagraph.innerText = "See less ..."; // Change the text inside the <p> element
    }
    else{
        gold.style.height = '495px';
        gold_plan.style.height = '50rem';
        seeMoreParagraph.innerText = "See 6 more ..."; // Change the text inside the <p> element

    }
}
function onChangePremium() {
    event.preventDefault();
    var premium = document.getElementById('premium');
    var premiumPlan = document.getElementById("premium-plan");
    var seeMoreParagraph = document.getElementById('seeMorePremium').querySelector('p'); // Select the <p> inside #seeMore

    if (premium.style.height != '880px') {
        premium.style.height = '880px';
        premiumPlan.style.height = "1180px";
        seeMoreParagraph.innerText = "See less ..."; // Change the text inside the <p> element
    } else {
        premium.style.height = '495px';
        premiumPlan.style.height = '50rem';
        seeMoreParagraph.innerText = "See 8 more ..."; // Change the text inside the <p> element
    }
}