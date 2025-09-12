(function() {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')
        
        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return

        if (burgerIcon) {
            e.preventDefault()
        }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')

        }

            
        

    }

})()

// ======================================

function openModal() {
    document.body.classList.add('body--opened-modal')
}

function closeModal() {
    document.body.classList.remove('body--opened-modal')
}

const aboutImgButton = document.querySelector('.about__img-button');
const modalCancel = document.querySelector('.modal__cancel');
const modal = document.querySelector('.modal');

if (aboutImgButton) {
    aboutImgButton.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });
}

if (modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}


if (modalCancel) {
    modalCancel.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
    });
}