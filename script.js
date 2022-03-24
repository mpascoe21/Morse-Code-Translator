// Use OOP
// translate user input from DOM
// Where to store the Morse characters in JS
// classes should store all information needed to translate including the alphabets, the word and the output
// toLowerCase the input

// class translateTextToMorseCode {
//   constructor(textInput, morseOutput, alphabetTranslation)
// }

import { alphabet, morseCode } from "./data.js";
import { translateTextToMorse, translateMorseToText } from "./functions.js";

const inputBox = document.querySelector("#textInput");
const translationBox = document.querySelector("#translation");
const inputLabel = document.querySelector(".textInputLabel");
const translationLabel = document.querySelector(".translationLabel");
const switchButton = document.querySelector(".switchBtn");

console.log(inputBox);
console.log(translationBox);
console.log(inputLabel.innerHTML);
console.log(translationLabel.innerHTML);

switchButton.addEventListener("click", () => {
  if (inputLabel.innerHTML === "Text Input") {
    inputLabel.innerHTML = "Morse Code";
    translationLabel.innerHTML = "Text Input";
  } else {
    inputLabel.innerHTML = "Text Input";
    translationLabel.innerHTML = "Morse Code";
  }
});

inputBox.addEventListener("input", (event) => {
  let textToTranslate = event.target.value;
  //translationBox.value = translateMorseToText(textToTranslate);
  const hasLetterOrNumber = /^[A-Za-z0-9]*$/.test(textToTranslate);

  if (
    textToTranslate.includes(".") ||
    (textToTranslate.includes("-") && !hasLetterOrNumber)
  ) {
    translationBox.value = translateMorseToText(textToTranslate);
  } else if (hasLetterOrNumber || textToTranslate.includes(" ")) {
    translationBox.value = translateTextToMorse(
      textToTranslate,
      hasLetterOrNumber
    );
    // console.log("else statement workings");
  }
});
