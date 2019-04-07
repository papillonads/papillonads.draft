import React from 'react'
import defaultRender from './HomePage.render'

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

describe('<HomePage />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
