// navbar scolled
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // adjust scroll value as needed
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// / ---------------- Cookie Consent ----------------/
window.addEventListener('load', function () {
    if (window.cookieconsent) {
        window.cookieconsent.run({
            notice_banner_type: "simple",
            consent_type: "express",
            palette: "light",
            language: "en",
            page_load_consent_levels: ["strictly-necessary"],
            notice_banner_reject_button_hide: false,
            preferences_center_close_button_hide: false,
            page_refresh_confirmation_buttons: false,
            website_name: "Ichiran Ramen",
            website_privacy_policy_url: "https://github.com/" // replace with real URL
        });
    }
});
// reservation section
const form = document.getElementById('reservationForm');
const thankYouCard = document.getElementById('thankYouCard');
if (form) {
    
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual form submission
      thankYouCard.style.display = 'block'; // Show Thank You Card
      form.reset(); // Reset the form
      thankYouCard.scrollIntoView({ behavior: 'smooth' }); // Scroll to the card
    
      // Hide the Thank You card after 4 seconds (4000ms)
      setTimeout(() => {
        thankYouCard.style.display = 'none';
      }, 4000);
    });
}
// swiper
var swiper2 = new Swiper(".TmySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});
// contact page
 const contactform = document.getElementById('contactForm');
  const contactthankYouCard = document.getElementById('thankYouCard');
if (contactform) {
    
    contactform.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual submission
      contactthankYouCard.style.display = 'block'; // Show card
      contactform.reset(); // Reset form
      contactthankYouCard.scrollIntoView({ behavior: 'smooth' });
  
      // Hide card after 4 seconds
      setTimeout(() => {
        contactthankYouCard.style.display = 'none';
      }, 4000);
    });
}
// menu
const menu1 = [
  { 
    name: "Salmon Nigiri", 
    description: "Fresh, buttery salmon atop perfectly seasoned rice.", 
    image: "assets/images/salmon-nagir.jfif",
    price: "¥300"
  },
  { 
    name: "Tuna Nigiri", 
    description: "Classic cut of maguro tuna, melt-in-your-mouth goodness.", 
    image: "assets/images/tuna-nigiri.jfif",
    price: "¥350"
  },
  { 
    name: "Eel Nigiri (Unagi)", 
    description: "Sweet, glazed grilled eel with a rich umami flavor.", 
    image: "assets/images/unagi-nigiri.jpg",
    price: "¥400"
  }
];

const menu2 = [
  { 
    name: "California Roll", 
    description: "Crab, avocado, and cucumber wrapped in seaweed and rice.", 
    image: "assets/images/california-roll.jfif",
    price: "¥500"
  },
  { 
    name: "Spicy Tuna Roll", 
    description: "A zesty twist with fresh tuna and spicy sauce.", 
    image: "assets/images/spicy-tuna-roll.webp",
    price: "¥550"
  },
  { 
    name: "Dragon Roll", 
    description: "Shrimp tempura, avocado, and unagi sauce drizzle.", 
    image: "assets/images/dragon-roll.jpg",
    price: "¥650"
  }
];

const menu3 = [
  { 
    name: "Edamame", 
    description: "Lightly salted boiled soybeans.", 
    image: "assets/images/edamame.jpg",
    price: "¥250"
  },
  { 
    name: "Miso Soup", 
    description: "A comforting bowl of miso broth with tofu and seaweed.", 
    image: "assets/images/miso-soup.jpg",
    price: "¥200"
  }
];

const menu4 = [
  { 
    name: "Matcha Ice Cream", 
    description: "Creamy green tea flavor with a refreshing finish.", 
    image: "assets/images/matcha-ice-cream.jfif",
    price: "¥300"
  },
  { 
    name: "Japanese Cheesecake", 
    description: "Light, fluffy, and slightly sweet treat.", 
    image: "assets/images/japanese-cheesecake.jpg",
    price: "¥350"
  }
];

const menuBox1 = document.getElementById("menuBox1");
if (menuBox1) {
    menu1.forEach(menu => {
        menuBox1.innerHTML += `<div class="col-md-6 col-lg-4">
                    <div class="card menu-item h-100 shadow-sm border-0">
                        <img src=${menu.image} class="card-img-top" alt=${menu.name}>
                        <div class="card-body text-center">
                            <h5 class="card-title fw-bold">${menu.name}</h5>
                            <p class="card-text text-muted">${menu.description}
                            </p>
                            <span class="mainColor fw-bold">${menu.price}</span>
                        </div>
                    </div>
                </div>`
    })
}
const menuBox2 = document.getElementById("menuBox2");
if (menuBox2) {
    menu2.forEach(menu => {
        menuBox2.innerHTML += `<div class="col-md-6 col-lg-4">
                    <div class="card menu-item h-100 shadow-sm border-0">
                        <img src=${menu.image} class="card-img-top" alt=${menu.name}>
                        <div class="card-body text-center">
                            <h5 class="card-title fw-bold">${menu.name}</h5>
                            <p class="card-text text-muted">${menu.description}
                            </p>
                            <span class="mainColor fw-bold">${menu.price}</span>
                        </div>
                    </div>
                </div>`
    })
}
const menuBox3 = document.getElementById("menuBox3");
if (menuBox3) {
    menu3.forEach(menu => {
        menuBox3.innerHTML += `<div class="col-md-6 col-lg-6">
                    <div class="card menu-item h-100 shadow-sm border-0">
                        <img src=${menu.image} class="card-img-top" alt=${menu.name}>
                        <div class="card-body text-center">
                            <h5 class="card-title fw-bold">${menu.name}</h5>
                            <p class="card-text text-muted">${menu.description}
                            </p>
                            <span class="mainColor fw-bold">${menu.price}</span>
                        </div>
                    </div>
                </div>`
    })
}
const menuBox4 = document.getElementById("menuBox4");
if (menuBox4) {
    menu4.forEach(menu => {
        menuBox4.innerHTML += `<div class="col-md-6 col-lg-6">
                    <div class="card menu-item h-100 shadow-sm border-0">
                        <img src=${menu.image} class="card-img-top" alt=${menu.name}>
                        <div class="card-body text-center">
                            <h5 class="card-title fw-bold">${menu.name}</h5>
                            <p class="card-text text-muted">${menu.description}
                            </p>
                            <span class="mainColor fw-bold">${menu.price}</span>
                        </div>
                    </div>
                </div>`
    })
}