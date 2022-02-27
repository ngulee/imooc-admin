import SvgIcon from '@/components/SvgIcon'

const svgRequire = require.context('./svg', false, /.svg$/)

const importAll = (r) => {
  r.keys().forEach((r))
}

importAll(svgRequire)

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
