function Line(){

    var wrap = $('.main__wrap'),
        header = $('header'),
        mainhead = $('.main__head');

    var item1 = $('.main__icon1'),
         num1X = item1.offset().left - item1.width()/2,
         num1Y = item1.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();
    console.log('fff' + item1.width()/2)
    var item2 = $('.main__icon2'),
         num2X = item2.offset().left - item2.width()/2,
         num2Y = item2.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();

    var item3 = $('.main__icon3'),
         num3X = item3.offset().left - item3.width()/2,
         num3Y = item3.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();

    var item4 = $('.main__icon4'),
         num4X = item4.offset().left - item4.width()/2,
         num4Y = item4.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();

    var item5 = $('.main__icon5'),
         num5X = item5.offset().left - item5.width()/2,
         num5Y = item5.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();

    var item6 = $('.main__icon6'),
         num6X = item6.offset().left - item6.width()/2,
         num6Y = item6.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();


    var svg = $('#svg-line');

    var line12 = svg.find('.line-1-2'),
        line13 = svg.find('.line-1-3'),
        line23 = svg.find('.line-2-3'),
        line34 = svg.find('.line-3-4'),
        line45 = svg.find('.line-4-5'),
        line46 = svg.find('.line-4-6'),
        line56 = svg.find('.line-5-6');

    line12.attr({'x1': num1X, 'y1': num1Y, 'x2': num2X, 'y2': num2Y});
    line13.attr({'x1': num1X, 'y1': num1Y, 'x2': num3X, 'y2': num3Y});
    line23.attr({'x1': num2X, 'y1': num2Y, 'x2': num3X, 'y2': num3Y});
    line34.attr({'x1': num3X, 'y1': num3Y, 'x2': num4X, 'y2': num4Y});
    line45.attr({'x1': num4X, 'y1': num4Y, 'x2': num5X, 'y2': num5Y});
    line46.attr({'x1': num4X, 'y1': num4Y, 'x2': num6X, 'y2': num6Y});
    line56.attr({'x1': num5X, 'y1': num5Y, 'x2': num6X, 'y2': num6Y});


}

$(window).on('load resize', function () {
    Line();
});