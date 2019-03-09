import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import { create } from '@storybook/theming'
import { version } from '../lerna.json'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import client from '../packages/client/src/graphql/client'

const setup = () => {
  addDecorator(withInfo)
  addDecorator(withNotes)
  addParameters({
    options: {
      theme: create({
        base: 'light',
        brandTitle: `Papillon Ads v${version}`,
        brandUrl: 'https://github.com/papillonads/papillonads.nl',
      }),
      isFullscreen: false,
      showNav: true,
      showPanel: false,
      sidebarAnimations: false,
    },
  })

  addDecorator(story => <div className="p-4">{story()}</div>)

  addDecorator(story => (
    <BrowserRouter>
      <ApolloProvider client={client}>{story()}</ApolloProvider>
    </BrowserRouter>
  ))

  const contexts = [require.context('../packages/client/src', true, /story*\.js$/)]

  const loadStories = () => {
    require('./welcomeStory')
    contexts.forEach(context => {
      context
        .keys()
        .filter(key => !key.includes('node_modules'))
        .forEach(context)
    })
  }

  configure(loadStories, module)
}

setup()

export default setup
