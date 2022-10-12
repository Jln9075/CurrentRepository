let s = "abcabcbb";
let fromInt = 0;
let currentLongestLength = 0;
let toInt = s.length;




if(s.indexOf(s[0]) == -1){
    return s;
} 

for(let i = 0; i < s.length; i++){
if(s.indexOf(s[i], i+1) == -1){
    if(currentLongestLength < s.substring(i).length){
        fromInt = i;
        toInt = s.length;
        currentLongestLength = toInt - fromInt;
    } 
} else{
    let lastChar = s.indexOf(s[i], i+1)
    let lengthOfSub = lastChar - i;
    if(lengthOfSub > currentLongestLength){
        fromInt = i;
        toInt = lastChar;
        currentLongestLength = toInt - fromInt;
        console.log(currentLongestLength);
    }
}
}
return currentLongestLength;
