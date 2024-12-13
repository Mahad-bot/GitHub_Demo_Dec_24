
const quotes = [
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "I think, therefore I am. - René Descartes",
    "That's one small step for man, one giant leap for mankind. - Neil Armstrong",
    "Give me liberty, or give me death! - Patrick Henry",
    "To be, or not to be, that is the question. - William Shakespeare",
    "Injustice anywhere is a threat to justice everywhere. - Martin Luther King Jr",
    "The pen is mightier than the sword. - Edward Bulwer-Lytton",
];

let lastQuoteIndex = -1;

function generateRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex); 
        lastQuoteIndex = randomIndex; 
        return quotes[randomIndex];
}

document.getElementById("btn1").addEventListener(`click`, () => {
    const quotes = generateRandomQuote();
    document.getElementById("output").textContent = quotes;
});

document.getElementById('btn1').addEventListener('click', () => {
    const quote = generateRandomQuote();
    document.getElementById('output').textContent = quote;
});

document.getElementById('btn2').addEventListener('click', () => {
    const quote = document.getElementById('output').textContent;
navigator.clipboard.writeText(quote).then(() => {
    const thankYouMessage = document.getElementById('tym');
    thankYouMessage.style.display = 'block';
    setTimeout(() => {
        thankYouMessage.style.display = 'none';
    }, 2000);
}).catch(error => {
    console.error('Failed to copy text: ', error);
    })
});
