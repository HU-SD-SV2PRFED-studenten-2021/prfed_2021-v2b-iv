import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'

const styles = css`


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
            
            ${Object.values(VisibilityFilter).map(filter =>
                 html`
                    <label> ${filter}
                        <input type="radio" name="filter" value="${filter}"  checked  @change="${this.emitChange()}" />
                    </label>
                   `
        )}
        </div>
        `;
    }

}
customElements.define('radio-button', radioButton);