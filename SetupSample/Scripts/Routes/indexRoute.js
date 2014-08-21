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