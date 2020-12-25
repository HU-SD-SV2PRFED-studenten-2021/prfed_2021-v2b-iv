import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'
import filterSuggesties from "../utils/search-bar-filter.js";


class searchArtikelen extends LitElement {



    static get styles() {
        return css`
                .suggestie-container {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;              
            }
`}

    static get properties(){
        return {
            articleData : {type: Array}
        };
    }






    render() {
        const urlParams = new URLSearchParams(window.location.search);
        let inputValue = urlParams.get('value');
        return html`
            <div class="suggestie-container">
            ${filterSuggesties(inputValue,this.articleData).map(artikel => html`
            ${console.log(artikel)}
            <a href="${urlParams + '/artikel?id=' + artikel.id}">
                <li>
                    <h3>${artikel.title}</h3>
                    <h4>${artikel.text}</h4>
                </li>
            </a>
       
        `)}
        </div>
        
        
        `
    }
}

customElements.define('search-artikelen', searchArtikelen);