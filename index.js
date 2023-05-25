let menu;
const doadoresSangue = [];

while (menu !== 5) {
  menu = Number(
    prompt(`===== SISTEMA DE DOAÇÃO DE SANGUE =====
        1. Cadastrar doador
        2. Listar doadores
        3. Buscar doador por tipo sanguíneo
        4. Buscar doador por data da última doação
        5. Sair
        Escolha uma opção:
        `)
  );

  switch (menu) {
    case 1:
      cadastrar();
      break;
    case 2:
      listar();
      break;
    case 3:
      buscarDoadorTipoSanguineo();
      break;
    case 4:
      buscarDadosData();
      break;
      case 5 :
        alert("Obrigado por acessar o sistema")
        break;
    default:
      
        alert("Digite uma opção válida");
      break;

  }
}

function cadastrar() {
  const nome = prompt("Digite o nome");
  const idade = Number(prompt("Digite a idade:"));
  const peso = Number(prompt("Digite o peso:"));
  const tipoSangue = prompt("Digite o tipo sanguineo:").toLowerCase();
  const ultimaData = prompt("Digite a ultima data de doação? DD/MM/AAAA:");

  const doador = {
    nome,
    idade,
    peso,
    tipoSangue,
    ultimaData,
  };

  doadoresSangue.push(doador);

  alert("Doador cadastrado com sucesso");
}
function listar() {
    if (doadoresSangue.length === 0) {
      alert("Ainda não existem doadores cadastrados");
    } else {
      let mensagem = `
          --------------------
          LISTAGEM DE DOADORES:
          --------------------
          NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
          `;
  
      for (let doador of doadoresSangue) {
        mensagem += `\n         ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||    ${doador.tipoSangue} ||       ${doador.ultimaData}`;
      }
      alert(mensagem);
    }
  }
  
  function buscarDoadorTipoSanguineo() {
    if (doadoresSangue.length === 0) {
      alert("Não existe doadores cadastrados");
    } else {
      const buscaTipoSanguineo = prompt("Digite o tipo sanguineo").toLowerCase();
  
      let mensagem = `
          ------------------------
          RESULTADO DA BUSCA:
          ------------------------
          NOME    | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
          `;
  
      for (let doador of doadoresSangue) {
        if (doador.tipoSangue.includes(buscaTipoSanguineo)) {
          mensagem += `\n         ${doador.nome} |     ${doador.idade} |      ${doador.peso} |   ${doador.tipoSangue} ||       ${doador.ultimaData}`;
        }
      }
  
      alert(mensagem);
    }
  }
  
  function buscarDadosData() {
    if (doadoresSangue.length === 0) {
      alert("Ainda não existem doadores cadastrados");
    } else {
      const dataBusca = prompt("Digite a ultima data de doação: (DD/MM/AAAA)");
  
      let mensagem = `
          ------------------------
          RESULTADO DA BUSCA:
          ------------------------
          NOME         | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
          `;
  
      for (let doador of doadoresSangue) {
        if (doador.ultimaData === dataBusca) {
          mensagem += `\n         ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||    ${doador.tipoSangue} ||       ${doador.ultimaData}`;
        }
      }
  
      alert(mensagem);
    }
  }