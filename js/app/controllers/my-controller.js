define(['services/film-service', 'views/my-view'], function(filmService, myView){

    var internals = {};
    var externals = {};

    internals.counter = 0;

    externals.start = function(){
        myView.bind('randomClick', randomClickHandler);
        myView.render();
    };

    function randomClickHandler() {

        var randomNumber = Math.floor(Math.random() * 6);

        filmService.getFilm(randomNumber, function(film) {

            myView.render(film);
        });
    }

    return externals;
});