# RandomQuoteGenerator
Techdegree Project 1: Random Quote Generator

https://ajensen415.github.io/RandomQuoteGenerator/

Project Requirements:

Create an array of JS objects to hold the data for the quotes.

Each quote should have the following properties:

 -A quote property which contains a string: the text of the quote to display on the page.
 
 -A source property which contains a string identifying the creator of the quote.
 
 -An optional citation property which contains a string identifying the publication the quote appears in.
 
 -An optional year property which contains a number identifying the date of the quote.
 
 
Create a function named getRandomQuote which:

 -selects a random quote object from the quotes array
 
 -returns the randomly selected quote objects
 
Create a function named printQuote which follows these rules:

 -printQuote calls the getRandomQuote function and stores the returned quote object in a variable.
 
 -printQuote constructs a string using the different properties of the quote object using the provided HTML template.
 
 -printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing.
 
 -printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
 
