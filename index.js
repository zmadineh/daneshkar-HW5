//////////////////////////////////////////////////////////////////////////////////
// p1

const arrayCount = (arr) => {
  let count = 0;

  for(let element of arr) if(element === true) ++count;
  return count
}

console.log(arrayCount([true, false, true, false, true]))

//////////////////////////////////////////////////////////////////////////////////
// p2

var obj = {"a":1, "b":2, "c":3, "d":4, "e":5}
var result = Object.keys(obj).map((key) => [key, obj[key]]);

console.log(result);

//////////////////////////////////////////////////////////////////////////////////
// p3

const sumOfArray = (arr1 , arr2) => {
  let sumArray = [];
  let l = Math.max(arr1.length, arr2.length);

  for(let i = 0; i < l; ++i) sumArray.push((arr1[i] || 0) + (arr2[i] || 0));
  return sumArray
}

console.log(sumOfArray([1, 0, 2, 3, 4] , [3, 5, 6, 7, 8, 13]));

//////////////////////////////////////////////////////////////////////////////////
// p4

const sub_string = (str) => {
  var subset = [];

  for (let m = 0; m < str.length; ++m) 
    for (let n = m+1; n < str.length+1; ++n) 
      subset.push(str.slice(m,n));

  return subset;
}

console.log(sub_string('ali'));

//////////////////////////////////////////////////////////////////////////////////
// p5

const evenNum = (num) => {
  let result = [];

  for (let j = 0; j < num.length; ++j) 

    if (num[j] == 0) continue;
    else if (num[j]%2 === 0 && num[j+1]%2 === 0) result.push(num[j], '-');
    else result.push(num[j]);
    
  return result.join('')
}

console.log(evenNum('025468'));

//////////////////////////////////////////////////////////////////////////////////
// p6

function numOfInt (nObj, numbers = []) {
  
  for (let key in nObj) 
    if (typeof nObj[key] === 'number') numbers.push(nObj[key]);
    else if (typeof nObj[key] === 'object' && nObj[key] !== null) numOfInt(nObj[key], numbers); 

  return numbers.length
}

console.log(numOfInt([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));

//////////////////////////////////////////////////////////////////////////////////