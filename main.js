$(document).ready(function(){

  //Click input

  $(".prev").click(function(){

    backward();

  })

  $(".next").click(function(){

    forward();

  })

  //Arrow input
  $(document).keydown(function(event) {

    if(event.which == 37){

      backward();

    }

    else if(event.which == 39){

      forward();

    }

  })

})
