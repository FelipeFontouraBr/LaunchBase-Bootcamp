const modalOverlay = document.querySelectorAll('.modal-overlay')

// Selecionando as receitas
const revenues = document.querySelectorAll('info-pizzas')

for (let revenue of revenues) {
    revenue.addEventListener("click", function(){
        const videoID = revenue.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src= ``;
    })
}

document.querySelector('.close').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})