let animals = [
    {
        src: 'http://www.origins.org.ua/pictures/photo_tukan_1.jpg',
        title: 'tukan',
        alt: 'tukan :('
    }, {
        src: 'https://s3.scoopwhoop.com/raj/0704/panda.jpg',
        title: 'panda',
        alt: 'panda :('
    }, {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg',
        title: 'bear',
        alt: 'bear :('
    }
];

let cars = [
    {
        src: 'https://cdn.motor1.com/images/mgl/2kw7p/s3/hyundai-elantra-lead.jpg',
        title: 'hyundai',
        alt: 'hyundai :('
    }, {
        src: 'https://media.caradvice.com.au/image/private/c_fill,q_auto,f_auto,w_auto/nudpfhidovbjfi7xijtx.jpg',
        title: 'wv',
        alt: 'wv :('
    }
];

$(function () {
    $('button').each(function (index, element) {

        $(element).on('click',function () {
            debugger;
            let jopa = $(element).attr('jopa');
            if (jopa == 'animals') {
                renderImages(animals);
            } else if (jopa == 'cars') {
                renderImages(cars);
            }
        });
    });
});


function renderImages(images) {
    let imageContainer = $('#imageContainer');

    $(imageContainer).empty();

    for (let i = 0; i < images.length; i++) {
        let image = images[i];

        let img = $('<img>')
            .attr('src', image.src)
            .attr('title', image.title);


        // let img = $('<img>');
        // img.attr('src', image.src);
        // img.attr('title', image.title);

        let alt;
        if (image.alt != null) {
            alt = image.alt;
        } else {
            alt = 'lalalala kaka';
        }

        $(img).attr('alt', alt);
        $(imageContainer).append(img);
    }

}