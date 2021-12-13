module.exports = {
  stories: ['../src/components/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    'storybook-dark-mode',
  ],
}
