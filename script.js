function toggleMode() {
  const html = document.documentElement // pegando o html
  html.classList.toggle("light") // faz a troca dos temas

  //pegando a imagem
  const img = document.querySelector("#profile img") // utiliza o mesmo seletor para troca de img

  // faz a subistituição da img
  if (html.classList.contains("light")) {
    // se tiver light mode, faz a troca de img
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se não tiver light mode, mantem a img
    img.setAttribute("src", "./assets/avatar.png")
  }
}
