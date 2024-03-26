const list = document.querySelector('ul')

const btshowAll = document.querySelector('.show-all')
const btmapAll = document.querySelector('.map-all')
const btVeg = document.querySelector('.vegan-all')
const btOptions = document.querySelector('.filter-all')


function formatCurrency (value){
    const newValue= value.toLocaleString('pt-br', {
        style:'currency',
        currency:'BRL'})
        return newValue
}

function showAll(elementArray){
    let myList = ''

elementArray.forEach(element => {
    myList += `<li>
    <img src="${element.src}">
    <p> ${element.name}</p>
    <p class="item-price">  R$: ${ formatCurrency(element.price)} </p>
    </li>
   `
});
list.innerHTML=myList
}

function mapAll(){
const newPrice= menuOptions.map( (offvalue)=> ({
    ...offvalue,
    price: offvalue.price * 0.9
}))
showAll(newPrice)
}

function vegan(){
const newoption = menuOptions.filter(option => {
    if(option.vegan === true)return true
    else return false
})
showAll(newoption)
}

function recommendtion(){
    const newoption = menuOptions.filter(option => {
        if(option.recommendtion === true)return true
        else return false
    })
    showAll(newoption)
    }






btshowAll.addEventListener('click', () => showAll (menuOptions))
btmapAll.addEventListener('click',mapAll)
btVeg.addEventListener('click',vegan)
btOptions.addEventListener('click', recommendtion)