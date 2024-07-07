var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var arr = [];

for(var i=0; i<input.length; i++){
    var command = input[i].split(' ')[0];
    var command_input = input[i].split(' ')[1];
    
    if(command=='push_back') {
        arr.push(command_input);
    }
    else if(command=='pop_back') {
        arr.pop();
    }
    else if(command=='size') {
        console.log(arr.length);
    }
    else if(command=='get'){
        console.log(arr[command_input-1]);
    }
}