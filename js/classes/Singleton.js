define([], function() {
    var instance = null;

    var Singleton = function() {
        var _this = this;

        _this.name = Singleton.DEFAULT_NAME;

    }

    Singleton.prototype = {
        setName: function(name) {
            this.name = name;
            return this;
        },

        getName: function() {
            return this.name;
        }
    }

    Singleton.getInstance = function() {

        if (instance === null) {
            instance = new Singleton();
        }

        return instance;
    };

    Singleton.DEFAULT_NAME = 'James Watson'

    return Singleton.getInstance();
});