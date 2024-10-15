// Adding scroll event listener for sections
const sections = document.querySelectorAll('.wedding-section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
        }
    });
});
