import styles from './about-us.css' with { type: 'css' };

class AboutUs extends HTMLElement {
    
    static get observedAttributes() {
        return ['title', 'src'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('title') || 'Título';
        this.src = this.getAttribute('src') || 'https://via.placeholder.com/150';
        this.shadowRoot.adoptedStyleSheets = [styles];
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */`
            <div class="aboutContainer">
                <div class="about--textContainer">
                    <my-text text size="title" color="#7f1b7e">${this.title}</my-text>
                    <slot name="description"></slot>
                </div>
                <img src="${this.src}" alt="about us" class="about--img"/>
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

customElements.define('about-us', AboutUs);