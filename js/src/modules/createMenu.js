const northAmericaSection = document.getElementById("north-america-countries")
const centralAmericaSection = document.getElementById("central-america-countries")
const southAmericaSection = document.getElementById("south-america-countries")
const europeSection = document.getElementById("europe-countries")
const africaSection = document.getElementById("africa-countries")
const asiaSection = document.getElementById("asia-countries")
const oceaniaSection = document.getElementById("oceania-countries")

function createMenu(pais){

    const nameCountrie = document.createElement("li")
    nameCountrie.setAttribute("class", "li-country")
    nameCountrie.setAttribute("id", `${pais.translations.por.common}`)
    
        if(pais.continents[0] == "Oceania"){
            nameCountrie.innerText = pais.translations.por.common
            oceaniaSection.appendChild(nameCountrie)
        } 
        else if(pais.subregion == "Central America"){
            nameCountrie.innerText = pais.translations.por.common
            centralAmericaSection.appendChild(nameCountrie)
            // console.log(pais)
        }
        else if(pais.continents[0] == "North America"){
            nameCountrie.innerText = pais.translations.por.common
            northAmericaSection.appendChild(nameCountrie)
        }
        else if(pais.continents[0] == "South America"){
            nameCountrie.innerText = pais.translations.por.common
            southAmericaSection.appendChild(nameCountrie)
        }
        else if(pais.continents[0] == "Europe"){
            nameCountrie.innerText = pais.translations.por.common
            europeSection.appendChild(nameCountrie)
            // console.log(pais)
        }
        else if(pais.continents[0] == "Africa"){
            nameCountrie.innerText = pais.translations.por.common
            africaSection.appendChild(nameCountrie)
        }
        else if(pais.continents[0] == "Asia"){
            nameCountrie.innerText = pais.translations.por.common
            asiaSection.appendChild(nameCountrie)
        }
    }


export { createMenu }

    