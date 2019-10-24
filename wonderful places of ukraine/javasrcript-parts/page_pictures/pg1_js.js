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

/* создаем функцию, с помщью которой будем добавлять изображения в контейнер*/
function addPictures(images) {
    let imgContainer = $('#imgContainer');/*присваиваем строку селектора переменной*/
    $(imgContainer).empty();/*Очищает содержание выбранных элементов, т.е. удаляет все узлы-потомки (включая тексты) из выбранных элементов, все обработчики событий и внутренние кэш-данные.*/
    /*создаем цикл, который будет добавлять атрибуты к img*/
    for (let i = 0; i < images.length; i++) {
        let image = images[i];
        let img = $('<img>');
        img.attr("src", image.src); /*устанавливает значение атрибутов выбранных элементов.*/
        img.attr("title", image.title);
        let alt;
        /*создаем условие, при котором*/
        if(image.alt!=null) {
            alt = image.alt;
        }
            else{
                alt='nananananan';
        }
            $(img).attr('alt', alt);
             $(imgContainer).append(img);
    }
}

