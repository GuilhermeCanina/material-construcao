document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://localhost:4000/clientes";

    function carregarClientes() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => preencherTabela(data))
            .catch(error => console.error("Erro ao buscar clientes:", error));
    }

    function preencherTabela(clientes) {
        const tabela = document.getElementById("tabelaClientes");
        tabela.innerHTML = "";
        
        clientes.forEach(cliente => {
            let linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${cliente.id_clientes}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.cpf}</td>
                <td>${cliente.cnpj || "N/A"}</td>
                <td>${cliente.email}</td>
                <td>${cliente.endereco}</td>
                <td>
                    <button class="excluir-btn" data-id="${cliente.id_clientes}">Excluir</button>
                </td>
            `;
            tabela.appendChild(linha);
        });

        document.querySelectorAll(".excluir-btn").forEach(botao => {
            botao.addEventListener("click", function () {
                const id = this.getAttribute("data-id");
                excluirCliente(id);
            });
        });
    }

    function excluirCliente(id) {
        if (confirm("Tem certeza que deseja excluir este cliente?")) {
            fetch(`${apiUrl}/${id}`, { method: "DELETE" })
                .then(() => carregarClientes())
                .catch(error => console.error("Erro ao excluir cliente:", error));
        }
    }

    document.getElementById("cadastroForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const cliente = {
            nome: document.getElementById("nome").value,
            cpf: document.getElementById("cpf").value,
            cnpj: document.getElementById("cnpj").value || null,
            email: document.getElementById("email").value,
            endereco: document.getElementById("endereco").value
        };

        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente)
        })
        .then(response => response.json())
        .then(() => {
            carregarClientes();
            document.getElementById("cadastroForm").reset();
        })
        .catch(error => console.error("Erro ao cadastrar cliente:", error));
    });

    carregarClientes();
});
