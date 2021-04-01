// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var coverIndex = getRandomIndex(covers);
var titleIndex = getRandomIndex(titles);
var taglineIndex1 = getRandomIndex(descriptors);
var taglineIndex2 = getRandomIndex(descriptors);

var currentCover = new Cover(covers[coverIndex], titles[titleIndex], descriptors[taglineIndex1], descriptors[taglineIndex2]);

coverImg.src = currentCover.cover;
coverTitle.innerText = currentCover.title;
descriptor1.innerText = currentCover.tagline1;
descriptor2.innerText = currentCover.tagline2;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', generateCover)
randomCoverButton.addEventListener('click', showCover)

// Create your event handlers and other functions here 👇
function generateCover() {
  var coverIndex = getRandomIndex(covers);
  var titleIndex = getRandomIndex(titles);
  var taglineIndex1 = getRandomIndex(descriptors);
  var taglineIndex2 = getRandomIndex(descriptors);

  var currentCover = new Cover(covers[coverIndex], titles[titleIndex], descriptors[taglineIndex1], descriptors[taglineIndex2]);

  coverImg.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
}

// function showCover() {
// }

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
