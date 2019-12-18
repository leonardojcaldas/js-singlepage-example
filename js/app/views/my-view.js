define(function() {
    var internals = {};
    var externals = {};

    internals.elements = {};
    internals.handlers = {};

    internals.events = {
        randomClick: bindRandomClickHandler
    };

    externals.bind = function(event, handler) {
        internals.events[event](handler);
    };

    externals.render = function(params) {
        renderButton();
        renderCard(params);
    };

    function renderButton() {

        internals.elements.app = $('#app');
        internals.elements.button = $(button());
        internals.elements.button.click(internals.handlers.randomClickHandler);
        internals.elements.app.empty();
        internals.elements.app.append(internals.elements.button);
    }

    function renderCard(data) {
        if(!data) {
            return;
        }

        internals.elements.app.append($(card(data)));
    }

    function button() {
        return ('<button> Click me for a random film </button>');
    }

    function card(film) {
        return (
            '<div>' +
            '<p><strong> Title: </strong>' + film.title + '</p>' +
            '<p><strong> Year: </strong>' + film.year + '</p>' +
            '<p><strong> Director: </strong>' + film.director + '</p>' +
            '<p><strong> IMDB Rating: </strong>' + film.imdbRating + '</p>' +
            '</div>'
        );
    }

    function bindRandomClickHandler(handler) {

        internals.handlers.randomClickHandler = function() {
            handler();
        }
    }

    return externals;
});

