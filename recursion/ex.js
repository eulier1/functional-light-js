"use strict";

function isPalindrom(str) {
    if (str.length == 1) return true

    const firstElement = str[0]
    const secondElement = str[str.length - 1]
    const newSentence = str.slice(1, str.length - 1)

    return (firstElement === secondElement) && isPalindrom(newSentence)
}

console.log( isPalindrome("") === true );
console.log( isPalindrome("a") === true );
console.log( isPalindrome("aa") === true );
console.log( isPalindrome("aba") === true );
console.log( isPalindrome("abba") === true );
console.log( isPalindrome("abccba") === true );

console.log( isPalindrome("ab") === false );
console.log( isPalindrome("abc") === false );
console.log( isPalindrome("abca") === false );
console.log( isPalindrome("abcdba") === false );
