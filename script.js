/* ==========================================
   1. GESTIÓN DE TEMAS Y COLORES (ARMONÍA)
   ========================================== */
/* ==========================================
   GESTOR DE ARMONÍA MEDVAULT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intentar cargar el tema predefinido (clases CSS)
    const temaGuardado = localStorage.getItem('medvault-tema');
    if (temaGuardado === 'azul') {
        document.body.classList.add('tema-azul');
    }

    // 2. Intentar cargar colores específicos (variables CSS)
    const p = localStorage.getItem("mv-principal");
    const s = localStorage.getItem("mv-secundario");
    const t = localStorage.getItem("mv-terciario");

    if (p) document.documentElement.style.setProperty('--principal', p);
    if (s) document.documentElement.style.setProperty('--secundario', s);
    if (t) document.documentElement.style.setProperty('--terciario', t);
});

/**
 * Función para botones de selección rápida (Rosa/Azul)
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
 * Función para el selector de colores de configuracion.html
 */
function cambiarColores(principal, secundario, terciario) {
    localStorage.setItem("mv-principal", principal);
    localStorage.setItem("mv-secundario", secundario);
    localStorage.setItem("mv-terciario", terciario);
    
    document.documentElement.style.setProperty('--principal', principal);
    document.documentElement.style.setProperty('--secundario', secundario);
    document.documentElement.style.setProperty('--terciario', terciario);
}


/* ==========================================
   2. FUNCIONES DE INTERFAZ (MEDVAULT)
   ========================================== */

/**
 * Valida el acceso de 4 dígitos (PIN) en el visor clínico
 */
function validarAcceso() {
    const otp = document.getElementById('otp').value;
    if(otp.length === 4) {
        const datosClinicos = document.getElementById('datos-clinicos');
        if(datosClinicos) {
            datosClinicos.style.display = 'block';
        }
    } else {
        alert("Ingrese una clave de 4 dígitos válida");
    }
}
function crearFondoAnimado() {
    const bgContainer = document.createElement('div');
    bgContainer.className = 'background-animation';
    document.body.appendChild(bgContainer);

    const iconos = ['💊', '🩺', '➕', '🧪', '🩹', '🏥'];
    const cantidad = 15; // Número de figuritas en pantalla

    for (let i = 0; i < cantidad; i++) {
        const span = document.createElement('span');
        span.className = 'medical-icon';
        span.innerText = iconos[Math.floor(Math.random() * iconos.length)];
        
        // Posición horizontal aleatoria
        span.style.left = Math.random() * 100 + 'vw';
        
        // Velocidad aleatoria (entre 10 y 20 segundos)
        const duracion = Math.random() * 10 + 10;
        span.style.animationDuration = duracion + 's';
        
        // Retraso aleatorio para que no salgan todas juntas
        span.style.animationDelay = Math.random() * 20 + 's';

        bgContainer.appendChild(span);
    }
}

// Ejecutar la función cuando cargue la página
document.addEventListener('DOMContentLoaded', crearFondoAnimado);
/* ==========================================
   GESTOR DE PERSISTENCIA MEDVAULT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar el tema (Rosa/Azul)
    const temaGuardado = localStorage.getItem('mv-tema-clase');
    if (temaGuardado === 'azul') {
        document.body.classList.add('tema-azul');
    }

    // 2. Cargar colores personalizados si existen
    const colorPrincipal = localStorage.getItem('mv-color-p');
    if (colorPrincipal) {
        document.documentElement.style.setProperty('--button-color', colorPrincipal);
        document.documentElement.style.setProperty('--accent-color', colorPrincipal + '33'); // Añade transparencia
    }
});

// Función para los botones de la página de configuración
function cambiarTema(nombre) {
    if (nombre === 'azul') {
        document.body.classList.add('tema-azul');
        localStorage.setItem('mv-tema-clase', 'azul');
    } else {
        document.body.classList.remove('tema-azul');
        localStorage.setItem('mv-tema-clase', 'rosa');
    }
}

// Función para selectores de color (opcional)
function aplicarColorPersonalizado(color) {
    document.documentElement.style.setProperty('--button-color', color);
    localStorage.setItem('mv-color-p', color);
}