import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import getData from "../utils/get-data.js";

const styles = css`
    .artikel-titel {
        padding: 5px;
        text-align: center;
        margin: 0;
        border-top: 1px solid rgb(207 207 207 / 84%);
    }

    .artikel-titel:hover {
        background-color: rgb(223 223 223);
    }


    a {
        text-decoration: none;
        color: black;
    }`

class wkArticle extends LitElement {

    static get styles(){
        return styles;
    }

    static get properties(){
        return{
            titel: {type: String},
            link: {type: String},
            rol: {type: String}
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.link = `/artikel?category=${this.getAttribute('category')}&id=${this.getAttribute('id')}`;
    }

    render() {
        return html`
        <a href="${this.link}">
            <h3 class="artikel-titel">${this.titel}</h3>    
        </a>
    `
    }
}

window.customElements.define('wk-article', wkArticle);