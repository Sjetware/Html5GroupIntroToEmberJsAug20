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