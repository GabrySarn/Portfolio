// Funzione per controllare quando avviare le animazioni durante lo scrolling
function checkAnimation() {
    let elements = document.querySelectorAll('.boxx');
    let windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        let position = element.getBoundingClientRect().top;
        
        // Verifica se l'elemento è completamente visibile nella finestra visualizzata
        if (position < windowHeight && position + element.clientHeight >= 0) {
            let animation = element.getAttribute('data-animation');
            console.log("va " + animation);
            element.classList.add('visible');
            element.classList.add(animation);
            
        } else {
            console.log("non va");
        }
    });
}

// Aggiungi un listener per l'evento di scroll
window.addEventListener('scroll', checkAnimation);

// Controlla le animazioni quando la pagina viene caricata
document.addEventListener('DOMContentLoaded', checkAnimation);
