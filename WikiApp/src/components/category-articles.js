import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';

const styles = css`
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

class categoryArticles extends LitElement{

    static get styles(){
        return styles;
    }

    static get properties(){
        return{
            category: {attribute: 'category'},
            articleData: {type: Array}
        }
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }


    render(){
        this.articleData = this.articleData.filter(category => category.name === this.category)

        return html`
        <h1>Alle artikelen van de categorie ${this.category}</h1>
        <div class="suggestie-container">
        ${this.articleData.map( category => html`
            ${category.artikelen.map( artikel => html`
              <li>
                <a href="/artikel?category=${category.id}&id=${artikel.id}">
                            <h3>${artikel.title}</h3>
                            <p>${artikel.text.substr(0,70) + '...'}</p>
                </a>
               </li>`)}
                `
            )}</div>
        `
    }


}


window.customElements.define('category-articles', categoryArticles);
