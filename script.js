var quoteDatabase = [
{
    quote: "Move Bitch, get out the way, get out the way bitch, get out the way",
    name: "Ludacris"
},{
    quote: "Whoever said the customer was always right, was probably a customer",
    name: "Steve Jobs"
},{
    quote: "You're a wizard, Harry",
    name: "Hagrid"
},{
    quote: "There is no spoon",
    name: "The Oracle"
},{
    quote: "Two possibilities exist, either we are alone in the universe or we are not, both are equally terrifying",
    name: "Arthur C Clarke"
},{
    quote: "OWM",
    name: "Sir Alex Carter"
},{
    quote: "My Precious",
    name: "Golem"
},{
    quote: "Nobody tosses a dwarf",
    name: "A Dwarf"
},{
    quote: "Do you feel lucky, punk? Well, do ya?",
    name: "Dirt Harry"
},{
    quote: "I am the one",
    name: "Neo"
},{
    quote: "These violent delights have violent ends",
    name: "Billy Shakespear"
},{
    quote: "We've had breakfast yes, but what about second breakfast?",
    name: "A hobbit"
},{
    quote: "Definition of insanity is doing the same thing over and over and expecting different results",
    name: "A Person that I can't be bothered to google"
}
]


function randomQuote() {
    var randomItem = quoteDatabase[Math.floor(Math.random()*quoteDatabase.length)];
    document.getElementById("myQuote").innerHTML = randomItem.quote;
    document.getElementById("quoteAuthor").innerHTML = randomItem.name;
    console.log (randomItem);
}