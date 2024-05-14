document.querySelector('.menu-icon').addEventListener('click', function() {
    this.classList.toggle('show');
    const menu = document.querySelector('.menu-mb');
    menu.classList.toggle('hide-menu');
});