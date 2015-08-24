function chainSort(input) {
	var temp = input.concat([]).sort(),
		result = temp.splice(0,1);
    while (temp.length > 0) { // keep looping until 1 item left
    	console.log(result)
        var lastChar = result[result.length - 1].substr(-1).toLowerCase(), // get the last char of last item of the array
        	nextItems = temp.filter(function(item) {
	            return item.charAt(0).toLowerCase() === lastChar;
    	    });
        result.push(nextItems[0]);
        temp.splice(temp.indexOf(nextItems[0]), 1);
    }
    return result;
}

var input = ["luis", "hector", "selena", "emmanuel", "amish", "anna", "andrea", "rawle"];
chainSort(input);