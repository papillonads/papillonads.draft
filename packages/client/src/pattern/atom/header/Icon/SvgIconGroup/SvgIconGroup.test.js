import { mp1Render, mp2Render, mp3Render } from './SvgIconGroup.render'

describe('<SvgIcon />', () => {
  describe('Snaphot', () => {
    test('must match mp1Render', () => {
      expect(global.renderToJSON(mp1Render)).toMatchSnapshot()
    })
    test('must match mp2Render', () => {
      expect(global.renderToJSON(mp2Render)).toMatchSnapshot()
    })
    test('must match mp3Render', () => {
      expect(global.renderToJSON(mp3Render)).toMatchSnapshot()
    })
  })
})
