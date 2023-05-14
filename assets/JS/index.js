// pegar no JS o elemento HTML correspondente ao botão troca de troca de tema
const buttonChangeTheme = document.getElementById("button-change-theme");


// dar um jeito de pegat no JS o elemento HTML correspondente ao body
const body = document.querySelector("body")
const buttonImageThemeChange = document.querySelector(".image-button")

// dar um jeito de identificar o clique do usuário no botão de troca de tema
buttonChangeTheme.addEventListener("click", () => {
    // verificar se seletor body possui a classe dark-mode
    const activatedDarkMode = body.classList.contains("dark-mode")

    // alternar dark mode
    body.classList.toggle("dark-mode")

    if (activatedDarkMode) {
        //trocar a imagem de alterar tema pro sol
        buttonImageThemeChange.setAttribute("src", "./assets/imgs/sun.png");

    } else {
        // trocar a imagem do botão de alterar tema pra lua
        buttonImageThemeChange.setAttribute("src", "./assets/imgs/moon.png")
    }
})
