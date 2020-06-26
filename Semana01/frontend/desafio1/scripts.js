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


// Maximizar conteúdo
document.querySelector('.maxime-modal').addEventListener('click', function(){
    if(!modal.classList.contains('maximize')){
        modal.classList.add('maximize')
    }   
})

// Fechar conteúdo
document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximize')
    modalOverlay.querySelector('iframe') = ``      
})

// Fechar Maximização do conteúdo
document.querySelector('.')