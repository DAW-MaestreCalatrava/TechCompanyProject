import styles from './my-input.css' with { type: 'css' };

class InputComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets = [styles];

        this.shadowRoot.innerHTML = /* html */ `
            <input class="my-input" placeholder="${this.getAttribute('placeholder') || ''}">
        `;
    }
}

customElements.define('my-input', InputComponent);
