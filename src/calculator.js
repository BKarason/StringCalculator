function add (numbers){
	if (numbers === "")
	{
		return 0;
	}
	if(numbers.includes(","))
	{
		var numArr = numbers.split(",");
		var total = 0;
		for(var i = 0; i < numArr.length; i++){
			total += +numArr[i];
		}
		return total;
	}
	else
		return +numbers;
}

module.exports = add;