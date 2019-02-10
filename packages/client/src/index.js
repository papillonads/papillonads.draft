/* eslint no-unused-vars : 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { startPageRoute, notFoundPageRoute } from './route'
import './index.scss'
import '@babel/polyfill'
import client from './graphql/client'
import { addDivWithIdToBody, checkAccessibilityIssues } from './utility/startup'
import ErrorBoundary from './pattern/atom/error/ErrorBoundary'

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Switch>
        <Route exact={startPageRoute.exact} path={startPageRoute.path} component={startPageRoute.component} />
        <Route component={notFoundPageRoute.component} />
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
