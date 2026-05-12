const light = document.querySelector('.light');

window.addEventListener('mousemove', (e) => {
    light.style.left = e.pageX + 'px';
    light.style.top = e.pageY + 'px';
});