import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import { classMap } from '/lit-html/directives/class-map.js';

class WikiArtikel extends LitElement {
    static get properties() {
        return {
            id: { type: String, attribute: 'id', reflect: true },
            datum: { type: Date, reflect: true },
            titel: { type: String, reflect: true },
            tekst: { type: String, reflect: true },
            tags: { type: Array, reflect: true}, 
            collapsed: { type: Boolean, reflect: true }
        }
    }


    constructor() {
        super();

        this.datum = Date.now();
        this.title = "";
        this.tekst = "";
        this.tags = [];

        this.collapsed = true;
    }

    static get styles() {
        return css`
            :host {
                border: 0.1em solid rgb(46, 42, 42);
                margin-top: 3em;
                padding: 1em;
            }
        `;
    }

    handelCollapseArtikel() {
        this.collapsed = !this.collapsed;
    }


    render() {
      return html`
        <div class="artikel-header">
            <h1 class="titel">${this.titel}</h1>
            <p class="datum">${this.datum}</p>
        </div>
        <div class="artikel-main">
            <p class="tekst">${this.tekst}</p>
        </div>
        <div class="artikel-footer">
            <div class="tags-cont">
                <ul class="tags-lst">
                    ${this.tags.map((tag) => html`
                        <li class="tag">${tag}</li>
                    `)}
                </ul>
            </div>
            <button @click="${this.handelCollapseArtikel}"
                    class="collapse-btn ${classMap({ collapsed: this.collapsed })}">Lees meer</button>
        </div>
        
        `
    }
}

window.customElements.define('wiki-artikel', WikiArtikel);