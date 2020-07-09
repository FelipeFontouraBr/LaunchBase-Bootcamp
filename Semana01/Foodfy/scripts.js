const modalOverlay = document.querySelector('.modal-overlay')

// Selecionando as receitas
const revenues = document.querySelectorAll('.card')

for (let revenue of revenues) {
    revenue.addEventListener("click", function(){
        const revenueID = revenue.getAttribute("id");
        const cardTitle = card.querySelector('.card__content').querySelector('h2').textContent;
        const cardSubtitle = card.querySelector('.card_subtitle').querySelector('p').textContent;

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src= `./assets/${revenueID}.png`;
    })
}

document.querySelector('#close').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})