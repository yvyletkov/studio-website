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
    document.querySelector('.form-wrapper').classList.add('active')
    document.querySelector('.text').classList.add('hidden')
    document.querySelector('.order-btn').classList.add('active')
}

const closeForm = () => {
    document.querySelector('.form-wrapper').classList.remove('active')
    document.querySelector('.order-btn').classList.remove('active')
    document.querySelector('.text').classList.remove('hidden')
}
