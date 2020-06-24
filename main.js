const tanya = document.getElementById("one");
const john = document.getElementById("two");
var first = true;

function prev() {
  if (first) {
    tanya.style.display = "none";
    john.style.display = "inline";
    first = false;
  } else {
    tanya.style.display = "inline";
    john.style.display = "none";
    first = true;
  }
}

function next() {
  if (!first) {
    tanya.style.display = "inline";
    john.style.display = "none";
    first = true;
  } else {
    tanya.style.display = "none";
    john.style.display = "inline";
    first = false;
  }
}
