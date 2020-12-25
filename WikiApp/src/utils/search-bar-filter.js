export default function filterSuggesties(inputValue, artikelData) {
    const artikelen = [];
    const suggesties = [];

    artikelData
        .map(category => category.artikelen
            .map(artikel => artikelen.push(artikel)));

    artikelen
        .map(artikel => {
            if (suggesties.length <= 4){
                if(artikel.text.toLowerCase().includes(inputValue.toLowerCase()) || artikel.title.toLowerCase().includes(inputValue.toLowerCase())){
                    const sentenceArray = artikel.text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
                    const suggestieZin = sentenceArray.filter(sentence => sentence.toLowerCase().includes(inputValue.toLowerCase()));
                    const artkl = {title: artikel.title, text: suggestieZin[0] + '..', id: artikel.id};
                    if (artkl.text === undefined + '..'){
                        artkl.text = artikel.text.substr(0, 40) + '...'
                    }
                    suggesties.push(artkl);
                }
            }})
    return suggesties;
}