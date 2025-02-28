import styles from "./footer-component.css" with {type:"css"};

class footerComponent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.prop1 = this.getAttribute("prop1") || "prop1";
        this.render();
    }

    render(){
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */`
            <footer>
                <div class="principal">
                    <div class="location">
                        <my-text size="title" color="white">Búscanos</my-text>
                        <hr>
                        <my-text size="body" color="white">
                            Calle Toledo 35, Ciudad Real, España
                        </my-text>
                        <my-text size="body" color="white">
                            +34 123 456 789
                        </my-text>
                    </div>
                    <div class="follow">
                        <my-text size="title" color="white">Síguenos</my-text>
                        <hr>
                        <div class="icons">
                            <icon-button media="instagram" url="#"></icon-button>
                            <icon-button media="facebook" url="#"></icon-button>
                            <icon-button media="twitter" url="#"></icon-button>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <my-text size="body" color="white">
                    Copyright © 2025. By TechCompany
                    </my-text>
                </div>
            </footer>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("footer-component", footerComponent);