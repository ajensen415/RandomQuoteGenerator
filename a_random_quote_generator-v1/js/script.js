/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//Array of objects containing different quotes, their source & their tag; some contain year or citation as well. 
const quotes = [
  {
    quote: "Some cause happiness wherever they go, others whenever they go.",
    source: 'Oscar Wilde',
    tag: 'literature',
  },
  {
    quote: "I'm not superstitous, but I am a little stitious.",
    source: 'Michael Scott',
    citation: 'The Office',
    year: 2007,
    tag: 'humor',
  },
  {
    quote: "Before you marry a person, you should first make them use a computer with slow internet to see who they really are.",
    source: 'Will Ferrell',
    tag: 'humor',
  },
  {
    quote: "There is no sunrise so beautiful that it's worth waking me up to see it.",
    source: 'Mindy Kaling',
    citation: 'Is Everyone Hanging Out Without Me',
    tag: 'humor',
  },
  {
    quote: "No man has a good enough memory to be a successfull liar.",
    source: 'Abraham Lincoln',
    year: 1860,
    tag: 'historical',
  }
]

/***
 * `getRandomQuote` function
***/

//function to pull a random quote from the above array. 
function getRandomQuote() {
  const randomNumber = Math.floor( Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

//function to input random quotes to the HTML. 
function printQuote() {
  let randomQuote = getRandomQuote();
  let quoteParagraph = `<p class= "quote"> ${randomQuote.quote} </p>`;
  let sourceParagraph = `<p class=""source"> ${randomQuote.source}  `;
  if (randomQuote.citation) {
    sourceParagraph += `<span class="citation"> ${randomQuote.citation} </span>`
  } 
  if (randomQuote.year) {
    sourceParagraph += `<span class="year"> ${randomQuote.year} </span>`
  }
  if (randomQuote.tag) {
    sourceParagraph += `<span class="citation"> ${randomQuote.tag} </span>`
  }  
  sourceParagraph += '</p>'
  document.getElementById("quote-box").innerHTML=quoteParagraph + sourceParagraph;
  randomBackgroundColor();
}

//function to change background color randomly each time the quote changes. 
function randomBackgroundColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.background = color;
}

//function to change quote every 5 seconds. 
let timer = setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);