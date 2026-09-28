const btnCapturar = document.getElementById('btn-capturar');
const btnProcesar = document.getElementById('btn-procesar');
const textoCapturado = document.getElementById('texto-capturado');
const resultadoDiv = document.getElementById('resultado');

// PASO 1: Extraer el texto de la web al popup
btnCapturar.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => window.getSelection().toString(),
    }, (selection) => {
        const texto = selection[0].result;
        
        if (texto && texto.trim() !== "") {
            textoCapturado.value = texto;
            btnProcesar.disabled = false;
            resultadoDiv.innerText = "¡Texto capturado! Listo para procesar.";
        } else {
            resultadoDiv.innerText = "Por favor, sombrea algo en la página web primero.";
        }
    });
});

// PASO 2: Procesar con IA
btnProcesar.addEventListener('click', async () => {
    const textoAProcesar = textoCapturado.value;
    
    resultadoDiv.innerText = "Procesando texto...";
    btnProcesar.disabled = true;

    // ---------------------------------------------------------
    // TALLER: IMPLEMENTACIÓN
    // ---------------------------------------------------------
    
    // TODO 1. Variables de configuración (Lo llenarán contigo)
    
    // TODO: 2. Escribir la petición (fetch) a la API de Groq
    
    // TODO: 3. Mostrar el resultado en el resultadoDiv
    
});const API_KEY = "gsk_oKTp1mJhXyb0Az2CPLyWGdyb3FYfVs6jQ590H1IdeT3Sh18aubz"
const MODELO = "openai/gpt-oss-safeguard-20b"
const SYSTEM_PROMPT = "Eres un experto en accesibilidad. Adaptarás el texto recibido bajo pautas de accesibilidad cognitiva y devolverás un solo párrafo como respuesta"
try {
    const respuesta = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST'
        headers: {
        'Authorization': 'Bearer ${API_KEY}',
            'Content-Type': 'application/json' 
    },
body: JSON.stringify({
    model: MODELO,
    messagges: [
        { role: "system", content: SYSTEM_PROMPT),
        { role: " user", content: textoAProcesar}
    ]
})
});
} catch {
    
        
