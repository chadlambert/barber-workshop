//====================
//js/main.js
//
//========

//---- Dom Element---------
const yearEl = document.getElementById("year");

const nacBtn = document.getElementById("navBtn")
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");

const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");

// Helper / function

// update footer year auto
const setCurrentYear = () => {
  const now = new Date();
  yearEl.textContent = now.getFullYear();
};

//Toggle mobile menu open/close
let isMenuOpen = false;

const toggleMobileMenu = () => {
  if (!mobileMenu) return;

  if (isMenuOpen === false) {
    mobileMenu.classList.add("is-open");
    isMenuOpen = true;
  } else {
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
  }
};

//close mobile menu (used when a link is clicked)
const closeMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("is-open");
  isMenuOpen = false;
};

//reuseable function with parameters (practice pattern)
const updateHeadingText = (newText) => {
  if (!heading) return;
  heading.textContent = newText;
};

// Event Listeners

// 1) set year on page
setCurrentYear();

// 2) Hamber menu toggle
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    toggleMobileMenu();
  });
}

//3) close mobile menu toggle
if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    // if the click an <a> inside the mennu, close the menu
    if (event.target.tagName === "A") {
      closeMobileMenu();
    }
  });
}
//4) CTA Button: "book now" (placeholder)
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    updateHeadingText("Booking come next - great choice!");
  });
}
//5) Call button: try to use the phone number
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    // if you later set phonelink href to tell, this will work perfectly
    //for now, this beginner-friendly placehoder
    if (phoneLink) {
      updateHeadingText("Call us at" + phoneLink.textContent);
    } else {
      updateHeadingText("Call feature coming next");
    }
  });
}
