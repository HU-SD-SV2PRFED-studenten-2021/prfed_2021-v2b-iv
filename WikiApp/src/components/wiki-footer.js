import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'


class Footer extends LitElement {



    static get styles() {
        return css`
        :host {
            display: flex;
            flex-direction: row;
            justify-content: center;
            grid-area: footer;
            background-color: rgb(28 63 93);
            color: #bce0ff;
            height: min-content;
            min-height:50px; 
            padding: 1.2em;
            }


        :host > ul > * {
            list-style: none;
        }


        #github-logo {
            height: 40px;
            width: 40px;
        }
        
        .footer-links {
            color: inherit;
        }
        
        
        #repo-link {
            color: rgb(28 63 93);
            text-decoration: none;
        }
        
        #github-ref-cont {
            display: inline-flex;
            flex-direction: row;
            background-color: #ffffff;
            padding: 7px;
            width: min-content;
            height: min-content;
            align-items: center;
            margin-right: 3px;
            border-radius: 20px;
        }
        
        #github-ref-cont:hover {
            background-color: #ebf6ff;
        }
        
        #github-ref-cont:active {
            border-bottom: 4px solid rgb(101, 224, 255);
            border-left: 2px solid rgb(101, 224, 255);
        }
        `
    }






    render() {

        return html`  

        <p>We zijn Open Source! Kijk ons project eens op
             <a id="repo-link" class="footer-links" href="https://github.com/HU-SD-SV2PRFED-studenten-2021/prfed_2021-v2b-iv">
                 <span id="github-ref-cont">
                    Github 
                    <img id="github-logo" src="./images/github-logo.png" alt="Github logo">
                 </span>
             </a>
         </p>

        <ul>
            <li>
                <a class="footer-links" href="#">
                    Privacy Policy
                </a>
            </li>
            <li>
                <a class="footer-links" href="#">
                    Terms of Service
                </a>
            </li>
            <li>
                <a  class="footer-links" href="#">
                    About
                </a>
            </li>
        </ul>
 
        `
    }
}

customElements.define('wiki-footer', Footer);