const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const nQuotes = document.getElementById("button");
const tweet = document.getElementById("tweet");
let realData = "";
let quotesData = "";

const tweetNow = () => {
  // this is the intent url
  let tweetPost = `https://twitter.com/intent/tweet?text${quotesData}`;
  window.open(tweetPost);
};

const getNewQuotes = () => {
  const rand = Math.floor(Math.random() * 1642);
  quotesData = realData[rand];
  quotes.innerText = `${quotesData.text}`;
  // Below code is if else
  quotesData.author == null
    ? (author.innerText = "Unknown")
    : (author.innerText = `${quotesData.author}`);
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();

    getNewQuotes();
  } catch (error) {}
};

getQuotes();

tweet.addEventListener("click", tweetNow);
nQuotes.addEventListener("click", getQuotes);
