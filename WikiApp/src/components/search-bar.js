import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'
import filterSuggesties from "../utils/search-bar-filter.js";


class searchBar extends LitElement {

    // static get properties(){
    //     // return { name: { type: String } };
    // }

    static get styles() {
        return css`

            label {
                visibility: hidden;
            }
           
            input {
                max-width: 300px;
                height: 2.3em;
                border: none;
                border-radius: 20px;
                font-size: .8em;
                font-family: sans-serif;
                padding: .4em 1em;
            }
            
            input::placeholder {
                color: gray;
            }
                .suggestie-container{
        width:400px;
    }
    .suggestie-container {
            position: absolute;
            display: block;
            right: 0;
            margin-top: 39px;
            width: 406px;
            background-color: lightgrey;
            border-radius: 6px;
            overflow: hidden;
    }
    
        .suggestie-container > ol {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
    
    .suggestie-container > ol > a {
        color:black;
        text-decoration: none;
    }
        
        .suggestie-container > ol > a > li{
            color: #24292e !important;
            padding: 2.5px;
            font-size: 20px;
            border-bottom: 1px solid #666;
            cursor: pointer;
    }
    
        .suggestie-container > ol > a > li:hover{
        background-color: #97CBFF;
    }
    
        .suggestie-container > ol > a > li > p{
        color: #586069 !important;
        font-size: 15px;
    }
    `}

    static get properties(){
        return {
            inputValue: { type: String },
            suggesties: { type: Array }
        };
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
        if (
            changedProperties.has('inputValue')
        ) {
            if (this.inputValue === '') {
                {
                    this.suggesties = [];
                }
            }
            else {
                this.suggesties = filterSuggesties(
                    this.inputValue,
                    this.articleData);
            }
        }
    }

    render() {
        const urlParams = new URLSearchParams(window.location.search);
        return html`
        <div class="zoeken-container">
            <label for="zoekbalk"></label>
            <input @keyup="${this.inputSuggestion}" class="search-input" type="text" id="zoekbalk" name="zoeken" placeholder="Doorzoek de wiki..." value="">
            <div class="suggestie-container">
            ${this.suggesties.map(artikel => html`
            ${console.log(artikel)}
            <a href="${urlParams + '/artikel?id=' + artikel.id}">
                <li>
                    <h3>${artikel.title}</h3>
                    <h4>${artikel.text}</h4>
                </li>
            </a>
       
        `)}
        </div> 
        </div>
        
        
        `
    }
}

customElements.define('search-bar', searchBar);