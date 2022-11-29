// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Find the like icon
const likeIcons = document.querySelectorAll('span.like-glyph');

// Because the find returns an array object, iterate through the array
for (let i = 0; i < likeIcons.length; i++) {
  (function(){
    // Listen for a click for each iteration
    likeIcons[i].addEventListener("click", function() {
      const myPromise = mimicServerCall()
      const element = document.getElementById("modal")
      myPromise.then(changeHeart(i))
      myPromise.catch(function(error) {
        element.classList.remove("hidden")
        element.innerHTML = error
        setTimeout(function() {
          element.classList.add("hidden")
        }, 3000)
      })
    })
  })(i);
}

function changeHeart(i) {
  if (likeIcons[i].classList.contains('activated-heart')) {
    likeIcons[i].innerHTML = EMPTY_HEART;
  } else {
    likeIcons[i].innerHTML = FULL_HEART;
  }
  // Toggle the icon styling
  likeIcons[i].classList.toggle('activated-heart')
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
