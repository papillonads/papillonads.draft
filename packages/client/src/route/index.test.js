import React from 'react'

const mockRequireStartPage = () => {
  const startPagePath = '../pattern/page/StartPage'
  jest.mock(startPagePath, () => {
    return <div>StartPage</div>
  })
  return require(startPagePath).default
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
      startPagePath: 'some-start-page-path',
    }
  })
  return require(pathPath)
}

describe('index', () => {
  const startPage = mockRequireStartPage()
  const notFoundPage = mockRequireNotFoundPage()
  const path = mockRequirePath()

  const expectedStartPageRoute = {
    path: path.startPagePath,
    exact: true,
    component: startPage,
  }

  const expectedNotFoundPageRoute = {
    component: notFoundPage,
  }

  const requireIndex = () => {
    return require('./index')
  }

  describe('startPageRoute', () => {
    test('must return start page route object', () => {
      const startPageRoute = requireIndex().startPageRoute
      expect(startPageRoute).toEqual(expectedStartPageRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    test('must return not found page route object', () => {
      const notFoundPageRoute = requireIndex().notFoundPageRoute
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})
