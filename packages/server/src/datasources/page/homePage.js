const links = require('./header/navigationBar/links')
const categories = require('./header/searchBar/searchFieldsetAdvanced/categories')
const distances = require('./header/searchBar/searchFieldsetAdvanced/distances')

const homePage = {
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
}

module.exports = homePage
