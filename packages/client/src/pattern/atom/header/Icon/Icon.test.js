import {
  pushpinRender,
  bellRender,
  bubbleRender,
  bubblesRender,
  bubbles2Render,
  bubble2Render,
  bubbles3Render,
  bubbles4Render,
  userRender,
  usersRender,
  userPlusRender,
  userMinusRender,
  userCheckRender,
} from './Icon.render'

describe('<Icon />', () => {
  describe('Snaphot', () => {
    test('must match pushpinRender', () => {
      expect(global.renderToJSON(pushpinRender)).toMatchSnapshot()
    })
    test('must match bellRender', () => {
      expect(global.renderToJSON(bellRender)).toMatchSnapshot()
    })
    test('must match bubbleRender', () => {
      expect(global.renderToJSON(bubbleRender)).toMatchSnapshot()
    })
    test('must match bubblesRender', () => {
      expect(global.renderToJSON(bubblesRender)).toMatchSnapshot()
    })
    test('must match bubbles2Render', () => {
      expect(global.renderToJSON(bubbles2Render)).toMatchSnapshot()
    })
    test('must match bubble2Render', () => {
      expect(global.renderToJSON(bubble2Render)).toMatchSnapshot()
    })
    test('must match bubbles3Render', () => {
      expect(global.renderToJSON(bubbles3Render)).toMatchSnapshot()
    })
    test('must match bubbles4Render', () => {
      expect(global.renderToJSON(bubbles4Render)).toMatchSnapshot()
    })
    test('must match userRender', () => {
      expect(global.renderToJSON(userRender)).toMatchSnapshot()
    })
    test('must match usersRender', () => {
      expect(global.renderToJSON(usersRender)).toMatchSnapshot()
    })
    test('must match userPlusRender', () => {
      expect(global.renderToJSON(userPlusRender)).toMatchSnapshot()
    })
    test('must match userMinusRender', () => {
      expect(global.renderToJSON(userMinusRender)).toMatchSnapshot()
    })
    test('must match userCheckRender', () => {
      expect(global.renderToJSON(userCheckRender)).toMatchSnapshot()
    })
  })
})
