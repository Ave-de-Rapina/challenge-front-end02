var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: "swiper-pagination",
    },
    keyboard: true,
});


const modalNewsletter = document.getElementById('modal-newsletter');

function openModal1() {
    modalNewsletter.showModal();
}

function closeModal1() {
    modalNewsletter.close();
}

const modal = document.getElementById('modal-produtos');

function openModal() {
    modal.showModal();
}

function closeModal() {
    modal.close();
}