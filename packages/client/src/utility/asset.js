/* eslint no-console : 0 */
// import iconPaths from '../../../../asset/icomoon-svg/selection.json'
import iconPaths from '../../../../asset/icomoon-svg/selection.json'

export const getSvgIconPath = name => {
  const icon = iconPaths.icons.find(icon => icon.properties.name === name)
  if (icon) {
    return icon.icon.paths.join(' ')
  } else {
    console.warn(`icon ${name} does not exist.`)
    return ''
  }
}
