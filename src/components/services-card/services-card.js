import styles from './servicesCard.css' with { type: 'css' };

class ServicesCard extends HTMLElement {
    
    static get observedAttributes() {
        return ['title', 'description', 'icon'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('title') || 'Título';
        this.description = this.getAttribute('description') || 'Descripción';
        this.icon = this.getAttribute('icon') || 'fas fa-utensils';
        this.shadowRoot.adoptedStyleSheets = [styles];
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */`
            <style>
                
                @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
            </style>
            <div class="card">
                <i class="${this.icon}"></i>
                <h2 class="title">${this.title}</h2>
                <p class="descripcion">${this.description}</p>   
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

customElements.define('services-card', ServicesCard);