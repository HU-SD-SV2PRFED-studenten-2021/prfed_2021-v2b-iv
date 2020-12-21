import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import {classMap} from '/node_modules/lit-html/directives/class-map.js';


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

        // props init
        this.id = "";
        this.datum = new Date(Date.now()).toLocaleString();
        this.title = "";
        this.tekst = "";

        this.collapsed = false;
    }

    static get styles() {
        return css`

            :host {
                max-height: min-content;
            }

            .art-cont {
                border: 1px solid #000000;
                border-radius: 7px;
                padding: 1em;  
                margin-top: 2em;              
            }

            .expanded--false {
                height: 0;
                overflow-y: hidden;
            }
        `;
    }

    handelCollapseArtikel() {
        this.collapsed = !this.collapsed;
        console.log('tst')
    }


    render() {
      return html`
        <div class="art-cont">
            <div class="art-header">
                <h1 class="titel">${this.titel}</h1>
                <p class="datum">${this.datum}</p>
            </div>

            <!-- Fix issue here somewhere -->
            <div class="art-main expanded ${classMap({ 'expanded--false': this.collapsed })}">


                <div class="tekst">${this.tekst}</div>
                <div id="tags-cont">
                    <ul id="tags-lst">
                        ${this.tags.map((tag) => html`
                            <li class="tag">${tag}</li>
                        `)}
                    </ul>
            </div>
            <div class="art-btn-cont">
                <button @click="${this.handelCollapseArtikel}">Lees meer</button>
            </div>
        </div>
        `
    }
}

window.customElements.define('wiki-artikel', WikiArtikel);