import { defaultRender } from './SearchFieldsetStandard.int.render'

describe('<SearchFieldsetStandard />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
