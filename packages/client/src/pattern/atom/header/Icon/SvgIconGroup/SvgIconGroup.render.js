import React from 'react'
import SvgIconGroup from './SvgIconGroup'

const logoProps = {
  name: 'logo',
  width: '528',
  height: '96',
  viewBox: '0 0 528 96',
  pathProps: [{ fill: '#2D3C4D' }, { fill: '#EEA566' }, { fill: '#2D3C4D' }],
}

const messagesProps = {
  name: 'messages',
  width: '96',
  height: '96',
  viewBox: '0 0 96 96',
  pathProps: [],
}

export const logoRender = <SvgIconGroup {...logoProps} />
export const messagesRender = <SvgIconGroup {...messagesProps} />
