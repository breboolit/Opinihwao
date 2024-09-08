function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // se campoPesquisa for um campo vazio
    if (campoPesquisa == "") {
      section.innerHTML = '<p class="descricao-falha"> Nada por aqui. Você precisa inserir o nome de um mangá ou manhwa primeiro!</p>'
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let nome = "";
    let sinopse = "";
    let opiniao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados.
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        sinopse = dado.sinopse.toLowerCase()
        opiniao = dado.opiniao.toLowerCase()
        tags = dado.tags.toLowerCase()

      // se incluir o nome no campo de pesquisa
      if (nome.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa) || opiniao.includes(campoPesquisa)) {
      // Utiliza template literals (``) para facilitar a interpolação de valores.
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.sinopse}</p>
          <p class="descricao-meta">${dado.opiniao}</p>
          <a href=${dado.link} target="_blank">Mais sobre a obra aqui</a>
        </div>
      `;
      }
  }

  if (!resultados) {
    resultados = '<p class= "descricao-falha">Opa! Não temos nada sobre essa obra ainda... :(</p>'
  }
  
    // Atribui o HTML construído à seção de resultados, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }
// console.log(dados);



