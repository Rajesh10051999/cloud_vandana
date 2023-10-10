function reverseWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.split('').reverse().join('');
    }).join(' ');
}
const inputSentence = "this is sunday";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
function sortDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
const numbers = [5, 3, 9, 1, 7];
const sortedDescending = sortDescending(numbers);
console.log(sortedDescending);
