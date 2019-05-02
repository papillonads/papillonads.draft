/* eslint class-methods-use-this: 0 */
const { RESTDataSource } = require('apollo-datasource-rest')
const { pages } = require('./pages.js')

class PageAPI extends RESTDataSource {
  async getAllPages() {
    return pages && pages.length ? pages.map(l => this.pageReducer(l)) : []
  }

  pageReducer(page) {
    return {
      id: page.id,
      name: page.name,
      header: page.header,
      content: page.content,
    }
  }

  async getPageById({ pageId }) {
    const res = await this.get('pages', { id: pageId })
    return this.pageReducer(res[0])
  }

  getPagesByIds({ pageIds }) {
    return Promise.all(pageIds.map(pageId => this.getPageById({ pageId })))
  }
}

module.exports = PageAPI
