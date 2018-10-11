function add (number){
	if (number === "")
	{
		return 0;
	}
	if(number.includes(","))
	{
		var numArr = number.split(",");
		return +numArr[0] + +numArr[1];
	}
	else
		return +number;
}

module.exports = add;