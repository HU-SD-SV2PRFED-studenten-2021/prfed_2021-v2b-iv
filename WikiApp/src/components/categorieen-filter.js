import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'
import { store } from "../redux/filter-store.js";
import { VisibilityFilter } from '../redux/filter-reducer.js';
import { connect } from 'https://cdn.skypack.dev/pwa-helpers@0.9.1/connect-mixin.js';



class CategorieenFilter extends connect(store)(LitElement) {

    static get properties() {
        return {
            filter: { type: String }
        };
    }

    static get styles() {
        return css`
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
    }

    stateChanged(state) {
        this.filter = state.filter;
    }

    filterChanged(e) {
        store.dispatch(updateFilter(e.detail.value));
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
                        <input type="radio" name="filter" id=${this.filter} value="${this.filter}"  checked  @change="${this.emitChange}" />
                    </div>
                   `
        )}
        </form>
        `;
    }

}

customElements.define('categorieen-filter', CategorieenFilter);