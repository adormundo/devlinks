function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const containsLight = html.classList.contains('light')
  const img = document.querySelector('#profile img')
  const src = (imgDir) => img.setAttribute('src', imgDir)

  containsLight === true
    ? src("./assets/avatar-light.png")
    : src("./assets/avatar-dark.png")
}