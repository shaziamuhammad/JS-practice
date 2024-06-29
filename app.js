// Example of Switch statment

// This function takes a day of the week as an input and returns a message
function getDayMessage(dayOfWeek) {
    let message;
  
    switch (dayOfWeek) {
      case 0:
        message = "Relax, it's Sunday!";
        break;
      case 1:
        message = "Start your week with a smile! It's Monday!";
        break;
      case 2:
        message = "Keep going! It's Tuesday!";
        break;
      case 3:
        message = "Halfway through the week! It's Wednesday!";
        break;
      case 4:
        message = "Almost there! It's Thursday!";
        break;
      case 5:
        message = "It's Friday! The weekend is near!";
        break;
      case 6:
        message = "Enjoy your Saturday!";
        break;
      default:
        message = "Invalid day!";
    }
  
    return message;
  }
  
  // Example usage:
  const dayOfWeek = new Date().getDay(); // Get the current day of the week (0-6)
  const message = getDayMessage(dayOfWeek); // Get the message for the current day
  console.log(message); // Display the message in the console

//   / Example handling events in the DOM

// var element = document.getElementById("my-element");
// element.addEventListener ("click", function () {
//   console.log("Element clicked!");
// });

// element.addEventListener("keydown", function (event) {
//   console.log("Key pressed: " + event.key);
// });


//   Promise

// Creating a new promise
let promise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
        let success = true; // Change this to false to simulate an error

        if (success) {
            resolve("The operation was successful!"); // Resolve the promise
        } else {
            reject("The operation failed!"); // Reject the promise
        }
    }, 2000); // Wait for 2 seconds
});

// Using the promise
promise
    .then((message) => {
        // This block runs if the promise is resolved
        console.log("Success: " + message);
    })
    .catch((error) => {
        // This block runs if the promise is rejected
        console.log("Error: " + error);
    });
    
    // example ternary operator

    let minimumMarks = 50
    let result = 
    minimumMarks<=90? "You are passed" : "You are failed";
    console.log(result)

// Function that takes a callback
function One(cb) {
    console.log("One");
    cb();
}

// Callback function
function Two() {
    console.log("Two");
}

// Call One and pass Two as the callback function
One(Two);



    // Text Expand (See More / See Less)

function expandText() {
  var shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  var text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sed labore tempore quaerat, cupiditate porro molestiae pariatur possimus facere cum cumque, eaque neque veritatis placeat minima nemo hic, sint explicabo!";
  var para = document.getElementById("para");
  var link = document.getElementById("link");

  if (link.innerHTML === "See more") {
    para.innerHTML = text;
    link.innerHTML = "See Less";
  } else {
    para.innerHTML = shortText;
    link.innerHTML = "See more";
  }
}




  