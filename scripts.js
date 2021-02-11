window.onload = () => {

    let pageHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - window.innerHeight


    window.addEventListener('scroll', () => {
        let scrollHeight = window.pageYOffset;

        document.querySelector('.scroll-progress-bar').style.width = `${scrollHeight / pageHeight * 100}vw`;

        // console.log(`${scrollHeight / pageHeight * 100}vw`)

    })

    document.querySelectorAll('.form-block__form input').forEach(el => el.addEventListener('change', (e) => {
        e.target.nextSibling.nextElementSibling.classList.add('minified')
    }))

    document.querySelector('.order-btn').addEventListener('click', openForm)
    setTimeout(() => unfade(document.querySelector('.order-btn')), 100);

}

const openForm = () => {

}

const closeForm = () => {

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

