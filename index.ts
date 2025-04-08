import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log("Olá! Bem-vindo(a) ao simulador de veículos!");
console.log("Crie um veículo para que possamos começar!");
const carro: Veiculo = criaVeiculo();

while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
        case 2:
            frear(carro);
            break;
        case 3:
            subirMarcha(carro);
        case 5:
            console.table(carro);
        default:
            break;
    }
}

console.table(carro);

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    console.log("Veículo cadastrado com sucesso!");
    return veiculo;
}

function frear(veiculo: Veiculo): void {
    if (veiculo.velocidade > 0) {
      veiculo.velocidade = veiculo.velocidade - veiculo.potencia * 0.1;
      
      if (veiculo.velocidade < 0) {
        veiculo.velocidade = 0;
      }
      console.log(`Velocidade atual após frear: ${veiculo.velocidade}`);
    } else {
      console.log("O veículo já está parado");
    }
  }

  function subirMarcha(veiculo: Veiculo): void {

    if (veiculo.marchaAtual === veiculo.numeroMarchas) {

        console.log('Numero de marchas máximo.');
 
    } else{
         veiculo.marchaAtual += 1;
         console.log(`Marcha aumentada. Marcha atual: ${veiculo.marchaAtual}`)
    } 


  }
  

