$(function () {
debugger
    let modal = $('#modal');
    let closeModalButton = $('#closeModal');
    let openModalButton = $('#openModal');


    /*событие, которое запускается, когда страница полностью загрузилась, раньше было $(document).ready */

    $(openModalButton).on('click', function () {
        openModal();
    });

    $(closeModalButton).on('click', function () {
        closeModal();
    });


    function openModal() {
        $(modal).addClass('open');
    }

    function closeModal() {
        $(modal).removeClass('open');
    }

});
