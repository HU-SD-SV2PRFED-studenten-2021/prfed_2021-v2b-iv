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
            #artikel-cont {
                padding: 1.5em;
            }

            #artikel-header-cont {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }

            ul {
                list-style: none;
            }

            #titel-link {
                text-decoration: none;
                color: #000000;
            } 

            #titel-link:hover {
                text-decoration: underline;
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
        <div id="artikel-cont">
            <div id="artikel-header-cont">
                <a id="titel-link" href="artikelen/${this.id}">
                    <h1 id="titel">${this.titel}</h1>
                </a>
                <ul>
                    <li>
                        <a href="artikelen/geschiedenis/${this.id}">
                            toon geschiedenis
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            bewerk artikel
                        </a>
                    </li>
                </ul>
            </div>

            <p id="tekst">${this.tekst}</p>
        </div>
        `;
    }
}

window.customElements.define('wiki-article', WikiArtikel);