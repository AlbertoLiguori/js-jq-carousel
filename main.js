$(document).ready(function(){

  //Click input

  $(".prev").click(function(){

    sliderPrev();

  })

  $(".next").click(function(){

    sliderNext();

  })

  //Arrow input
  $(document).keydown(function(event) {

    if(event.which == 37){

      sliderPrev();

    }

    else if(event.which == 39){

      sliderNext();

    }

  })

})
