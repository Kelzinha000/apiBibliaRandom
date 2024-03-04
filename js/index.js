
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
    const select = document.getElementById('selectInput')

    livros.map((livro)=>{
        const options = document.createElement('option')
        options.innerHTML = `${livro.name}`
        options.value = livro.name
        options.setAttribute("id",`${livro.abbrev.pt}`);
        select.appendChild(options)
})
}
})

  const btn = document.getElementById('btn')
btn.addEventListener('click',(event)=>{
  const select = document.getElementById("selectInput")
  event.preventDefault()
    const valueSelect = select.options[select.selectedIndex].id

 const url = `https://www.abibliadigital.com.br/api/books/${valueSelect}`
 fetch(url)
 .then((response)=>{ 
  if(!response.ok){   
     throw new Error ('Erro ao receber os dados') 
 }
      return response.json()
  })
 .then((data)=>{
  catchName(data)
  })
.catch((err)=>console.error(err))
});


function catchName(data) {
  document.getElementById("respostaAutor").innerHTML = `${data.author}`
  document.getElementById("respostaGrupo").innerHTML = `${data.group}`
  document.getElementById("respostaTestamento").innerHTML = `${data.testament}`
  document.getElementById("respostaCapitulos").innerHTML = `${data.chapters}`
}

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
    

