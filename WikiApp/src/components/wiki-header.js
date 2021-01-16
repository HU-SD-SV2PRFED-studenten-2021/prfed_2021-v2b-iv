import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'


class wikiHeader extends LitElement {



    static get styles() {
        return css`
            :host {
                height: 5em;
                padding: 1em;
                background-color: rgb(29 113 185);
                grid-area: header;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            
            #toon-sb-btn {
                display: none;
                height: 54px;
                width: 54px;
                cursor: pointer;
                background-color: #fff;
                border-radius: 100%;
                align-items: center;
                justify-content: center;
            }
            
            #toon-sb-btn:hover {
                opacity: .7;
            }
            
            #toon-sb-btn:active {
                border: 3px solid #000000;
            }
            
            /* Titel */
            
            #titel-heading {
                display: none;
            }
            
            
            /* logo */
            
            #wiki-logo-cont {
                display: block;
            }
            
            #wiki-logo {
                height: 5em;
                width: 12em;
                border-radius: 30px;
            }
            
            #wiki-logo:hover {
                opacity: 0.9;
            }
            
    
    `
    }

    static get properties() { return {
        articleData: {
            type:Array
        }
    }
    }






    render() {

        return html`


        <h1 id="titel-heading">hbo-i Wiki website</h1>
        <a id="wiki-logo-cont" href="https://fep-wiki-project-v2b-iv.herokuapp.com">
            <img id="wiki-logo" src=".././images/wiki-logo.png" alt="hbo-i Wiki logo">
        </a>
        <search-bar id="search-bar" .articleData = ${this.articleData}></search-bar>
        <div id="toon-sb-btn">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
        </div>
        `
    }
}

customElements.define('wiki-header', wikiHeader);