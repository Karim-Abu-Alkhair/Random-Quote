var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "― Dr. Seuss",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "― Robert Frost",
  },
];

var quoteText = document.getElementById("quote-text");
var quoteAuthor = document.getElementById("quote-author");

function getRandom() {
  return Math.floor(Math.random() * 6);
}

var prevRandomNumber;

// Function to get a new random number different from the previous one
function getUniqueRandomNumber() {
  var currentRandomNumber = getRandom();

  while (currentRandomNumber === prevRandomNumber) {
    currentRandomNumber = getQuote();
  }

  prevRandomNumber = currentRandomNumber;

  return currentRandomNumber;
}

function getQuote() {
  var random = getUniqueRandomNumber();
  quoteText.innerHTML = quotes[random].quote;
  quoteAuthor.innerHTML = quotes[random].author;
}
