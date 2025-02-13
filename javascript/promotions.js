document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.getElementById("sliderContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const slidesData = [
        {
            image: "./assets/images/promotion/menu1.png",
            title: "CELEBRATE WITH US HOLIDAY FEAST",
            description: "Immerse yourself in a culinary journey inspired by the Mediterranean way of living"
        },
        {
            image: "./assets/images/promotion/menu2.png",
            title: "WEEKDAY HAPPY HOUR DELIGHT",
            description: "Experience a perfect evening with our exclusive happy hour specials"
        },
        {
            image: "./assets/images/promotion/menu3.png",
            title: "WINE & DINE WEDNESDAY",
            description: "Indulge in our fine selection of wines paired with gourmet dishes"
        },
         {
            image: "./assets/images/promotion/menu2.png",
            title: "WEEKDAY HAPPY HOUR DELIGHT",
            description: "Experience a perfect evening with our exclusive happy hour specials"
        },
        {
            image: "./assets/images/promotion/menu1.png",
            title: "CELEBRATE WITH US HOLIDAY FEAST",
            description: "Immerse yourself in a culinary journey inspired by the Mediterranean way of living"
        },
        {
            image: "./assets/images/promotion/menu2.png",
            title: "WEEKDAY HAPPY HOUR DELIGHT",
            description: "Experience a perfect evening with our exclusive happy hour specials"
        },
    ];

    function createSlides() {
        slidesData.forEach(slide => {
            const slideElement = document.createElement("div");
            slideElement.classList.add("slider");
            slideElement.innerHTML = `
                <img src="${slide.image}" alt="">
                <div class="info-card py-4 px-4">
                    <h5 class="title font-felix">${slide.title}</h5>
                    <p class="description my-3">${slide.description}</p>
                    <button class="dark-button">Reserve now</button>
                </div>
            `;
            sliderContainer.appendChild(slideElement);
        });
    }

    createSlides();

    const scrollAmount = 300;

    nextBtn.addEventListener("click", () => {
        sliderContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        sliderContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
});
