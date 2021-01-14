import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import getData from "../utils/get-data.js";

const styles = css`
    :host {
        width: 20em;
        background: rgb(249 249 249);
        margin: 1em;
        text-align: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        transition: box-shadow 300ms;           
    }
    a {
        padding: 5px;
        text-align: center;
        margin: 0;
        border-top: 1px solid rgb(207 207 207 / 84%);
    }


  a {
        text-decoration: none;
        color: black;
    }
`


class categoryList extends LitElement {

    static get styles() {
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
      <a href="category?category=${this.listTitle}">
        <h2>${this.listTitle}</h2>
      </a>
      <div>
        <slot />
      </div>
    `
    }
}

window.customElements.define('category-list', categoryList);