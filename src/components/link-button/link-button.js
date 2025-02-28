import styles from "./link-button.css" with { type: "css" };

class LinkButton extends HTMLElement {
    static get observedAttributes() {
        return ["text", "url"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.text = this.getAttribute("text") || "Enlace";
        this.url = this.getAttribute("url") || "#";

        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets = [styles]; // Se asignan estilos una vez

        this.shadowRoot.innerHTML = /* html */ `
            <a href="${this.url}" class="link-button">${this.text}</a>
        `;
        if (this.url=="."+location.pathname) {
            this.shadowRoot.querySelector("a").classList.add("active");
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "text") this.text = newValue;
        if (name === "url") this.url = newValue;
        this.render();
    }
}

customElements.define("link-button", LinkButton);
