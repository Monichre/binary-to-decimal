var binaryToDecimal = function(input, base){
 var total = 0;
 var input = input.split('').reverse();
 console.log(input);
 for (i = 0; i < input.length; i++){
   var digit = parseInt(input[i]);
   total += digit * Math.pow(base, i);
   console.log(total);
 }
}

binaryToDecimal('1001001010', 2);
