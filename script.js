let result = null;

function target() {
    let first = parseInt(document.getElementById("first").value);
    let second = parseInt(document.getElementById("second").value);
    let output = document.getElementById("output");
    let guess_b = document.getElementById("guess_b");

    if (isNaN(first) || isNaN(second) || (first > second)) {
        output.innerText = "Please enter a valid range!";
        output.classList.remove("success");
        output.classList.add("error");
        guess_b.disabled = true;
        return;
    }

    result = Math.floor(Math.random() * (second - first + 1)) + first;
    guess_b.disabled = false;

    output.innerText = "Guess the Number!";
    output.classList.remove("error");
    output.classList.add("success");
    console.log(`Target Number: ${result}`);
}

function GuessingGame() {
    let guess = parseInt(document.getElementById("Guess").value);
    let output = document.getElementById("output");

    if (isNaN(guess)) {
        output.innerText = "Please enter a number!";
        output.classList.add("error");
        return;
    }

    if (guess < result) {
        output.innerText = "Too low! Try again.";
        output.classList.add("error");
    } else if (guess > result) {
        output.innerText = "Too high! Try again.";
        output.classList.add("error");
    } else {
        output.innerText = "Congratulations! You guessed it!";
        output.classList.remove("error");
        output.classList.add("success");
    }
}
