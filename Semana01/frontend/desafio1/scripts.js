const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')

const modal = document.querySelector('.modal')


for (let card of cards) {
    card.addEventListener("click", function(){
        const siteId = card.getAttribute("id");
        
        modalOverlay.classList.add('active')

        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${siteId}`;
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe') = ``
    modal.classList.remove('maximize')  
})

document.querySelector('.maxime-modal').addEventListener('click', function(){
    if(!modal.classList.contains('maximize')){
        modal.classList.add('maximize')
    }   
})