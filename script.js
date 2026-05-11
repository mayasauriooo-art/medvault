/* ==========================================
   1. GESTOR DE TEMAS (Rosa/Azul)
   ========================================== */

/**
 * Cambia el tema y lo guarda en 'medvault-tema'
 */
function seleccionarTema(nombreTema) {
    if (nombreTema === "azul") {
        document.body.classList.add("tema-azul");
        localStorage.setItem("medvault-tema", "azul");
    } else {
        document.body.classList.remove("tema-azul");
        localStorage.setItem("medvault-tema", "rosa");
    }
}

/**
 * Aplica el tema guardado al cargar la página
 */
document.addEventListener('DOMContentLoaded', () => {
    const temaGuardado = localStorage.getItem('medvault-tema');
    if (temaGuardado === 'azul') {
        document.body.classList.add('tema-azul');
    }
    
    // Iniciar el fondo animado si la función existe
    if (document.querySelector('.background-animation') || document.getElementById('bg-container')) {
        crearFondoAnimado();
    }
});

/* ==========================================
   2. SEGURIDAD Y ACCESO (PIN de 4 Dígitos)
   ========================================== */

function validarAcceso() {
    const otp = document.getElementById('otp').value;
    if(otp.length === 4) {
        // Si el PIN es correcto, muestra los datos
        const datosClinicos = document.getElementById('datos-clinicos');
        if(datosClinicos) {
            datosClinicos.style.display = 'block';
            // Opcional: scroll suave hacia los datos
            datosClinicos.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        alert("Por favor, ingrese una clave de 4 dígitos válida.");
    }
}

/* ==========================================
   3. INTERFAZ (Fondo Animado)
   ========================================== */
function crearFondoAnimado() {
    // 1. Limpiamos fondos viejos por si acaso
    const viejo = document.querySelector('.background-animation');
    if (viejo) viejo.remove();

    // 2. Creamos el nuevo contenedor
    const bgContainer = document.createElement('div');
    bgContainer.className = 'background-animation';
    document.body.appendChild(bgContainer);

    // 3. REGLA DE TEMAS: Elegimos emojis según el color
    const tema = localStorage.getItem('medvault-tema');
    let iconos = [];

    if (tema === 'azul') {
        iconos = ['🔹', '🩺', '💧', '🏥', '✨'];
    } else if (tema === 'verde') {
        iconos = ['🌿', '🌱', '🍃', '🩹', '✨'];
    } else if (tema === 'amarillo') {
        iconos = ['🌻', '☀️', '💛', '💊', '✨'];
    } else { 
        // Por defecto: Rosa Pastel 🍓
        iconos = ['🍓', '🌸', '✨', '🩹', '💊'];
    }

    // 4. Creamos los iconos flotantes
    const cantidad = 15;
    for (let i = 0; i < cantidad; i++) {
        const span = document.createElement('span');
        span.className = 'medical-icon';
        span.innerText = iconos[Math.floor(Math.random() * iconos.length)];
        
        span.style.left = Math.random() * 100 + 'vw';
        span.style.animationDuration = (Math.random() * 5 + 10) + 's';
        span.style.animationDelay = (Math.random() * 5) + 's';
        span.style.fontSize = (Math.random() * 10 + 20) + 'px'; // Tamaños variados

        bgContainer.appendChild(span);
    }
}

// ESTO HACE QUE FUNCIONE AL CARGAR CUALQUIER PÁGINA
document.addEventListener('DOMContentLoaded', crearFondoAnimado);

function seleccionarTema(nombreTema) {
    // Quitamos clases viejas
    document.body.classList.remove("tema-azul", "tema-verde", "tema-amarillo");

    if (nombreTema === "azul") {
        document.body.classList.add("tema-azul");
        localStorage.setItem("medvault-tema", "azul");
    } else if (nombreTema === "verde") {
        document.body.classList.add("tema-verde");
        localStorage.setItem("medvault-tema", "verde");
    } else if (nombreTema === "amarillo") {
        document.body.classList.add("tema-amarillo");
        localStorage.setItem("medvault-tema", "amarillo");
    } else {
        localStorage.setItem("medvault-tema", "rosa");
    }

    // ¡ESTA LÍNEA ES CLAVE! Llama de nuevo al fondo para cambiar los emojis
    crearFondoAnimado();
}