import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'

const styles = css`
    label {
  display: -webkit-box;
  display: flex;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.375em;  
    }
    
label input {
            position: absolute;
            left: -9999px;
            }
            
label input:checked + span {
                              background-color: #d6d6e5;
                            }
                            
label input:checked + span:before {
                                      box-shadow: inset 0 0 0 0.4375em #00005c;
                                    }
label span {
              display: -webkit-box;
              display: flex;
              -webkit-box-align: center;
                      align-items: center;
              padding: 0.375em 0.75em 0.375em 0.375em;
              border-radius: 99em;
              -webkit-transition: 0.25s ease;
              transition: 0.25s ease;
            }
label span:hover {
                  background-color: #d6d6e5;
                }
label span:before {
                  display: -webkit-box;
                  display: flex;
                  flex-shrink: 0;
                  content: "";
                  background-color: #fff;
                  width: 1.5em;
                  height: 1.5em;
                  border-radius: 50%;
                  margin-right: 0.375em;
                  -webkit-transition: 0.25s ease;
                  transition: 0.25s ease;
                  box-shadow: inset 0 0 0 0.125em #00005c;
                }
                
.radio-button-container{
                        display: flex;
                        flex-flow: row wrap;
                        justify-content: space-around;              
                        }

`

const VisibilityFilter = {
    SHOW_ANALYSEREN : 'analyseren',
    SHOW_ADVIESEREN : 'adviseren',
    SHOW_ONTWERPEN : 'ontwerpen',
    SHOW_REALISEREN : 'realiseren',
    SHOW_MANAGE : 'manage',
    SHOW_ALL : 'all'
}

class radioButton extends LitElement {

    static get properties() {
        return {
            filter: {type: String, reflect: true}
        };
    }

    static get styles() {
        return styles
    }

    constructor() {
        super();
        this.filter = VisibilityFilter.SHOW_ALL;
    }

    filterChanged(e) {
        this.filter = e.target.value;
    }

    get filteren() {
        return this.filter
    }


    get categories() {
        return this.filter;
    }

    emitChange = () => {
        const event = new CustomEvent('change')
        this.dispatchEvent(event)
    }

    check(s) {

        if (s === 'All') return this.checked = true;
        else return this.checked = false;
    }



    render() {
        return html`
        <div class="radio-button-container" value="${this.filter}"
                @change="${this.filterChanged}">
            
            ${Object.values(VisibilityFilter).map(filter => html`<label><input type="radio" name="filter" value="${filter}"  checked  @change="${this.emitChange()}" /><span>${filter}</span></label>`
        )}
        </div>
        `;
    }

}
customElements.define('radio-button', radioButton);