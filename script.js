const messages = {
    greetings: ['Hello', 'Hi', 'Greetings', 'Hey', 'Hola'],
    adjectives: ['wonderful', 'amazing', 'awesome', 'fantastic', 'incredible'],
    nouns: ['unicorn', 'ninja', 'wizard', 'dragon', 'superhero'],
    places: [
        'in the galaxy',
        'under the sea',
        'on top of the mountain',
        'in the jungle',
        'at the beach',
    ],
    advice: [
        'keep pushing forward no matter what!',
        'stay positive even when life gives you lemons!',
        'never give up, because winners never quit!',
        'keep smiling, it confuses people!',
        'you are doing great, so keep up the fantastic work!',
    ],
    jokes: [
        "Why don't scientists trust atoms? Because they make up everything!",
        'Why was the math book sad? It had too many problems.',
        "Why don't programmers like nature? It has too many bugs.",
        'Why did the scarecrow win an award? Because he was outstanding in his field!',
        "Why don't some couples go to the gym? Because some relationships don't work out.",
    ],
};

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessage() {
    const greeting = getRandomElement(messages.greetings);
    const adjective = getRandomElement(messages.adjectives);
    const noun = getRandomElement(messages.nouns);
    const place = getRandomElement(messages.places);
    const advice = getRandomElement(messages.advice);
    const joke = getRandomElement(messages.jokes);

    const message = `${greeting}, you are a ${adjective} ${noun} ${place}! Remember to ${advice} Here's a joke for you: ${joke}`;

    document.getElementById('message').textContent = message;
}

// Generate an initial message on page load
window.onload = generateMessage;
