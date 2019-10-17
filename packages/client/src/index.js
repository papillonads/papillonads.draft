/* eslint no-unused-vars : 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { withRouter } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { homePageRoute, notFoundPageRoute } from './route'
import client from './graphql/client'
import { addDivWithIdToBody, checkAccessibilityIssues } from './library/startup'
import ErrorBoundary from './pattern/atom/error/ErrorBoundary'

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Switch>
        <Route exact={homePageRoute.exact} path={homePageRoute.path} component={homePageRoute.component} />
        <Route component={withRouter(notFoundPageRoute.component)} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>
)

addDivWithIdToBody('app')
checkAccessibilityIssues(React, ReactDOM, 1000)

const StrictApp = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)

const RegularApp = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

ReactDOM.render(<RegularApp />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
