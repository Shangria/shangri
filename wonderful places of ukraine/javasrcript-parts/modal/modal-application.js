$(function () {

    // посмотреть что такое функция конструктор и как ей пользоваться

    let arcticModal = new Modal('#arcticModalTitle', '#arcticModalBody');
    $('#openArcticModal').on('click', function () {
        arcticModal.openModal();
    });


    let tukanModal = new Modal('#tukanModalTitle', '#tukanModalBody');
    $('#openTukanModal').on('click', function () {
        tukanModal.openModal();
    });

});