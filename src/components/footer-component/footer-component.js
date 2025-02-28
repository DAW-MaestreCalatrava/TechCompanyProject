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
            <div class="container">
                <div class="container2">
                    <div class="mitad1">
                        <h3>About Atlanta</h3>
                        <div class="texto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed dui et nibh lobortis pharetra. Cras aliquet vehicula tincidunt. Aliquam volutpat, nisl a feugiat gravida, quam magna dictum purus, non dapibus ante elit id nisi. Mauris vitae faucibus orci. In sit amet condimentum libero, nec laoreet augue. Morbi bibendum erat quis nulla rutrum iaculis non nec ex. Sed nec lorem placerat, molestie tellus eget, consequat tortor. Sed vulputate a purus ut iaculis. Praesent ac dolor quis sem iaculis egestas at id ligula.
                        </div>
                    </div>
                    <div class="follow">
                        <h3>Follow me</h3>
                        <div class="icons">
                            <div class="icono1">icono1</div>
                            <div class="icono2">icono2</div>
                            <div class="icono3">icono3</div>
                            <div class="icono4">icono4</div>
                            <div class="icono5">icono5</div>
                            <div class="icono6">icono6</div>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <p>Copyright © 2014. Template by WebThemez</p>
                </div>
            </div>
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