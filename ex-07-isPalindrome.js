
/**
 * Ex : isPalindrome()
 *
 * Write a function called `isPalindrome` that sees if the word
 * is equal when spelled same backward as it is forward
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/

// var isPalindrome = function (testString){
//   var truePalindrome = false;
//   var newArray = []
//   for(var i = 0; i < testString.length; i = i + 1){
//     newArray.unshift(testString[i]);
//   }
//   var reversedWord = newArray.join('');
//   // console.log(reversedWord);
//   if(testString === reversedWord){
//     truePalindrome = true;
//   }
//   return truePalindrome;
// }

//Take 2

var isPalindrome = function (testString){
  var truePalindrome = false;
  var reversedWord = ''
  for(var i = testString.length - 1; i > -1; i = i - 1){
      reversedWord = reversedWord + testString[i];
    }
  // console.log(reversedWord);
  if(testString === reversedWord){
    truePalindrome = true;
  }
  return truePalindrome;
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( isPalindrome('wow') === true)
console.assert( isPalindrome('milk') === false)
console.assert( isPalindrome('howdy') === false)
console.assert( isPalindrome('kayak') === true)
console.assert( isPalindrome('tacocat') === true)
console.assert( isPalindrome('1201411') === false)
console.assert( isPalindrome('13100131') === true)
