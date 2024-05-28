// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const container = document.querySelector('.content-container');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const targetPosition = targetSection.offsetLeft;

            container.style.transform = `translateX(-${targetPosition}px)`;

            sections.forEach(section => {
                section.classList.remove('active');
            });
            targetSection.classList.add('active');
        });
    });

    // Set initial active section
    sections[0].classList.add('active');
});
