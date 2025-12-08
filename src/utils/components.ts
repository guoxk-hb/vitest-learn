export function render() {
  const el = document.createElement('div')
  el.className = 'component'
  el.textContent = 'Hello Component'
  document.body.appendChild(el)
}
