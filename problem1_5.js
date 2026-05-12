/** Problem-1: 
Reverse words in a sentence. Write a function to reverse the order of words in a string while keeping the words themselves intact.
Example: "Hello World" → "World Hello" */

function reverseSentence(sentence) {
  if (typeof sentence !== "string") {
    console.log("Input value must be string");
    return;
  }
  const arr = sentence.split(" ");
  const reverse = arr.reverse().join(" ");
  console.log("Reverse Sentence: ", reverse);
}

reverseSentence("Hello Ammar!");

/*Problem-7:
Count the number of vowels in a string
Write a function to count all vowels (a, e, i, o, u) in a given string. */

function CountVowels(sentence) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  //   const sentence = "My name is Ammar";

  const arr = sentence.split("");

  let count = 0;

  for (const element of arr) {
    if (vowels.includes(element)) {
      count++;
    }
  }

  console.log(count);
}

CountVowels("My name is Ammar");
