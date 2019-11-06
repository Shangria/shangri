// посмотреть что такое функция конструктор и как ей пользоваться


function Modal(title, body) {

    // посмотреть что такое функция конструктор и как ей пользоваться
    this.openModal = openModal;


    // создаём элемент с некоторыми вложенными элементами (кусок хтмл)
    let modalMainElement = $('' +
        '<div class="modal">' +
        '    <div class="modal-header">' +
        '        <span class="modal-title"></span>' +
        '        <button  class="modal-close" type="button">&times;</button>' +
        '    </div>' +
        '    <div class="modal-body"></div>' +
        '</div>'
    );
    $('body').append(modalMainElement);


    function openModal() {
        $(modalMainElement).addClass('open');
    }

    // посмтотреть что такое функция find в jquery
    let closeButton = $(modalMainElement).find('.modal-header button.modal-close');
    $(closeButton).on('click', function () {
        closeModal();
    });

    function closeModal() {
        $(modalMainElement).removeClass('open');
    }


    let titleHtml = readHtmlFromTemplate(title);
    // посмтотреть что такое функция find() в jquery
    let placeForTitle = $(modalMainElement).find('.modal-header .modal-title');
    // посмтотреть что такое функция html() в jquery когда она вызывается с одним аргументом
    $(placeForTitle).html(titleHtml);

    let bodyHtml = readHtmlFromTemplate(body);
    // посмтотреть что такое функция find() в jquery
    let placeForBody = $(modalMainElement).find('.modal-body');
    // посмтотреть что такое функция html() в jquery когда она вызывается с одним аргументом
    $(placeForBody).html(bodyHtml);


    function readHtmlFromTemplate(templateId) {
        // посмтотреть что такое функция html() в jquery когда она вызываетс без аггументов
        let html = $(templateId).html();
        return html;
    }


}
