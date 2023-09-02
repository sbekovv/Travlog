let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

let myNewSwiper = new Swiper(".myNewSwiper", {
    navigation: {
        nextEl: ".new-swiper-button-next",
        prevEl: ".new-swiper-button-prev",
    },
    pagination: {
        el: ".new-swiper-pagination",
        clickable: true,
    },
});
