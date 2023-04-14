
const url = `https://restcountries.com/v3.1/all`

import { countriesMenu } from "./src/modules/countriesMenu.js"

import { buscador, clearContainer } from "./src/modules/getCountryData.js"

async function getPaises(){
    const allPaises = await fetch(url)

    const paises = await allPaises.json()

    return paises
    // paises.forEach((pais) => countriesMenu(pais))
}

async function teste(){
    await getPaises().then((response) => response.forEach((pais) => countriesMenu(pais)))
}

teste()



const botao = document.getElementById("search-btn")
botao.addEventListener('click', (ev) => {
    ev.preventDefault()

    let input = document.querySelector("input[name='search']")

    clearContainer()
    buscador(input.value)    
})

// const lis = document.querySelectorAll(".li-country")
// console.log(lis)

function testandoSet(){
    setTimeout(() => {
        const lis = document.querySelectorAll(".li-country")

        lis.forEach((item) => {
            item.addEventListener("click", () => {
                const entrada = item.id
                buscador(entrada)
                clearContainer()
            })
        })
        
    }, 1000 *2)
}

testandoSet()

const toggleBtn = document.querySelectorAll(".toggle-btn")

toggleBtn.forEach((button) => {
    button.addEventListener("click", () => button.firstElementChild.classList.toggle("girar-icon"))
})
