let teclado = require(`prompt-sync`)();
let opcao: string = ``;

function menu(): void {
  console.log(`-----------------------`);
  console.log(`------* TABUADA *------`);
  console.log(`-----------------------`);
  console.log(`------ Digite ---------`);
  console.log(`-----------------------`);
  console.log(`1 --> TABUADA  ---------`);
  console.log(`0 --> SAIR ------------`);
  console.log(`-----------------------`);
  opcao = teclado(`Digite a sua opção: `);
  opcoes(opcao);
}

function tabuada(): void {
  let tab: number = parseInt(teclado(`Digite a tabuada: `));
  let cont: number = 0;
  do {
    console.log(`${tab} x ${cont} = ${tab * cont}`);
    cont++;
  } while (cont <= 10);
}

function sair(): void {
  console.clear();
  console.log(`Fim de programa...`);
  process.exit(0);
}

function opcoes(opcao: string): void {
  switch (opcao) {
case "1":tabuada();break;
case "0":sair();break;
default:break;
}
}

do {
  menu();
  console.log(`Fim de programa...`);
} while (opcao != "0");
