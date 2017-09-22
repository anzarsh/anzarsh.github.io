(function() {

    var Courses = function() {
        this.grid = document.querySelector(".courses__grid");
        this.priceSelect = document
                .querySelector(".courses__price-change .courses__select");
        this.priceSelectValue = 
            this.priceSelect.options[this.priceSelect.selectedIndex].value;
        this.template = document.querySelector(".courses__item")
                            .cloneNode(true);

        this.addQuickLinks(this.template);

        this.addEvents();
    };

    Courses.prototype = Object.create(lib.Event.prototype);

    Courses.prototype.addEvents = function() {
        var self = this;

        this.on("Request__filtered", function(e) {
            self.updateCourses(e.detail);
        });

        this.priceSelect.onchange = function(e) {
            self.priceSelectValue = 
                self.priceSelect.options[self.priceSelect.selectedIndex].value;
            self.emit("Course__price-changed", self.priceSelectValue);
        };
    };

    Courses.prototype.addQuickLinks = function(template) {
        template.elements = {};
        template.elements.image = template.querySelector(".courses__image");
        template.elements.title = template.querySelector(".courses__title");
        template.elements.grade = template.querySelector(".courses__grade");
        template.elements.genre = template.querySelector(".courses__genre");
        template.elements.meta = 
            template.querySelector(".courses__meta .courses__link");
        template.elements.controls = 
            template.querySelector(".courses__controls .courses__button");
        template.elements.try = template.querySelector(".courses__try");
    };

    Courses.prototype.updateCourses = function(courses) {
        this.clearGrid();

        for(var i = 0; i < courses.length; i++) {
            var course = new lib.Course(
                    this.template, courses[i], this.priceSelectValue);
            this.grid.appendChild(course.html);
        }
    };

    Courses.prototype.clearGrid = function() {
        while(this.grid.firstChild) {
            this.grid.removeChild(this.grid.firstChild);
        }
    };


    window.lib = window.lib || {};
    window.lib.Courses = Courses;

})();