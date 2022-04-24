var curScroll;
var prevScroll = window.scrollY || document.documentElement.scrollTop;
var curDirection = 0;
var prevDirection = 0;

var header = document.getElementById("site-header");
var toggled;
var threshold = 200;

var checkScroll = function () {
  curScroll = window.scrollY || document.documentElement.scrollTop;
  if (curScroll > prevScroll) {
    // scrolled down
    curDirection = 2;
  } else {
    //scrolled up
    curDirection = 1;
  }

  if (curDirection !== prevDirection) {
    toggled = toggleHeader();
  }

  prevScroll = curScroll;
  if (toggled) {
    prevDirection = curDirection;
  }
};

var toggleHeader = function () {
  toggled = true;
  if (curDirection === 2 && curScroll > threshold) {
    header.classList.add("hide");
  } else if (curDirection === 1) {
    header.classList.remove("hide");
  } else {
    toggled = false;
  }
  return toggled;
};

window.addEventListener("scroll", checkScroll);
