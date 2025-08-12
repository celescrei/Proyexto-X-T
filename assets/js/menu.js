document.addEventListener('DOMContentLoaded', () => {
    const abrirMenu = document.querySelector('.abrir-menu');
    const nav = document.querySelector('.menu-nav');
    const overlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    // Check if elements exist before adding event listeners
    if (!abrirMenu || !nav) {
        console.error('Menu elements not found');
        return;
    }

    // Open menu function
    const openMenu = () => {
        nav.classList.add('mostrar-menu');
        if (overlay) overlay.classList.add('mostrar-overlay');
        document.body.style.overflow = 'hidden';
        abrirMenu.textContent = '✕';
    };

    // Close menu function
    const closeMenu = () => {
        nav.classList.remove('mostrar-menu');
        if (overlay) overlay.classList.remove('mostrar-overlay');
        document.body.style.overflow = '';
        abrirMenu.textContent = '☰';
    };

    abrirMenu.addEventListener ('click', () => {
        if (nav.classList.contains('mostrar-menu')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay?.addEventListener('click', closeMenu);
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && nav .classList.contains ('mostrar-menu')) {
            closeMenu();
        }
    });
});