import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
// import { classMap } from './../../node_modules/lit-html/directives/class-map.js';



class ArtikelList extends LitElement {
    static get properties() {
        return {
            artikelen: { type: Array }
        }
    }


    constructor() { 
        super();
    }


    // Todo: add a [static] TotalArtikels Class and use info there as input to this component
    

    render() {
        return html`
        <div id="artikel-lst-cont">
            <ul id="artikel-lst">
                ${this.artikelen.map((art) => html`
                    <wiki-artikel
                        titel="${art.titel}"
                        tekst="${art.tekst}"
                        tags="${JSON.stringify([...art.tags])}"
                    ></wiki-artikel>
                `)}
            </ul>
        </div>        
        `
    }
}


window.customElements.define('artikel-list', ArtikelList);