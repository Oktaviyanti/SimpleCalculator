const display1El = document.querySelector('.display-1')
const display2El = document.querySelector('.display-2')
const tempResultEl = document.querySelector('.temp-result')
const numbersEl = document.querySelectorAll('.number')
const operationEl = document.querySelectorAll('.operation')
const equalEl = document.querySelector('.equal')
const clearAllEl = document.querySelector('.all-clear')
const clearLastEl = document.querySelector('.last-entity-clear')
const percentEl = document.querySelector('.percentage')
const expEl = document.querySelector('.exp')
const lnEl = document.querySelector('.ln')
const logEl = document.querySelector('.log')
const akarEl = document.querySelector('.akar')
const phiEl = document.querySelector('.phi')
const eEl = document.querySelector('.e')
const seperXEl = document.querySelector('.seperX')
const kuadratEl = document.querySelector('.xKuadrat')
const mutlakEl = document.querySelector('.mutlak')

let dis1Num = ''
let dis2Num = ''
let result = null
let lastOperation = ''
let haveDot = false

numbersEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true
        } else if (e.target.innerText === '.' && haveDot) {
            return
        }
        dis2Num += e.target.innerText
        display2El.innerText = dis2Num
    })
})

operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!dis2Num) result
        haveDot = false
        const operationName = e.target.innerText
        if(dis1Num && dis2Num && lastOperation) {
            mathOperation()
        }
        else {
            result = parseFloat(dis2Num)
        }
        clearVar(operationName)
        lastOperation = operationName
    })
})

function clearVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' '
    display1El.innerText = dis1Num
    display2El.innerText = ''
    dis2Num = ''
    tempResultEl.innerText = result
}

function mathOperation() {
    if(lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(dis2Num)
    } 
    else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num)
    }
    else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num)
    }
    else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num)
    }
    else if (lastOperation === 'mod') {
        result = parseFloat(result) % parseFloat(dis2Num)
    }
    else if (lastOperation === '^') {
        result = Math.pow(parseFloat(result), parseFloat(dis2Num))
    }
}

equalEl.addEventListener('click', (e) => {
    if(!dis1Num || !dis2Num) return
    haveDot = false
    mathOperation()
    clearVar()
    display2El.innerText = result
    tempResultEl.innerText = ''
    dis2Num = result
    dis1Num = ''
})

percentEl.addEventListener('click', (e) => {
    result = parseFloat(dis2Num) / 100
    display1El.innerText = result
    tempResultEl.innerText = result
    display2El.innerText = result
    dis2Num = result
    dis1Num = ''
})

expEl.addEventListener('click', (e) => {
    result = Math.exp(parseFloat(dis2Num))
    display1El.innerText = result
    tempResultEl.innerText = result
    display2El.innerText = result
    dis2Num = result
    dis1Num = ''
})

lnEl.addEventListener('click', (e) => {
    result = Math.log(parseFloat(dis2Num))
    display1El.innerText = `ln(${dis2Num})`
    tempResultEl.innerText = result
    display2El.innerText = result
    dis2Num = result
    dis1Num = ''
})

logEl.addEventListener('click', (e) => {
    result = Math.log10(parseFloat(dis2Num))
    display1El.innerText = `log(${dis2Num})`
    tempResultEl.innerText = result
    display2El.innerText = result
    dis2Num = result
    dis1Num = ''
})

akarEl.addEventListener('click', (e) => {
    result = Math.sqrt(parseFloat(dis2Num))
    display1El.innerText = `sqrt(${dis2Num})`
    tempResultEl.innerText = result
    display2El.innerText = result
    dis2Num = result
    dis1Num = ''
})

phiEl.addEventListener('click', (e) => {
    result = parseFloat(dis2Num) * Math.PI
    display1El.innerText = `${dis2Num}phi`
    tempResultEl.innerText = result
    display2El.innerText = result
    dis2Num = result
    dis1Num = ''
})

eEl.addEventListener('click', (e) => {
    dis2Num = Math.E
    result = parseFloat(dis2Num)
    display1El.innerText = result
    tempResultEl.innerText = result
    display2El.innerText = result
    dis2Num = result
    dis1Num = ''
})

seperXEl.addEventListener('click', (e) => {
    result = 1 / parseFloat(dis2Num)
    display1El.innerText = `1/${dis2Num}`
    tempResultEl.innerText = result
    display2El.innerText = result
    dis2Num = result
    dis1Num = ''
})

kuadratEl.addEventListener('click', (e) => {
    result = Math.pow(parseFloat(dis2Num), 2)
    display1El.innerText = `${dis2Num}^2`
    tempResultEl.innerText = result
    display2El.innerText = result
    dis2Num = result
    dis1Num = ''
})

mutlakEl.addEventListener('click', (e) => {
    result = Math.abs(parseFloat(dis2Num))
    display1El.innerText = `|${dis2Num}|`
    tempResultEl.innerText = result
    display2El.innerText = result
    dis2Num = result
    dis1Num = ''
})

clearAllEl.addEventListener('click', (e) => {
    display1El.innerText = '0'
    display2El.innerText = '0'
    dis1Num = ''
    dis2Num = ''
    result = ''
    tempResultEl.innerText = '0'
})

clearLastEl.addEventListener('click', (e) => {
    if (dis2Num.length > 0) {
        dis2Num = dis2Num.slice(0, -1)
        display2El.innerText = dis2Num
    }
    else if(dis2Num.length === 0) {
        dis2Num = ''
        display2El.innerText = '0'
    }
})

