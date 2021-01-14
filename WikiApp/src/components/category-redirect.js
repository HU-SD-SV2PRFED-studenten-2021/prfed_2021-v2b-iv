import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';

const styles = css`
a{
    color: #303030;
    text-decoration: none;
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