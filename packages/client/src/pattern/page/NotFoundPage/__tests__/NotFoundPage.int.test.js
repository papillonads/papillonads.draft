import React from 'react'
import { asyncRender, defaultRender } from './NotFoundPage.int.render'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<NotFoundPage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        pages: [{ id: 'not-found', name: 'some-name' }],
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match asyncRender', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(asyncRender)).toMatchSnapshot()
    })

    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })

    test('must match notFoundPageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
