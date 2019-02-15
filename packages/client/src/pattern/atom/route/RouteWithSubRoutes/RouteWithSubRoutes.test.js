import defaultRender from './RouteWithSubRoutes.render'

describe('<RouteWithSubRoutes />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
