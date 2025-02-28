import styles from "./icon-button.css" with {type: "css"};
class IconButton extends HTMLElement {
    static get observedAttributes() {
        return ["text", "url", "media"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.url = this.getAttribute("url") || "#";
        this.media = this.getAttribute("media") || "instagram";

        this.render();
    }

    render() {
        const icon = this.media === "instagram" ? "fa-instagram" : this.media;

        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
        <a href="${this.url}" class="icon-button">
        <div class="fa-brands ${icon}"></div>
        
        </a>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "url") this.url = newValue;
        if (name === "media") this.media = newValue;
        this.render();
    }
}

customElements.define("icon-button", IconButton);
