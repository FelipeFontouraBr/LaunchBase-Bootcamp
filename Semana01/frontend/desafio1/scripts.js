const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.cards')

for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${siteId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})