function addToList(event) {

    // if not enter, ignore
    if(event.keyCode != 13)
        return false;

    // get and clean input text
    var newText = document.getElementById("new-text").value;
    document.getElementById("new-text").value = "";

    // create element
    var list = document.getElementById("todo-list");
    var element = document.createElement("data");
    var checkBox = document.createElement("input");
    var content = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    // set attribute for each 
    checkBox.setAttribute("type", "checkbox");
    content.setAttribute("value", newText);
    content.setAttribute("disabled", true);
    editButton.textContent = "編輯";
    deleteButton.textContent = "刪除";

    // set function for each
    checkBox.addEventListener("change", function(){
        if(checkBox.checked == true)
            content.setAttribute("class", "strike");
        else
            content.removeAttribute("class", "strike");
    })
    content.addEventListener("keypress", function(event){
        if(event.keyCode == 13)
            content.setAttribute("disabled", true);
    })
    editButton.addEventListener("click", function(){
        content.removeAttribute("disabled");
    });
    deleteButton.addEventListener("click", function(){
        element.parentNode.removeChild(element);
    });

    // gather to a single element and set id
    element.appendChild(checkBox);
    element.appendChild(content);
    element.appendChild(editButton);
    element.appendChild(deleteButton);
    element.appendChild(document.createElement("br"));
    list.appendChild(element);
    
    return true;
}


function selectWhichToShow(mode) {
    var childs = document.getElementById("todo-list").childNodes;
    for(var i=0; i<childs.length; ++i) {
        var checked = childs[i].childNodes[0].checked;
        var display = true;

        if (mode == 1 && checked == false || mode == 2 && checked == true)
            display = false;
        
        if(display == true)
            childs[i].removeAttribute("style");
        else
            childs[i].setAttribute("style", "display: none");
    }
}

window.onload = function() {
    var newText = document.getElementById("new-text");
    var list = document.getElementById("todo-list");
    var showAll = document.getElementById("show-all");
    var showFinished = document.getElementById("show-finished");
    var showUnfinished = document.getElementById("show-unfinished");

    newText.addEventListener("keypress", addToList);
    showAll.addEventListener("click", function(){ selectWhichToShow(0); });
    showFinished.addEventListener("click", function(){ selectWhichToShow(1); });
    showUnfinished.addEventListener("click", function(){ selectWhichToShow(2); });
}