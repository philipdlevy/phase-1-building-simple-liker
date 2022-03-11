
/*
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal"); //a variable that selects the error message. 
// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => { //makes our content load correctly. 
  console.log("DOM CONTENT IS LOADED") //not needed but double checking it's working. 

  clickListener(); // we are executing our functions below so that when the page loads, our event listeners are added to the code they are attached to. 

  //call find likes function and execute it. 
  //findLikes(); // have to invoke this so that when our page loads with the info above, our event listeners will be added onto whatver code they are attatched to. 
});


//function findLikes() {
  //const heartSelectors = document.querySelectorAll(".like-glyph")

  //heartSelectors.forEach((singleHeart) => {
    //singleHeart.addEventListener("click", () => console.log("You found me"))
  //})
//}


function hideError() { //function that adds the hidden class to our variable above, errorModal which selects the id. 
  errorModal.classList.add("hidden")
};

//another way to write the findLikes() function. this is a global way that affects all of the classes for the hearts. 
function clickListener() {
  document.addEventListener('click', (event) => {
    //if i click on the heart then console.log("you found me"), otheriwse, do nothing. 
    if (event.target.classList[0] === 'like-glyph') { //the like-glyph is the class of the heart button. So if we click that class or heart, do something, otherwise, do nothing. 
      //console.log("You found me! like!")
      mimicServerCall() //if we click on the heart above in the if statement, run the server code below. it's a server with a promise and a catch so add a .then and a .catch.
        //.then(resp => console.log(resp))  //300 ms. look below for new code. 
        .then((resp) => {
          const activated = event.target.classList.contains("activated-heart"); //variable that work with the if else statement below. no idea where the activated heart came from.

          //activated                                                 //This is one single way to make the heart red if you click it, and make it 
          //? event.target.classList.remove("activated-heart")        not red if it is clicked again. We are utilizing our activated variable above. 
          //: event.target.classList.add("activated-heart");

          //second way to write it using an if else statement. 
          if (activated) {
            event.target.classList.remove("activated-heart")
            event.target.innerHTML = EMPTY_HEART
          } else {
            event.target.classList.add("activated-heart")
            event.target.innerHTML = FULL_HEART
          }
        })
        .catch((error) => {
          errorModal.classList.remove("hidden")
          setTimeout(() => {
            //errorModal.classList.add("hidden") // this will hide the error message after 3 seconds. We can have a function that does this because we add it so many times.
            hideError() //instead of writing out the code to hide the message, we call the functin above that hides the error. 
          }, 3000)
        })   //when the promise fails, the .catch catches it. lets handle what happens when we get this error message. 
    }
  })
}
*/


/* //the real code we need
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal"); //a variable that selects the error message
// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => { //event listener that loads the DOM and a console.log to make sure it works
  console.log("DOM CONTENT IS LOADED")

  clickListener(); //a function that is invoked so that when the page loads, all of the event listerners are working and active. 
});

function hideError() { // this function selects the variable above that selects the id of the error message and hides it and gives it a class of hidden. 
  errorModal.classList.add("hidden")
};

function clickListener() { //this functions creates the click listener that invokes the server call below, and uses the click listener to activate the hearts. 
  document.addEventListener('click', (event) => { //event listener that happens when we click the heart and we select the class. 
    if (event.target.classList[0] === 'like-glyph') {
      mimicServerCall() //server request
        .then((resp) => { //.then that handles the server request
          const activated = event.target.classList.contains("activated-heart");
          

          if (activated) { //if statement that colors in the hearts when we click the heart. 
            event.target.classList.remove("activated-heart")
            event.target.innerHTML = EMPTY_HEART
          } else {
            event.target.classList.add("activated-heart")
            event.target.innerHTML = FULL_HEART
          }
        })
        .catch((error) => { //the .catch that handles the errors when we request a server call. 
          errorModal.classList.remove("hidden")
          setTimeout(() => {
            hideError() 
          }, 3000) // 3 second wait. 
        })    
    }
  })
}
*/

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal")
errorModal.classList.add("hidden");

document.addEventListener("DOMContentLoaded", () => {

  heartClicker();
});

function hideError() {
  errorModal.classList.add("hidden")
};

function heartClicker() {
  document.addEventListener("click", (event) => {
    if (event.target.classList[0] === 'like-glyph') {
      mimicServerCall()
        .then((resp) => {
          const activated = event.target.classList.contains("activated-heart");

          if (activated) {
            event.target.classList.remove("activated-heart")
            event.target.innerHTML = EMPTY_HEART
          } else {
            event.target.classList.add("activated-heart")
            event.target.innerHTML = FULL_HEART
          }
        })
        .catch((error) => {
          errorModal.classList.remove("hidden")
          setTimeout(() => {
            hideError()
          }, 3000)
        })
        
    }
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
