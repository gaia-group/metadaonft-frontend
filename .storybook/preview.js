import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addParameters } from '@storybook/react'
import '../src/index.css'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
