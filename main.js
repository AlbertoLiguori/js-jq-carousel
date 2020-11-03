$(document).ready(function(){


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

})
