 /*   $("#box").show();



    $("#firstA").on("click", function(){


    // $("#box").toggle();
        $("#box").slideToogle();
        //$("#box").hide();


    });
*/



/*$("#firstA").on("click", function(){


    // $("#box").toggle();
    //alert($(".dope").text());
    $("#box").val("jf");
 
 
});*/
 
 /*$("#firstA").on("click", function(){


    // $("#box").toggle();
     $(".dope").text("bagali");
     //$("#box").hide("jf");
 
 
 });*/


 /*$("#btn_new").on("click", function(){


    
    $(".dope").html('<b class="cool"> hej </b>')
 
    });*/

    /* $("form").on("submit", function(){


    
       var DN = $("input#en").val()
        
       alert(DN);
    });*/


    /*var cat = {

        "name": "Meowsalot,",
        "surname": "hamedi",
        "favFod": "tuna"

    } 

    var myFavColors = [


        {        "name": "Meowsalot,",
        "surname": "hamedi",
        "favFod": "tuna"},


        {        "name": "dfsaf,",
        "surname": "hamedi",
        "favFod": "kebab"}
    ] 



    thePets[1].favFood */


    var pageCounter = 1;








    var ani = document.getElementById("animal-info");
    
    var btn = document.getElementById("btn");
    
    
    
    
    
    
    
        btn.addEventListener("click", function(){
    
    
    
    
            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET', href="/salad.json");
            + pageCounter + '.json';
        
            ourRequest.onload = function (){
        
        
        
                var ourData = JSON.parse(ourRequest.responseText);
                 renderHTML(ourData);
        
        
        
        
            };
        
            ourRequest.send();
    
            pageCounter++; 
    
    
    if (pageCounter > 3){
        btn.classList.add("hide");
    
    
    
    }
    
    
    
    
    
        });
    
    
    
     
    
    
    
    
    
    
    
    
    
    
    
    
        function renderHTML(data) {
            var htmlString = "";
          
            for (i = 0; i < data.length; i++) {
              htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
              
              for (ii = 0; ii < data[i].foods.likes.length; ii++) {
                if (ii == 0) {
                  htmlString += data[i].foods.likes[ii];
                } else {
                  htmlString += " and " + data[i].foods.likes[ii];
                }
              }
          
              htmlString += ' and dislikes ';
          
              for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
                if (ii == 0) {
                  htmlString += data[i].foods.dislikes[ii];
                } else {
                  htmlString += " and " + data[i].foods.dislikes[ii];
                }
              }
          
              htmlString += '.</p>';
          
            }
          
            ani.insertAdjacentHTML('beforeend', htmlString);
          }
    
       
    



















          function start(todoList){ 
            console.log('Now we have JSON');
            // please note when
            // writing tags with jQuery
            // we create new HTML elements
            // (here we create an ul-element
            // as a jQuery objekt)
            let ul = $('<ul/>');
            for(let chore of todoList){
              // append - add something
              // last inside me
              let li = $('<li/>');
              li.append('<h4>' + chore.name + '</h4>');
              li.append('<p class="chore-description">' + chore.description + '</p>');
              ul.append(li);
            }
            // jQuery grab the body element
            // and append the ul inside it
            $('body').append(ul);
           
            // add a click event to show/hide
            // chore descriptions
            $('ul h4').click(function(){
              // 'this' is the raw HTML-element
              // I clicked on.
              // me => the h4 as a jQuery object
              let me = $(this); 
              // since we know the p element 
              // with the description comes
              // directly after me we can use next
              let descriptionPTag = me.next();
              // toggle - show if hidden, hide if shown
              descriptionPTag.toggle();
            });
          }
           
          // Ask jQuery to load some json data
          // from a url-path and then run the function start
          $.getJSON('/todo-list.json', start);
          // This will be displayed first
          // because the JSON isn't loaded instantly
          console.log('No JSON yet');
          // When the JSON has loaded we will see
          // the console.log inisde the function start
          