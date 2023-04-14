
const url = `https://restcountries.com/v3.1/all`

import { countriesMenu } from "./src/modules/countriesMenu.js"

import { buscador, clearContainer } from "./src/modules/getCountryData.js"

async function getPaises(){
    const allPaises = await fetch(url)

    const paises = await allPaises.json()


    paises.forEach((pais) => countriesMenu(pais))
}


getPaises()



const botao = document.getElementById("search-btn")
botao.addEventListener('click', (ev) => {
    ev.preventDefault()

    let input = document.querySelector("input[name='search']")

    clearContainer()
    buscador(input.value)    
})


// async function getLis(){
//    await getPaises()

//    const lis = document.querySelectorAll(".li-country")
//    return lis
// }

// getLis().then((lista) => lista.forEach((item) => {
//     item.addEventListener("click", () => {
//        const entrada = item.id
//        buscador(entrada)
//        clearContainer()
//     })
// }))

console.log(getLis())