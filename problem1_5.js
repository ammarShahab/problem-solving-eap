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

  console.log("Total vowels contans: ", count);
}

CountVowels("My name is Ammar");

/* 
Problem-5: Remove duplicates from a string
Write a function to remove duplicate characters from a string while maintaining order.
*/
function removeDuplicate(string) {
  if (typeof string !== "string") {
    console.log("value must be string");
    return;
  }
  const toLowerCase = string.toLowerCase();
  const arr = toLowerCase.split("");

  const removeDouble = arr.map(function myFunc(value, index) {
    if (arr.indexOf(value) === index) {
      return value;
    }
  });

  const result = removeDouble.join("");
  console.log("Remove duplicate Value from string: ", result);
}

removeDuplicate("yyyYYYuuIII");

/* Problem-3:
Check if an array is a palindrome
Write a function to determine whether an array reads the same backward as forward.
Example: 
[1, 2, 2, 1]	true
[1, 2, 3, 2, 1] true
[1, 2, 3, 4]	false
*/

function isPalindrome(arr) {
  const revArr = [...arr].reverse();
  // console.log(revArr);

  const isPalindrome = arr.every((value, index) => {
    return value === revArr[index];
  });
  return isPalindrome;
}

console.log("Is Palindrome: ", isPalindrome([1, 2, 2, 3, 2, 2, 1]));

/* Problem-15: Check if two arrays are equal
Write a function to check whether two arrays contain the same elements, regardless of order. 

Example Inputs and Outputs
Array 1	            Array 2	      Output
[1, 2, 3]	        [3, 2, 1]	        true
[1, 2, 2, 3]	    [3, 2, 1, 2]	    true
[1, 2, 3]	        [1, 2, 4]	        false
[1, 2, 3]	        [1, 2, 3, 4]	    false
["a", "b", "c"]	  ["c", "b", "a"]	  true
[1, 1, 2]	        [1, 2, 2]	        false
[]	              []	              true
*/

function isSameElement(arr1, arr2) {
  const sortArr1 = arr1.sort();
  const sortArr2 = arr2.sort();
  // console.log(sortArr1, sortArr2);

  const isSame = sortArr1.every((value, index) => {
    if (sortArr1.length !== sortArr2.length) {
      return false;
    }
    // console.log(value, sortArr2[index]);

    return value === sortArr2[index];
  });

  return isSame;
}

console.log("Is same elements: ", isSameElement([1, 2, 3], [2, 1, 3]));
