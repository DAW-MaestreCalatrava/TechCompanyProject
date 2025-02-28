import styles from './serviceSection.css' with { type: 'css' };

class ServiceSection extends HTMLElement {
    
    static get observedAttributes() {
        return ['title'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('title') || 'Título';
        this.shadowRoot.adoptedStyleSheets = [styles];
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */`
        <div class="serviceSection">
        <h1 class="title">${this.title}</h1>
            <div class="services">
                <slot></slot>
            </div>
        </div>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('about-services', ServiceSection);