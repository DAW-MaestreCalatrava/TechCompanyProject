import styles from './my-textarea.css' with { type: 'css' };

class TextareaComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const textarea = document.createElement('textarea');
        textarea.classList.add('my-textarea');
        const placeholder = this.getAttribute('placeholder') || '';
        textarea.setAttribute('placeholder', placeholder);

        this.shadowRoot.adoptedStyleSheets = [styles];
        this.shadowRoot.append(textarea);
    }
}

customElements.define('my-textarea', TextareaComponent);