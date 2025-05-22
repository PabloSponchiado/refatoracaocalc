/*função com parametro e sem retorno
   function nomeDaFuncao(parametro1:tipoParametro,: ... ): void { ... } */

/*
function sobreMim(,saudacao:string, idade: number, lazer: string, profissao: string): void {
    console.log(`${saudacao}, tenho ${idade} anos, gosto de ${lazer} e tenho como profissão ${profissao}.`);
}

let saudacao: string = "Olá, tudo bem?";
let idade: number = 112;
let lazer: string = "ler";
let profissao: string = "programador";

sobreMim(saudacao, idade, lazer, profissao);
*/


let teclado = require(`prompt-sync`)();

let nome: string = (teclado(`Digite seu nome: `));
let saudacao: string = (`Olá, tudo bem?`);
let idade: number = parseInt(teclado(`Digite sua idade: `));
let lazer: string = (teclado(`Digite seu lazer favorito: `));
let profissao: string = (teclado(`Digite sua profissão: `));


function sobreMim(nome: string, idade: number, lazer: string, profissao: string): void {
    console.log(` ${saudacao}!!! Meu nome é ${nome} tenho ${idade}, gosto de ${lazer} e tenho como profissão ${profissao}.`);
    
}
sobreMim(saudacao, idade, lazer, profissao);
