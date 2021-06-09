/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Some cause happiness wherever they go, others whenever they go.",
    source: 'Oscar Wilde',
  },
  {
    quote: "I'm not superstitous, but I am a little stitious.",
    source: 'Michael Scott',
    citation: 'The Office',
    year: 2007,
  },
  {
    quote: "Before you marry a person, you should first make them use a computer with slow internet to see who they really are.",
    source: 'Will Ferrell',
  },
  {
    quote: "There is no sunrise so beautiful that it is worth waking me up to see it.",
    source: 'Mindy Kaling',
    citation: 'Is Everyone Hanging Out Without Me',
  },
  {
    quote: "No man has a good enugh memory to be a successfuly liar.",
    source: 'Abraham Lincoln',
    year: 1860,
  }
]

//console.log(quotes);


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const randomNumber = Math.floor( Math.random() * 5);
  return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
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
  sourceParagraph += '</p>'
  document.getElementById("quote-box").innerHTML=quoteParagraph + sourceParagraph;
}

//console.log(getRandomQuote());


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);