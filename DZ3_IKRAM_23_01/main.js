//1
var num = Number(prompt('введите первое число'))
var num2 = Number(prompt('введите второе число'))
let funct = function (a, b){
    if (a > b){
        console.log(b)
    } else if (b > a) {
        console.log(a)
    } else if (a === b) {
        console.log(a, b)
    } else {
        console.log('ERROR')
    }

}
funct(num, num2)

// //2
const funct2 = function (a = prompt('введите текст')) {
    return console.log(a.length)

}
funct2()

//3
let calc1 =Number(prompt('первое число'))
let calc3 = prompt('+ - * /')
let calc2 =Number(prompt('второе число'))
let res;

function calculate(calc1, calc3, calc2, res){
    switch (calc3) {
        case '+':
            alert(res = calc1 + calc2)
            break
        case '-':
            alert(res = calc1 - calc2)
            break
        case '*':
            alert(res = calc1 * calc2)
            break
        case '/':
            if (calc1 === 0 || calc2 === 0){
                alert('не делится на ноль')
                break
            }
            alert(res = calc1 / calc2)
            break
        default :
            alert('ERROR')

    }
}
calculate(calc1,calc3, calc2, res)
