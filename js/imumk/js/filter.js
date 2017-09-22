(function() {

    var Filter = function() {
        var self = this;

        this.form = document.querySelector(".filter__form");
        this.subj = this.form.elements.subj;
        this.genre = this.form.elements.genre;
        this.grade = this.form.elements.grade;
        this.search = this.form.elements.search;

        this.addEvents();
    };

    Filter.prototype = Object.create(lib.Event.prototype);

    Filter.prototype.addEvents = function() {
        var self = this;
        
        this.on("Request__success", function() {
            self.updateFilter();
        });

        this.form.onsubmit = function(e) {
            e.preventDefault();
            self.updateFilter();
        };

        this.subj.onchange = function(e) {
            self.updateFilter();
        };

        this.genre.onchange = function(e) {
            self.updateFilter();
        };

        this.grade.onchange = function(e) {
            self.updateFilter();
        };

        this.search.onkeyup = function(e) {
            self.updateFilter();
        };
    };

    Filter.prototype.updateFilter = function() {
        var subject = this.subj.options[this.subj.selectedIndex].value === ""
             ? "" : this.subj.options[this.subj.selectedIndex].text;
        var genre = this.genre.options[this.genre.selectedIndex].value === ""
             ? "" : this.genre.options[this.genre.selectedIndex].text;
        var grade = this.grade.options[this.grade.selectedIndex].value === ""
             ? "" : this.grade.options[this.grade.selectedIndex].text;

        this.emit("Filter__update", {
            subject : subject,
            genre : genre,
            grade : grade,
            search : this.search.value
        });
    };

    window.lib = window.lib || {};
    window.lib.Filter = Filter;

})();