// JavaScript Document

// Select all buttons and the cat SVG
var btns = document.querySelectorAll(".buttons button");
var cat = document.getElementsByClassName("cat")[0];
var mouth = document.querySelector("path.mouth"); // Select the mouth path element

// Add event listeners to buttons
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", manageCatClasses);
}

function manageCatClasses() {
  // Add classes based on the button's data-add attribute
  if (this.getAttribute("data-add")) {
    cat.classList.add(this.getAttribute("data-add"));

    // Special case for the "sad" button
    if (this.getAttribute("data-add") === "sad") {
      mouth.classList.add("mouth-down"); // Add class to make mouth sad
    }

    // If "Move Around" is clicked, start continuous rotation
    if (this.getAttribute("data-add") === "move-around") {
      cat.classList.add("rotate-clockwise");
    }
  }

  // Remove classes based on the button's data-remove attribute
  if (this.getAttribute("data-remove")) {
    cat.classList.remove(this.getAttribute("data-remove"));

    // Special case for the "sad" button
    if (this.getAttribute("data-remove") === "sad") {
      mouth.classList.remove("mouth-down"); // Remove class to reset mouth
    }

    // If "Sit Still" is clicked, stop the rotation and reset to upright position
    if (this.getAttribute("data-remove") === "move-around") {
      cat.classList.remove("rotate-clockwise");
      cat.style.transform = "rotate(0deg)"; // Reset to upright
    }
  }
}
