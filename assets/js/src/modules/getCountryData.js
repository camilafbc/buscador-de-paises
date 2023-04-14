

// const urlSearch = `https://restcountries.com/v3.1/translation/${buscadorInput.value}`
let input = document.querySelector("input[name='search']")

async function buscador(entrada){
    const busca = await fetch(`https://restcountries.com/v3.1/translation/${entrada}`)
    const resultado = await busca.json()
                            .then((response) => response.forEach((pais) => container.innerHTML += createCard(pais)))
// O resultado me retornou um array com o objeto desejado lá dentro
}

function clearContainer(){
    container.innerHTML = ""
}

const container = document.getElementById("card-container")

function createCard(country){
    return `
    <div class="card" style="width: 18rem;">
        <img src="${country.flags.svg}" class="card-img-top" alt="Bandeira do ${country.translations.por.common}">
        <div class="card-body">
        <h5 class="card-title">${country.translations.por.common}</h5>
        <p class="card-text">
            <ul>
                <li> <i class="fa-duotone fa-greater-than"></i> Área: ${country.area}</li>
                <li>Capital: ${country.capital[0]}</li>
                <li>População: ${country.population} habitantes</li>
                <li>Zona Horária: ${country.timezones}</li>
            </ul>
        </p>
        </div>
    </div>
    `
}


export { buscador , clearContainer}