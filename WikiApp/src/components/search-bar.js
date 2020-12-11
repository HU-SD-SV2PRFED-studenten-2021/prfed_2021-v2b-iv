import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'

class searchBar extends LitElement{

    // static get properties(){
    //     // return { name: { type: String } };
    // }

    static get styles() {
        return css`
    .zoeken-container{
        background: white;
        border-radius: 6px;
        overflow: hidden;
        position: absolute;
        right: 0;
    }
    
    .zoeken-container input {
        width: 400px;
        background: transparent;
        border: 0;
        font-size: 30px;
        border: 1px solid black;
        color: black;
        font-family: sans-serif;
    }
    
    .zoeken-container input::placeholder {
        color: lightgrey;
    }
`
    }

    constructor() {
        super();
    }


    inputSuggestion(){
        const inputValue = this.shadowRoot.querySelector('.search-input').value;

        this.dispatchEvent(new CustomEvent('suggesties', {
            detail: inputValue
        }));
    }

    render() {
        return html`
        <div class="zoeken-container">
            <label for="zoekbalk"></label>
            <input @keyup="${this.inputSuggestion}" class="search-input" type="text" id="zoekbalk" name="zoeken" placeholder="Doorzoek de wiki..." value=""> 
        </div>
        `
    }
}

customElements.define('search-bar', searchBar);