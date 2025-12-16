
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




class LRUCache{
    constructor(capacity = 2){
        this.capacity = capacity;
        this.cache = new Map()
    }
    
    get(key){
        if(!this.cache.has(key)) return -1;
        let value = this.cache.get(key)
        this.cache.delete(key);
        this.cache.set(key, value)
        return this.cache.get(key);
        
    }
    
    put(key, value){
        if(this.cache.size === this.capacity){
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        
        if(this.cache.has(key)){
            this.cache.delete(key);
        }
        this.cache.set(key, value)
    }
}

const lru = new LRUCache(2);
lru.put(1, 1); // cache = {1=1}
lru.put(2, 2); // cache = {1=1, 2=2}
console.log(lru.get(1)); // returns 1 → now 1 is most recent
lru.put(3, 3); 
// LRU was key=2 → removed
// cache = {1=1, 3=3}
console.log(lru.get(2)); // -1 (not found)
lru.put(4, 4);
// LRU was key=1 → removed
// cache = {3=3, 4=4}
console.log(lru.get(1)); // -1
console.log(lru.get(3)); // 3
console.log(lru.get(4)); // 4


function multiplicationOf(numbers) {
  const n = numbers.length;
  const result = Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;  // [1, 2, 6]
    prefix *= numbers[i];
  }


  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;   // [1, 12, 6]
    suffix *= numbers[i];  // [1,12, 6]
  }

  return result;
}

console.log(multiplicationOf([2,3,4]))


function deepOmit(obj, keys) {
 if (obj === null || typeof obj !== 'object') { return obj; }
  if (Array.isArray(obj)) {
   return obj.map(item => deepOmit(item, keys));
 }
 const result = {};
 for (let key in obj) {
   if (keys.includes(key)) {  continue; }
   result[key] = deepOmit(obj[key], keys);
 }
 return result;
}


const obj = {
 a: 1,
 b: 2,
 c: {
   d: 3,
   e: 4,
 },
 f: [5, 6],
};
console.log(deepOmit(obj, ['b', 'c','e']));


/* String Anagram */

function angram(str1, str2) {
 if (str1.length != str2.length) {
   return false;
 }

 let char = 256; // all character are include special char, letter, number include code 0-255;
 let charArr = new Array(char).fill(0);

 for (let i = 0; i < str1.length; i++) {
   charArr[str1.charCodeAt(i)]++;
   charArr[str2.charCodeAt(i)]--;
 }
 for (let j = 0; j < charArr.length; j++) {
   if (charArr[j] !== 0) return false;
 }
 return true;
}
console.log(angram('trewsaq' , 'qwert'));


/* Move Zero to End of Array  */
function moveZeroEnd(arr) {
  let first = 0;
  for(let i=0; i< arr.length ; i++){
      if(arr[i] != 0) {
            [arr[first], arr[i]] = [arr[i], arr[first]];
            first++;
      }
  }
  return arr;
}


console.log(moveZeroEnd([0,1,0,3,12]));

