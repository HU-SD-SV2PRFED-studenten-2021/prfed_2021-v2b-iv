import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import getData from "../utils/get-data.js";

const styles = css`
`

class viewIndex extends LitElement {
    static get styles(){
        return styles;
    }
    static get properties(){
        return{
            articleData: { type: Array }
        }
    }

    constructor(){
        super();
        this.articleData = []
    }



    render() {
        return html`
        ${this.articleData.map(category => html`
        <category-list
          list-title="${category.name}"
        >
        ${category.artikelen.map(artikel => html`
            
        <wk-article
            category = "${category.id}"
            id ="${artikel.id}"
            titel = ${artikel.title}
            rol = ${artikel.rol}>
                </wk-article>
        `)}
        </category-list>
      `)}
        
        
        `

    }

}

window.customElements.define('view-index', viewIndex);