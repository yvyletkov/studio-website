window.onload = () => {

    console.log()

    window.addEventListener('scroll', () => {

        const anchorsEl =  document.querySelector('.anchors-wrapper')
        if (window.pageYOffset > (window.innerHeight - 30)) anchorsEl.classList.add('fixed')
        else anchorsEl.classList.remove('fixed')

    })

    document.querySelectorAll('.form-block__form input').forEach(el => el.addEventListener('change', (e) => {
        e.target.nextSibling.nextElementSibling.classList.add('minified')
    }))

    document.querySelector('.order-btn').addEventListener('click', openForm)
}

const openForm = () => {
    document.querySelector('.form-block').classList.add('active')
    document.querySelector('.home__container__text').classList.add('hidden')
    document.querySelector('.order-btn').classList.add('active')
    document.querySelector('.label-icon:nth-of-type(1)').style.display = 'flex';
    document.querySelector('.label-icon:nth-of-type(2)').style.display = 'flex';
    document.querySelector('.label-icon:nth-of-type(3)').style.display = 'flex';
    document.querySelector('.label-icon:nth-of-type(1)').style.opacity = '0';
    document.querySelector('.label-icon:nth-of-type(2)').style.opacity = '0';
    document.querySelector('.label-icon:nth-of-type(3)').style.opacity = '0';
    setTimeout(() => unfade(document.querySelector('.contact-us')), 500);
    setTimeout(() => unfade(document.querySelector('.label-icon:nth-of-type(1)')), 900);
    setTimeout(() => unfade(document.querySelector('.label-icon:nth-of-type(2)')), 1200);
    setTimeout(() => unfade(document.querySelector('.label-icon:nth-of-type(3)')), 1500);
    document.querySelector('.order-btn').removeEventListener('click', openForm)


}

const closeForm = () => {
    document.querySelector('.form-block').classList.remove('active')
    document.querySelector('.home__container__text').classList.remove('hidden')
    document.querySelector('.order-btn').classList.remove('active')
    document.querySelector('.contact-us').style.opacity = '0';
    document.querySelector('.label-icon:nth-of-type(1)').style.display = 'none';
    document.querySelector('.label-icon:nth-of-type(2)').style.display = 'none';
    document.querySelector('.label-icon:nth-of-type(3)').style.display = 'none';
    document.querySelector('.order-btn').addEventListener('click', openForm)
}

function fade(element) {
    let op = 1;
    let timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.opacity = '0';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    let op = 0.1;
    element.style.display = 'flex';
    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
