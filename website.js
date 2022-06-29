function reveal(name, elementVisible) {
  var reveals = document.querySelectorAll(name);

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var ratio = windowHeight/windowWidth ;
    var elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < ((ratio) * 100 - (elementVisible/ratio))) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", function(){
  reveal(".reveal", 330);
  reveal(".nrevea", 690);
  reveal(".revea", 1050);
});

reveal(".reveal", 700);
reveal(".nrevea", 1450);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}