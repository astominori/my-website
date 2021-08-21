'use strict';

let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++){
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight;
        if( scroll > offset - windowHeight + 150) {
            fadeInTarget[i].classList.add('scroll-in');
        }
    }
});

const typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
        setTimeout(() => {
            if (index === 11){
                document.querySelector(element).innerHTML += '<br/>';
            };
            document.querySelector(element).innerHTML += character;
        }, 100 * ++index);
    });
}

typing('#typing', 'Welcome tomy world');