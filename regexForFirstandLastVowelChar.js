'use strict';

let s = 'afhgfhga';

function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([\s\S])[\s\S]*\1$/;
    
    /*
     * Do not remove the return statement
     */
    
    
    return re.test(s);
}

 console.log(regexVar(s));
