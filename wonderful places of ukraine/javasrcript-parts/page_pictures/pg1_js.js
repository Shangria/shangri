/*создаем массивы из обьектов*/
let cats = [
    {
        'src': "https://s16.stc.all.kpcdn.net/share/i/12/10382013/inx960x640.jpg",
        'name': 'cat',
        'alt': 'it cat'
    },
    {
        'src': "https://focus.ua/storage/pub/images/2017/0381991_65042.jpg",
        'name': 'cat',
        'alt': 'it cat'
    },
    {
        'src': "https://focus.ua/storage/pub/images/2019/0425428_Purina_03.jpg",
        'name': 'cat',
        'alt': 'it cat'
    }
];
let mouses = [
    {
        'src': "https://zablugdeniyam-net.ru/wp-content/uploads/Mysh-Mouse.jpg",
        'name': 'mouse',
        'alt': 'it mouse'
    },
    {
        'src': "https://o-prirode.ru/wp-content/uploads/2017/09/polevaya-mysh-768x480.jpg",
        'name': 'mouse',
        'alt': 'it mouse'
    },
    {
        'src': "https://o-prirode.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/09/samec-i-samka-polevoy-myshi-e1505738203359.jpg.webp",
        'name': 'mouse',
        'alt': 'it mouse'
    },

];
$(function () {                                             /*событие, которое запускается, когда страница полностью загрузилась, раньше было $(document).ready */
    $('button').each(function (index, element) {     /*Производит перебор в цикле всех элементов набора jQuery и вызывает функцию обратного вызова для каждого из них.
                                                                     events — тип обрабатываемых событий. handler — функция, которая будет установлена в качестве обработчика*/
        $(element).on('click', function () {
            let names = $(element).attr("names");       /*создаем пеерменную, которой присваиваем строку селектора переменной и устанавлиеваем значение атрибутов выбранных элементов*/
            /*создаем условие, если клик на кнопку кетс - вывести котов, если клик на мвус - вывести мышей*/
            if (names == 'cats') {
                addPictures(cats);
            } else if (names == 'mouses') {
                addPictures(mouses);
            }

        })

    })
});


/* создаем функцию, с помщью которой будем добавлять изображения в контейнер*/
function addPictures(images) {
    let imgContainer = $('#imgContainer');                  /*присваиваем строку селектора переменной*/
    $(imgContainer).empty();                                        /*Очищает содержание выбранных элементов, т.е. удаляет все узлы-потомки (включая тексты) из выбранных элементов, все обработчики событий и внутренние кэш-данные.*/
    /*создаем цикл, который будет добавлять атрибуты к img*/
    for (let i = 0; i < images.length; i++) {
        let image = images[i];
        let img = $('<img>');
        img.attr("src", image.src);                 /*устанавливает значение атрибутов выбранных элементов.*/
        img.attr("title", image.title);
        let alt;
        /*создаем условие, при котором*/
        if (image.alt != null) {
            alt = image.alt;
        } else {
            alt = 'упс, изображение не загрузилось';
        }
        $(img).attr('alt', alt);
        $(imgContainer).append(img);
    }
}

