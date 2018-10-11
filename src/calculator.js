function add(numbers){
	if(numbers === ""){
		return 0;
	}
	if(numbers.includes("," || "\\n")){
		var numArr = numbers.split(/,|\n/);
		negCheck(numArr);
		return sum(numArr);
	}
	if(numbers < 0){
		throw "Negatives not allowed: " + numbers;
	}
	if(numbers > 1000){
		return 0;
	}
	else
		return +numbers;
}

function sum(numArr){
	var total = 0;
	for(var i = 0; i < numArr.length; i++){
		if(numArr[i] > 1000){
			continue;
		}
		total += +numArr[i];
	}
	return total;
}

function negArrayPrint(array){
	var negNumbers = "";
	for(var i = 0; i < array.length; i++){
		if(i != array.length - 1){
			negNumbers += array[i] + ",";
		}
		else{
			negNumbers += array[i];
		}
	}
	return negNumbers;
}

function negCheck(numArr){
	var negNumbers = [];
	for(var i = 0; i < numArr.length; i++){
		if(numArr[i] < 0){
			negNumbers[negNumbers.length] = numArr[i];
		}
	}
	if(negNumbers.length > 0){
		var negNumbersString = "Negatives not allowed: " + negArrayPrint(negNumbers);
		throw negNumbersString;
	}
}

module.exports = add;