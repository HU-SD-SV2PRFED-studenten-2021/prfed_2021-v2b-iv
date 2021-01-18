import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import getData from "../utils/get-data.js";



class articleToevoegen extends LitElement{

    static get styles(){
        return css`

        h2 {
            padding-left: 1.3em;
        }
    
    
        .form-cont {
            padding: 2em;
            background: #fbfbfb;
            margin: 1em 2em;
            border: 1px solid #efefef;
            border-radius: 15px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        }


        .form-row-cont {
            display: flex;
            flex-direction: column;
            margin-bottom: 1.5em;
        }
    
        fieldset {
            border: none;
        }

        legend {
            display: none;
        }

        .form-input {
            font-size: .9em;
            box-sizing: border-box;
            border: 1px solid #C2C2C2;
            border-radius: 3px;
            padding: .7em;
            margin-left: .5em;
            outline: none;
        }



        .form-input:focus {
            border: 1px solid #000000;
        }

        #select-field {
            margin-top: .5em;
            max-width: 280px;
        }

        #tekstarea-label {
            display: none;
        }
        textarea {
            font-family: sans-serif;
            resize: vertical;
            height: 100%;
            min-height: 10em;
        }
    `    
    }

    static get properties() {
        return {
            articleData: { type: Array },
            titel: { type: String },
            category: {type:String },
            text: { type:String }
        }
    }

    constructor() {
        super();
        this.titel = '';
        this.text='';
        this.category='';
    }

    titelInput(e) {
        this.titel = e.target.value;
        console.log(this.titel)
    }

    categoryInput(e) {
        this.category = e.target.value;
        console.log(this.category)
    }
    
    textInput(e) {
        this.text = e.target.value;
        console.log(this.titel)
    }



    render(){
        return html`
        <h2>Nieuwe artikel toevoegen</h2>
        <div class="form-cont">
            <form>
                <legend>Nieuwe artikel toevoegen</legend>
                <div class="form-row-cont">
                    <label for="titel-input">Titel</label>
                    <input @keyup="${this.titelInput}" type="text" id="titel-input" class="form-input" name="titel-input" />
                </div>
                <div class="form-row-cont">
                    <label for="select-field">Artikel Categorie</label>
                    <select id="select-field" class="form-input" @change="${this.categoryInput}">
                    <option selected hidden >Kies een category</option>
                        ${this.articleData.map(artikel => html`
                            <option value="${artikel}">
                                ${artikel}
                            </option>
                        `)}
                    </select>
                </div>
                <div class="form-row-cont">
                    <label for="tekst-input" id="tekstarea-label">Artikeltekst</label>
                    <textarea id="tekst-input" class="form-input" @keyup="${this.textInput}"></textarea>
                </div>                    
                <toevoegen-bevestiging  .titel="${this.titel}" .category="${this.category}" .text="${this.text}"></toevoegen-bevestiging>
            </form>
            
          </div>
        `
        }



}


window.customElements.define('article-toevoegen', articleToevoegen);
