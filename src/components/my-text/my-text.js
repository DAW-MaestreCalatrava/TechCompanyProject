import styles from './my-text.css' with { type: 'css' };

// Propiedades importantes: color, alineado al centro y el size
class TextComponent extends HTMLElement {
    static get observedAttributes() {
        return ["size", "color", "alignCenter"];
    }

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
        this.size = this.getAttribute("size") || "body";
        this.color = this.getAttribute("color") || "#000";
        this.alignCenter = this.getAttribute("alignCenter") || false;
        this.shadowRoot.adoptedStyleSheets = [styles];
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = /*HTML*/ `
            <style>
                h1, h2, p {
                    color: ${this.color};
                    text-align: ${this.alignCenter ? 'center' : 'unset'}; /* Si es true, entonces center, si no, unset */
                }
            </style>
            ${this.size === 'title' ? this.sizeTitle() : ''}
            ${this.size === 'subtitle' ? this.sizeSubtitle() : ''}
            ${this.size === 'body' ? this.sizeBody() : ''}
            ${this.size === 'jumbotitle' ? this.sizeJumboTitle() : ''}
            ${this.size === 'jumbosubtitle' ? this.sizeJumboSubtitle() : ''}
        `;
    }

    sizeTitle() {
        return /*HTML*/ `
            <h1><slot></slot></h1>
        `;
    }

    sizeSubtitle() {
        return /*HTML*/ `
            <h2><slot></slot></h2>
        `;
    }

    sizeBody() {
        return /*HTML*/ `
            <p><slot></slot></p>
        `;
    }

    sizeJumboTitle() {
        return /* html */ `
            <h1 class="jumbotitle"><slot></slot></h1>
        `;
    }

    sizeJumboSubtitle() {
        return /* html */ `
            <h2 class="jumbosubtitle"><slot></slot></h1>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-text", TextComponent);