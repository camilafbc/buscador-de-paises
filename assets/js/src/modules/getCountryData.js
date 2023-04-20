import { createCard } from "./createCard.js"

const container = document.getElementById("card-container")

async function buscador(entrada){
    try {
        const busca = await fetch(`https://restcountries.com/v3.1/translation/${entrada}`)
        const response = await busca.json()
            response.forEach((pais) => container.innerHTML += createCard(pais))       
    } catch (err) {
        container.innerHTML += error()
    }      
}

function getCountryFromMenu(){
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




export { buscador , getCountryFromMenu ,  clearContainer}