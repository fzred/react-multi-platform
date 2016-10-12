let px2rem = function (px) { // eslint-disable-line
  return px / 75
}
if (typeof window !== 'undefined') {
  px2rem = (px) => window.lib.flexible.px2rem(px)
}
export default px2rem
