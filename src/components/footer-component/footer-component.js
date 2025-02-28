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
                    <div class="mitad1">
                        <my-text size="title" color="white">About Atlanta</my-text>
                        <my-text size="body" color="white" class="texto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed dui et nibh lobortis pharetra. Cras aliquet vehicula tincidunt. Aliquam volutpat, nisl a feugiat gravida, quam magna dictum purus, non dapibus ante elit id nisi. Mauris vitae faucibus orci. In sit amet condimentum libero, nec laoreet augue.
                        </my-text>
                    </div>
                    <div class="follow">
                        <my-text size="title" color="white">Follow me</my-text>
                        <div class="icons">
                            <icon-button media="instagram" url="#"></icon-button>
                            <icon-button media="facebook" url="#"></icon-button>
                            <icon-button media="twitter" url="#"></icon-button>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <my-text size="body" color="white">
                    Copyright © 2014. Template by WebThemez
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