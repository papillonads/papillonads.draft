/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Route } from 'react-router-dom'
import { routeWithSubRoutesPropTypes } from './RouteWithSubRoutes.props'

const RouteWithSubRoutes = route => <Route path={route.path} render={props => <route.component {...props} routes={route.routes} />} />

RouteWithSubRoutes.propTypes = routeWithSubRoutesPropTypes

export default RouteWithSubRoutes
/* eslint-enable react/jsx-props-no-spreading */
