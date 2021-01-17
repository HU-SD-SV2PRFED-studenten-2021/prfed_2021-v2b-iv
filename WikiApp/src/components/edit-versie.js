import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';

class EditVersion extends LitElement {
    static get properties() {
        return {
            username: {
                type: String,
                reflect: true
            },
            date: {
                type: String,
                reflect: true
            },
            time: {
                type: String,
                reflect: true
            },
            tekst: {
                type: String,
                reflect: true
            },
            title: {
                type: String,
                reflect: true
            },
            collapsed: {
                type: Boolean,
                reflect: true
            },
            index: {
                type: Number
            }
        }
    }



    static get styles() {
        return css`

            :host {
                display: block;
            }
            

            .item {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                cursor: pointer;
                border: solid 1px #969696; 
                border-radius: 13px;
                padding: 10px 1.2em;
                margin: .6em 0;
                background: #f1f1f1;
                margin-bottom: 0px;
            }

            .arrow-box {
                height: 2em;
                width: 2em;
                text-align: center;
                background: #f9f9f9;
                border-radius: 7px;
                
            }

            svg {
                height: inherit;
                width: inherit;
            }

            .slider {
                height: min-content;
                overflow-y: hidden;
                padding: 1.3em;
                margin: .3em;
                margin-bottom: 1em;
                margin-top: 0;
                border: 1px solid #969696;
                border-top: 0;
                border-bottom-left-radius: 7px;
                border-bottom-right-radius: 7px;
                transition: linear .1s;
                background: #ffffff;
                box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
            }
            .collapsed {
                height: 0;
                padding: 0;
                margin: 0;
                border: 0;
                margin-left: .3em;
                margin-right: .3em;
                box-shadow: none;
                transition: linear .1s
            }
        `
    }

    constructor() {
        super();
        this.date = "";
        this.time = "";
        this.title = "";
        this.tekst = "";
        this.username = "";
    }



    _fire(e) {
        console.log(this.index)
        this.dispatchEvent(new CustomEvent(e, { detail: this.index }));
    }





    render() {
        return html`
            <li>
                <div class="item" @click=${() => this._fire('onToggle')}>
                    <div class="edit-username">${this.username}</div>                
                    <div class="edit-date">${this.date}, ${this.time}</div>
                    <div class="arrow-box">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#656565" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                    </div>
                </div>

                <div class="slider ${ this.collapsed ? '' : 'collapsed'}">
                    <div class="edit-cont">
                        <h3>${this.title}</h3>
                        <p>${this.tekst}</p>
                    </div>
                </div>
            </li>
        `
    }


}

window.customElements.define('edit-versie', EditVersion);

