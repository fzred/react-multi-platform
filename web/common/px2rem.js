let px2rem = (px) => px / 75
if (process.env.BROWSER) {
  px2rem = (px) => window.lib.flexible.px2rem(px)
}
export default (px) => {
  if (typeof px !== 'number') return 0
  return px2rem(px)
}
