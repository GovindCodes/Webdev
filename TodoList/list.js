var Todo= ["panda"]

var input= prompt("what You would like to do");
while(input !== "quit")
{
    if(input === "list")
    {
       listTodos();
    }
    else if(input=== "new")
    {
        addNew();
    }
    else if(input==="delete")
    {
       deleteTodo();
    }
    input= prompt("what You would like to do");
}
console.log("ok, you quit the application");

function listTodos(){
    console.log("************");
    Todo.forEach(function(td, i){
        console.log(i+" "+td);
    });
    console.log("************");
}
function addNew()
{
    var val= prompt("enter the vaue you want to push");
        Todo.push(val);
        console.log("Addaded Todo");
}
function deleteTodo(){
    var index= prompt("enter index from where you wish to delete the values");
    Todo.splice(index, 1);
    console.log("deleted Todo at "+index);
}