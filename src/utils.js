export let supportsPassive = false
export let isTouch = false

function receiveTouch () {
  isTouch = true

  window.removeEventListener('touchstart', receiveTouch)
}

if (typeof window !== 'undefined') {
  supportsPassive = false
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get () {
        supportsPassive = true
      },
    })
    window.addEventListener('test', null, opts)
  } catch (e) {}

  window.addEventListener('touchstart', receiveTouch, {
    passive: true,
  })
}
