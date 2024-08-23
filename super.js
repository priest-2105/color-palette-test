const questionColor =  document.getElementById('questionColor');
const answerColor =  document.getElementById('answerColor');
const testButton = document.getElementById('testButton');
const closeResultButton = document.getElementById('closeResultModalButton');


testButton.addEventListener('click', () => {


   const quesitonColorValue = questionColor.value
   const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
   questionColor.value = randomColor;

   console.log(quesitonColorValue);
    
    

});





closeResultButton.addEventListener('click', () => {
  const Result = document.getElementById('resultModal');
  Result.style.display = 'none';
});