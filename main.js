$(document).ready(function(){

  //click input
  $(".prev").click(function(){
    var activeImgEl = $("img.active")
    activeImgEl.removeClass("active")
    if(activeImgEl.hasClass("first")){
      $("img.last").addClass("active")

    }else{
      activeImgEl.prev().addClass("active")
    }

  })


  $(".next").click(function(){
    var activeImgEl = $("img.active")
    activeImgEl.removeClass("active")
    if(activeImgEl.hasClass("last")){
      $("img.first").addClass("active")

    }else{
      activeImgEl.next().addClass("active")
    }

  })





  //Arrow input
  $(document).keydown(function(event) {
    var activeImgEl = $("img.active")

    if(event.which == 37){


      activeImgEl.removeClass("active")

      if(activeImgEl.hasClass("first")){
        $("img.last").addClass("active")

      }else{
        activeImgEl.prev().addClass("active")
      }

    }
    else if(event.which == 39){

      activeImgEl.removeClass("active")

      if(activeImgEl.hasClass("last")){
        $("img.first").addClass("active")

      }else{
        activeImgEl.next().addClass("active")
      }

    }


  })

})


document.addEventListener("keydown", function(event) {
  console.log(event.which);
})




// $(document).bind('keydown', 'left', function() {
//   var activeImgEl = $("img.active")
//   activeImgEl.removeClass("active")
//   if(activeImgEl.hasClass("first")){
//     $("img.last").addClass("active")
//
//   }else{
//     activeImgEl.prev().addClass("active")
//   }
//
//
