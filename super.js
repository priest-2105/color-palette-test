const questionColor = document.getElementById('questionColor');
const answerColor = document.getElementById('answerColor');
const testButton = document.getElementById('testButton');
const closeResultButton = document.getElementById('closeResultModalButton');
const submitButton = document.getElementById('submitButton');
const resultModal = document.getElementById('resultModal');
const submitInput = document.getElementById('submitInput');
const resultParagraph = document.getElementById('resultParagraph');

// Hide the result modal initially
resultModal.style.display = 'none';

// Test Button: Assign a random color to questionColor input
testButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    questionColor.value = randomColor;

    console.log('Generated Question Color:', randomColor);
});

// Submit Button: Compare the question color with the submitted color
submitButton.addEventListener('click', () => {
    const questionColorValue = questionColor.value;
    const submitInputValue = submitInput.value;

    // Set the answerColor input value to the submitted input value
    answerColor.value = submitInputValue;

    // Compare the colors and display the result
    if (questionColorValue === submitInputValue) {
        resultModal.style.display = 'block';
        resultParagraph.innerHTML = 'Success! The colors match.';
        console.log(questionColorValue, 'Matches with', submitInputValue);
    } else {
        resultModal.style.display = 'block';
        resultParagraph.innerHTML = 'Incorrect! The colors do not match.';
        console.log(questionColorValue, 'Does not match with', submitInputValue);
    }
});

// Close Button: Hide the result modal when clicked
closeResultButton.addEventListener('click', () => {
    resultModal.style.display = 'none';
});
