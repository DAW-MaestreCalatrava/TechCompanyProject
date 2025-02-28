import styles from "./carrousel.css" with {type: "css"};

class CarrouselComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.position=1;
        this.render();
    }
    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
            </style>
            <div class="carrousel">
                <div class="carrousel__item pos1">
                    <div class="info1">
                        <my-text size="jumbotitle" color="white">Boostrap</my-text>
                        <my-text size="jumbosubtitle" color="white">Utilizamos de forma creativa los componentes de Bootstrap</my-text>
                    </div>
                    <div class="info2">
                        <my-text size="jumbotitle" color="white">JavaScrip</my-text>
                        <my-text size="jumbosubtitle" color="white">Cursos rapidos para aprender JavaScrip</my-text>
                    </div>
                    <div class="info3">
                        <my-text size="jumbotitle" color="white">TypeScrip</my-text>
                        <my-text size="jumbosubtitle" color="white">Aprende a usar correctamente las variables con tipo de TypeScrip</my-text>
                    </div>
                    <div class="info4">
                        <my-text size="jumbotitle" color="white">PHP</my-text>
                        <my-text size="jumbosubtitle" color="white">Maneja tu servidor de manera mas eficiente</my-text>
                    </div>
                </div>
            <div class="carrousel__select">
                <i class="fa-regular fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
            </div>
            <div class="button_left"><i class="fa-solid fa-angle-left"></i></div>
            <div class="button_right"><i class="fa-solid fa-angle-right"></i></div>
            </div>
        `;
    }
    connectedCallback() {
        this.iconRight = this.shadowRoot.querySelector(".fa-angle-right").parentElement;
        this.iconRight.addEventListener("click", () => this.moveLeft());
        this.iconLeft = this.shadowRoot.querySelector(".fa-angle-left").parentElement;
        this.iconLeft.addEventListener("click", () => this.moveRight());
        this.selectors= this.shadowRoot.querySelectorAll(".fa-circle");
        for (let i = 0; i < this.selectors.length; i++) {
            this.selectors.item(i).addEventListener("click", () => this.move(i+1));
            
        }
    }
    moveLeft (){
        this.shadowRoot.querySelector(".carrousel__item").classList.remove("pos"+this.position);
        if (this.position<4) {
            this.changeSelectors(this.position+1);
            this.position++;
            this.shadowRoot.querySelector(".carrousel__item").classList.add("pos"+this.position);
        }else{
            this.changeSelectors(1);
            this.position=1;
            this.shadowRoot.querySelector(".carrousel__item").classList.add("pos"+this.position);
        }
    }
    moveRight (){
        this.shadowRoot.querySelector(".carrousel__item").classList.remove("pos"+this.position);
        if (this.position>1) {
            this.changeSelectors(this.position-1);
            this.position--;
            this.shadowRoot.querySelector(".carrousel__item").classList.add("pos"+this.position);
        }else{
            this.changeSelectors(4);
            this.position=4; 
            this.shadowRoot.querySelector(".carrousel__item").classList.add("pos"+this.position);
        }
    }
    move(position){
        this.shadowRoot.querySelector(".carrousel__item").classList.remove("pos"+this.position);
        this.shadowRoot.querySelector(".carrousel__item").classList.add("pos"+position);
        this.changeSelectors(position);
        this.position=position;
    }
    changeSelectors(position){
        this.selectors= this.shadowRoot.querySelectorAll(".fa-circle");
        for (let i = 0; i < this.selectors.length; i++) {
            if (i+1==position) {
                this.selectors.item(i).classList.add("fa-regular");
                this.selectors.item(i).classList.remove("fa-solid");
            }
            if (i+1==this.position) {
                this.selectors.item(i).classList.add("fa-solid");
                this.selectors.item(i).classList.remove("fa-regular");
            }    
        }
    }
}
customElements.define("carrusel-component", CarrouselComponent);