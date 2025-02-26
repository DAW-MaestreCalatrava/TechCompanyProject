import styles from "./primary-button.css" with {type: "css"};
class PrimaryButton extends HTMLElement {
    static get observedAttributes() {
        return ["text", "url", "size"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.text = this.getAttribute("text") || "Enlace";
        this.url = this.getAttribute("url") || "#";
        this.size = this.getAttribute("size") || "body";

        this.render();
    }

    render() {
        const sizeClass = this.size === "body" ? "text-body" : this.size;

        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
        <a href="${this.url}" class="primary-button ${sizeClass}">${this.text}</a>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "text") this.text = newValue;
        if (name === "url") this.url = newValue;
        if (name === "size") this.size = newValue;
        this.render();
    }
}

customElements.define("primary-button", PrimaryButton);
