const { paginateResults } = require('./utils')

module.exports.resolvers = {
  Query: {
    pages: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allPages = await dataSources.pageAPI.getAllPages()

      const list = paginateResults({
        after,
        pageSize,
        results: allPages,
      })

      return {
        list,
        cursor: list.length ? list[list.length - 1].cursor : null,
        hasMore: list.length ? list[list.length - 1].cursor !== allPages[allPages.length - 1].cursor : false,
      }
    },
  },
}
