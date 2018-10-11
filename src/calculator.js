function add(numbers){
	if(numbers === "")
	{
		return 0;
	}
	if(numbers.includes("," || "\\n"))
	{
		var numArr = numbers.split(/,|\n/);
		//negCheck(numArr);
		return sum(numArr);
	}
	if(numbers < 0)
	{
		throw ("Negatives not allowed: " + numbers);
	}
	else
		return +numbers;
}

function sum(numArr){
	var total = 0;
	for(var i = 0; i < numArr.length; i++){
		total += +numArr[i];
	}
	return total;
}

/*function negCheck(numArr){
	var negNumbers = [];
	for(var i = 0; i < numArr.length; i++){
		if(numArr[i] < 0){
			negNumbers[negNumbers.length] = numArr[i];
		}
	}
	if(negNumbers.length > 0)
	{
		var negNumbersString = negArrayPrint(negNumbers);
		throw ("Negatives not allowed: " + negNumbersString);
	}
}

function negArrayPrint(array){
	var negNumbers = "";
	for(var i = 0; i < array.length; i++){
		negNumbers = negNumbers + array[i] + ",";
	}
}*/

module.exports = add;