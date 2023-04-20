import { createMenu } from "./src/modules/createMenu.js"
import { buscador, getCountryFromMenu, clearContainer } from "./src/modules/getCountryData.js"

const searchBtn = document.getElementById("search-btn")
const toggleBtn = document.querySelectorAll(".toggle-btn")

async function getAllCountries(){
    const allCountries = await fetch('https://restcountries.com/v3.1/all')
    const countries = await allCountries.json()
    countries.forEach((country) => createMenu(country))
}

// Busca todos os países
getAllCountries()
// Busca o país selecionado no menu
getCountryFromMenu()

// Evento ao clicar no search para realizar a busca
searchBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    const input = document.querySelector("input[name='search']")
    clearContainer()
    buscador(input.value)    
})

toggleBtn.forEach((button) => {
    button.addEventListener("click", () => button.firstElementChild.classList.toggle("girar-icon"))
})


// Muda o tema
document.querySelectorAll(".toggle-theme").forEach((toggle) => {
    toggle.addEventListener("change", (ev) => {
        switch(ev.target.checked){
            case false: document.body.removeAttribute("data-bs-theme");
                        break

            case true: document.body.setAttribute("data-bs-theme", "dark")
        }
    })
})

