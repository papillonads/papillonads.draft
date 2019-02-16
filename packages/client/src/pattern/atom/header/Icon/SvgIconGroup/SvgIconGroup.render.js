import React from 'react'
import SvgIconGroup from './SvgIconGroup'

const props = {
  name: 'logo',
  width: '528',
  height: '96',
  viewBox: '0 0 528 96',
  pathProps: [{ fill: '#2D3C4D' }, { fill: '#EEA566' }, { fill: '#2D3C4D' }],
}

export const logoRender = <SvgIconGroup {...props} />
