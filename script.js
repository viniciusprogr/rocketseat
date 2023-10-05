function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  
  if (html.classList.contains("light")) {
    // definir imagem para o tema light mode
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    // definir imagem para o tema normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

  
}
