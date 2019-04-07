import React from 'react'
import defaultRender from './RouteWithSubRoutes.render'

jest.mock('react-router-dom', () => {
  return {
    Route: () => <div />,
  }
})

describe('<RouteWithSubRoutes />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
