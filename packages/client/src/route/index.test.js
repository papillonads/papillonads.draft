import React from 'react'

const mockRequireHomePage = () => {
  const homePagePath = '../pattern/page/HomePage'
  jest.mock(homePagePath, () => {
    return <div>HomePage</div>
  })
  return require(homePagePath).default
}

const mockRequireNotFoundPage = () => {
  const notFoundPagePath = '../pattern/page/NotFoundPage'
  jest.mock(notFoundPagePath, () => {
    return <div>NotFoundPage</div>
  })
  return require(notFoundPagePath).default
}

const mockRequirePath = () => {
  const pathPath = './path'
  jest.mock(pathPath, () => {
    return {
      homePagePath: 'some-home-page-path',
    }
  })
  return require(pathPath)
}

describe('index', () => {
  const homePage = mockRequireHomePage()
  const notFoundPage = mockRequireNotFoundPage()
  const path = mockRequirePath()

  const expectedHomePageRoute = {
    path: path.homePagePath,
    exact: true,
    component: homePage,
  }

  const expectedNotFoundPageRoute = {
    component: notFoundPage,
  }

  const requireIndex = () => {
    return require('./index')
  }

  describe('homePageRoute', () => {
    test('must return home page route object', () => {
      const homePageRoute = requireIndex().homePageRoute
      expect(homePageRoute).toEqual(expectedHomePageRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    test('must return not found page route object', () => {
      const notFoundPageRoute = requireIndex().notFoundPageRoute
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})