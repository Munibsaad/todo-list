var list  = document.getElementById("list")




function addtodo(){
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement("li")
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)
    console.log(li)
    list.appendChild(li)
    todo_item.value=""
}

