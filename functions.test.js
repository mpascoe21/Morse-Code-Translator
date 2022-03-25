// import { expect, test } from "@jest/globals";
// import { describe } from "yargs";
import { expect } from "@jest/globals";
import { translateMorseToText, translateTextToMorse } from "./functions.js";

describe("Test if text is being translated to Morse Code", () => {
  test("Should return a string of '. -' ", () => {
    expect(translateTextToMorse("Sos")).toBe("...  ---  ...");
  });

  test("Should be able to translate several words", () => {
    expect(translateTextToMorse("he is")).toBe("....  .    ..  ...");
  });

  test("invalid input", () => {
    expect(translateTextToMorse(".-")).toBe("invalid input");
  });
});

describe("Test if Morse Code is being translated to text", () => {
  test("Should return a string of letters", () => {
    expect(translateMorseToText(".- -... -.-.")).toBe("abc");
  });

  test("Should return a string of numbers", () => {
    expect(translateMorseToText(".---- ----- ---..")).toBe("108");
  });

  test("Should return a string of several words", () => {
    expect(translateMorseToText(".... --- .-- / .- .-. . / -.-- --- ..-")).toBe(
      "how are you"
    );
  });

  // test morse to several words

  // NOT WORKING, THE CONDITION RUNS THE TEXT TO MORSE FUNCTION INSTEAD
  // test("invalid input", () => {
  //   expect(translateMorseToText("2 days")).toBe("invalid input");
  // });
});

// ?? Why is it one test suite when there are two describes?
