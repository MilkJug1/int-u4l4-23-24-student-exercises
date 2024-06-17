let button = document.querySelector(".button");
let californiaMessage = document.querySelector(".california");
let illinoisMessage = document.querySelector(".illinois");
let newyorkMessage = document.querySelector(".new-york");
let other = document.querySelector(".other");

button.addEventListener("click", function() {
    let state = document.querySelector(".state").value;

    // CODE ALONG
    // 1. Write an if statement that would display the california message if a user says they're from "California".
    if (state === "California") {
        californiaMessage.style.display = "block"
        other.style.display = "none";

    } else {
        other.style.display = "block";
        californiaMessage.style.display = "none";
    }
    
    if (state === "Illinois") {
        other.style.display = "none";
        illinoisMessage.style.display = "block";
    } else {
        illinoisMessage.style.display = 'none';
        other.style.display = "block";
    }
    // CODE SOLO
    // 2. Write an else if statement that would display the illinois message if a user says they're from "Illinois".
    
    // 3. Write an else if statement that would display the new york message if a user says they're from "New York".
    if (state === "New York") {
        other.style.display = "none";
        newyorkMessage.style.display = "block";
    } else { 
        newyorkMessage.style.display = "none";
        other.style.display = "block";
    }
    // 4. Write an else statement that displays the other message if the user types in a different state.


});

// Finished early? 
//  - Add another state of your choosing!
//  - See if you can update your statements to accept a user typing the state in different ways: all caps, all lowercase, and first letter capitalized.
//  - This will be in our next lesson, but do some research and see if you can figure it out 💪
