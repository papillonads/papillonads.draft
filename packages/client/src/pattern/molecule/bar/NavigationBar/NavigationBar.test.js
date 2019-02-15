import navigationBarDefault from './NavigationBar.render'

describe('<NavigationBar />', () => {
  describe('Snaphot', () => {
    test('must match navigationBarDefault', () => {
      expect(global.renderToJSON(navigationBarDefault)).toMatchSnapshot()
    })
  })
})
