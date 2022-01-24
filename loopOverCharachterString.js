// In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

// First, print each vowel on a new line. The English vowels are a,e,i,o,u, and each vowel must be printed in the same order as it appeared.
// Second, print each consonant (i.e., non-vowel) in on a new line in the same order as it appeared.

// Input - javascriptloops

let s = 'javascriptloops';
let vowel = ['a','e','i','o','u'];
let getVowel = new Array();
let getConsonant = new Array();

for(let i=0;i<s.length;i++){
    if(vowel.includes(s[i])){
        getVowel.push(s[i]);
    }
    else{
        getConsonant.push(s[i]);
    }
}

getVowel.map(item=>{
    console.log(item)
})

getConsonant.map(item=>{
    console.log(item)
})
