var movie=[
    {
        title: "avengers",
        rating: "4.5",
        hasWatched: true
    },
    {
        title: "avengers2",
        rating: "5.5",
        hasWatched: false
    }
]
var input= prompt("what do you like to do");
while(input !== "quit"){
if(input=== "add"){
    addToList();
}
else if(input ==="list"){
    showList();
}
input= prompt("what would you like to do")
}
function addToList(){
    var name= prompt("enter name")
    var rating= prompt(" enter rating")
    var hasWatched= prompt("has watched?")

    movie.push({"title":name, rating, hasWatched})
}
function showList(){
    movie.forEach(function(mov){
        var result= "you have"
        if(mov.hasWatched == true)
        result += " watched "
        else
        result += " not watched "
        result += mov.title;
        result += " with Rating "
        result += mov.rating
        console.log(result);
    })

};
