import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element@2.3.1';


class AddForm extends LitElement {  
    
    static get properties() {
        return {
        }
    }



    static get styles() {
        return css`
        fieldset {
            display: flex;
            flex-direction: column;
        }

        label, legend {
            display: none;
        }

        .tekstinputs {
            margin: 0.8em;
            font: 1.2em Arial;
            padding: 0.4em;
        }

        input {
            max-width: 480px;
        }   

        textarea {
            max-width: 800px;
            resize: vertical;   
            height: 7em;
            min-height: min-content;
        }

        fieldset {
            border: 0;
        }

        #post-btn-cont {
            max-width: 850px;
            display: flex;
            flex-direction: row-reverse;
        }

        #post-btn {
            padding: .5em 1em;
            font-size: 1em;
        }
        `
    }
    

    // add artikel method(s): adds an article post to utils>allArticles


    render() {
        return html`

            <div id="post-form-cont">
                <h2>Voer artikel in:</h2>
                <form>  
                    <fieldset>
                        <legend>Voer artikel in:</legend>
                        <label>
                            Artikeltitel tekstveld
                        </label>
                        <input value="${this.titel}" @change="${this.updateTitel}" class="tekstinputs" id="titel-input"  type="text" required>                    


                        <label>
                            Artikeltekst tekstveld
                        </label>
                        <textarea value="${this.tekst}" @change="${this.updateTekst}" class="tekstinputs" id="tekst-input" type="text" required></textarea>

                        <label>
                            Tags inputveld
                        </label>
                        <!-- misschien kan dit een custom element worden? -->
                        <input value="${this.tags}" @change="${this.updateTags}" class="tekstinputs" id="tags-input" type="text" required>                    

                        <div id="post-btn-cont">
                            <button @click="${this.voegArtikelToe}" id="post-btn">Post</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        `;
    }


}

window.customElements.define('add-form', AddForm);