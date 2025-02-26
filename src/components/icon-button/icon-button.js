import styles from "./icon-button.css" with { type: "css" };

class IconButton extends HTMLElement {
    static get observedAttributes() {
        return [ "url", "media"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.url = this.getAttribute("url") || "#";
        this.media = this.getAttribute("media") || "instagram";

        this.render();
    }

    render() {

        this.shadowRoot.adoptedStyleSheets.push(styles);

        this.shadowRoot.innerHTML = /* html */ `
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
            crossorigin="anonymous"
        />
        <a href="${this.url}" class="icon-button">
            <i class="icon fa-brands fa-${this.media}"></i>
        </a>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // if (name === "url") this.url = newValue;
        // if (name === "media") this.media = newValue;
        this.render();
    }
}

customElements.define("icon-button", IconButton);
