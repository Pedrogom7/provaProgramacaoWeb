const sigla = new URLSearchParams(document.location.search);
const titulo = document.getElementById('titulo');
const lista = document.getElementById('lista-estados');

document.title = 'Municípios de ' + sigla.get('uf');
titulo.innerHTML = 'Municípios de ' + sigla.get('uf');

async function buscaMunicipios(){
    let municipios = await fetch((`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla.get('uf')}/municipios`));
    municipios = await municipios.json();
    return municipios;
}

async function listarMunicipios(){
    let ul = document.createElement("ul");

    municipios = await buscaMunicipios();
    municipios.forEach(c => {
        let criarLista = document.createElement("li");
        let criarSpan = document.createElement("span");
        criarSpan.innerHTML = c.nome;
        criarLista.appendChild(criarSpan);
        ul.appendChild(criarLista);
    });
    lista.appendChild(ul);
}


listarMunicipios();