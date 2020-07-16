// const modalOverlay = document.querySelector('.modal-overlay')

// Selecionando as receitas
const cards = document.querySelectorAll('.card')

// Show and Hiden
const x = document.querySelector('.hiden-ingredients')
const y = document.querySelector('.hiden-prepare')
const z = document.querySelector('.hiden-information')

for (let card of cards) {
    card.addEventListener("click", function() {
        const revenueId = card.getAttribute("id");
        window.location.href = `/listrevenue?id=${revenueId}`
    })
}

document
.querySelector('.hiden')
.addEventListener('click', function(){
    if(!x.classList.contains('display')){
        x.classList.add('display')
    } else{
        x.classList.remove('display')
    }
})

document
.querySelector('.show')
.addEventListener('click', function(){
    if(y.classList.contains('display')){
        y.classList.remove('display')
    } else{
        y.classList.add('display')
    }      
})

document
.querySelector('.hiden-info')
.addEventListener('click', function(){
    if(!z.classList.contains('display')){
        z.classList.add('display')
    } else{
        z.classList.remove('display')
    }      
})


document
.querySelector('.button')
.addEventListener('click', function(){
    if(button.innerHTML == 'Esconder'){
        button.innerHTML = 'Mostrar'
    } else{
        button.innerHTML = 'Esconder'
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