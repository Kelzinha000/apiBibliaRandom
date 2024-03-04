
document.addEventListener('DOMContentLoaded',()=>{
const url = `https://www.abibliadigital.com.br/api/books/`
fetch(url)
.then((response)=>{ 
    if(!response.ok){   
       throw new Error ('Erro ao receber os dados') 
   }
        return response.json()
    })
   .then((data)=>{
      selecionarLivros(data)
    })
  .catch((err)=>console.error(err))

function selecionarLivros(livros){
    const select = document.getElementById('select')
    livros.map((livro)=>{
        const options = document.createElement('option')
        options.innerHTML = `${livro.name}`
        options.value = livro
        select.appendChild(options)
})
}
})

  const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
  const select = document.getElementById("select").value

 const url = `https://www.abibliadigital.com.br/api/books/?abbrev=${select}`
 fetch(url)
 document.getElementById("resposta").innerHTML = `${url.name}`
});

//  fetch(url)
//  .then((response)=>{
//     if(!response.ok){
//         throw new Error (`Erro ao selecionar ao retornar`)
//      }
//      return response.json()
// })
//  .then((data)=>{
//   console.log(data)
//  })
//  .catch((err)=>console.error(err))
//  });

//  function imprimeResposta(detalhes){
//     const resposta = document.getElementById('resposta')
//     resposta.innerHTML = verse.value
//  }
    

