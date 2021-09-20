window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav_block'),
        menuItem = document.querySelectorAll('.nav_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_block_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_block_active');
        })
    })
})