import { Country } from "./Country.js"

// const urlSearch = `https://restcountries.com/v3.1/translation/${buscadorInput.value}`
// let buscadorInput = document.querySelector("input[name='search']")

async function buscador(){
    const busca = await fetch(`https://restcountries.com/v3.1/translation/espanha`)
    const resultado = await busca.json().then((getCountryData))

    console.log(buscadorInput.value)

    console.log(busca)
    console.log(resultado)

    return ancorarCard.innerHTML += createCard
}

function getCountryData(resultado){
    const country = new Country

    console.log("Entrou aqui")

    country.name = resultado.name.common
    country.area = resultado.area
    country.capital = resultado.capital[0]
    country.flag = resultado.flags.svg
    country.population = resultado.population
    country.timezone = resultado.timezones

    return country
}

const ancorarCard = document.getElementById("card-container")

function createCard(country){
    return `
    <div class="card" style="width: 18rem;">
        <img src="${country.flag}" class="card-img-top" alt="Bandeira do ${country.name}">
        <div class="card-body">
        <h5 class="card-title">${country.name}</h5>
        <p class="card-text">
            <ul>
                <li>Área: ${country.area}</li>
            </ul>
        </p>
        </div>
    </div>
    `
}

// const botao = document.getElementById("search-btn")
// botao.addEventListener('click', (ev) => {
//     ev.preventDefault()

//     buscador()
// })

export { buscador }