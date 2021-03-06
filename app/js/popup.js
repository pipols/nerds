var feedback_form_btn = document.querySelector(".feedback-form__btn");
var modal_content = document.querySelector(".modal-content");
var modal_overlay = document.querySelector(".modal-overlay");
var modal_content_close = document.querySelector(".modal-content__close");


feedback_form_btn.addEventListener("click", function (event) {
    event.preventDefault();
    modal_content.classList.add("modal-content_show");
    modal_overlay.classList.add("modal-overlay_show");
});

modal_content_close.addEventListener("click", function (event) {
    event.preventDefault();
    modal_content.classList.remove("modal-content_show");
    modal_overlay.classList.remove("modal-overlay_show");
});

modal_overlay.addEventListener("click", function (event) {
    event.preventDefault();
    modal_content.classList.remove("modal-content_show");
    modal_overlay.classList.remove("modal-overlay_show");
});
