/// <reference path="ember.min-1.6.1.js" />
(function () {

    var App = Ember.Application.create();

    App.Router.map(function () {

        this.route('about'); // is equivalent to this.route('about', { path: '/about' });

        this.resource('email', function () {
            this.route('inbox');
        });

    });

    window.App = App;
})();
/// <reference path="../ember.min-1.6.1.js" />

(function () {

    var App = window.App;

    App.ApplicationRoute = Ember.Route.extend({
        // nothing here!
    });

})();
(function () {

    var App = window.App;

    App.IndexRoute = Ember.Route.extend({
        model: function () {
            return {
                bar: 'baz',
                colors: ['red', 'green', 'blue']
            };
        }
    });

})();
/// <reference path="../ember.min-1.6.1.js" />
(function () {

    var App = window.App;

    App.IndexController = Ember.ObjectController.extend({
        count: 0,
        isVisible: Ember.computed.gt('count', 3),
        actions: {
            foo: function () {
                console.log('Foo called!');
            },
            increment: function () {
                this.set('count', this.get('count') + 1);
            }
        }
    });

})();