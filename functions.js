function backward(){

  var activeEl = $("img.active , .ico.active");
  var lastEl = $("img.last, .ico.last");

  activeEl.removeClass("active");

  if(activeEl.hasClass("first")){
    lastEl.addClass("active");

  }else{
    activeEl.prev().addClass("active");
  }

}

function forward(){

  var activeEl = $("img.active , .ico.active");
  var firstEl = $("img.first, .ico.first");

  activeEl.removeClass("active");

  if(activeEl.hasClass("last")){
    firstEl.addClass("active");

  }else{
    activeEl.next().addClass("active");
  }

}
