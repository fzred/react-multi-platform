export function getParamter(name, url = location.href) {
  const r = new RegExp(`(\\?|#|&)${name}=([^&#]*)(&|#|$)`)
  const m = url.match(r)
  return (!m ? undefined : decodeURIComponent(m[2]))
}

export function isWeixin() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i)
}

export function getPageScroll() {
  const scroll = document.querySelector('#scroll')
  return {
    scrollTop: scroll.scrollTop,
    scrollLeft: scroll.scrollLeft,
  }
}

export function scrollTo({ scrollLeft = 0, scrollTop = 0 }) {
  const scroll = document.querySelector('#scroll')
  scroll.scrollLeft = scrollLeft
  scroll.scrollTop = scrollTop
}
