import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'
import filterSuggesties from "../utils/search-bar-filter.js";
import getData from "../utils/get-data.js";


class SearchBar extends LitElement {
    static get styles() {
        return css`
            label {
                display: none;
            }
           
            input {
                max-width: 300px;
                height: 2.3em;
                border: 1px solid #656565;
                border-radius: 20px;
                font-size: .8em;
                font-family: sans-serif;
                padding: .4em 1em;
            }
            
            input::placeholder {
                color: gray;
            }
              
            .suggestie-container {
                position: absolute;
                display: block;
                right: 10px;
                margin-top: 10px;
                max-height: 25em;
                width: 22em;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                border-radius: 6px;
                overflow: auto;
                background-color: #ffffff;
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
                color: #051635;
                margin: 0;
                padding: 0;
                padding-left: .5em;
                padding-bottom: .5em;
            }

            li {
                list-style: none;
                padding-left: .5em;
                padding-right: .5em;
                margin-top: .7em;
                margin-bottom: .7em;
            }

            li:hover {
                background-color: #f5f5f5;
                border-top: 1px solid #d4d4d4;
                border-bottom: 1px solid #d4d4d4;
            }
    
    `}

    static get properties(){
        return {
            inputValue: { type: String },
            suggesties: { type: Array },
            articleData: {type: Array},
            category : {type: String}
        };
    }

    connectedCallback() {
        super.connectedCallback();
        getData('categories')
            .then(({categories}) => {
                const categoryPromises = categories.map(category => getData(category))
                return Promise.all(categoryPromises)
            })
            .then(articleData => {
                this.articleData = articleData
    })
    }


    constructor() {
        super();
        this.inputValue = '';
        this.suggesties = [];
    }


    inputSuggestion(){
        this.inputValue = this.shadowRoot.querySelector('.search-input').value;
    }


    updated(changedProperties) {
        if (changedProperties.has('inputValue')) {
            if (this.inputValue === '') {
                this.suggesties = [];
            } else {
                this.suggesties = filterSuggesties(this.inputValue, this.articleData);
            }
        }
    }

    redirect(e) {
        if (e.key === 'Enter') {
            // const urlParam = new URLSearchParams(window.location.search);
            // // urlParam.delete('value');
            let url = '/zoekPagina?value=' + this.inputValue;
            window.location = url;
        }
    }

    render() {

        // const urlParams = new URLSearchParams(window.location.search);
        return html`
        <div class="zoeken-container">
            <label for="zoekbalk">Zoekbalk</label>
            <input @keyup="${this.inputSuggestion}" @keypress="${this.redirect}"
             class="search-input" type="text" id="zoekbalk" name="zoeken" placeholder="Doorzoek de wiki..." value=""
            >
            <div class="suggestie-container">
                ${this.suggesties.map(artikel => html`
                    ${this.articleData.map(category => {
                        const vindArtikel = category.artikelen.find(randomArtikel => randomArtikel.id === artikel.id)
                        if (vindArtikel !== undefined){
                            this.category = category.id
                        }
                    })}   
                <a href="${'/artikel?id=' + artikel.id}&category=${this.category}">
                    <li>
                        <h3>${artikel.title}</h3>
                        <p>${artikel.text}</h4>
                    </li>
                </a>
        
                `)}
            </div> 
        </div>
        `
    }
}

customElements.define('search-bar', SearchBar);