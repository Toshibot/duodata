

// Data - Fixture/Results

function dataDuo() {
    $.getJSON('https://www.duolingo.com/2017-06-30/users?username=Tardesh&_=1562161200287', function(json){

        var course = json.users[0].courses[0];

        console.log(course);
    })
}