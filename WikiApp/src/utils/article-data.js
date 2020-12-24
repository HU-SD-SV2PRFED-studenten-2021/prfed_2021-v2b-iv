import getData from "./get-data.js";


export default function artikelData(){
    getData('categories')
        .then(({categories}) => {
            const categoryPromises = categories.map(category => getData(category))
            return Promise.all(categoryPromises)
        })
        .then(articleData => {
            const artikelenLijst = [];
            artikelenLijst.length = 0
            articleData.map(category => artikelenLijst.push(category.artikelen))
            console.log(artikelenLijst)
            return artikelenLijst;
        })
}