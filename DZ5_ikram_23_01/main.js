const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList =  document.getElementById('todo_list')




const createTodo = () => {
    if (input.value.trim () === '') {
        return false
    } else {
        const Debutton = document.createElement('button')
        const Edbutton = document.createElement('button')
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const Bdiv = document.createElement('div')

        div. setAttribute('class', 'block_text')
        Bdiv.setAttribute('class','buttons_div')
        Edbutton.setAttribute('class', 'edit_button' )
        Debutton.setAttribute('class','delete_button' )

        Edbutton.addEventListener('click', promtFunc)
        Debutton.addEventListener('click',clearFunc )
//1
        function clearFunc() {
            todoList.innerHTML = ''
        }
//2
        function promtFunc() {
            const prtext = prompt('исправляем текст!!')
            text.innerHTML = prtext
        }



        text.innerHTML = input.value
        Debutton.innerHTML = 'Delete'
        Edbutton.innerHTML = 'Edit'

        div.append(text)
        todoList.append(div)
        Bdiv.append(Edbutton)
        Bdiv.append(Debutton)
        div.append(Bdiv)
        }
    input.value = ''
    }
createButton. onclick = () => createTodo()
input.addEventListener('keydown', e => (e. keyCode === 13) ? createTodo() : false)
