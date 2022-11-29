// 
var mostraCardJogo = document.querySelector('#mostraCardJogo')

var pesquisaJogos = document.querySelector('.pesquisaJogos')

const  chamarJogo = () => {

    var pegaValor =  pesquisaJogos.value;

    //De para dos nomes do titulo

    mostraCardJogo.innerHTML = `
        <div class="card">
            <div class="card-image ${}"></div>
            <h2>${}</h2>
            <p>
                ${}
            </p>
            <a href="#">Comprar</a>
        </div>
    `

    console.log(pegaValor)
}

