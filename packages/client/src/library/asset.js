/* eslint no-console : 0 */
import iconPathsIcoMoon from '../../../../asset/icomoon-svg/selection-icomoon.json'
import iconPathsMarktplaats from '../../../../asset/icomoon-svg/selection-marktplaats.json'

export function getSvgIconPath(name) {
  const icoMoonIcon = iconPathsIcoMoon.icons.find(icon => icon.properties.name === name)
  if (icoMoonIcon) {
    return icoMoonIcon.icon.paths.join(' ')
  }
  console.warn(`svg icon ${name} does not exist.`)
  return ''
}

export function getSvgIconGroupPaths(name) {
  const icoMoonIconMarktplaats = iconPathsMarktplaats.icons.find(icon => icon.properties.name === name)
  if (icoMoonIconMarktplaats) {
    return icoMoonIconMarktplaats.icon.paths
  }
  console.warn(`svg icon group ${name} does not exist.`)
  return ''
}

export function getFill(pathProps) {
  return pathProps ? pathProps.fill : ''
}
