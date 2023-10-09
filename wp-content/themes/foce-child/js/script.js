/***** APPARITION DES TITRES AU SCROLL  *****/
/********************************************/

// Fonction pour vérifier si un élément est visible à l'écran
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
  
// Fonction pour gérer le scroll et déclencher l'animation pour les éléments .section-title
function handleScroll() {
    const titleElements = document.querySelectorAll(".animate-section-title");
  
    titleElements.forEach((titleElement) => {
      if (isElementInViewport(titleElement) && !titleElement.classList.contains("section-title-visible")) {
        titleElement.classList.add("section-title-visible");
  
          // Sélectionne chaque lettre dans le texte
        const letters = titleElement.textContent.split("");
  
          // Remplace le contenu de l'élément par des <span> pour chaque lettre
        titleElement.innerHTML = letters
          .map((letter) => `<span class="letter">${letter}</span>`)
          .join("");
  
          // Sélectionne toutes les lettres
        const letterElements = titleElement.querySelectorAll(".letter");
  
          // Animation avec GSAP pour que les lettres montent depuis le bas jusqu'à leur position initiale
        gsap.fromTo(
          letterElements,
          { opacity: 0, y: "100" }, // Propriétés de départ
          { opacity: 1, y: "0", stagger: 0.2, duration: 0.2, ease: "power4.out" } // Propriétés finales avec délai entre les lettres
        );
      }
    });
}
  
// Écoute l'événement de défilement (scroll) de la page
window.addEventListener("scroll", handleScroll);
  
// Déclenche la vérification de visibilité au chargement de la page
window.addEventListener("load", handleScroll);

/***** MENU BURGER *****/
/***********************/
// Fonction pour gérer l'animation des titres
function handleLinkAnimation() {
  const linkElements = document.querySelectorAll(".animate-section-link");

  linkElements.forEach((linkElement) => {
    // Ajoute la classe pour indiquer que le titre est visible
    linkElement.classList.add("section-link-visible");

    // Sélectionne chaque lettre dans le texte
    const letters = linkElement.textContent.split("");

    // Remplace le contenu de l'élément par des <span> pour chaque lettre
    linkElement.innerHTML = letters
      .map((letter) => `<span class="letter">${letter}</span>`)
      .join("");

    // Sélectionne toutes les lettres
    const letterElements = linkElement.querySelectorAll(".letter");

    // Animation avec GSAP pour que les lettres montent depuis le bas jusqu'à leur position initiale
    gsap.fromTo(
      letterElements,
      { opacity: 0, y: "100" }, // Propriétés de départ
      { opacity: 1, y: "0", stagger: 0.2, duration: 0.2, ease: "power4.out" } // Propriétés finales avec délai entre les lettres
    );
  });
}

// Fonction pour gérer l'ouverture du menu burger et déclencher l'animation des titres
function handleMenuOpen() {
  handleLinkAnimation();
}

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var burgerIcon = document.querySelector(".burger-icon");

openBtn.onclick = function() {
  if (sidenav.classList.contains("active")) {
    closeNav();
    burgerIcon.classList.remove("active");
  } else {
    openNav();
    burgerIcon.classList.add("active");
    handleMenuOpen();
  }
};

function openNav() {
  sidenav.style.visibility = "visible";
  sidenav.style.opacity = "1";
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.style.visibility = "hidden";
  sidenav.style.opacity = "0";
  sidenav.classList.remove("active");
}

/***** PARALLAX TITRE *****/
/**************************/

// Sélectionne l'élément de la vidéo et l'image de parallaxe
const parallaxTitle = document.querySelector('.parallax-title');

// Écoute l'événement de défilement de la page
window.addEventListener('scroll', () => {
    // Calcule la valeur de défilement de la page
    const scrollValue = window.scrollY;

    // Limite la translation maximale vers le bas à 250px
    const maxTranslateY = 250;

    // Applique une transformation CSS pour créer l'effet de parallaxe
    if (scrollValue <= maxTranslateY) {
        // Si la translation vers le bas est inférieure à 250px, déplace vers le bas
        parallaxTitle.style.transform = `translateY(${scrollValue}px)`;
    } else {
        // Si la translation atteint 250px, ajuste la transformation pour remonter progressivement
        parallaxTitle.style.transform = `translateY(${maxTranslateY - (scrollValue - maxTranslateY)}px)`;
    }
});

/***** SWIPER JS *****/
/*********************/

var swiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  autoplay: {
      delay: 3000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 10,
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
  },
});

/***** PARALLAX NUAGE *****/
/**************************/
// Fonction pour vérifier si un élément est dans la fenêtre visible
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
var parallaxImages = document.querySelectorAll(".parallax-nuage");
var articlePlace = document.getElementById("place");

// Stocke les positions initiales des images
var initialPositions = Array.from(parallaxImages).map(function (image) {
  return image.getBoundingClientRect().left;
});

window.addEventListener("scroll", function () {
  // Vérifie si l'article est visible à l'écran
  if (isElementInViewport(articlePlace)) {
    // Vérifie si les deux images sont visibles à l'écran
    if (isElementInViewport(parallaxImages[0]) && isElementInViewport(parallaxImages[1])) {
      var scrollPosition = window.scrollY;

      // Parcours toutes les images avec la classe parallax-nuage
      parallaxImages.forEach(function (image, index) {
        var displacement = -(scrollPosition - initialPositions[index]) / 5;

        // Limite la valeur de déplacement à un maximum de 300px dans les deux sens
        displacement = Math.max(-300, Math.min(300, displacement));

        image.style.transform = "translateX(" + displacement + "px)";
      });
    }
  }
});