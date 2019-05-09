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
  arrowLargeRender,
  categoryServicesRender,
  saveRender,
  saveGreenRender,
  saveGreyRender,
  resultsListRender,
  shoppingCartRender,
  logoPostNlRender,
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

    test('must match arrowLargeRender', () => {
      expect(global.renderToJSON(arrowLargeRender)).toMatchSnapshot()
    })

    test('must match categoryServicesRender', () => {
      expect(global.renderToJSON(categoryServicesRender)).toMatchSnapshot()
    })

    test('must match saveRender', () => {
      expect(global.renderToJSON(saveRender)).toMatchSnapshot()
    })

    test('must match saveGreenRender', () => {
      expect(global.renderToJSON(saveGreenRender)).toMatchSnapshot()
    })

    test('must match saveGreyRender', () => {
      expect(global.renderToJSON(saveGreyRender)).toMatchSnapshot()
    })

    test('must match resultsListRender', () => {
      expect(global.renderToJSON(resultsListRender)).toMatchSnapshot()
    })

    test('must match shoppingCartRender', () => {
      expect(global.renderToJSON(shoppingCartRender)).toMatchSnapshot()
    })

    test('must match logoPostNlRender', () => {
      expect(global.renderToJSON(logoPostNlRender)).toMatchSnapshot()
    })
  })
})
