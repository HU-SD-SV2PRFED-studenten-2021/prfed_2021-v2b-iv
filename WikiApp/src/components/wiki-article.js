import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import getData from "../utils/get-data.js";

class WikiArtikel extends LitElement {
    static get properties() {
        return {
            id: { type: String, attribute: 'id', reflect: true },
            titel: { type: String, reflect: true },
            tekst: { type: String},
            category: {type: String}
        }
    }

    static get styles() {
        return css`
            .artikel-cont {
                border: 0.1em solid rgb(46, 42, 42);
                margin-top: 3em;
                padding: 1em;
            }
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
            <div class="artikel-cont">
            
            <h1>
                <a href="artikelen/${this.id}">
                    <slot name="titel">${this.titel}</slot>
                </a>
            </h1>
                <slot name="tekst">${this.tekst}</slot>
            </div>
            <delete-article titel="${this.titel}"></delete-article>
        `;
    }
}

window.customElements.define('wiki-article', WikiArtikel);