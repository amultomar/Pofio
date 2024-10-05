let typed = new Typed(".multiple-text",  {
    strings: ["Frontend Devloper" , "Full stack Dev",],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop : true
    
})

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down - hide the header and menu items
        header.classList.add('hidden');
    } else {
        // Scrolling up - show the header and menu items
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll;
});

