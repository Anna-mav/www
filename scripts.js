
document.querySelector('.animated-svg').addEventListener('mouseenter', function () {
    this.style.animation = 'hoverEffect 3s infinite';
});

document.querySelector('.animated-svg').addEventListener('mouseleave', function () {
    this.style.animation = 'zoom 8s infinite ease-in-out';
});

@keyframes hoverEffect {
    0%, 100% {
        transform: scale(1.1) rotate(0deg);
    }
    50% {
        transform: scale(1.2) rotate(5deg);
    }
}
