import React from 'react'
import { storiesOf } from '@storybook/react'
import { version } from '../lerna.json'

storiesOf('Papillon Ads Draft', module).add(`v${version} 🎉`, () => <h1>Welcome to {`Papillon Ads Draft v${version}`}</h1>)
