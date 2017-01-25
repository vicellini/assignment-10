
/**
 * Ex-09 : reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 * (note: can't use .reverse() method )
 *
*/

var reverseString = function(testString){
  var newArray = []
  for(var i = 0; i < testString.length; i = i + 1){
    newArray.unshift(testString[i]);
  }
  var reversedWord = newArray.join('');
  // console.log(reversedWord);
  return reversedWord;

}






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')
