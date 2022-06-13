function reveal(name, elementVisible) {
  var reveals = document.querySelectorAll(name);

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", function(){
  reveal(".reveal", 1050);
  reveal(".nrevea", 1950);
});

reveal(".reveal", 1050);
reveal(".nrevea", 1950);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}