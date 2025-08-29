const modal = document.querySelector('.modal')
const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.modal__close-btn')

btnOpen.addEventListener('click', () => {
    modal.classList.add('open')
})

btnClose.addEventListener('click', () => {
    modal.classList.remove('open')
})
