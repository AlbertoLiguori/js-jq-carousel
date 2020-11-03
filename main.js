$(document).ready(function(){

  //click input

  $(".prev").click(function(){

    backward("img.active , .ico.active")
    // backward(".ico.active")


  })

  $(".next").click(function(){

    forward("img.active,.ico.active")
    // forward(".ico.active")

  })




  //Arrow input
  $(document).keydown(function(event) {
    var activeImgEl = $("img.active")

    if(event.which == 37){

      backward("img.active , .ico.active")


    }
    else if(event.which == 39){

      forward("img.active,.ico.active")

    }

  })

})


document.addEventListener("keydown", function(event) {
  console.log(event.which);
})
