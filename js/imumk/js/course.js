(function() {

    var Course = function(template, data, priceSelectValue) {
        this.template = template;
        this.data = data;
        this.priceSelectValue = priceSelectValue;
        this.addDataToTemplate();
        this.html = this.template.cloneNode(true);
        this.html.js = this;
        this.clearTemplate();

        this.addEvents();
    };

    Course.prototype = Object.create(lib.Event.prototype);

    Course.prototype.addEvents = function() {
        var self = this;

        this.on("Course__price-changed", function(e) {
            self[e.detail]();
        });
    };

    Course.prototype.addDataToTemplate = function() {
        var template = this.template;
        var data = this.data;
        template.elements.image.src = "https://www.imumk.ru/covers/" +
                                        data.courseId + ".png";
        template.elements.image.alt = data.title;
        template.elements.title.textContent = data.subject;
        template.elements.genre.textContent = data.genre;
        template.elements.grade.textContent = this.gradeRange(data.grade);

        if(data.subject == "Демо-версия") {

            template.elements.meta.href = 
                "https://www.imumk.ru/player/" + data.courseId;
            template.elements.meta.textContent = "Перейти к обучению";

            template.elements.controls.href = 
                "https://www.imumk.ru/course/" + data.courseId;
            template.elements.controls.textContent = "Подробнее";

        } else {

            template.elements.meta.href = 
                "https://www.imumk.ru/course/" + data.courseId;
            template.elements.meta.textContent = "Подробнее";

            template.elements.controls.href = "#";
            template.elements.controls
                .setAttribute("data-offer", data.courseId);

            if(this.priceSelectValue == "changeToPrice") {

                template.elements.controls.textContent = "Купить за " +
                                                    data.price + " руб.";

            } else if(this.priceSelectValue == "changeToBonus") {

                template.elements.controls.textContent = "Купить за " +
                                        this.data.priceBonus + " бонусов";

            }

            var link = document.createElement("a");
            link.href = "#";
            link.textContent = "Попробовать";
            this.clearElem(template.elements.try);
            template.elements.try.appendChild(link);

        }
    };

    Course.prototype.gradeRange = function(grade) {
        if (grade.length == 0) return;
        
        var gradeArr = grade.split(";");
        postfix = gradeArr.length == 1 ? " класс" :
                  gradeArr.length > 1 ? " классы" : "";
        var gradeRange = gradeArr[0];
        currentI = 0;
        
        for (var i = 1; i < gradeArr.length; i++) {
            if(gradeArr[i] - gradeArr[i-1] == 1 && currentI == i - 1) {
                gradeRange += "-";
            } else if(gradeArr[i] - gradeArr[i-1] > 1 && currentI == i - 1) {
                currentI = i;
                gradeRange += "," + gradeArr[i];
            } else if(gradeArr[i] - gradeArr[i-1] > 1 && currentI < i - 1) {
                currentI = i;
                gradeRange += gradeArr[i-1] + "," + gradeArr[i];               
            }
            if(gradeArr[i] - gradeArr[i-1] == 1 && i == gradeArr.length - 1) {
                gradeRange += gradeArr[i];               
            }
        }

        return gradeRange + postfix;
    };

    Course.prototype.clearElem = function(elem) {
        while(elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
    };

    Course.prototype.clearTemplate = function() {
        var template = this.template;
        template.elements.image.src = "#";
        template.elements.image.alt = "#";
        template.elements.title.textContent = "";
        template.elements.genre.textContent = "";
        template.elements.grade.textContent = "";
        template.elements.meta.href = "#";
        template.elements.meta.textContent = "";
        template.elements.controls.href = "#";
        template.elements.controls.textContent = "";
        template.elements.controls.removeAttribute("data-offer");
        this.clearElem(template.elements.try);
    };

    Course.prototype.changeToBonus = function() {
        if(this.data.subject == "Демо-версия") return;
        this.html.querySelector(".courses__controls .courses__button")
            .textContent = "Купить за " + this.data.priceBonus + " бонусов";
    };

    Course.prototype.changeToPrice = function() {
        if(this.data.subject == "Демо-версия") return;
        this.html.querySelector(".courses__controls .courses__button")
            .textContent = "Купить за " + this.data.price + " руб.";
    };

    window.lib = window.lib || {};
    window.lib.Course = Course;

})();