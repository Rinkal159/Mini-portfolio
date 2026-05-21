const headingCont = document.querySelector("#heading-cont");

headingCont.addEventListener("click", (e) => {

    if (e.target.className = "about-heading") {
        const currHeading = document.querySelector(".special-underline");
        const newHeading = e.target;

        currHeading.classList.remove("special-underline");
        newHeading.classList.add("special-underline");

        const currDesc = document.getElementById(currHeading.textContent);
        const newDesc = document.getElementById(newHeading.textContent);

        currDesc.classList.remove("active");
        newDesc.classList.add("active");

    } else {

    }
})


// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-cont');

    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    const navLinks = document.querySelectorAll('.nav-ele');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 576 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});

