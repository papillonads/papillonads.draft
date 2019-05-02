const links = require('./header/navigationBar/links')
const categories = require('./header/searchBar/searchFieldsetAdvanced/categories')
const distances = require('./header/searchBar/searchFieldsetAdvanced/distances')
const topBannerResources = require('./content/topBanner/resources')
const marketingBannerResources = require('./content/marketingBanner/resources')

const homePageData = {
  id: 'home',
  name: 'Papillon Ads Holland',
  header: {
    navigationBar: {
      links,
    },
    searchBar: {
      searchFieldsetAdvanced: {
        categories,
        distances,
      },
    },
  },
  content: {
    topBanner: {
      resources: topBannerResources,
    },
    marketingBanner: {
      resources: marketingBannerResources,
    },
  },
}

console.log('~homePageData~', homePageData)
module.exports = homePageData
