


// Can also be used with $(document).ready()
$(window).load(function() {
    $('.slickSlider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        dots: true,
        dotsClass: 	'slick-dots',
        nextArrow: '<button class="slick__arrows nextArrow "></button>',
        prevArrow: '<button class="slick__arrows prevArrow"></button>'
    });

    $('.partnersSlider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        dots: true,
        dotsClass: 	'slick-dots',
        nextArrow: '<button class="slick__arrows nextArrow slick__arrows_partners"></button>',
        prevArrow: '<button class="slick__arrows prevArrow slick__arrows_partners"></button>'
    });


    // particlesJS.load(@dom-id, @path-json, @callback (optional));
    particlesJS.load('particles-js', 'templates/js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    })

    particlesJS.load('particles-js__partners', 'templates/js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    })


    const coords = [ [59.193102, 39.821221], [59.920464, 30.352827], [58.520723, 31.261848] ]
    ymaps.ready(function () { init(coords,'#7C0905', '#E4E4E4') });

});


function init(coords, primaryColor, SecondColor) {
    var myMap = new ymaps.Map('map', {
            center: [62.981769, 76.994732],
            controls: [],
            zoom: 3
        })

    var myRegionObjects = new ymaps.GeoObjectCollection({}, {
        preset: "islands#redCircleIcon",
        strokeWidth: 4,
        geodesic: true
    });
    var myPointObjects = new ymaps.GeoObjectCollection({});

    coords.map((elem) => {
        ymaps.geocode(elem, {result: 1})
            .then(
                function (res) {
                    res.geoObjects.get(0).options.set('preset', 'islands#brownIcon');
                    myPointObjects.add(res.geoObjects.get(0))

                    myMap.geoObjects.add(myPointObjects);
                },
                function (err) {
                    console.log(err)
                }
            )
    })

    ymaps.regions.load('RU', {
        lang: 'ru',
        quality: 1
    }).then(function (result) {
        result.geoObjects.options.set('outline', false)
        result.geoObjects.options.set('fillColor', SecondColor)
        myRegionObjects.add(result.geoObjects);
        // Добавляем регионы на карту
        myMap.geoObjects.add(myRegionObjects);

    }, function (err) {
        console.log(err)
    })

    myRegionObjects.events.add('mouseenter', function (e) {
        myPointObjects.each(function (obj) {
            console.log(obj.getAdministrativeAreas()[0])
            console.log()
             if (obj.getAdministrativeAreas()[0] === e.get('target').properties.get('name')) {
                 obj.options.set('preset', 	'islands#grayIcon');
             }

        });
        e.get('target').options.set('fillColor', primaryColor)
        // e.get('target').options.set('outline', false)
        })
        .add('mouseleave', function (e) {
            e.get('target').options.unset('fillColor');
            myPointObjects.each(function (obj) {
                if (obj.getAdministrativeAreas()[0] === e.get('target').properties.get('name')) {
                    obj.options.set('preset', 	'islands#brownIcon');
                }

            });
        });
}
