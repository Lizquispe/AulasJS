const calcular = () =>{
    let altura = Number(document.querySelector(`#altura`).value)

    let peso = Number(document.querySelector(`#peso`).value)
    let res = document.querySelector(`p`).value

    let imc = peso/(altura * altura)
    res.innerHTML = `seu IMS é: ${imc.toFixed(2)}`
}