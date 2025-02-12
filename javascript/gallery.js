document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".gallery-navbar a");
    const galleryItems = document.querySelectorAll(".gallery-item");

    function filterGallery(category) {
        let visibleCount = 0;

        galleryItems.forEach(item => {
            if (category === "all" || item.classList.contains(category)) {
                item.style.display = "block";
                visibleCount++;
            } else {
                item.style.display = "none";
            }
        });

        console.log(`Showing ${visibleCount} images for category: ${category}`);
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
            const category = this.getAttribute("data-category");
            filterGallery(category);
        });
    });

    filterGallery("all");
});