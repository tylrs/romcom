// Create variables targeting the relevant DOM elements here 👇
//Home page cover
var coverImg = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
//Buttons
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var createUserBook = document.querySelector('.create-new-book-button');
//Views
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
//User Input
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDescriptor1 = document.querySelector('.user-desc1');
var userDescriptor2 = document.querySelector('.user-desc2');

var savedSection = document.querySelector('.saved-covers-section');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
window.addEventListener('DOMContentLoaded', showRandomCover);
homeButton.addEventListener('click', showHomeView);
viewSavedButton.addEventListener('click', showSavedView);
makeOwnCoverButton.addEventListener('click', showFormView);
randomCoverButton.addEventListener('click', showRandomCover);
saveCoverButton.addEventListener('click', saveCover);
createUserBook.addEventListener('click', saveUserBook);
savedSection.addEventListener('dblclick', function(event) {
  if (event.target.className === 'tagline-1' || event.target.className === 'tagline-2') {
    var eventPathId = parseInt(event.path[2].id, 10);
    event.path[2].remove();
    for (var i = 0; i < savedCovers.length; i ++) {
      if (savedCovers[i].id === eventPathId) {
        savedCovers.splice(i, 1);
      };
    };
  } else if (event.path[1].className === "mini-cover") {
      var eventPathId = parseInt(event.path[1].id, 10);
      event.path[1].remove();
      for (var i = 0; i < savedCovers.length; i ++) {
        if (savedCovers[i].id === eventPathId) {
          savedCovers.splice(i, 1);
        };
      };
  };
});

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
  savedView.classList.add('hidden');
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
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDescriptor1.value);
  descriptors.push(userDescriptor2.value);
  currentCover = new Cover(userCover.value, userTitle.value, userDescriptor1.value, userDescriptor2.value);
  showCover();
  showHomeView();
};

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
    savedSection.innerHTML += `
        <section class="mini-cover" id = "${currentCover.id}">
          <img class="cover-image" src="${currentCover.cover}">
          <h2 class="cover-title">${currentCover.title}</h2>
          <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
          <img class="price-tag" src="./assets/price.png">
          <img class="overlay" src="./assets/overlay.png">
        </section>
  `};
};

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
