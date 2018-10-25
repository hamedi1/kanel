
$.getJSON('/json/mainSv.json', lang);
$.getJSON('/json/mainEn.json', Englang);

$('.engelska').on('click',function(){
$('.sv').hide();
$('.en').show();
});

$('.svenska').on('click',function(){
    $('.en').hide();
    $('.sv').show();
    });
    


function lang(myLang)  {

  for (let key in myLang) {
    let swedish = myLang[key]["sv"]; {

      for (let swe of swedish) {

        //Navigation Swedish
        $(swe.hem).appendTo('.hem').addClass('sv');
        $(swe.history).appendTo('.navHistory').addClass('sv');
        $(swe.spelet).appendTo('.spelet').addClass('sv');
        $(swe.kontakt).appendTo('.contact-us').addClass('sv');


        //body Swedish
        $(swe.theGame).appendTo('.about').addClass('sv');;
        $(swe.kontakt).appendTo('.kortTitel').addClass('sv');;
        $(swe.kontakttele).appendTo('.kortText').addClass('sv');;

        
        //footer swedish
        $(swe.adressH5).appendTo('.adressH5').addClass('sv');;
        $(swe.adressP).appendTo('.adressP').addClass('sv');;
        $(swe.phoneH5).appendTo('.phoneH5').addClass('sv');;
        $(swe.phoneP).appendTo('.phoneP').addClass('sv');;
        $(swe.emailH5).appendTo('.emailH5').addClass('sv');;
        $(swe.emailP).appendTo('.emailP').addClass('sv');;
      }
    }
  }
}


function Englang(myLang){
  for (let key in myLang) {
    let english = myLang[key]["en"]; {

      for (let eng of english) {
      //Navigation English
      $(eng.home).appendTo('.hem').addClass('en');
      $(eng.history).appendTo('.navHistory').addClass('en');
      $(eng.spelet).appendTo('.spelet').addClass('en');
      $(eng.kontakt).appendTo('.contact-us').addClass('en');

      //body English
      $(eng.theGame).appendTo('.about').addClass('en');
      $(eng.kontakt).appendTo('.kortTitel').addClass('en');;
      $(eng.kontakttele).appendTo('.kortText').addClass('en');;

      
      //footer English
      $(eng.adressH5).appendTo('.adressH5').addClass('en');
      $(eng.adressP).appendTo('.adressP').addClass('en');
      $(eng.phoneH5).appendTo('.phoneH5').addClass('en');
      $(eng.phoneP).appendTo('.phoneP').addClass('en');
      $(eng.emailH5).appendTo('.emailH5').addClass('en');
      $(eng.emailP).appendTo('.emailP').addClass('en');
  
      }
    }
  }
  
}
$(document).on('click', '.normal', function(){
  $(".paddle").css("width", "200px");
});
$(document).on('click', '.hard', function(){
  $(".paddle").css("width", "100px");
});

