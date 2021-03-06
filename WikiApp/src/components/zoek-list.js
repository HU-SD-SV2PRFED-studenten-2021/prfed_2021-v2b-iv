import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'
import filterSuggesties from "../utils/search-bar-filter.js";


class searchArtikelen extends LitElement {



    static get styles() {
        return css`
            .suggestie-container {
                display: flex;
                flex-direction: column;
            }

            a {
                text-decoration: none;
            }


            h3 {
                color: #155a96;
                margin: 0;
                padding: 0;
            }

            p {
                margin: 0;
                padding: 0;
                color: #051635;
            }

            li {
                list-style: none;
                padding: .6em 1em;
            }

            li:hover {
                background-color: #f5f5f5;
            }

        `
    }

    static get properties(){
        return {
            articleData : {type: Array},
            category : {type: String}
        };
    }






    render() {
        const urlParams = new URLSearchParams(window.location.search);
        let inputValue = urlParams.get('value');
        urlParams.delete('value');
        return html`
            <div class="suggestie-container">
                ${filterSuggesties(inputValue,this.articleData).map(artikel => html`
                    ${console.log(artikel)}
                    <li>
                    ${this.articleData.map(category => {
                        const vindArtikel = category.artikelen.find(randomArtikel => randomArtikel.id === artikel.id)
                            if (vindArtikel !== undefined){
                                this.category = category.id
                            }
                        })}
                        <a href="${urlParams + '/artikel?id=' + artikel.id}&category=${this.category}">
                            <h3>${artikel.title}</h3>
                            <p>${artikel.text}</p>
                        </a>
                    </li>
                `)}
            </div>        
        `
    }
}

customElements.define('search-artikelen', searchArtikelen);