// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall() 
      .then(() => {
        if (heart.textContent === "♡") {
          heart.textContent = "♥";
          heart.classList.add("activated-heart");
                  } else {
          heart.textContent = "♡";
          heart.classList.remove("activated-heart"); 
        }
      })
      .catch((error) => {
        errorModal.classList.remove("hidden");
        const errorMessage = document.getElementById("modal-message");
        errorMessage.textContent = error; 

        setTimeout(() => {
          errorModal.classList.add("hidden"); 
        }, 3000);
      });
    });
  });
});

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
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
