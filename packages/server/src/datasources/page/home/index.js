const header = require('./header')
const content = require('./content')

const homePageData = {
  id: 'home',
  name: 'Papillon Ads Holland',
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
        handyLinksHighlights: content.handyLinks.highlights,
        navigationBlock: content.navigationBlock,
        handyLinksBuyer: content.handyLinks.buyer,
        handyLinksSeller: content.handyLinks.seller,
      },
      mapLink: {},
      usefulLinks: {},
    },
    marketingBanner: {
      resources: content.marketingBannerResources,
    },
  },
}

module.exports = homePageData
