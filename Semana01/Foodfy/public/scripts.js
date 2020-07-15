// const modalOverlay = document.querySelector('.modal-overlay')

// Selecionando as receitas
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const revenueId = card.getAttribute("id");
        window.location.href = `/listrevenue?id=${revenueId}`
    })
}

/*
for (let revenue of revenues) {
    revenue.addEventListener("click", function(){
        const revenueID = revenue.getAttribute("id");
        const cardTitle = revenue.querySelector('.card_title').querySelector('h2').textContent;
        const cardSubtitle = revenue.querySelector('.card_subtitle').querySelector('p').textContent;

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src= `./assets/${revenueID}.png`;
        modalOverlay.querySelector('#nome_receita').textContent = cardTitle;
        modalOverlay.querySelector('#chef_receita').textContent = cardSubtitle;

    })
}

document.querySelector('#close').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})*/