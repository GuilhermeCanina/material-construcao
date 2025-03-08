window.onload = function () {
    const apiUrl = "http://localhost:4000/funcionarios";

    function carregarFuncionarios() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => preencherTabela(data))
            .catch(error => console.error("Erro ao buscar funcionários:", error));
    }

    function preencherTabela(funcionarios) {
        const tabela = document.getElementById("tabelaFuncionarios").getElementsByTagName("tbody")[0];
        tabela.innerHTML = "";
        funcionarios.forEach(funcionario => {
            let linha = tabela.insertRow();
            linha.innerHTML = `
                <td>${funcionario.id_funcionarios}</td>
                <td>${funcionario.nome}</td>
                <td>${funcionario.cpf}</td>
                <td>${funcionario.email}</td>
                <td>${new Date(funcionario.nasc).toLocaleDateString()}</td>
                <td>R$ ${funcionario.salario.toFixed(2)}</td>
                <td>${funcionario.endereco}</td>
            `;
        });
    }

    document.getElementById("cadastroForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const funcionario = {
            nome: document.getElementById("nome").value,
            cpf: document.getElementById("cpf").value,
            email: document.getElementById("email").value,
            nasc: document.getElementById("nasc").value,
            salario: parseFloat(document.getElementById("salario").value),
            endereco: document.getElementById("endereco").value
        };

        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(funcionario)
        })
            .then(response => response.json())
            .then(() => {
                carregarFuncionarios();
                document.getElementById("cadastroForm").reset();
            })
            .catch(error => console.error("Erro ao cadastrar funcionário:", error));
    });

    carregarFuncionarios();
};
