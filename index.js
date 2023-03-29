(()=>{
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then(res => res.json())
    .then(estados => {
        estados.forEach((cada) => {
            estado.innerHTML += `<option value="${cada.sigla}">${cada.nome}</option>`;
        });
    })
})()

function buscarCep(){
    
}