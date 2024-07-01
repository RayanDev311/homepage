const mobMenu = document.getElementById('mobMenu');
const menu = document.querySelector('.menu');

mobMenu.addEventListener('click', function () {
    const active = this.querySelector('.active');
    const disabled =this.querySelector('.disabled');
    if (active.style.display === 'none') {
        active.style.display = 'inline-block';
        menu.style.display ='none';
        disabled.style.display ='none';
    } else {
        disabled.style.display = 'inline-block';
        active.style.display ='none';
        menu.style.display ='block';
    }
});