const { infoData } = require('./info')
const {
  headerData: { linksData, dropdownData, categoriesData, distancesData },
} = require('./header')
const content = require('./content')

module.exports.homePageData = {
  info: {
    id: infoData.id,
    name: infoData.name,
  },
  header: {
    navigationBar: {
      links: linksData,
      dropdown: dropdownData,
    },
    searchBar: {
      searchFieldsetAdvanced: {
        categories: categoriesData,
        distances: distancesData,
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
