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

            /* Titel */
            
            #titel-heading {
                display: none;
            }

            a {
                user-select: none;
            }
            
            
            /* logo */
            
            #wiki-logo-cont {
                display: block;
            }
            
            #wiki-logo {
                height: 5em;
                width: 12em;
                border-radius: 70px;
            }
            
            #wiki-logo:hover {
                opacity: .9;
            }
            
            #wiki-mini-logo-cont {
                display: none;
            }
            

            @media only screen and (max-width: 768px) {
                #wiki-logo-cont {
                    display: none;
                }
                #wiki-mini-logo-cont {
                    display: block;
                    margin-right: 15px;
                    height: 60px;
                }

                #wiki-mini-logo {
                    width: 90px;
                    border-radius: 25px;
                }

                
                #wiki-mini-logo:hover {
                    opacity: .9;
                }
            }            
    
    `
    }

    static get properties() {
        return {
            articleData: { type:Array }
        }
    }






    render() {

        return html`


        <h1 id="titel-heading">hbo-i Wiki website</h1>
        <a id="wiki-mini-logo-cont" href="/">
            <img id="wiki-mini-logo" src=".././images/wiki-logo-mini.png" alt="hbo-i Wiki mini logo">
        </a>
        <a id="wiki-logo-cont" href="/">
            <img id="wiki-logo" src=".././images/wiki-logo.png" alt="hbo-i Wiki logo">
        </a>
        <search-bar id="search-bar" .articleData = ${this.articleData}></search-bar>
        `
    }
}

customElements.define('wiki-header', wikiHeader);