;(function () {
  function marcarLinkComoSelecionado(hash) {
    const links = document.querySelectorAll(`[wm-link]`)
    links.forEach(link => link.classList.remove('selecionado'))

    const link = document.querySelector(`[wm-link='${hash}']`)
    if (link) link.classList.add('selecionado')
  }

  function navegarViaAjax(hash) {
    if (!hash) return

    const destino = document.querySelector('[wm-link-destino]')
    const url = hash.replace(/^#\/?/, '')
    fetch(url)
      .then(resp => resp.text())
      .then(html => {
        destino.innerHTML = html
        marcarLinkComoSelecionado(hash)
      })
  }

  function configurarLinks() {
    document.querySelectorAll('[wm-link]').forEach(link => {
      link.href = link.attributes['wm-link'].value
    })
  }

  function navegacaoInicial() {
    if (location.hash) {
      navegarViaAjax(location.hash)
    } else {
      const primeiroLink = document.querySelector('[wm-link]')
      if (primeiroLink) navegarViaAjax(primeiroLink.hash)
    }
  }

  window.onhashchange = () => navegarViaAjax(location.hash)

  configurarLinks()
  navegacaoInicial()
})()
