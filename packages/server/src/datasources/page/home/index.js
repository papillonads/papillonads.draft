const info = require('./info')
const header = require('./header')
const content = require('./content')

const homePageData = {
  info: {
    id: info.id,
    name: info.name,
  },
  header: {
    navigationBar: {
      links: header.links,
    },
    searchBar: {
      searchFieldsetAdvanced: {
        categories: header.categories,
        distances: header.distances,
      },
    },
  },
  content: {
    topBanner: {
      resources: content.topBannerResources,
    },
    leftColumn: {
      navigation: {
        highlightsLinks: content.links.highlights,
        navigationBlock: content.navigationBlock,
      },
      mapLink: {},
      usefulLinks: {
        buyersLinks: content.links.buyers,
        sellersLinks: content.links.sellers,
      },
    },
    marketingBanner: {
      resources: content.marketingBannerResources,
    },
  },
}

module.exports = homePageData
