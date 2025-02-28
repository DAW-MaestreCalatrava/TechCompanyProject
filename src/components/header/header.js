import styles from "./header.css" with {type: "css"};

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.img = this.getAttribute("img") || "./src/img/logo.jpg";
        this.render();
    }
    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
            </style>
            <header class="header">
                <img class="logo" src="../src/img/${this.img}" alt="Logo de la compania">
                <nav class="menu">
                    <link-button text="Home"></link-button>
                    <link-button text="About"></link-button>
                    <link-button text="Services"></link-button>
                    <link-button text="Portfolio"></link-button>
                    <link-button text="Pages"></link-button>
                    <link-button text="Contact"></link-button>
                </nav>
            </div>
        `;
    }
    attributeChangedCallback() {
        this.render();
    }
}
customElements.define("header-component", HeaderComponent);