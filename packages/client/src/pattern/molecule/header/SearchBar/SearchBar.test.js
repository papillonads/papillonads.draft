import searchBarDefault from './SearchBar.render'

describe('<SearchBar />', () => {
  describe('Snaphot', () => {
    test('must match searchBarDefault', () => {
      expect(global.renderToJSON(searchBarDefault)).toMatchSnapshot()
    })
  })
})
