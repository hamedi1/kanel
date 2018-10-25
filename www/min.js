$.getJSON('/todoList.json', start);

$('.button-holder').append('<button class="p-3" id="a">Svenska</button>');
    
function start(todoList) {

  $('#a').click(say);

  function say() {

     let menu = $('<div id="foodMenu"/>');
      for (let day in todoList) {
        let dayData = todoList[day];
        console.log("Veckodag", day);

        menu.append("Veckodag" + day + '<br>');
        for (let meal of dayData.sv) {
          console.log("name", meal.name, "desc", meal.desc);

          menu.append('<h3>' + meal.name + "</h3><p>" + meal.desc + '</p>');

        }
      }
      // Remove old #foodMenu element
      $(col).find('#foodMenu').remove();
      // Append new #foodmenu element
      $(col).append(menu);
    }


};


/*
  $.getJSON('todoList.json', start);

  function start(lunchData){

  var a = new XMLHttpRequest();

  a.onreadystatechange = function(){

    if (this.readyState == 4){
    
      var meal = JSON.parse(this.responseText);

    

    
        
              for (let day in lunchData) {
                let dayData = JSON.parse(this.lunchData);
                console.log("Veckodag", firstname);
                for (let meal of dayData.sv) {
                  console.log("name", meal.name, "desc", meal.desc);

                  output.innerHTML += "company", meal.firstname+ "<br>";

                }
              }

  }

  console.log(meal);

};
  



*/



