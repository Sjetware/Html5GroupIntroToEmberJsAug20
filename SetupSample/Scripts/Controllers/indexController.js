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