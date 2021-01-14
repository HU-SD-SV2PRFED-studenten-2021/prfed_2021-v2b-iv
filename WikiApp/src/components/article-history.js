import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import getData from "../utils/get-data.js";

class WikiArtikel extends LitElement {
    static get properties() {
        return {
            id: { type: String, attribute: 'id', reflect: true },

        }
    }


    static get styles() {
        return css`

        `;
    }

    connectedCallback() {
        super.connectedCallback();

        getData('articles')
            .then(({articles}) => articles.find(article => article.id === this.id))
            .then(article => {
                this.titel = article.title;
                this.tekst = JSON.parse(JSON.stringify(article.text));
                    });
    }


    render() {
        return html`

        `;
    }
}

window.customElements.define('wiki-article', WikiArtikel);