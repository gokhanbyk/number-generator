// Exercise 1

const wrapper = document.querySelector('.wrapper')
const p = document.createElement('p')


// Creating elements
    // H1
const h1 = document.createElement('h1')

h1.textContent = 'Number Generator'
h1.style.color = 'green'
h1.style.fontSize = '24px'

wrapper.appendChild(h1)

    // Div
const div = document.createElement('div')
div.style.width = '100%'
div.style.display = 'flex'
div.style.justifyContent = 'center'
div.style.gap = '10px'

wrapper.appendChild(div)
    // input
const input = document.createElement('input')
input.placeholder = 'Generate Numbers'
input.style.width = '50%'
input.style.padding = '8px'
input.style.borderColor = 'greenyellow'

div.appendChild(input)

    // button
const button = document.createElement('button')
button.textContent = 'Generate Numbers'

button.style.backgroundColor = 'lightgreen'
button.style.borderColor = 'lightgreen'
button.style.padding = '10px'
button.style.color = 'darkgreen'
button.style.fontSize = '15px'

div.appendChild(button)

    // ul
const ul = document.createElement('ul')

ul.style.display = 'flex'
ul.style.justifyContent = 'center'
ul.style.alignItems = 'center'
ul.style.flexWrap = 'Wrap'
ul.style.gap = '10px'
ul.style.width = '70%'
ul.style.marginTop = '20px'
ul.style.marginRight = '50px'

// Creating elements


// CSS
document.body.style.textAlign = 'center'

wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.justifyContent = 'center'
wrapper.style.alignItems = 'center'
wrapper.style.width = '60%'
wrapper.style.margin = 'auto'


// CSS

// Creating Numbers
function generateNumbers() {
    ul.innerHTML = ''
    let value = input.value

    if (!value || isNaN(value)) {
        p.style.display = 'block'
        p.textContent = 'Please enter a valid numeric value.'
        p.style.color = 'red'
        wrapper.appendChild(p)
        input.value = '';

    } else {
        p.style.display = 'none'

        for(let i = 0; i <= value; i++) {
            const li = document.createElement('li')
            li.textContent = i

            li.style.width = '75px'
            li.style.height = '40px'
            li.style.display = 'flex'
            li.style.justifyContent = 'center'
            li.style.alignItems = 'center'
            li.style.fontSize = '28px'


            // li COLOR
            if(isPrime(i)) {
                li.style.backgroundColor = '#ff6137'
            } else if (i % 2 == 0) {
                li.style.backgroundColor = '#beeb9f'
            } else {
                li.style.backgroundColor = '#fffc9d'
            }
            // li COLOR

            ul.appendChild(li)
        }
        wrapper.appendChild(ul)
        
        input.value = ''
    }
    
}


function isPrime(x) {
    let isPrime = true
    if(x === 1 || x === 0) {
        isPrime = false
    }

    for(let i = 2; i < x; i++) {
        if(x % i == 0) {
            isPrime = false
        }
    }

    if(isPrime) {
        return true
    } else {
        return false
    }
}


button.addEventListener('click', generateNumbers)
input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        generateNumbers()
    }
})