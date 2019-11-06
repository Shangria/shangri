function Modal(title, body) {
    debugger;
    let modalMainElement;

    this.openModal = openModal;


    function openModal() {
        $(modalMainElement).addClass('open');
    }


    modalMainElement = $('' +
        '<div class="modal">' +
        '    <div class="modal-header">' +
        '        <span class="modal-title"></span>' +
        '        <button  class="modal-close" type="button">&times;</button>' +
        '    </div>' +
        '    <div class="modal-body"></div>' +
        '</div>'
    );
    $('body').append(modalMainElement);


    let closeButton = $(modalMainElement).find('.modal-header button.modal-close');
    $(closeButton).on('click', function () {
        closeModal();
    });

    function closeModal() {
        $(modalMainElement).removeClass('open');
    }


    let titleHtml = readHtmlFromTemplate(title);
    let placeForTitle = $(modalMainElement).find('.modal-header .modal-title');
    $(placeForTitle).html(titleHtml);

    let bodyHtml = readHtmlFromTemplate(body);
    let placeForBody = $(modalMainElement).find('.modal-body');
    $(placeForBody).html(bodyHtml);


    function readHtmlFromTemplate(templateId) {
        let html = $(templateId).html();
        return html;
    }


}
