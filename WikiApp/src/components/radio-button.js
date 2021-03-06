import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'

const styles = css`


    :host {
        display: flex;
        flex-direction: column;
    }


    .radio-button-container {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        padding: .5em 1.5em 1.7em 1.5em;    
        justify-content: center;
    }

    label, input {
        cursor: pointer;
    }
    legend {
        display: none;
    }

    .filter-rb-cont {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        padding: 5px 10px;
        border-radius: 35px;
        width: min-content;
    }
    

    label {
        font-size: 1em;
        font-family: sans-serif;
        font-weight: bold;
        margin-left: .4em;
        user-select: none;
    }

    .filter-rb-cont:hover {
        background-color: #e4e4e4;
    }


    @media only screen and (max-width: 768px) {
        .radio-button-container{
            flex-direction: column;
            justify-self: center;
            width: min-content;
            align-self: center;
        }

        label {
            margin-left: 2em;
        }
        .filter-rb-cont {
            width: 160px;
            justify-content: flex-end;
        }
    
    }            

    

`

const VisibilityFilter = {
    SHOW_ANALYSEREN : 'analyseren',
    SHOW_ADVIESEREN : 'adviseren',
    SHOW_ONTWERPEN : 'ontwerpen',
    SHOW_REALISEREN : 'realiseren',
    SHOW_MANAGE : 'manage',
    SHOW_ALL : 'all'
}

class radioButton extends LitElement {

    static get properties() {
        return {
            filter: {type: String, reflect: true}
        };
    }

    static get styles() {
        return styles
    }

    constructor() {
        super();
        this.filter = VisibilityFilter.SHOW_ALL;
    }

    filterChanged(e) {
        this.filter = e.target.value;
    }

    get filteren() {
        return this.filter
    }


    get categories() {
        return this.filter;
    }

    emitChange = () => {
        const event = new CustomEvent('change')
        this.dispatchEvent(event)
    }




    render() {
        return html`        
        <legend for="rb-filter">Categorien filter</legend>
        <form id="rb-filter" class="radio-button-container" value="${this.filter}"
                @change="${this.filterChanged}">
            
            ${Object.values(VisibilityFilter).map(filter =>
                 html`
                    <div class="filter-rb-cont">
                        <label for=${filter}>${filter}</label>  
                        <input type="radio" name="filter" id=${filter} value="${filter}"  checked  @change="${this.emitChange()}" />
                    </div>
                   `
        )}
        </form>
        `;
    }

}
customElements.define('radio-button', radioButton);