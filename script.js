// Simple animation for the graduates image
document.addEventListener("DOMContentLoaded", function() {
    const graduateImg = document.querySelector('.graduate-img');
    let position = 0;
    let direction = 1;

    setInterval(() => {
        position += direction * 2;
        if (position > 10 || position < -10) direction *= -1;
        graduateImg.style.transform = `translateY(${position}px)`;
    }, 100);
});