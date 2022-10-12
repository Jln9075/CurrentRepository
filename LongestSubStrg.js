let s = "MCMXCIV"
let holdingNum = 0;
const romMap = new Map();
romMap.set("I", 1);
romMap.set("V", 5);
romMap.set("X", 10);
romMap.set("L", 50);
romMap.set("C", 100);
romMap.set("D", 500);
romMap.set("M", 1000);
let lastBiggestNum = 0;
let romArr = s.split("").reverse();

for(let i = 0; i <= romArr.length; i++){
    let currNum = romMap.get(romArr[i])
    if(currNum > lastBiggestNum){
        lastBiggestNum = currNum;
    }
    if(lastBiggestNum <= currNum){
        holdingNum += currNum;
    }else if(lastBiggestNum > currNum){
        holdingNum -= currNum;
    }

}
console.log("Go");
console.log(holdingNum)