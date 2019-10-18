import React from 'react'
import { storiesOf } from '@storybook/react'
import { version } from '../lerna.json'

storiesOf('Papillon Ads NL', module).add(`v${version} 🎉`, () => <h1>Welcome to {`Papillon Ads NL v${version}`}</h1>)
