import styles from './my-input.css' with { type: 'css' }; // Importar estilos

class InputComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Crear input
        const input = document.createElement('input');
        input.classList.add('my-input');

        // Obtener placeholder
        const placeholder = this.getAttribute('placeholder') || '';
        input.setAttribute('placeholder', placeholder);

        // Agregar estilos
        this.shadowRoot.adoptedStyleSheets = [styles];

        // Agregar elementos al Shadow DOM
        this.shadowRoot.append(style, input);
    }
}

// Definir el custom element
customElements.define('my-input', InputComponent);
