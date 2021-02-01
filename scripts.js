window.onload = () => {

    let pageHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - window.innerHeight

    setTimeout(() => unfade(document.querySelector('.home-container__text p:first-child'), 'block'), 500);
    setTimeout(() => unfade(document.querySelector('.home-container__text p:last-child'), 'block'), 900);
    setTimeout(() => unfade(document.querySelector('.order-btn'), 'block'), 1200);
    setTimeout(() => unfade(document.querySelector('.circles__item:nth-of-type(1)'), 'block'), 1750);
    setTimeout(() => unfade(document.querySelector('.circles__item:nth-of-type(2)'), 'block'), 1850);
    setTimeout(() => unfade(document.querySelector('.circles__item:nth-of-type(3)'), 'block'), 1950);

    window.addEventListener('scroll', () => {
        let scrollHeight = window.pageYOffset;

        const anchorsEl = document.querySelector('.anchors-wrapper')
        if (scrollHeight > (window.innerHeight - 30)) anchorsEl.classList.add('fixed')
        else anchorsEl.classList.remove('fixed')

        document.querySelector('.scroll-progress-bar').style.width = `${scrollHeight / pageHeight * 100}vw`;

        console.log(`${scrollHeight / pageHeight * 100}vw`)

    })

    document.querySelectorAll('.form-block__form input').forEach(el => el.addEventListener('change', (e) => {
        e.target.nextSibling.nextElementSibling.classList.add('minified')
    }))

    document.querySelector('.order-btn').addEventListener('click', openForm)


}

const openForm = () => {
    document.querySelectorAll('.form-block, .order-btn').forEach(e => e.classList.add('active'))
    document.querySelector('.home-container__text').classList.add('hidden')
    document.querySelectorAll('.label-icon').forEach(e => e.style.display = 'flex')
    document.querySelectorAll('.label-icon').forEach(e => e.style.opacity = '0')
    setTimeout(() => unfade(document.querySelector('.contact-us')), 500);
    setTimeout(() => unfade(document.querySelector('.label-icon:nth-of-type(1)')), 900);
    setTimeout(() => unfade(document.querySelector('.label-icon:nth-of-type(2)')), 1200);
    setTimeout(() => unfade(document.querySelector('.label-icon:nth-of-type(3)')), 1500);
    document.querySelector('.order-btn').removeEventListener('click', openForm)


}

const closeForm = () => {
    document.querySelector('.form-block').classList.remove('active')
    document.querySelector('.home-container__text').classList.remove('hidden')
    document.querySelector('.order-btn').classList.remove('active')
    document.querySelector('.contact-us').style.opacity = '0';
    document.querySelectorAll('.label-icon').forEach(e => e.style.display = 'none')
    document.querySelector('.order-btn').addEventListener('click', openForm)
}

function fade(element) {
    let op = 1;
    let timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.opacity = '0';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element, display = 'flex') {
    let op = 0.1;
    element.style.display = display;
    let timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
