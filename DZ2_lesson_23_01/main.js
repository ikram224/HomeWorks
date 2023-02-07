var arr = [10, 20, 30, 50, 235, 3000 ]
arr.splice(-1, )
arr.splice(2, 2)
console.log(arr)

var num = 20;
while (num > -1) {
    console.log(num);
    num--;
}
var colors = prompt('выбири цвет:(красный, желтый, зеленый)').toLowerCase().trim()
    switch (colors) {
        case 'красный':
            alert('стоп')
            break
        case 'желтый':
            alert('жди')
            break
        case 'зеленый':
            alert('иди')
            break
        default:
            alert('выбирай цаета!')
    }
var obj = {
   red:'стоп',
   yellow:'жди',
   green:'иди',
}
for (var key in obj) {
    console.log(`ключь обекта: ${key}, значение: ${obj[key]}`)
}
