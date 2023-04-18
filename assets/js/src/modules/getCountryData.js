const container = document.getElementById("card-container")
const numberFormat = new Intl.NumberFormat('pt-BR')

async function buscador(entrada){
    const busca = await fetch(`https://restcountries.com/v3.1/translation/${entrada}`)
        await busca.json()
            .then((response) => response.forEach((pais) => container.innerHTML += createCard(pais)))
}

function clearContainer(){
    container.innerHTML = ""
}

function createCard(country){
    const currencyCode = Object.keys(country.currencies)[0]
    return `
    <div class="card text-start mt-3 mb-3">
        <img src="${country.flags.svg}" class="card-img-top" alt="Bandeira do ${country.translations.por.common}">
        <div class="card-body">
        <h4 class="card-title text-center">${country.translations.por.common}</h4>
        <h6 class="text-center">Nome oficial: ${country.translations.por.official}</h6>
        
            <ul class="card-text text-start">
                <li> 
                    <i class="fa-duotone fa-period"></i>
                    <span class="card-list">Área:</span> ${numberFormat.format(country.area)} km²
                </li>
                <li>
                    <span class="card-list">População:</span> ${numberFormat.format(country.population)} habitantes
                </li>
                <li>
                    <span class="card-list">Capital:</span> ${country.capital[0]}
                </li>
                <li>
                    <span class="card-list">Moeda:</span> ${country.currencies[currencyCode].name} (${country.currencies[currencyCode].symbol})
                </li>
                <li>
                    <span class="card-list">Zona(s) Horária(s):</span> ${country.timezones}
                </li>
                <li>
                    <a target="_blank" href="${country.maps.googleMaps}">Consultar no Mapa</a>
                </li>
            </ul>
        
        </div>
    </div>
    `
}


export { buscador , clearContainer}