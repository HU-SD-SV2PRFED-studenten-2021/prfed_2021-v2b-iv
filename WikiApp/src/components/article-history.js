import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import getData from "../utils/get-data.js";

class ArtikelHistory extends LitElement {
    static get properties() {
        return {
            id: { type: String, attribute: 'id', reflect: true },
            versies: { type: Array }
        }
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        getData('articles')
        .then(({articles}) => articles.find(article => article.id === this.id))
        .then(article => 
            this.versies = article.geschiedenis)
        .then(() =>{
            this.versies.forEach(versie => {
                versie.collapsed = true;
        })});
    }


    constructor() {
        super();
        this.versies = [];
    }


    static get styles() {

        return css `
            ul {
                list-style: none;
            }
            .geschiedenis-cont {
                padding: 2em;
                height: 100%;
            }
            h2 {
                font-size: 2em;
            }
            h3 {
                margin: .1em;
            }
            .list-cont {
                background: #f9f9f9;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                padding: 1em;
                height: 600px;
                overflow-y: scroll;
                border-radius: 10px;

            }
            .def {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0 1.2em;
            }
            #placeholder {
                width: 2em;
            }
        `;
    }

    _toggleCollapesed(e) {
        
        this.versies = this.versies.map((versie, index) => {
            return index === e.detail ? {...versie, collapsed: !versie.collapsed } : versie;
        });
    }

    render() {
        return html`
            <div class="geschiedenis-cont" tabindex="1">
                <h2>Bewerkgeschiedenis</h2>
                <div class="list-cont">
                    <div class="def">
                        <h3 tabindex="2">
                            Username
                        </h3>
                        <h3 tabindex="3">
                            Bewerkingsdatum
                        </h3>
                        <h3 id="placeholder">
                        </h3>
                    </div>
                    <ul class="edits-list">
                        ${this.versies.map((versie, index) => html`                    
                            <edit-versie
                                tabindex="${4 + index}"
                                .index=${index}
                                title=${versie.title}
                                tekst=${versie.tekst}
                                date=${versie.date}
                                time=${versie.time}
                                ?collapsed=${versie.collapsed}
                                username=${versie.editor.username}                        
                                @onToggle=${this._toggleCollapesed}>                    
                            </edit-versie>
                            `                        
                        )}
                    </ul>
                </div>
            </div>
        `;
    }
}

window.customElements.define('article-history', ArtikelHistory);