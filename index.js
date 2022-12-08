function isPalindrome(word) {
    let splitWord= word.split("");
    let reversedSplit= splitWord.reverse();
    let reversedWord= reversedSplit.join("")
    if (word===reversedWord){
      return true 
    }
    else
      return false
  }
  //console.log(isPalindrome('robot'))







  // Write your algorithm here
  // check if a word/string is the same when reversed
  // 1. spit the string
  // 2. reverse the split string
  // 3. check if the reversed string is same as the initial string
  // 4. return true if it is the same
  // 5. else 
  // 6. return false


/* 
  Add your pseudocode here

declare function
split string = string.split("")
reverse()
join("")
if string===reversed then return true
else return false

*/

/*
  Add written explanation of your solution here
*/

 // console.log(isPalindrome('racecar'))
  


/* You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
*/
