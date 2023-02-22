const inp = document.querySelector('#inputString')
const btn = document.querySelector('#button')

const func = () => {
    if (inp.value.trim() === ''){
        return false
    } else {
        let rex = []
        rex.push(inp.value)
        rex.forEach(i => {
            const h = document.createElement('h2')
            h.innerText = i.split('').reverse().join('')
            document.body.append(h)
            inp.value = ''
        })
    }
}

btn.onclick = () => func()