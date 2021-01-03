import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'

class SideNav extends LitElement {

    static get styles() {
        return css`


    `}

    constructor() {
        super();
    }

    render() {
        return html`
        <nav>
        <button class="nav-btn" onclick="openForm()">Inloggen</button>
        <button class="nav-btn">Voeg artikel toe</button>
    </nav>
        `
    }
}

customElements.define('side-nav', SideNav);