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