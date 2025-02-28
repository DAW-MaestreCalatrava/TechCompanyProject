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

        this.addEventListeners();
    }

    addEventListeners() {
        const link = this.shadowRoot.querySelector(".link-button");
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evita la navegación inmediata

            // Remover 'active' de todos los botones
            document.querySelectorAll("link-button").forEach((btn) => {
                btn.shadowRoot.querySelector(".link-button").classList.remove("active");
            });

            // Agregar 'active' al botón clicado
            link.classList.add("active");
        });
        if (this.url==location.href) {
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
