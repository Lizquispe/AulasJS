function calcularMedia(n1 = 0, n2 = 0){
    let valorMedia = (n1+n2)/2
    return valorMedia

}
// console.log(`A média do aluno e ${calcularMedia(9,6)}`);
const calcularImc = (altura,peso) =>{
    let imc = peso / (altura * altura)
    return imc
}
console.log(`O IMC do usuario é: ${calcularImc(1.90,70).toFixed(2)}`);