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

var goldenSpiral = function(num){
	var num = num - 2;
  var startArray = [1,2];
  var evenFib = [];
  var total = 2;
  for (var i = 0; i < num; i ++){
  	startArray.push(startArray[i] + startArray[i+1]);
    if (startArray[i+2] % 2 === 0) {
    	total += startArray[i+2];
    }

  	}

	  console.log(total);

};


goldenSpiral(1000000000);
