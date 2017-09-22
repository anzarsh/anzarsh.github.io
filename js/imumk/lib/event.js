(function() {
    var Event = function() {
        try {
            new CustomEvent(
                "IE has CustomEvent, but doesn't support constructor");
        } catch (e) {
            window.CustomEvent = function(event, params) {
            var evt;
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(
                event,
                params.bubbles,
                params.cancelable,
                params.detail
            );
            return evt;
            };
            CustomEvent.prototype = Object.create(window.Event.prototype);
        }
    };

    Event.prototype.emit = function(eventName, data) {
        return document.dispatchEvent(new CustomEvent(eventName, { 
            bubbles: true,
            cancelable: true,
            detail: data
        }));
    };

    Event.prototype.on = function(eventName, callback) {
        document.addEventListener(eventName, callback, false);
    };

    window.lib = window.lib || {};
    window.lib.Event = Event;
})();