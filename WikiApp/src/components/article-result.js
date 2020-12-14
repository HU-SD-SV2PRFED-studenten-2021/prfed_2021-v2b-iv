import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'
import getData from '../utils/get-data.js'

class ArticleResult extends LitElement{
    static get styles() {
        return css`
        div {
        position: absolute;
        display: block;
        right: 0;
        margin-top: 39px;
        width: 406px;
        background-color: lightgrey;
        border-radius: 6px;
        overflow: hidden;
        
    }
    
        .resultaten > ol {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
    
    .resultaten > ol > a {
        color:black;
        text-decoration: none;
    }
        
        .resultaten > ol > a > li{
            color: #24292e !important;
            padding: 2.5px;
            font-size: 20px;
            border-bottom: 1px solid #666;
            cursor: pointer;
    }
    
        .resultaten > ol > a > li:hover{
        background-color: #97CBFF;
    }
    
        .resultaten > ol > a > li > p{
        color: #586069 !important;
        font-size: 15px;
    }
        `
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
        let suggestions = '';
        const articleResult = document.querySelector('article-result')
        const suggestieLijst = articleResult.shadowRoot.querySelector('#suggestion-list');

        suggestieLijst.innerHTML = '';

        getData('articles')
            .then(({ articles }) => (
                suggestions = articles.filter(function (article) {
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
                            href.value = 'http://localhost:5000/artikel?id=' + article.id;
                            a.setAttributeNode(href);

                            a.appendChild(suggestieTitel);
                            suggestieLijst.appendChild(a)
                        }
                }})));
    }

    render() {
        return html`
        <div class="resultaten">
            <ol id="suggestion-list">
            </ol>
         </div>   
        `
    }
}


customElements.define('article-result', ArticleResult);