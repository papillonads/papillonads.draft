<p align="center">
  <img width="500px" src="/logo.png">
</p>

<h1 align="center">Papillon Ads Holland</h1>

<p align="center">papillonads.nl website</p>

## Client

- Apollo GraphQL Client
  - deployed to and running at https://papillonads.github.io/papillonads.nl/

## Server

- Apollo GraphQL Server
  - deployed to https://dashboard.heroku.com/apps/papillonads-nl-server
  - running at https://papillonads-nl-server.herokuapp.com/
  - Apollo Engine registers service at https://engine.apollographql.com/service/papillonads-nl-server/

## Patterns

- NotFoundPage
  - NotFoundTemplate
    - atom/info/NoMatch
- HomePage
  - HomeTemplate
    - organism/section/Header
      - molecule/header/NavigationBar
        - atom/header/Logo
          - atom/header/Icon/SvgIconGroup
        - molecule/header/Links
          - atom/header/Link
        - molecule/header/Menu
          - atom/header/Icon
          - atom/header/Label
          - atom/header/Button
          - molecule/header/Badge
          - molecule/header/Dropdown
            - atom/header/Label
            - atom/header/Icon
            - molecule/header/Badge
      - molecule/header/SearchBar
        - atom/header/Button
        - molecule/header/SearchFieldsetStandard
          - atom/header/Input
        - molecule/header/SearchFieldsetAdvanced
          - atom/header/Input
    - organism/section/Content
      - molecule/content/LeftColumn
        - molecule/content/Navigation
          - atom/header/Icon/SvgIconGroup
        - molecule/content/UsefulLinks
          - atom/header/Icon/SvgIconGroup
