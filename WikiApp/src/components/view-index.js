import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import getData from "../utils/get-data.js";



class viewIndex extends LitElement {
    static get styles() {
        return css`

            :host {
                display: flex;
                flex-direction: column;            
            }
            
            .category-container {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;   
            }


            category-list:hover {
                background-color: #fdfdfd;
                box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
            }
        `

    }
    static get properties(){
        return{
            articleData: { type: Array },
            filteren:{type: String, reflect:true},
            artikelList:{type:Array},
            filter_:{type : String, reflect: true}
        }
    }

    constructor(){
        super();
        this.articleData = []
        this.artikelList = []
        this.filter_ = 'all'

    }

    // get myprop() {
    //     return this._myprop;
    // }
    // set myprop(val) {
    //     const oldVal = this._myprop;
    //     if (oldVal !== val) {
    //         this._myprop = val;
    //         this._someprop += 1;
    //         this.requestUpdate('myprop', oldVal);
    //     }
    // }
    setFilterValues = () => {
        const filterElement = this.shadowRoot.querySelector('radio-button')
        this.filter_ = filterElement.categories;

    }


    render() {

        return html`
        <radio-button @change=${this.setFilterValues} .filter="${this.filter_}"></radio-button>
        <div class="category-container">
            ${this.articleData.map(category => html`
            
            <category-list list-title="${category.name}">
                ${this.filter_ != 'all' ? category.artikelen.slice(0, 3).filter(artikel => artikel.rol === this.filter_).map(artikel => html`
                
                <wk-article
                    category = "${category.id}"
                    id ="${artikel.id}"
                    titel = ${artikel.title}
                    rol = ${artikel.rol}>
                </wk-article>
                `) :
            category.artikelen.slice(0, 3).map(artikel => html`
                    
                <wk-article
                    category = "${category.id}"
                    id ="${artikel.id}"
                    titel = ${artikel.title}
                    rol = ${artikel.rol}>
                 </wk-article>
                        `)}
            </category-list>
        </div>
      `)}
        
        
        
            `}
}

window.customElements.define('view-index', viewIndex);