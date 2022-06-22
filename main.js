let number1 = prompt("Enter First Number: ")
let number2 = prompt("Enter Second Number: ")
let operators = prompt("Enter Operations to be carried out: ")


if (operators === '+') {
    result = Number(number1) + Number(number2);
    window.alert(`${number1} + ${number2} = ${result}`);
} else if (operators === '-') {
    result = Number(number1) - Number(number2);
    window.alert(`${number1} - ${number2} = ${result}`);
} else if (operators === '*') {
    result = Number(number1) * Number(number2);
    window.alert(`${number1} * ${number2} = ${result}`);
} else if (operators === '/') {
    result = Number(number1) / Number(number2);
    window.alert(`${number1} / ${number2} = ${result}`);
}

