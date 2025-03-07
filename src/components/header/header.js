import styles from "./header.css" with {type: "css"};

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.img = this.getAttribute("img") || "logo.jpg";
        this.render();
    }
    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
            </style>
            <header class="header">
                <img class="logo" src="./src/img/${this.img}" alt="Logo de la compania">
                <nav class="menu">
                    <link-button text="Inicio" url="/TechCompanyProject/"></link-button>
                    <link-button text="Sobre Nosotros" url="/TechCompanyProject/about-us"></link-button>
                    <link-button text="Contactanos" url="/TechCompanyProject/contact"></link-button>
                </nav>
            </div>
        `;
    }
    attributeChangedCallback() {
        this.render();
    }
}
customElements.define("header-component", HeaderComponent);