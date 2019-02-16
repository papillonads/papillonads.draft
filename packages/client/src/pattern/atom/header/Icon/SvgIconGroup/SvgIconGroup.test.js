import { logoRender } from './SvgIconGroup.render'

describe('<SvgIcon />', () => {
  describe('Snaphot', () => {
    test('must match logoRender', () => {
      expect(global.renderToJSON(logoRender)).toMatchSnapshot()
    })
  })
})
