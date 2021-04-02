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
var createUserBook = document.querySelector('.create-new-book-button');

var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDescriptor1 = document.querySelector('.user-desc1');
var userDescriptor2 = document.querySelector('.user-desc2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
window.addEventListener('DOMContentLoaded', showRandomCover);
homeButton.addEventListener('click', showHomeView);
randomCoverButton.addEventListener('click', showRandomCover);
saveCoverButton.addEventListener('click', saveCover);
viewSavedButton.addEventListener('click', showSavedView)
makeOwnCoverButton.addEventListener('click', showFormView);
createUserBook.addEventListener('click', saveUserBook);




// Create your event handlers and other functions here 👇
function showRandomCover() {
  generateCover();
  showCover();
};

function generateCover() {
  var coverIndex = getRandomIndex(covers);
  var titleIndex = getRandomIndex(titles);
  var taglineIndex1 = getRandomIndex(descriptors);
  var taglineIndex2 = getRandomIndex(descriptors);
  currentCover = new Cover(covers[coverIndex], titles[titleIndex], descriptors[taglineIndex1], descriptors[taglineIndex2]);
};

function showCover() {
  coverImg.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
};

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

function saveUserBook() {
  event.preventDefault();
  //Collect data and save into arrays
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDescriptor1.value);
  descriptors.push(userDescriptor2.value);
  //create a new book from user information
  currentCover = new Cover(userCover.value, userTitle.value, userDescriptor1.value, userDescriptor2.value);
  //change back to showHomeView
  showHomeView();
  //Display newly created Book
  showCover();
};

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  };
};

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
