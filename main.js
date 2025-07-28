/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  const menu = document.getElementById("myNavMenu");
  menu.classList.toggle("responsive");
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

// Auto-close the mobile nav when any link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.getElementById("myNavMenu");
    if (window.innerWidth <= 900 && navMenu.classList.contains("responsive")) {
      navMenu.classList.remove("responsive");
    }
  });
});

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
// project toggle
function toggleProjects(skill, el) {
  const allSections = document.querySelectorAll('.projects-container');
  const allTabs = document.querySelectorAll('.project-skill');
  const targetSection = document.getElementById('projects-' + skill);
  const isAlreadyActive = el.classList.contains('active-tab');
  const skillsContainer = document.getElementById('projectSkills');

  // Reset compact layout
  skillsContainer.classList.remove('compact');

  // Hide all project sections
  allSections.forEach(section => {
    section.classList.remove('show');
    section.style.display = 'none';
  });

  // Remove highlight from all skill tabs
  allTabs.forEach(btn => btn.classList.remove('active-tab'));

  if (!isAlreadyActive) {
    // Show the clicked section
    if (targetSection) {
      targetSection.style.display = 'flex';
      setTimeout(() => targetSection.classList.add('show'), 10);

      // ✅ Scroll to just above the skill buttons
      const yOffset = -100; // adjust as needed based on header height
      const y = skillsContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // Add compact layout + highlight
    el.classList.add('active-tab');
    skillsContainer.classList.add('compact');
  }
}



// Auto-close menu on link click (mobile view)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("myNavMenu");
    if (menu.classList.contains("responsive")) {
      menu.classList.remove("responsive");
    }
  });
});
// Close the mobile menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.getElementById("myNavMenu");
    if (navMenu.classList.contains("responsive")) {
      navMenu.classList.remove("responsive");
    }
  });
});
function myMenuFunction() {
  document.getElementById("myNavMenu").classList.toggle("responsive");
}

console.log("JS file is loaded");