import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'

// import etherscanSocialLogo from '../../images/etherscan-social-logo.svg'
import discordSocialLogo from '../../images/discord-social-logo.svg'
import openseaSocialLogo from '../../images/opensea-social-logo.svg'
// FIXME: Add this in later when minting is live.
// import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton'
// import BrowserNotSupportedNotification from '../BrowserNotSupportedNotification/BrowserNotSupportedNotification'
// import WalletInfoPanel from '../WalletInfoPanel/WalletInfoPanel'
// import MintButton from '../MintButton/MintButton'

const navigation = {
  social: [
    {
      name: 'Discord',
      href: 'https://discord.gg/cfcnwggHGv',
      icon: (props) => (
        <SVG src={discordSocialLogo} title="Discord" {...props} />
      ),
    },
    {
      name: 'OpenSea',
      href: 'https://opensea.io/meta-dao-nft',
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
    // {
    //   name: 'Etherscan',
    //   href: '#',
    //   icon: (props) => (
    //     <SVG src={etherscanSocialLogo} title="Etherscan" {...props} />
    //   ),
    // },
  ],
}

// FIXME: Add this in later when minting is live.
// function Header({
//   account,
//   onError,
//   onConnected,
//   ethBalance,
//   tokens,
//   networkId,
//   isPaused,
//   isWrongNetwork,
//   isBlockedByWhitelist,
//   contract,
// }) {
function Header() {
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
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                      <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl text-stroke-black">
                        <span className="inline text-green-300 sm:block">
                          Making it easy to
                        </span>{' '}
                        <span className="inline text-white drop-shadow-xl sm:block text-stroke-black">
                          build inside metaverse spaces
                        </span>{' '}
                      </h1>
                      <div className="flex flex-col items-center justify-center pt-12 mx-auto md:pt-8">
                        {/* FIXME: Add this in later when minting is live. */}
                        {/*
                        {!account && window.ethereum && (
                          <ConnectWalletButton
                            onConnected={onConnected}
                            onError={onError}
                          />
                        )}
                        {!window.ethereum && (
                          <BrowserNotSupportedNotification />
                        )}
                        {!!account && (
                          <WalletInfoPanel
                            account={account}
                            ethBalance={ethBalance}
                            tokens={tokens}
                            networkId={networkId}
                          />
                        )}
                        {!!account && (
                          <MintButton
                            onError={onError}
                            account={account}
                            ethBalance={ethBalance}
                            contract={contract}
                            isPaused={isPaused}
                            isWrongNetwork={isWrongNetwork}
                            isBlockedByWhitelist={isBlockedByWhitelist}
                          />
                        )}
                        */}
                      </div>
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
  networkId: PropTypes.string,
  isPaused: PropTypes.bool,
  isWrongNetwork: PropTypes.bool,
  isBlockedByWhitelist: PropTypes.bool,
  contract: PropTypes.object,
}

export default Header
