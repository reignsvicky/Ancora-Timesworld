const images = document.querySelectorAll(".carousel-images img");
const navContainer = document.querySelector(".carousel-nav");
const imageCount = images.length;
let currentIndex = 0;
document.querySelector(".carousel-images").style.width = `${imageCount * 100}%`;

for (let i = 0; i < imageCount; i++) {
    const dot = document.createElement("div");
    dot.classList.add("nav-dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => navigateTo(i));
    navContainer.appendChild(dot);
}

function navigateTo(index) {
    currentIndex = index;
    document.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}vw)`;
    updateNavDots();
}

function updateNavDots() {
    document.querySelectorAll(".nav-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

