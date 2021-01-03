import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'
import getData from '../utils/get-data.js'

class ArticleResult extends LitElement{

    static get properties() {
        return{
            suggestie: { type: Array},
            inputValue: { type: String}
        }
    }


    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        const input = document.querySelector('search-bar');
        input.addEventListener('suggesties', this.filterData);
    }

    filterData(event){
        const inputValue = event.detail;
        this.inputValue = event.detail;
        let suggestions = '';
        const articleResult = document.querySelector('article-result')
        const suggestieLijst = articleResult.shadowRoot.querySelector('#suggestion-list');

        suggestieLijst.innerHTML = '';

        getData('articles')
            .then(({ articles }) => (
                suggestions = articles.filter((article) => {
                    if (inputValue === ''){
                        suggestieLijst.innerHTML = '';
                    }
                    else {
                        if (article.title.toLowerCase().includes(inputValue.toLowerCase()) || article.text.toLowerCase().includes(inputValue.toLowerCase())){
                            const sentenceArray = article.text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
                            const suggestieZin = sentenceArray.filter(sentence => sentence.toLowerCase().includes(inputValue.toLowerCase()));
                            const a = document.createElement('a');
                            const suggestieTitel = document.createElement('li');
                            const suggestieTekst = document.createElement('p');
                            suggestieTekst.innerHTML = suggestieZin[0];
                            suggestieTitel.innerHTML = article.title;

                            suggestieTitel.appendChild(suggestieTekst);

                            let href = document.createAttribute('href');
                            const urlParams = new URLSearchParams(window.location.search);
                            href.value = urlParams + '/artikel?id=' + article.id;
                            a.setAttributeNode(href);

                            a.appendChild(suggestieTitel);
                            suggestieLijst.appendChild(a)
                        }
                    }})));
    }

    updated(changedProperties) {
        if (
            changedProperties.has('inputValue')
        ) {
            // console.log(this.inputValue)
        }
    }





    render() {
        return html`
        <div class="resultaten">

         </div>
        `
    }
}


customElements.define('article-result', ArticleResult);