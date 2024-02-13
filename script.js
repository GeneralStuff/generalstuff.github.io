// script.js

document.addEventListener('DOMContentLoaded', function () {
    const jokeContainer = document.getElementById('joke-container');
    const jokeButton = document.getElementById('joke-button');

    function displayJoke() {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const joke = jokes[randomIndex];

        const jokeElement = document.createElement('div');
        jokeElement.classList.add('joke');

        const questionElement = document.createElement('p');
        questionElement.textContent = joke.question;

        const answerElement = document.createElement('p');
        answerElement.textContent = joke.answer;
        answerElement.style.display = 'none';

        jokeElement.appendChild(questionElement);
        jokeElement.appendChild(answerElement);

        jokeContainer.innerHTML = '';
        jokeContainer.appendChild(jokeElement);

        // Show the punchline after 3 seconds
        setTimeout(function () {
            answerElement.style.display = 'block';
        }, 3000);
    }

    // Display a joke initially
    displayJoke();

    // Handle button click to provide a new joke
    jokeButton.addEventListener('click', function () {
        displayJoke();
    });

    // Change button text to "Tristan bless me more!"
    jokeButton.textContent = "Tristan bless me more!";
});
