import { defaultRender } from './SearchFieldsetAdvanced.render'

describe('<SearchFieldsetAdvanced />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
