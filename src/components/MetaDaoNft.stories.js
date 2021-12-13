import React from 'react'
import MetaDaoNft from './MetaDaoNft'

export default {
  title: 'Meta DAO NFT',
  component: MetaDaoNft,
  args: {},
}

export function metaDaoNft(args) {
  return <MetaDaoNft {...args} />
}

metaDaoNft.parameters = { layout: 'fullscreen' }
