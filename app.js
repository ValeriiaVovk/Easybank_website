const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
const overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active-burger');
    overlay.classList.toggle('active');
    if (burgerMenu.classList.contains('active-burger')) {
        header.appendChild(mobileMenu);
        mobileMenu.innerHTML = `
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Careers</a></li>
        </ul>
        `;

        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active-burger');
                overlay.classList.remove('active');
                header.removeChild(mobileMenu);
            });
        });
    } else {
        header.removeChild(mobileMenu);
        overlay.classList.remove('active');
    }
})

overlay.addEventListener('click', () => {
    if (burgerMenu.classList.contains('active-burger')) {
        burgerMenu.classList.remove('active-burger');
        overlay.classList.remove('active');
        header.removeChild(mobileMenu);
    }
});