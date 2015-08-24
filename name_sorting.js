var input = ["luis", "hector", "selena", "emmanuel", "amish", "anna", "andrea", "rawle"];

input.sort(function(a, b) {
    if (a > b)
        return 1;
    else if (a < b)
        return -1;
    else
        return 0;
});

for (var i = 0; i < input.length - 1; i++) {
    var name = input[i];
    var lastChar = name.substr(-1);
    if (lastChar != input[i + 1].charAt(0)) {
        for (var j = i + 1; j < input.length; j++) {
            if (input[j].charAt(0) === lastChar) {
                var tmp = input[j];
                input[j] = input[i + 1];
                input[i + 1] = tmp;
                break;
            }
        }
    }
}

console.log(input);