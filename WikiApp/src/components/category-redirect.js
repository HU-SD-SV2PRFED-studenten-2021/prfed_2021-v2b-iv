import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';

const styles = css`

  a {
        padding: 5px;
        text-align: center;
        margin: 0;
        border-top: 1px solid rgb(207 207 207 / 84%);
    }

  a:hover {
        background-color: rgb(223 223 223);
    }


  a {
        text-decoration: none;
        color: black;
    }
`

class categoryRedirect extends LitElement{
    static get styles(){
        return styles;
    }

    static get properties(){
        return{
            category: {attribute: 'category'},
            link: {type: String }
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.link = `/category?category=${this.getAttribute('category')}`;
    }


    render(){
        return html`
        <a href="${this.link}">${this.category}</a>
        
        `
    }


}


window.customElements.define('category-redirect', categoryRedirect);