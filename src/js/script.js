import changePrice from "./modules/change-price";
import Swiper from "swiper/bundle";
import burger from "./modules/burger";
import forms from "./modules/forms";
window.addEventListener("DOMContentLoaded", (e) => {

    changePrice({
        activeClass: "pricing__price-change-btn--active",
    });
    const commentSlider = new Swiper(".swiper", {
        navigation: {
            nextEl: '.comments__button-next',
            prevEl: '.comments__button-prev',
        },
        breakpoints: {
            1080: {
                slidesPerView: 3,
                spaceBetween: 32,
            }
        }
    });
    burger();

    forms();
});