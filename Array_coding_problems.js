
/* find second largeest Number from array*/
const secondLargest = arr => {
 let larest = 1;
 let secLar = 1;


 for (let val of arr) {
   if (val > larest) {
     secLar = larest;
     larest = val;
   } else if (val < larest && val > secLar) {
     secLar = val;
   }
 }
 return secLar;
};

const numbers = [5, 12, 8, 130, 44];
console.log(secondLargest(numbers));


/* find maximum number of consequennce zero*/
function consequentZero(arr) {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] === 0) { 
            zeroCount++;
        }
        while (zeroCount > 1) {
            if (arr[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

console.log(consequentZero([1,1,1,0,1,0,1,1]))

/* Flattern nested array*/

function flatternArray(arr){
 let result = [];
 for (let i = 0; i < arr.length; i++) {
   if(Array.isArray(arr[i])){
     result.concat(flatternArray(arr[i]));
   } else {
     result.push(arr[i]);
   }
 }
 return result;

/*return  value.reduce(
    (acc, curr) => acc.concat(
      Array.isArray(curr) ?
        flatten(curr) : curr),
    [],
  );*/
}


/* Find Intersection between two array*/

function intersection(arr1, arr2) {
 const countMap = {};
 arr2.forEach(num => {
   countMap[num] = (countMap[num] || 0) + 1;
 });
 // Filter arr1 and reduce count in map
 return arr1.filter(num => {
   if (countMap[num] > 0) {
     countMap[num]--;
     return true;
   }
   return false;
 });
}

const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 2, 3, 5];
console.log(intersection(arr1, arr2));

/* Reverse array from left by k*/
function reverseArrK(arr, k) {
 let n = arr.length;
 if (n === 0) return;


 k = k % n;
 if (k === 0) return;


 function reverse(arr, start, end) {
   while (start < end) {
     [arr[start], arr[end]] = [arr[end], arr[start]];
     start++;
     end--;
   }
 }
 reverse(arr, 0, n - 1);
 reverse(arr, 0, k - 1);
 reverse(arr, k, n - 1);
 return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
reverseArrK(arr, 3);
console.log(arr);


