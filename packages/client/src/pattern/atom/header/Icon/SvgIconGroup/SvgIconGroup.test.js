import {
  logoRender,
  messagesRender,
  notificationRender,
  notificationGreyRender,
  profileRender,
  pinRender,
  carsRender,
  vacantiesRender,
  offersRender,
  handshakeRender,
} from './SvgIconGroup.render'

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

    test('must match carsRender', () => {
      expect(global.renderToJSON(carsRender)).toMatchSnapshot()
    })

    test('must vacantiesh carsRender', () => {
      expect(global.renderToJSON(vacantiesRender)).toMatchSnapshot()
    })

    test('must match offersRender', () => {
      expect(global.renderToJSON(offersRender)).toMatchSnapshot()
    })

    test('must match handshakeRender', () => {
      expect(global.renderToJSON(handshakeRender)).toMatchSnapshot()
    })
  })
})
