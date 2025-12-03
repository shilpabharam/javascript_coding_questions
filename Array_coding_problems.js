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