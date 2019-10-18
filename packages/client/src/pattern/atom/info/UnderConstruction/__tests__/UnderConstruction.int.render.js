import React from 'react'
import { UnderConstruction } from '../UnderConstruction'

const SomeComponent = () => <div />

const defaultRender = (
  <UnderConstruction>
    <SomeComponent />
  </UnderConstruction>
)

export { defaultRender }
