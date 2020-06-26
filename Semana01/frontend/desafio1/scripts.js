const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const siteId = card.getAttribute("id");
        console.log(siteId)
        modalOverlay.classList.add('active')

        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${siteId}`;
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})

document.querySelector('.maxime-modal').addEventListener('click', function(){
    modalOverlay.classList.contains('active')
})