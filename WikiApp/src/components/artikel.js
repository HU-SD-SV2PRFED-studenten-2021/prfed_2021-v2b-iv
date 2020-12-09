import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';


class WikiArtikel extends LitElement {
    static get properties() {
        return {
            id: { type: String, attribute: 'id', reflect: true },
            titel: { type: String, reflect: true },
            tekst: { type: String, reflect: true }
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
        `;
    }
}

window.customElements.define('wiki-artikel', WikiArtikel);