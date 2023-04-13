// const buscador = document.querySelector('input[name="search"]')

// const urlSearch = `https://restcountries.com/v3.1/translation/${buscador}`

const url = `https://restcountries.com/v3.1/all`

import { countriesMenu } from "./src/modules/countriesMenu.js"

import { buscador } from "./src/modules/getCountryData.js"

async function getPaises(){
    const allPaises = await fetch(url)

    const paises = await allPaises.json()

    // console.log(paises)

    paises.forEach((pais) => countriesMenu(pais))
}

// const oceaniaSection = document.getElementById("oceania-countries")

getPaises()

// function countriesMenu(pais){

// const oceaniaCountrie = document.createElement("li")

//     if(pais.continents[0] == "Oceania"){
//         // oceaniaCountrie.innerText = pais.name.common
//         oceaniaCountrie.innerText = pais.translations.por.common
//         oceaniaSection.appendChild(oceaniaCountrie)
//         console.log(pais)
//     }
// }

const botao = document.getElementById("search-btn")
botao.addEventListener('click', (ev) => {
    ev.preventDefault()

    buscador()
})