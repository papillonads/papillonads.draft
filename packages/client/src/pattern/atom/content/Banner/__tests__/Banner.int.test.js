import { topBannerRender, marketingBannerRender } from './Banner.int.render'

describe('<Banner />', () => {
  let mathFloorSpy

  beforeEach(() => {
    mathFloorSpy = jest.fn(() => {
      return 0
    })
    jest.spyOn(Math, 'floor').mockImplementation(mathFloorSpy)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Snaphot', () => {
    test('must match topBannerRender', () => {
      expect(global.renderToJSON(topBannerRender)).toMatchSnapshot()
    })

    test('must match marketingBannerRender', () => {
      expect(global.renderToJSON(marketingBannerRender)).toMatchSnapshot()
    })
  })
})
