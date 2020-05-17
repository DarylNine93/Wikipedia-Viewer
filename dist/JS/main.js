$(document).ready(function(){

    const search_input = document.querySelector("#search");
    const output = document.querySelector(".output");
    const loader = document.querySelector("#loader");

    search_input.addEventListener("search", function(){
        var search_value = search_input.value;
        var search_result = [];
        loader.classList.add("loader");
        var url = "http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + search_value + "&format=json&origin=*";
        $.ajax({
            url: url,
            success: function(result){
               search_result = result.query.search;
               console.log(search_result);
               output.innerHTML = "";
               search_result.forEach(element => {
                   var box = document.createElement("div");
                   var title = document.createElement("h3");
                   var title_node = document.createTextNode(element.title);
                   var description = document.createElement("p");
                   var description_node = document.createTextNode(element.snippet.replace(/(<([^>]+)>)/ig, ''));
                   title.appendChild(title_node);
                   description.appendChild(description_node);
                   box.classList.add("box");
                   box.appendChild(title);
                   box.appendChild(description);
                   output.appendChild(box);
                   loader.classList.remove("loader");
               });
            },
            error: function(){
                console.log("Got Error");
            }
            
        })
    })
    
})