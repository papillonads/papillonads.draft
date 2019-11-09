import React from 'react'
import { asyncRender, defaultRender } from './HomePage.int.render'
import { list } from '../../../../../../server/src/data/page/pages'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<HomePage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        list,
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match asyncRender', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(asyncRender)).toMatchSnapshot()
    })

    // test('must match defaultRender', () => {
    //   jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
    //   expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    // })

    test('must match homePageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
