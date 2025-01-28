// Quando der o clique no switch
function toggleMode() {
  const html = document.documentElement // Representação do documento em formato JS
  html.classList.toggle("light") // Ferramenta pronta

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "../assets/img/foto.jpg")
    img.setAttribute("alt", "Imagem de perfil")
  } else {
    // se tiver sem light mode, mantém a imagem normal
    img.setAttribute("src", "../assets/img/perfil.png")
    img.setAttribute("alt", "imagem de perfil")
  }
}

/* Exemplo com condição
Se a lista de classe contém
  if (html.classList.contains('light')) {
    html.classList.remove('light') // Irá remover o light
  } else{
   html.classList.add('light') // Irá adicionar o light
  }
} */
