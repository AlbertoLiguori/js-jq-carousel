$(document).ready(function(){

  //click input

  $(".prev").click(function(){

    backward("img.active , .ico.active");

  })

  $(".next").click(function(){

    forward("img.active,.ico.active");

  })

  //Arrow input
  $(document).keydown(function(event) {

    if(event.which == 37){

      backward("img.active , .ico.active");

    }

    else if(event.which == 39){

      forward("img.active,.ico.active");

    }

  })

})
