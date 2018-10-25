
$.getJSON('/todoListt.json', start);

$('.button-holder').append('<button class="p-3" id="b">Engelska</button>');

function start(todoListt) {

  $('#b').click(say);

  function say() {
      let menu = $('<div id="foodMenu"/>');
      for (let day in todoListt) {
        let dayData = todoListt[day];
        console.log("Veckodag", day);

        menu.append(day + '<br>');
        for (let meal of dayData.en) {
          console.log("name", meal.name, "desc", meal.desc);

          menu.append('<h3>' + meal.name + "</h3><p>" + meal.desc + '</p>');

        }
        // Remove old #foodMenu element
        $(col).find('#foodMenu').remove();
        // Append new #foodmenu element
        $(col).append(menu);
    }

  }
  
};
