const { linksData } = require('./navigationBar/links')
const { dropdownData } = require('./navigationBar/dropdown')
const { categoriesData } = require('./searchBar/searchFieldsetAdvanced/categories')
const { distancesData } = require('./searchBar/searchFieldsetAdvanced/distances')

module.exports.headerData = {
  linksData,
  dropdownData,
  categoriesData,
  distancesData,
}
