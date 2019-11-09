/* eslint class-methods-use-this: 0 */
const { RESTDataSource } = require('apollo-datasource-rest')
const { list } = require('./pages')

module.exports.PageAPI = class PageAPI extends RESTDataSource {
  async getAllPages() {
    return list && list.length ? list.map(l => this.pageReducer(l)) : []
  }

  pageReducer(page) {
    return {
      info: page.info,
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
