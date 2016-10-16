export function getParamter(name, url = location.href) {
  const r = new RegExp(`(\\?|#|&)${name}=([^&#]*)(&|#|$)`)
  const m = url.match(r)
  return (!m ? '' : m[2])
}

export function isWeixin() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i)
}
