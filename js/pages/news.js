//news.js
$(function () {

    let nitemsCut = new Cut('.nitem__txt', 105).init();

    // let size = 105,
    //     newsContent= $('.nitem__txt');
    //
    // newsContent.each(function (indx,elem) {
    //     let item = $(elem),
    //         text = item.text();
    //
    //     if(text.length > size){
    //         item.text(text.slice(0, size) + ' ...');
    //     }
    // });


    if (wWidth >=1380) {
        $('.arts__list-row').masonry({
            itemSelector: '.arts__item',
        });
    }

    // let aitemsCut = new Cut('.aitem__txt','155').init();


});