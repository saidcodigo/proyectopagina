
document.addEventListener("DOMContentLoaded", function () {

    const ventanaChat = document.getElementById("chatVentana");
    const mensajesChat = document.getElementById("chatMensajes");
    const campoMensaje = document.getElementById("mensajeUsuario");

    // Comprobar que existen los elementos
    if (!ventanaChat || !mensajesChat || !campoMensaje) {
        console.error("No se encontraron los elementos del chat.");
        return;
    }

    // Abrir chat
    window.abrirChat = function () {
        ventanaChat.style.display = "flex";
        campoMensaje.focus();
    };

    // Cerrar chat
    window.cerrarChat = function () {
        ventanaChat.style.display = "none";
    };

    // Agregar mensajes
    function agregarMensaje(texto, tipo) {
        const mensaje = document.createElement("div");

        mensaje.classList.add("mensaje", tipo);
        mensaje.textContent = texto;

        mensajesChat.appendChild(mensaje);
        mensajesChat.scrollTop = mensajesChat.scrollHeight;
    }

    // Respuestas automáticas
    function obtenerRespuesta(pregunta) {

        const texto = pregunta.toLowerCase();

        if (texto.includes("hola")) {
            return "¡Hola! Bienvenido al Portal Electoral. ¿En qué puedo ayudarte?";
        }

        if (texto.includes("votar") || texto.includes("voto")) {
            return "Votar es un derecho ciudadano. Puedes consultar información oficial en https://www.ine.mx/";
        }

        if (texto.includes("democracia")) {
            return "La democracia permite que la ciudadanía participe en las decisiones públicas.";
        }

        if (texto.includes("elecciones") || texto.includes("fecha")) {
            return "Consulta nuestro Calendario Electoral y verifica las fechas oficiales en el INE.";
        }

        if (texto.includes("atizapan") || texto.includes("nicolas romero")) {
            return "Puedes consultar las ubicaciones de estos municipios en la sección Explora tu zona.";
        }

        if (texto.includes("credencial") || texto.includes("ine")) {
            return "Para consultar trámites de tu credencial para votar, visita https://www.ine.mx/";
        }

        if (texto.includes("ayuda") || texto.includes("contacto")) {
            return "Puedes escribirnos desde la sección Atención Ciudadana.";
        }

        return "No encontré una respuesta. Intenta preguntarme sobre votación, democracia, elecciones o credencial del INE.";
    }

    // Enviar mensaje
    window.enviarMensaje = function (event) {

        event.preventDefault();

        const pregunta = campoMensaje.value.trim();

        if (!pregunta) return;

        agregarMensaje(pregunta, "usuario");

        campoMensaje.value = "";

        setTimeout(function () {
            agregarMensaje(obtenerRespuesta(pregunta), "bot");
        }, 500);
    };

    console.log("Chatbot iniciado correctamente.");

});
