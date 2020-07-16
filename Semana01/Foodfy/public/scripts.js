// const modalOverlay = document.querySelector('.modal-overlay')

// Selecionando as receitas
const cards = document.querySelectorAll('.card')

// Show and Hiden
const x = document.querySelector('.ingredients')
const y = document.querySelector('.prepare')
const z = document.querySelector('.info')

for (let card of cards) {
    card.addEventListener("click", function() {
        const revenueId = card.getAttribute("id");
        window.location.href = `/listrevenue?id=${revenueId}`
    })
}

document
.querySelector('.hiden')
.addEventListener('click', function(){
    if(!ul.classList.contains('display')){
        ul.classList.add('display')
    } else {
        ul.classList.remove('display')
    }
})

document
.querySelector('.show')
.addEventListener('click', function(){
    if(p.classList.contains('display')){
        p.classList.remove('display')
    }else{
        p.classList.add('display')
    }      
})



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