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

    static get properties() {
        return{
            suggestie: { type: Array}
        }
    }


    constructor() {
        super();
        this.suggestie = [];
    }

    connectedCallback() {
        super.connectedCallback();
        const lijstArtikelen = [];
        this.articleData.map(category=>{
            lijstArtikelen.push(category.artikelen)
            this.suggestie = lijstArtikelen
        })
        const input = document.querySelector('search-bar');
        input.addEventListener('suggesties', () =>{
            const inputValue = event.detail;
            let suggestions = '';
            const articleResult = document.querySelector('article-result')
            const suggestieLijst = articleResult.shadowRoot.querySelector('#suggestion-list');

            // this.suggestie.tekst = 'a';
            // suggestieLijst.innerHTML = '';
            getData('articles')
                .then(({ articles }) => (
                    suggestions = articles.filter( (article) => {
                        if (inputValue === ''){
                            // suggestieLijst.innerHTML = '';
                        }
                        else {
                            if (article.title.toLowerCase().includes(inputValue.toLowerCase()) || article.text.toLowerCase().includes(inputValue.toLowerCase())){
                                const sentenceArray = article.text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
                                const suggestieTekst = sentenceArray.filter(sentence => sentence.toLowerCase().includes(inputValue.toLowerCase()));

                                this.suggestie = {titel: article.title, tekst: suggestieTekst[0]};


                                // this.suggestie.Tekst = [...this.suggestieTekst, (suggestieZinn[0])];
                                // const a = document.createElement('a');
                                // const suggestieTitel = document.createElement('li');
                                // const suggestieTekst = document.createElement('p');
                                // suggestieTekst.innerHTML = suggestieZin[0];
                                // this.suggestie.Titel = [...this.suggestieTitel, (article.title)];
                                //
                                // suggestieTitel.appendChild(suggestieTekst);

                                // let href = document.createAttribute('href');
                                // const urlParams = new URLSearchParams(window.location.search);
                                // href.value = urlParams + '/artikel?id=' + article.id;
                                // a.setAttributeNode(href);

                                // a.appendChild(suggestieTitel);
                                // suggestieLijst.appendChild(a)
                            }
                        }})));
        });
    }

    // filterData(event){
    //     const inputValue = event.detail;
    //     let suggestions = '';
    //     const articleResult = document.querySelector('article-result')
    //     const suggestieLijst = articleResult.shadowRoot.querySelector('#suggestion-list');
    //
    //     const lijstjeTeksten = [];
    //     suggestieLijst.innerHTML = '';
    //     getData('articles')
    //         .then(({ articles }) => (
    //             suggestions = articles.filter( (article) => {
    //                 if (inputValue === ''){
    //                     suggestieLijst.innerHTML = '';
    //                 }
    //                 else {
    //                     if (article.title.toLowerCase().includes(inputValue.toLowerCase()) || article.text.toLowerCase().includes(inputValue.toLowerCase())){
    //                         const sentenceArray = article.text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    //                         const suggestieZinn = sentenceArray.filter(sentence => sentence.toLowerCase().includes(inputValue.toLowerCase()));
    //
    //                         lijstjeTeksten.push(suggestieZinn[0]);
    //                         // const a = document.createElement('a');
    //                         // const suggestieTitel = document.createElement('li');
    //                         // const suggestieTekst = document.createElement('p');
    //                         // suggestieTekst.innerHTML = suggestieZin[0];
    //                         // suggestieTitel.innerHTML = article.title;
    //                         //
    //                         // suggestieTitel.appendChild(suggestieTekst);
    //
    //                         // let href = document.createAttribute('href');
    //                         // const urlParams = new URLSearchParams(window.location.search);
    //                         // href.value = urlParams + '/artikel?id=' + article.id;
    //                         // a.setAttributeNode(href);
    //
    //                         // a.appendChild(suggestieTitel);
    //                         // suggestieLijst.appendChild(a)
    //                     }
    //             }})));
    //     articleResult.dataZetten(lijstjeTeksten);
    // }



    render() {
        return html`
        ${console.log(this.suggestie)}
        <div class="resultaten">
            <ol id="suggestion-list">
                <p>
                    ${Object.entries(this.suggestie).map(item =>
                    html`<span>${item}</span>`)}
                </p>
            </ol>
         </div>   
        `
    }
}


customElements.define('article-result', ArticleResult);