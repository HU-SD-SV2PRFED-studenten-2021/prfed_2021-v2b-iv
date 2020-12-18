import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import getData from "../utils/get-data.js";

const styles = css`
h2{
    padding: 5px;
    margin:0;
    text-align: center;
    border-bottom: 1px solid black;
}
`


class categoryList extends LitElement {

    static get styles(){
        return styles;
    }

    static get properties() {
        return {
            listTitle: { type: String, attribute: 'list-title', reflect: true },
            test: { type: String, attribute: "test"}
        }
    }

    render() {
        return html`
      <h2>${this.listTitle}</h2>
      <div>
        <slot />
      </div>
    `
    }
}

window.customElements.define('category-list', categoryList);