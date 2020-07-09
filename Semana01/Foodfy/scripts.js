const modalOverlay = document.querySelector('.modal-overlay')

// Selecionando as receitas
const revenues = document.querySelectorAll('.card')

for (let revenue of revenues) {
    revenue.addEventListener("click", function(){
        const revenueID = revenue.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src= `./assets/${revenueID}.png`;
    })
}

document.querySelector('#close').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})