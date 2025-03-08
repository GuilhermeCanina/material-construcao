document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://localhost:4000/produtos";

    function carregarProdutos() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => preencherTabela(data))
            .catch(error => console.error("Erro ao buscar produtos:", error));
    }

    function preencherTabela(produtos) {
        const tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0];
        tabela.innerHTML = "";
        produtos.forEach(produto => {
            let linha = tabela.insertRow();

            linha.innerHTML = `
                <td>${produto.id_produtos}</td>
                <td>${produto.nome}</td>
                <td>${produto.descricao}</td>
                <td>${produto.quantidade}</td>
                <td>R$ ${produto.preco_compra.toFixed(2)}</td>
                <td>R$ ${produto.preco_venda.toFixed(2)}</td>
                <td>${produto.fornecedor}</td>
                <td><img src="${produto.imagemUrl}" width="50"></td>
            `;
        });
    }

    document.getElementById("cadastroForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const produto = {
            nome: document.getElementById("nome").value,
            descricao: document.getElementById("descricao").value,
            quantidade: parseInt(document.getElementById("quantidade").value),
            preco_compra: parseFloat(document.getElementById("preco_compra").value),
            preco_venda: parseFloat(document.getElementById("preco_venda").value),
            fornecedor: document.getElementById("fornecedor").value,
            imagemUrl: document.getElementById("imagemUrl").value
        };

        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produto)
        })
        .then(response => response.json())
        .then(() => {
            carregarProdutos();
            document.getElementById("cadastroForm").reset();
        })
        .catch(error => console.error("Erro ao cadastrar:", error));
    });

    carregarProdutos();
});
