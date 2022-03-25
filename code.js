//1 sum zero
let array = [28, 43, -12, 30, 4, 0, 12]
let value = "False"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
};

//runtime O(n^2)

//2 Unique Characters
function hasUniChars(str) {
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if (obj[char]) return false;
        obj[char] = true;
    }
    return true
};
console.log(hasUniChars("abcd"));

//runtime O(1)

//3 Pangram Sentence
function checkPangram(str) {
    let strArr = str.toLowerCase();
    let alpha = 'abcedefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < alpha.length; i++) {
        if(strArr.indexOf(alpha[i]) < 0){
            return false;
        }
    }
    return true;
};
//runtime O(n)

//4 Longest Word
function longWord(str) {
    let arr = str.match(/\x[a-z]{0,}/gi);
    let answ = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(answ.length < arr[i].length){
            answ = arr[i];
        }
    }
    return answ;
};
//runtime O(n)