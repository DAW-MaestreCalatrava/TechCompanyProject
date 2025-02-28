import styles from './my-form.css' with { type: 'css' };

class FormComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets = [styles];
        this.shadowRoot.innerHTML = /* html */ `
            <form class="my-form">
                <my-input placeholder="Name"></my-input>
                <my-input placeholder="Email ID" type="email"></my-input>
                <my-input placeholder="Phone No." type="tel"></my-input>
                <my-textarea placeholder="Type your message here..." rows="5"></my-textarea>
                <button type="submit">Send message</button>
            </form>
        `;
    }
}

customElements.define('my-form', FormComponent);
