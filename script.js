let vendas = [];
let despesas = [];
let estoque = [];

function mostrarTela(tela) {
  document.querySelectorAll('.tela').forEach(t => t.classList.add('hidden'));
  document.getElementById(tela).classList.remove('hidden');
}

function atualizarDashboard() {
  const totalVendas = vendas.reduce((s, v) => s + v, 0);
  const totalDespesas = despesas.reduce((s, d) => s + d, 0);
  const lucro = totalVendas - totalDespesas;

  document.getElementById("totalVendas").innerText = `R$ ${totalVendas}`;
  document.getElementById("totalDespesas").innerText = `R$ ${totalDespesas}`;
  document.getElementById("lucroLiquido").innerText = `R$ ${lucro}`;
}

function adicionarProduto() {
  const nome = nomeProduto.value;
  const preco = Number(precoProduto.value);
  const qtd = Number(qtdProduto.value);

  estoque.push({ nome, preco, qtd });
  listarEstoque();
}

function listarEstoque() {
  listaEstoque.innerHTML = "";
  estoque.forEach(p => {
    listaEstoque.innerHTML += `
      <tr>
        <td>${p.nome}</td>
        <td>R$ ${p.preco}</td>
        <td>${p.qtd}</td>
      </tr>
    `;
  });
}

function registrarVenda() {
  const valor = Number(valorVenda.value);
  vendas.push(valor);
  atualizarDashboard();
}

function registrarDespesa() {
  const valor = Number(valorDespesa.value);
  despesas.push(valor);
  atualizarDashboard();
}
