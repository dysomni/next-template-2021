module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.module.rules.push({
      test: /\.svg/,
      type: 'asset/inline',
    })

    return config
  },
}