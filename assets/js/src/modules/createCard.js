const numberFormat = new Intl.NumberFormat('pt-BR')

function createCard(country){
    const currencyCode = Object.keys(country.currencies)[0]
    return `
    <div class="card text-start mt-3 mb-3">
        <img src="${country.flags.svg}" class="card-img-top" alt="Bandeira do ${country.translations.por.common}">
        <div class="card-body">
        <h4 class="card-title text-center fw-bold">${country.translations.por.common}</h4>
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
                    <span class="card-list">Consultar no mapa:</span>
                    <a class="text-center" target="_blank" href="${country.maps.googleMaps}">
                        <i class="fa-regular fa-map"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    `
}

export { createCard }