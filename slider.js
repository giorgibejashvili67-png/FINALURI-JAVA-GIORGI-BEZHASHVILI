class Slider {
    constructor(sliderId, interval = 3000) {
        this.slider = document.getElementById(sliderId);
        this.slides = this.slider.querySelectorAll(".slide");
        this.index = 0;
        this.showSlide(this.index);
        this.start(interval);
    }

    showSlide(i) {
        this.slides.forEach(slide => slide.classList.remove("active"));
        this.slides[i].classList.add("active");
    }

    nextSlide() {
        this.index = (this.index + 1) % this.slides.length;
        this.showSlide(this.index);
    }

    start(interval) {
        setInterval(() => this.nextSlide(), interval);
    }
}

// slider-ის ინიციალიზაცია
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById("siteSlider")) {
        new Slider("siteSlider");
    }
});
