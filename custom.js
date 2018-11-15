Handlebars.registerHelper('lte', function (v1, v2, options) {
    if (v1 <= v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

$(document).ready(function() {

    var templateArticleFn = Handlebars.compile($("#template-article").html());

    Gitana.connect({
        "clientKey": "{{{clientKey}}}",
        "clientSecret": "{{{clientSecret}}}",
        "username": "{{{username}}}",
        "password": "{{{password}}}",
        "baseURL": "{{{baseURL}}}",
        "application": "{{{application}}}"
    }, function (err) {

        if (err) {
            var errorText = "An error occurred while attempting to connect to the Cloud CMS API";
            console.error(errorText, err);
            alert(errorText + "\rPlease check the console error log.");
            return;
        }

        this.datastore("content").readBranch("master").then(function() {
            var query = {
                "_type": "my:article"
            };
            var pagination = {
                "sort": {
                    "_system.created_on.ms": -1
                }
            };
            this.queryNodes(query, pagination).each(function() {

                this.coverURL = "/proxy" + this.getUri() + "/preview/cover?name=default&mimetype=image/jpeg&size=300";
                this.downloadURL = "/proxy" + this.getUri() + "/attachments/default?a=" + this.title;

                // ensure some defaults exists
                if (typeof(this.title) === "undefined") {
                    this.title = "Sample title";
                }
                if (typeof(this.body) === "undefined") {
                    this.body = "Sample body";
                }
                if (typeof(this.rating) === "undefined") {
                    this.rating = 3;
                }
                if (typeof(this.heading) === "undefined") {
                    this.heading = "Sample heading";
                }
                if (typeof(this.summary) === "undefined") {
                    this.summary = "Sample summary";
                }
                if (typeof(this.author) === "undefined") {
                    this.author = "Sample author";
                }

                var html1 = templateArticleFn({article: this});
                $(".page-body").append(html1);

            });
        });
    });
});