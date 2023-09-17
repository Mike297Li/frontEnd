var number=Math.floor(Math.random() * 10) + 1;
console.log(number)
while (true){
    var inputNum = prompt("Please enter a number");
    if (number==inputNum){
        alert("Good luck");
        break;
    }else {
        alert("Not matched");
    }
}




