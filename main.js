/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
// smoothly scroll to the About section.  
function scrollToAbout() {
  const aboutSection = document.getElementById("about"); // Make sure your section has id="about"
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
  scrollActive();
  toggleGoTopButton();
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["I am Deepika from Chennai, TamilNadu","Welcome to my Portfolio"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 8,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

ScrollReveal({ origin: "left", distance: "80px", duration: 2000, reset: true }).reveal(
  ".about-info, .contact-info",
  { delay: 100 }
);
ScrollReveal({ origin: "right", distance: "80px", duration: 2000, reset: true }).reveal(
  ".skills-box, .form-control",
  { delay: 100 }
);

// Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150; // header height offset
    const sectionId = current.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active-link"));
      const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add("active-link");
      }
    }
  });
}

// Attach scroll listener
window.addEventListener("scroll", scrollActive);

window.addEventListener('resize', () => {
  if (activeProjectSection && activeProjectSection.classList.contains("show")) {
    activeProjectSection.style.maxHeight = activeProjectSection.scrollHeight + "px";
  }
});

// Smooth scroll + highlight on click
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    navLinks.forEach((l) => l.classList.remove("active-link"));
    this.classList.add("active-link");
  });
});





// Go to Top Button
const goTopBtn = document.getElementById("goTopBtn");

function toggleGoTopButton() {
  if (window.scrollY > 200) {
    goTopBtn.style.opacity = "1";
    goTopBtn.style.visibility = "visible";
  } else {
    goTopBtn.style.opacity = "0";
    goTopBtn.style.visibility = "hidden";
  }
}

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Work ex toggle feature

  // function toggleDetails(id) {
  //   const detailSection = document.getElementById(id);
  //   detailSection.style.display = detailSection.style.display === 'block' ? 'none' : 'block';
  // }
function toggleDetails(id, el) {
  const detailSection = document.getElementById(id);
  const isVisible = detailSection.style.display === 'block';
  detailSection.style.display = isVisible ? 'none' : 'block';
  el.textContent = (isVisible ? '▶ ' : '▼ ') + el.textContent.slice(2);
}



//Project
document.getElementById("excelBtn").addEventListener("click", function () {
    const projectList = document.getElementById("excelProjects");
    projectList.classList.toggle("hidden");
  });

 
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      projectCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.classList.add("show");
        } else {
          card.classList.remove("show");
        }
      });
    });
  });

  // Show all by default
  document.querySelector('.filter-btn[data-category="all"]').click();
//  JavaScript to Toggle Menu:
  const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


//project toggle
function toggleProjects(skill) {
  const allSections = document.querySelectorAll('.projects-container');
  let selectedSection = null;

  allSections.forEach(section => {
    if (section.id === 'projects-' + skill) {
      const isVisible = section.classList.contains('show');
      section.classList.remove('show');
      section.style.display = 'none';

      if (!isVisible) {
        section.style.display = 'flex';
        setTimeout(() => section.classList.add('show'), 10);
        selectedSection = section;
      }
    } else {
      section.classList.remove('show');
      section.style.display = 'none';
    }
  });

  if (selectedSection) {
    selectedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

console.log("JS file is loaded");