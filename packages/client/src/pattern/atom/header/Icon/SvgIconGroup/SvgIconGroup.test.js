import { logoRender, messagesRender } from './SvgIconGroup.render'

describe('<SvgIcon />', () => {
  describe('Snaphot', () => {
    test('must match logoRender', () => {
      expect(global.renderToJSON(logoRender)).toMatchSnapshot()
    })
    test('must match messagesRender', () => {
      expect(global.renderToJSON(messagesRender)).toMatchSnapshot()
    })
  })
})
