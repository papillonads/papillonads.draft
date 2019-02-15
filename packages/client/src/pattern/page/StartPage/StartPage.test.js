import React from 'react'
import defaultRender from './StartPage.render'

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

describe('<StartPage />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
