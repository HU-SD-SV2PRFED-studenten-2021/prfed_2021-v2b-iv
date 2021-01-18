import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';
import getData from "../utils/get-data.js";

const styles = css`
        .toevoegen {
        padding: 2em;
        height: 100%;
        }
        fieldset{
            background: #f9f9f9;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            padding: 1em;
            height: 600px;
            border-radius: 10px;
        
        }
        label{
            display: block;
            margin: 0px 0px 40px 40px;
        }
        label > span{
            width: 100px;
            font-weight: bold;
            float: left;
            padding-top: 8px;
            padding-right: 5px;
        }
        
        input.input-field, .select-field{
            width: 60%;
        }
        input.input-field,
        .textarea-field,
                .select-field{
                    box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    border: 1px solid #C2C2C2;
                    box-shadow: 1px 1px 4px #EBEBEB;
                    -moz-box-shadow: 1px 1px 4px #EBEBEB;
                    -webkit-box-shadow: 1px 1px 4px rgb(29 113 185);
                    border-radius: 3px;
                    -webkit-border-radius: 3px;
                    -moz-border-radius: 3px;
                    padding: 7px;
                    outline: none;
                }
        .input-field:focus,
        .textarea-field:focus,
        .select-field:focus{
            border: 1px solid rgb(29 113 185);
        }
        .textarea-field{
            height:300px;
            width: 100%;
        }
`


class articleToevoegen extends LitElement{

    static get styles(){
        return styles;
    }

    static get properties(){
        return{
            articleData :{ type: Array},
            titel:{type: String},
            category:{type:String},
            text:{type:String}

        }
    }

    constructor() {
        super();
        this.titel = '';
        this.text='';
        this.category='';
    }

    titelInput(e){
        this.titel = e.target.value;
        console.log(this.titel)
    }
    categoryInput(e){
        this.category = e.target.value;
        console.log(this.category)
    }
    textInput(e){
        this.text = e.target.value;
        console.log(this.titel)
    }



    render(){
        return html`
          <div class="toevoegen">
            <h2>Nieuwe Artikel Toevoegen</h2>
           
                <fieldset>
                <legend>Artikel</legend>
                    <div class="row">
                        <label for="field1">
                            <span>Titel </span>
                            <input @keyup="${this.titelInput}" type="text" class="input-field" name="field1" />
                        </label>
                    </div>
                    <div class="row">
                        <label><span> Select Categorie</span>
                            <select class="select-field" @change="${this.categoryInput}">
                            <option selected hidden >Kies een category</option>
                                ${this.articleData.map(artikel =>html`
                                <option value="${artikel}">${artikel}</option>`)}
                            </select>
                        </label>
                        
                    </div>
                    <div class="row">
                        <label><span>Artikel Tekst</span>
                        <textarea class="textarea-field" @keyup="${this.textInput}"></textarea>
                        </label>
                    </div>
                    <toevoegen-bevestiging  .titel="${this.titel}" .category="${this.category}" .text="${this.text}"></toevoegen-bevestiging>

                </fieldset>
            
          </div>
        `
        }



}


window.customElements.define('article-toevoegen', articleToevoegen);
