import styles from "./header.css" with {type: "css"};

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }
    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
            </style>
            <header class="header">
                <img class="logo" src="../src/img/logo.jpg" alt="Logo de la compania">
                <nav class="menu">
                    <div>BotonLink</div>
                    <div>BotonLink</div>
                    <div>BotonLink</div>
                    <div>BotonLink</div>
                    <div>BotonLink</div>
                    <div>BotonLink</div>
                </nav>
            </div>
        `;
    }
}
customElements.define("header-component", HeaderComponent);