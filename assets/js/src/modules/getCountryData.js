const container = document.getElementById("card-container")
const numberFormat = new Intl.NumberFormat('pt-BR')

async function buscador(entrada){
    
    try {
        const busca = await fetch(`https://restcountries.com/v3.1/translation/${entrada}`)
        const response = await busca.json()
            response.forEach((pais) => container.innerHTML += createCard(pais))       
    } catch (err) {
        container.innerHTML += error()
    }      
}


function clearContainer(){
    container.innerHTML = ""
}

function error(){
    return `
        <div class="text-center mt-3 mb-3 error">
            <img src="assets/img/alert-icon.svg" >
            <p class="mt-3">
                A pesquisa não retornou resultados. 
                <br> 
                Verifique as informações inseridas e tente novamente.
            </p>
        </div>
    `
}

function createCard(country){
    const currencyCode = Object.keys(country.currencies)[0]
    return `
    <div class="card text-start mt-3 mb-3">
        <img src="${country.flags.svg}" class="card-img-top" alt="Bandeira do ${country.translations.por.common}">
        <div class="card-body">
        <h4 class="card-title text-center">${country.translations.por.common}</h4>
        <p class="text-center text-muted fs-6 fw-medium">Nome oficial: ${country.translations.por.official}</p>
        
            <ul class="card-text text-start">
                <li> 
                    <i class="fa-duotone fa-period"></i>
                    <span class="card-list">Área:</span> ${numberFormat.format(country.area)} km²
                </li>
                <li>
                    <span class="card-list">População:</span> ${numberFormat.format(country.population)} habitantes
                </li>
                <li>
                    <span class="card-list">Capital:</span> ${country.capital}
                </li>
                <li>
                    <span class="card-list">Moeda:</span> ${country.currencies[currencyCode].name} (${country.currencies[currencyCode].symbol})
                </li>
                <li>
                    <span class="card-list">Zona(s) Horária(s):</span> ${country.timezones}
                </li>
                <li>
                    <a class="text-center text-muted" target="_blank" href="${country.maps.googleMaps}">Consultar no Mapa</a>
                </li>
            </ul>
        
        </div>
    </div>
    `
}


export { buscador , clearContainer}