(function(){
    
    var App = function(){
        var self = this;
        
        this.event = new lib.Event();
        this.request = new lib.Request();

        this.filter = new lib.Filter();
        this.courses = new lib.Courses();
        
    };

    App.prototype = Object.create(lib.Event.prototype);

    window.lib = window.lib || {};
    window.lib.App = App;


})();