$(function () {
    let my_modal = $('#my_modal');
    let my_button = $('#my_button');
    let my_close = $('#my_close');

    $(my_button).on('click', function () {
        openModal();
    });
    $(my_close).on('click', function () {
        closeModal();
    });


    function openModal() {
        $(my_modal).addClass('open')
    }

    function closeModal() {
        $(my_modal).removeClass('open')
    }
});