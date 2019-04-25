import defaultRender from './SearchFieldsetStandard.render'

describe('<SearchFieldsetStandard />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
