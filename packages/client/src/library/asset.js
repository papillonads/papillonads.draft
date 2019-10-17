/* eslint no-console : 0 */
import iconPathsIcoMoon from '../../../../asset/icomoon-svg/selection-icomoon.json'
import iconPathsMarktplaats from '../../../../asset/icomoon-svg/selection-marktplaats.json'

export const getSvgIconPath = name => {
  const icon = iconPathsIcoMoon.icons.find(icon => icon.properties.name === name)
  if (icon) {
    return icon.icon.paths.join(' ')
  } else {
    console.warn(`svg icon ${name} does not exist.`)
    return ''
  }
}

export const getSvgIconGroupPaths = name => {
  const icon = iconPathsMarktplaats.icons.find(icon => icon.properties.name === name)
  if (icon) {
    return icon.icon.paths
  } else {
    console.warn(`svg icon group ${name} does not exist.`)
    return ''
  }
}

export const getFill = pathProps => {
  return pathProps ? pathProps.fill : ''
}
