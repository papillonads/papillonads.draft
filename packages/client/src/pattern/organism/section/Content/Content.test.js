import { defaultRender } from './Content.render'

describe('<Content />', () => {
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
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
