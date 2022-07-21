const btn = document.querySelector('.menu-h'),
    panel = document.getElementById('panel'),
    links = document.querySelectorAll('.a');

btn.addEventListener('click', () => {
    console.log('hola');
    panel.classList.toggle('is-active');
    btn.classList.toggle('is-active');
});

document.addEventListener('click', e => {
    if (e.target.matches('menu-h') || e.target.matches(`${'menu-h'} *`)) {
        panel.classList.toggle('is-active');
        btn.classList.toggle('is-active');
    }
    if (e.target.matches('.a')) {
        panel.classList.remove('is-active');
        btn.classList.remove('is-active');
    }

})