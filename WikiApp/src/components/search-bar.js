import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'

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
    `}

    constructor() {
        super();
    }


    inputSuggestion() {
        const inputValue = this.shadowRoot.querySelector('.search-input').value;

        this.dispatchEvent(new CustomEvent('suggesties', {
            detail: inputValue
        }));
    }

    render() {
        return html`
        <label for="zoekbalk">Wiki zoekbalk</label>
        <input @keyup="${this.inputSuggestion}" class="search-input" type="text" id="zoekbalk" name="zoeken" placeholder="Doorzoek de wiki..." value=""> 
        `
    }
}

customElements.define('search-bar', searchBar);