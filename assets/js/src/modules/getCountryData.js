

// const urlSearch = `https://restcountries.com/v3.1/translation/${buscadorInput.value}`
// let input = document.querySelector("input[name='search']")

async function buscador(entrada){
    const busca = await fetch(`https://restcountries.com/v3.1/translation/${entrada}`)
        await busca.json()
            .then((response) => response.forEach((pais) => container.innerHTML += createCard(pais)))
}

function clearContainer(){
    container.innerHTML = ""
}

const container = document.getElementById("card-container")

const numberFormat = new Intl.NumberFormat('pt-BR')

function createCard(country){
    return `
    <div class="card">
        <img src="${country.flags.svg}" class="card-img-top" alt="Bandeira do ${country.translations.por.common}">
        <div class="card-body">
        <h4 class="card-title text-center">${country.translations.por.common}</h4>
        <h6>Nome oficial: ${country.translations.por.official}</h6>
        
            <ul class="card-text text-start">
                <li> 
                    <i class="fa-duotone fa-greater-than"></i> 
                    Área: ${numberFormat.format(country.area)} km²
                </li>
                <li>
                    <i class="fa-duotone fa-greater-than"></i>
                    Capital: ${country.capital[0]}
                </li>
                <li>
                    <i class="fa-duotone fa-greater-than"></i>
                    População: ${numberFormat.format(country.population)} habitantes
                </li>
                <li>
                    <i class="fa-duotone fa-greater-than"></i>
                    Zona Horária: ${country.timezones}
                </li>
            </ul>
        
        </div>
    </div>
    `
}


export { buscador , clearContainer}