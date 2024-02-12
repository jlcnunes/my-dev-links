function toggleMode() {
  const html = document.documentElement
  /*
  Função toggle faz alg o semelhante a isso:

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // se tiver light mode, add a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar_lightmode.png")
    img.setAttribute(
      "alt",
      "Foto de Djoseman, em preto e branco. Ele está vestido de preto e usando um boné preto escrito Inquérito o qual esconde seu rosto, pois ele está olhando para baixo"
    )
  }
  // se tiver sem light, manter a imagem normal
  else {
    img.setAttribute("src", "./assets/avatar_darkmode.png")
    img.setAttribute(
      "alt",
      "Foto de Djoseman, em preto e branco. Ele está vestido de preto e usando um boné preto escrito Inquérito e olhando para frente"
    )
  }
}
