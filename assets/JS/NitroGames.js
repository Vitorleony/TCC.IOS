// 
// var mostraCardJogo = document.querySelector('#mostraCardJogo')

// var pesquisaJogos = document.querySelector('.pesquisaJogos')

// const  chamarJogo = () => {

//     var pegaValor =  pesquisaJogos.value;

//     //De para dos nomes do titulo

//     mostraCardJogo.innerHTML = `
//         <div class="card">
//             <div class="card-image ${}"></div>
//             <h2>${}</h2>
//             <p>
//                 ${}
//             </p>
//             <a href="#">Comprar</a>
//         </div>
//     `

//     console.log(pegaValor)
// }

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);