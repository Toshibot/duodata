

// Data - Fixture/Results

function dataDuo() {
    $.getJSON('https://www.duolingo.com/2017-06-30/users?username=Tardesh&_=1562161200287', function(json){

        var course = json.users[0].courses[0];
        var course_name = course.title;
        var crowns = course.crowns;
        var xp = course.xp;

        var crowns_goal = 120*5;
        var crowns_complete = (crowns/crowns_goal)*100;

        console.log(json);

        $('duo').append(
            '<h2>Duo ' + course_name + '</h2>' +
            '<progress max="100" value="' + crowns_complete + '"></progress>' +
            '<p>' + Math.round(crowns_complete) + '% complete</p>'
        );
    })
}