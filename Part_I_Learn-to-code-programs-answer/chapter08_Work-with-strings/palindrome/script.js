// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter08.md#palindrome

let word = prompt('Write down some random word');
let vowelsCount = 0;
const letters = word.split('');
const reverseWord = letters.reverse().join('');

console.log(`Word length is ${letters.length}`);

for (const letter of letters) {
    if (letter.match(/[aeiouyAEIOUY]/)) {
        vowelsCount++;
    }
    if (letter === letter.toUpperCase()) {
        console.log(`${letter} is in UpperCase`);
    } else {
        console.log(`${letter} is in LowerCase`);
    }
}

console.log(`Number of vowels in word is ${vowelsCount}`);
console.log(`${word} in reverse is: ${reverseWord}`);

if (word === reverseWord) {
    console.log(`${word} is a palindrome`);
} else {
    console.log(`${word} is not a palindrome`);
}
