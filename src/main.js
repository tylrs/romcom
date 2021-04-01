// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userdescriptor1 = document.querySelector('.user-desc1');
var userdescriptor2 = document.querySelector('.user-desc2');
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
homeButton.addEventListener('click', showHomeView);
randomCoverButton.addEventListener('click', generateCover);
//saveCoverButton.addEventListener('click', saveCover);
viewSavedButton.addEventListener('click', showSavedView)
makeOwnCoverButton.addEventListener('click', showFormView);


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

function showFormView() {
  formView.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
};

function showSavedView() {
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
};

function showHomeView() {
  formView.classList.add('hidden');
  homeView.classList.remove('hidden');
  savedView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
};
// function showCover() {
// }

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
