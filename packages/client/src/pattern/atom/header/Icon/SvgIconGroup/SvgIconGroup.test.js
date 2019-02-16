import { logoRender, messagesRender, notificationRender, notificationGreyRender, profileRender, pinRender } from './SvgIconGroup.render'

describe('<SvgIcon />', () => {
  describe('Snaphot', () => {
    test('must match logoRender', () => {
      expect(global.renderToJSON(logoRender)).toMatchSnapshot()
    })

    test('must match messagesRender', () => {
      expect(global.renderToJSON(messagesRender)).toMatchSnapshot()
    })

    test('must match notificationRender', () => {
      expect(global.renderToJSON(notificationRender)).toMatchSnapshot()
    })

    test('must match notificationGreyRender', () => {
      expect(global.renderToJSON(notificationGreyRender)).toMatchSnapshot()
    })

    test('must match profileRender', () => {
      expect(global.renderToJSON(profileRender)).toMatchSnapshot()
    })

    test('must match pinRender', () => {
      expect(global.renderToJSON(pinRender)).toMatchSnapshot()
    })
  })
})
