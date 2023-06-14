// // na function sucessor, o programa vai somar + 1 ao input selecionado, e no inner Text, vai aparecer o numero que foi somado

// function sucessor() {
//     let num1 = document.getElementById("num").value
//     let num = document.getElementById("numero")
//     num1++
//     numero.innerText = `O Sucessor do número é ${num1}`
// }

// // na function sucessor, o programa vai subtrair - 1 ao input selecionado, e no inner Text, vai aparecer o numero que foi subtraido

// function antecessor() {
//     let num1 = document.getElementById("num").value
//     let num = document.getElementById("numero")
//     num1--
//     numero.innerText = `O Antecessor do número é ${num1}`
// }

// // vai resetar o numero levando ele ao 0 de novo

// function reset() {
//     let num1 = document.getElementById("num").value
//     let num = document.getElementById("numero")
//     num1 = 0
//     numero.innerText = num1
// }

function foto() {
    let fotop = document.getElementById("fotop").value
    let divImagem = document.querySelector(".image-box")
    let imagem = document.createElement("img")
    switch (fotop) {
        case "Sol":
            imagem.src = 'sol.jpg'
            break

        case "Chuva":
            imagem.src = 'chuva.jpg'
            break
        
        case "Raio":
            imagem.src = 'raio.jpg'
    }
    divImagem.innerHTML = ''
    divImagem.appendChild(imagem)
}