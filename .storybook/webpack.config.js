const path = require('path')

module.exports = async ({ config }) => {
  //Configures postcss to load tailwind
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            // require('postcss-import'),
            // require('postcss-flexbugs-fixes'),
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer'),
            require('postcss-preset-env')({
              autoprefixer: { flexbox: 'no-2009' },
              stage: 3,
            }),
          ],
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  })

  // Auto-adds the story source decorator to every stories file
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  })
  return config
}
