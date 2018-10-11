(function() {
    
    var Request = function() {
        var self = this;

        this.data = {};

        // this.sendRequest("http://api.qa.imumk.ru/api/mobilev1/update",
        this.sendRequest("data.json",
            {'data':''}, 
            function(data) {
                self.emit("Request__success");
            }, function(error) {
                console.error(error);
            });

        this.on("Filter__update", function(e) {
            var filteredData = self.filter(e.detail);
            self.emit("Request__filtered", filteredData);
        });

    };

    Request.prototype = Object.create(lib.Event.prototype);

    Request.prototype.sendRequest = function(url, sendData, callback, error) {
        var self = this;

        this.xhr = new XMLHttpRequest();
        // this.xhr.open("POST", url, true);
        this.xhr.open("GET", url, true);
        this.xhr.onreadystatechange = function(e) {
            if(this.readyState != 4) return;
            if(this.status == 200){
                var data = JSON.parse(this.responseText);
                if(data.result == "Ok") {
                    self.data = data;
                    callback(self.data);
                } else {
                    error(data.errorMessage)
                }
            } else {
                error(this.status + " : " + this.statusText);
            }
        };
        this.xhr.setRequestHeader("Content-Type", "application/json");
        this.xhr.send(JSON.stringify(sendData));
    };

    Request.prototype.filter = function(searchData) {
        var subject = searchData.subject === "" ? true : false;
        var genre = searchData.genre === "" ? true : false;
        var grade = searchData.grade === "" ? true : false;
        var search = searchData.search === "" ? true : false;
        searchData.search = searchData.search.toLowerCase();


        var data = this.data.items;

        var filteredData = [];

        for(var i = 0; i < data.length; i++) {
            var grades = data[i].grade.split(";");
            if( (subject || data[i].subject == searchData.subject) &&
                (genre || data[i].genre == searchData.genre) &&
                (grade || ~grades.indexOf(searchData.grade)) &&
                (search || ~data[i].title
                            .toLowerCase().indexOf(searchData.search))) {

                filteredData.push(data[i]);

            }
        }

        return filteredData;

    };

    window.lib = window.lib || {};
    window.lib.Request = Request;

})();