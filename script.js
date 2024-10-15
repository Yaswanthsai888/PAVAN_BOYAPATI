// script.js
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.wedding-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = 150; // Height at which the section will be visible

        if (sectionTop < windowHeight - sectionVisible) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
        }
    });
});
