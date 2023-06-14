function sucessor() {
    let num1 = document.getElementById("num").value
    let num = document.getElementById("numero")
    num1++
    numero.innerText = `O Sucessor do número é ${num1}`
}

function antecessor() {
    let num1 = document.getElementById("num").value
    let num = document.getElementById("numero")
    num1--
    numero.innerText = `O Antecessor do número é ${num1}`
}

function reset() {
    let num1 = document.getElementById("num").value
    let num = document.getElementById("numero")
    num1 = 0
    numero.innerText = num1
}