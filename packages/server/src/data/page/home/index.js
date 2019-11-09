const { infoData } = require('./info')
const { headerData } = require('./header')
const { contentData } = require('./content')

module.exports.homePageData = {
  info: {
    id: infoData.id,
    name: infoData.name,
  },
  header: {
    navigationBar: {
      links: headerData.linksData,
      dropdown: headerData.dropdownData,
    },
    searchBar: {
      searchFieldsetAdvanced: {
        categories: headerData.categoriesData,
        distances: headerData.distancesData,
      },
    },
  },
  content: {
    topBanner: {
      resources: contentData.topBannerResourcesData,
    },
    leftColumn: {
      navigation: {
        highlightsLinks: contentData.linksData.highlights,
        navigationBlock: contentData.navigationBlockData,
      },
      usefulLinks: {
        buyersLinks: contentData.linksData.buyers,
        sellersLinks: contentData.linksData.sellers,
      },
    },
    marketingBanner: {
      resources: contentData.marketingBannerResourcesData,
    },
  },
}
