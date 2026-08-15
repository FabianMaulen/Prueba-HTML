// --- CONFIGURACIÓN DE DATOS ---
const CLAVE_SECRETA = "1402"; // Tu clave de acceso

// Array de objetos: Aquí agregas todos los recuerdos que quieras.
// Si un recuerdo no tiene foto, simplemente deja las comillas vacías en 'foto': ""
const recuerdos = [
    {
        fecha: "11 de Septiembre, 2024",
        titulo: "Nuestro primer aniversario",
        texto: "Ese día fue mágico. Recuerdo lo nerviosos que estábamos, pero fue un dia hermoso.",
        foto: "fotos/foto1.jpg" 
    },
    {
        fecha: "4 de diciembre, 2024",
        titulo: "Aquel viaje a las dunaas",
        texto: "No teníamos nada planeado y terminó siendo un dia muy lindo pero con mucho viento .",
        foto: "fotos/foto2.jpg"
    },
    {
        fecha: "Hoy y siempre",
        titulo: "Cada momento a tu lado",
        texto: "Incluso los días normales se vuelven especiales cuando estamos juntos. No necesito grandes planes si te tengo a ti.",
        foto: "fotos/foto1.jpg" // Este recuerdo no mostrará imagen
    }
];

// --- REFERENCIAS AL DOM ---
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const btnUnlock = document.getElementById('unlock-btn');
const inputPassword = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');
const timelineContainer = document.getElementById('timeline-container');

const btnOpenLetter = document.getElementById('open-letter-btn');
const letterModal = document.getElementById('letter-modal');
const btnCloseModal = document.getElementById('close-modal');

// --- LÓGICA DE LOGIN ---
btnUnlock.addEventListener('click', () => {
    const intento = inputPassword.value;

    if (intento === CLAVE_SECRETA) {
        // Transición suave
        loginScreen.style.opacity = '0';
        
        setTimeout(() => {
            loginScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            
            // Renderizar los recuerdos y mostrar pantalla principal
            renderizarRecuerdos();
            
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 50);
        }, 800);

    } else {
        errorMsg.classList.remove('hidden');
        inputPassword.value = '';
    }
});

// --- LÓGICA DE RENDERIZADO DE LA LÍNEA DE TIEMPO ---
function renderizarRecuerdos() {
    timelineContainer.innerHTML = ''; // Limpiar el contenedor por si acaso

    recuerdos.forEach(recuerdo => {
        // Crear el elemento contenedor de la tarjeta
        const card = document.createElement('div');
        card.classList.add('memory-card');

        // Construir el HTML interno de la tarjeta. 
        // Verificamos si hay foto para inyectar la etiqueta <img> o no.
        let imgHTML = '';
        if (recuerdo.foto !== "") {
            imgHTML = `<img src="${recuerdo.foto}" alt="${recuerdo.titulo}" class="memory-img">`;
        }

        card.innerHTML = `
            <span class="memory-date">${recuerdo.fecha}</span>
            <h2 class="memory-title">${recuerdo.titulo}</h2>
            ${imgHTML}
            <p class="memory-text">${recuerdo.texto}</p>
        `;

        // Añadir la tarjeta al contenedor principal
        timelineContainer.appendChild(card);
    });
}

// --- LÓGICA DEL MODAL DE LA CARTA ---
btnOpenLetter.addEventListener('click', () => {
    letterModal.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', () => {
    letterModal.classList.add('hidden');
});