// Burger menu

(function () {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }
})()

// swiper - protein
const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    speed: 600,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination-vertical',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});


// info tabs

const tabButtons = document.querySelectorAll('.info__tabs-button');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.info-tab-content').forEach(content => {
            content.classList.remove('active');
        });

        const targetContent = document.querySelector(`.info-tab-content[data-tab-content="${tabId}"]`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// Timetable tabs

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Обновляем активную кнопку
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Обновляем активный контент
            const allContents = document.querySelectorAll('tbody[data-tab-content]');
            allContents.forEach(content => content.classList.remove('active'));
            
            const activeContent = document.querySelector(`tbody[data-tab-content="${targetTab}"]`);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
});