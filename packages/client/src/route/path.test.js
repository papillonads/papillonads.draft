describe('path', () => {
  const someBaseUrl = 'some-base-url'

  const extendEnvironmentVariables = () => {
    process.env.BASE_URL = someBaseUrl
  }

  const restoreEnvironmentVariables = () => {
    delete process.env.BASE_URL
  }

  const getStartPagePath = () => {
    return require('./path').startPagePath
  }

  afterEach(() => {
    restoreEnvironmentVariables()
  })

  describe('startPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const startPagePath = getStartPagePath()
      expect(startPagePath).toBe(`${process.env.BASE_URL}/`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const startPagePath = getStartPagePath()
      expect(startPagePath).toBe('/')
    })
  })
})
