const lista = document.getElementById('lista-estados')
const searchParams = new URLSearchParams(document.location.search);

async function buscaEstados(){
    let estados = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    estados = await estados.json();
    return estados;
}

async function listarEstados(){
    let ul = document.createElement("ul");

    estados = await buscaEstados();
    estados.forEach(e => {
        let ancora = document.createElement("a");
        let novaLista = document.createElement("li");
        ancora.innerHTML = e.nome;
        ancora.href = './municipios/index.html?uf=' + e.sigla;
        novaLista.appendChild(ancora);
        ul.appendChild(novaLista);
    });
    lista.appendChild(ul);
}

listarEstados();