

// Data - Fixture/Results

function dataDuo() {
    // $.getJSON('https://www.duolingo.com/2017-06-30/users/118369997?fields=courses', function(json){

    //     var course = json.courses[0];
    //     var course_name = course.title;
    //     var crowns = course.crowns;
    //     var xp = course.xp;

    //     var crowns_goal = 120*5;
    //     var crowns_complete = (crowns/crowns_goal)*100;

    //     console.log(json);

    //     $('duo').append(
    //         '<h2>Duo ' + course_name + '</h2>' +
    //         '<progress max="100" value="' + crowns_complete + '"></progress>' +
    //         '<p>' + Math.round(crowns_complete) + '% complete</p>'
    //     );
    // })

    // var self = this;

    // self.ajax = function(uri, method, data) {
    //     var request = {
    //        url: uri,
    //        type: method,
    //        accepts: "application/json",
    //        cache: false,
    //        dataType: "json",
    //        data: JSON.stringify(data),
    //        headers: {"Access-Control-Allow-Origin": "https://toshibot.github.io/duodata" },
    //        error: function (jqXHR) {
    //              console.log("ajax error " + jqXHR.status);
    //        }
  
    //     };
  
    //     return $.ajax(request);
    // }

    // self.tasksURI = "https://www.duolingo.com/2017-06-30/users/118369997?fields=courses";

    // self.ajax(self.tasksURI, 'GET').done(function(data) {
    //     console.log(data);
    //     var course = data.courses[0];
    //     var course_name = course.title;
    //     var crowns = course.crowns;
    //     var xp = course.xp;

    //     var crowns_goal = 120*5;
    //     var crowns_complete = (crowns/crowns_goal)*100;

    //     $('duo').append(
    //         '<h2>Duo ' + course_name + '</h2>' +
    //         '<progress max="100" value="' + crowns_complete + '"></progress>' +
    //         '<p>' + Math.round(crowns_complete) + '% complete</p>'
    //     );
    // })


    const url = 'https://www.duolingo.com/2017-06-30/users/118369997?fields=courses';

    $.get(url, function(data, status){
        console.log(data);

        var course = data.courses[0];
        var course_name = course.title;
        var crowns = course.crowns;
        var xp = course.xp;

        var crowns_goal = 120*5;
        var crowns_complete = (crowns/crowns_goal)*100;

        $('duo').append(
            '<h2>Duo ' + course_name + '</h2>' +
            '<progress max="100" value="' + crowns_complete + '"></progress>' +
            '<p>' + Math.round(crowns_complete) + '% complete</p>'
        );
    })
}