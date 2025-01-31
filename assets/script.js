// Quando der o clique no switch
function toggleMode() {
  const html = document.documentElement // Representação do documento em formato JS
  html.classList.toggle("light") // Ferramenta pronta

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "../assets/img/foto2.png")
    img.setAttribute("alt", "Imagem de perfil")
  } else {
    // se tiver sem light mode, mantém a imagem normal
    img.setAttribute("src", "../assets/img/avatar.png")
    img.setAttribute("alt", "imagem de perfil")
  }
}

