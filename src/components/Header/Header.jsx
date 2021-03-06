import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import Countdown from '../Countdown/Countdown'

import discordSocialLogo from '../../images/discord-social-logo.svg'
import etherscanSocialLogo from '../../images/etherscan-social-logo.svg'
import openseaSocialLogo from '../../images/opensea-social-logo.svg'

const OPEN_SEA_URL = 'https://opensea.io/collection/meta-dao-nft'

const navigation = {
  social: [
    {
      name: 'Discord',
      href: 'https://discord.gg/bKtJ2nC2Rk',
      icon: (props) => (
        <SVG src={discordSocialLogo} title="Discord" {...props} />
      ),
    },
    {
      name: 'OpenSea',
      href: OPEN_SEA_URL,
      icon: (props) => (
        <SVG src={openseaSocialLogo} title="OpenSea" {...props} />
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/metadaonft',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Etherscan',
      href: 'https://etherscan.io/address/0xD67cfF882066536D134E80b9ad2b16e247b6e438',
      icon: (props) => (
        <SVG src={etherscanSocialLogo} title="Etherscan" {...props} />
      ),
    },
  ],
}
function Header({
  account,
  onError,
  onConnected,
  ethBalance,
  tokens,
  networkId,
  isWrongNetwork,
  isBlockedByWhitelist,
  isPublicMintingAllowed,
  totalSupply,
  contract,
}) {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 w-full bg-black">
          <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <h1 className="text-2xl font-extrabold tracking-tight text-center text-green-300 sm:text-4xl">
                    <span className="font-medium">Meta</span>{' '}
                    <span className="font-extrabold">DAO</span>
                  </h1>
                </div>
              </div>
              <div className="flex space-x-4 sm:space-x-10">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon
                      className="w-6 h-6 text-green-300 fill-current sm:w-10 sm:h-10 opacity-80 hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <main className="pt-4">
            <div>
              <div className="relative">
                <div className="absolute inset-x-0 bottom-0 bg-black h-1/2" />
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="relative shadow-xl sm:overflow-hidden">
                    <div className="relative px-4 py-8 sm:px-6 sm:py-10 lg:py-12 lg:px-8">
                      {totalSupply < 4444 && (
                        <Countdown
                          account={account}
                          onError={onError}
                          onConnected={onConnected}
                          ethBalance={ethBalance}
                          tokens={tokens}
                          networkId={networkId}
                          isWrongNetwork={isWrongNetwork}
                          isBlockedByWhitelist={isBlockedByWhitelist}
                          isPublicMintingAllowed={isPublicMintingAllowed}
                          totalSupply={totalSupply}
                          contract={contract}
                        />
                      )}
                      {totalSupply >= 4444 && (
                        <>
                          <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl text-stroke-black">
                            <span className="inline text-green-300 sm:block">
                              Making it easy to
                            </span>{' '}
                            <span className="inline text-white drop-shadow-xl sm:block text-stroke-black">
                              build inside the metaverse
                            </span>{' '}
                          </h1>
                          <div className="text-xl text-white font-extrabold tracking-tight text-center sm:text-2xl lg:text-3xl text-stroke-black pt-10">
                            <p>Meta DAO NFTs are sold out.</p>
                            <p>
                              Buy yours now on the{' '}
                              <a
                                className="text-green-300 hover:text-green-500"
                                href={OPEN_SEA_URL}
                              >
                                secondary market
                              </a>
                              .
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {}

Header.propTypes = {
  account: PropTypes.string,
  onError: PropTypes.func,
  onConnected: PropTypes.func,
  ethBalance: PropTypes.string,
  tokens: PropTypes.array,
  networkId: PropTypes.number,
  isWrongNetwork: PropTypes.bool,
  isBlockedByWhitelist: PropTypes.bool,
  isPublicMintingAllowed: PropTypes.bool,
  totalSupply: PropTypes.string,
  contract: PropTypes.object,
}

export default Header
