import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';

const styles = css`

.confirm {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    box-sizing: border-box;

    opacity: 0;
    animation-name: confirm---open;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;

    display: flex;
    align-items: center;
    justify-content: center;
}

.confirm--close {
    animation-name: confirm---close;
}

.confirm__window {
    position: fixed;
    width: 100%;
    max-width: 600px;
    background: white;
    font-size: 14px;
    font-family: 'Noto Sans', sans-serif;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    opacity:0;
}

.confirm div.confirm__window{
    opacity:0;
    transform: scale(0.75);
    animation-name: confirm__window---open;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
    
}



.confirm__titlebar,
.confirm__content,
.confirm__buttons {
    padding: 1.25em;
}

.confirm__titlebar {
    background: #0840FF;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.confirm__title {
    font-weight: bold;
    font-size: 1.1em;
}

.confirm__close {
    background: none;
    outline: none;
    border: none;
    transform: scale(2.5);
    color: #ffffff;
    transition: color 0.15s;
}

.confirm__close:hover {
    color: #ff0000;
    cursor: pointer;
}

.confirm__content {
    line-height: 1.8em;
}

.confirm__buttons {
    background: #eeeeee;
    display: flex;
    justify-content: flex-end;
}

.confirm__button {
    text-decoration: none;
    padding: 0.4em 0.8em;
    border: 0.5px solid #000000;
    border-radius: 5px;
    background: #446EFF;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1em;
    font-family: 'Noto Sans', sans-serif;
    margin-left: 0.6em;
    cursor: pointer;
    outline: none;
}

.confirm__button--fill {
    background: #446EFF;
    color: #ffffff;
}

.confirm__button:focus {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}

@keyframes confirm---open {
    from { opacity: 0 }
    to { opacity: 1 }
}

@keyframes confirm---close {
    from { opacity: 1 }
    to { opacity: 0 }
}

@keyframes confirm__window---open {
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.primary-btn {
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1em;
    font-family: 'Noto Sans', sans-serif;
    background-color: #4690ff;
    border: 1px solid black;
}

.nav-btn:active {
    border: 3px solid black;
}

.nav-btn {
    box-sizing: border-box;
    padding: 10px 0 10px 0;
    margin: .5em;
    font-size: .8em;
    min-width: 175px;
    border-radius: 3px;
    cursor: pointer;
}

.geenDocent {
    display: none;
}



`

class deleteArticle extends LitElement{
    static get styles(){
        return styles;
    }

    static get properties(){
        return{
            state: { type: String },
            titel: {type: String},
            rol: {type: String}
        }
    }

    constructor() {
        super();
        this.state = ''
    }

    connectedCallback() {
        super.connectedCallback();

        const rol = localStorage.getItem('role')
        this.rol = rol
        if(this.rol === null || this.rol=== "student"){
            this.rol = "geenDocent"
        }
    }

    close(){
        this.state = this.state + ' confirm--close'
        this.state = ''
    }

    open(){
        this.state = 'confirm'
    }

    delete(){
    }



    render(){
        return html`
        <button class="nav-btn primary-btn ${this.rol}" @click="${this.open}">Verwijder artikel</button>
        <div class="${this.state}">
            <div class="confirm__window">
                <div class="confirm__titlebar">
                    <span class="confirm__title">Bevestiging</span>
                </div>
                <div class="confirm__content">Weet u zeker dat u het artikel "${this.titel}" wilt verwijderen?<br>
                Als u op 'ja' klikt word het artikel verwijderd en zal u teruggestuurd worden naar de hoofdpagina
                </div>
                <div class="confirm__buttons">
                    <a href="https://fep-wiki-project-v2b-iv.herokuapp.com/" class="confirm__button confirm__button--ok confirm__button--fill" @click="${this.delete}">Ja</a>
                    <button class="confirm__button confirm__button--cancel" @click="${this.close}">Nee</button>
                </div>
            </div>
        </div>
        `
    }
}


window.customElements.define('delete-article', deleteArticle);
