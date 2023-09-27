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