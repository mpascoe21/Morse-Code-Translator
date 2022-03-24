import { alphabet, morseCode } from "./data.js";

export const translateTextToMorse = (inputValue, checkLetterOrNumber) => {
  console.log(inputValue.toLowerCase());

  if (
    inputValue.includes(".") ||
    (inputValue.includes("-") && !checkLetterOrNumber)
  ) {
    return "invalid input";
  }

  return inputValue
    .toLowerCase()
    .split("")
    .map((letterInput) => {
      return morseCode[letterInput];
    })
    .join("  ");
};
//console.log(translateTextToMorse("sos"));

export const translateMorseToText = (inputValue) => {
  console.log(inputValue);

  // if (inputValue.includes(checkLetterOrNumber)) {
  //   return "invalid input";
  // }

  return inputValue
    .split(" ")
    .map((codeInput) => {
      console.log(alphabet[codeInput]);
      return alphabet[codeInput];
    })
    .join("");
};
// console.log(translateMorseToText("..."));
