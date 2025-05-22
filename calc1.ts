// tudo dentro de função

let teclado = require (`prompt-sync`)();
let n1: number = 0;
let n2: number = 0;
let opcao: string = ``;

function sair(): void{
    console.clear();
    console.log(`Fim de programa...`);
    process.exit(0);     
}
function soma(): void{
    console.clear();
    let n1: number = parseInt(teclado(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado(`Digite o segundo número: `));
    console.log(`A soma de ${n1} + ${n2} = ${n1 + n2}`);
    process.exit(0);     
}
function subtracao(): void{
    console.clear();
    let n1: number = parseInt(teclado(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado(`Digite o segundo número: `));   
    console.log(`A subtração de ${n1} - ${n2} = ${n1 - n2}`);
    process.exit(0);
     
}
function multiplicacao(): void{
    console.clear();
    let n1: number = parseInt(teclado(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado(`Digite o segundo número: `));
    console.log(`A multiplicação de ${n1} * ${n2} = ${n1 * n2}`);
    process.exit(0);
}
function divisao(): void{
    console.clear();
    let n1: number = parseInt(teclado(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado(`Digite o segundo número: `));
    console.log(`A divisão de ${n1} / ${n2} = ${n1 / n2}`);
    process.exit(0);
}
function opcoes (opcao:string): void{
    switch (opcao){
        case '+': soma(); break;
        case '-': subtracao(); break;
        case '*': multiplicacao() ; break;
        case '/': divisao(); break;
        case '0': sair(); break;
        default: break;
    }    
}

function menu():void{
    console.log(`-----------------------`);
    console.log(`----* CALCULADORA *----`);
    console.log(`-----------------------`);
    console.log(`------ Digite ---------`);
    console.log(`-----------------------`);
    console.log(`+ --> ADIÇÃO  ---------`);
    console.log(`- --> SUBTRAÇÃO -------`);
    console.log(`* --> MULTIPLICAÇÃO ---`);
    console.log(`/ --> DIVISÃO ---------`);
    console.log(`0 --> SAIR ------------`);
    console.log(`-----------------------`);
    opcao = teclado(`Digite a sua opção: `);
    opcoes(opcao);
    }
    menu(); 
    console.log(`Fim de programa...`);