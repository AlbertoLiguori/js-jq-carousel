function backward(el){

  var activeEl = $(el)

  activeEl.removeClass("active")

  if(activeEl.hasClass("first")){
    $("img.last").addClass("active")

  }else{
    activeEl.prev().addClass("active")
  }

}

function forward(el){

  var activeEl = $(el)

  activeEl.removeClass("active")

  if(activeEl.hasClass("last")){
    $("img.first").addClass("active")

  }else{
    activeEl.next().addClass("active")
  }


}
