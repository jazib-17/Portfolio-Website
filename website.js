function reveal(name, elementVisible) {
  var reveals = document.querySelectorAll(name);

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var ratio = windowHeight/windowWidth ;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var distanceToTop = window.pageYOffset;

    if (distanceToTop > (elementVisible * ratio) || ratio>0.8 || ratio<0.4) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", function(){
  reveal(".reveal", 830);
  reveal(".nrevea", 2520);
  reveal(".revea", 4350);
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}