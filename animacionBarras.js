// Función para animar una barra de progreso
function animateProgressBar(id, targetWidth) {
    let elem = document.getElementById(id).querySelector('.progress');
    let currentWidth = 0;
    let interval = setInterval(() => {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
        } else {
            currentWidth++;
            elem.style.width = currentWidth + "%";
            elem.textContent = currentWidth + "%";
        }
    }, 20); // Aumenta la velocidad si es necesario
}

// Función que inicia las animaciones de las barras de progreso
function startAnimation() {
    animateProgressBar("progress-html", 90);
    animateProgressBar("progress-react", 80);
    animateProgressBar("progress-movil", 85);
    animateProgressBar("progress-db", 75);
}

// Detectar cuando la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    startAnimation();

    // Detectar clic en el enlace de "Curriculum Vitae"
    const curriculumLink = document.querySelector("a[href='#curriculum']");

    curriculumLink.addEventListener("click", function() {
        startAnimation();
    });
});
