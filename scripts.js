window.onload = () => {
    window.addEventListener('scroll', () => {

        const anchorsEl =  document.querySelector('.anchors-wrapper')
        if (window.pageYOffset > (window.innerHeight - 30)) anchorsEl.classList.add('fixed')
        else anchorsEl.classList.remove('fixed')

    })

    document.querySelectorAll('.form input').forEach(el => el.addEventListener('change', (e) => {
        e.target.nextSibling.nextElementSibling.classList.add('minified')
    }))
}

const openForm = () => {
    document.querySelector('.form-block').classList.add('active')
    document.querySelector('.home__container__text').classList.add('hidden')
    document.querySelector('.order-btn').classList.add('active')
}

const closeForm = () => {
    document.querySelector('.form-block').classList.remove('active')
    document.querySelector('.home__container__text').classList.remove('hidden')
    document.querySelector('.order-btn').classList.remove('active')
}

function fade(element) {
    let op = 1;
    let timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    let op = 0.1;
    element.style.display = 'block';
    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
