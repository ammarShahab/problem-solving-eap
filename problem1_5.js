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
