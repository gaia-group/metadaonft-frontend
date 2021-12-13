import React from 'react'
import PropTypes from 'prop-types'

function WalletInfoPanel({ account, ethBalance, tokens, networkId }) {
  function readableNetworkName(id) {
    switch (id) {
      case 1:
        return 'Mainnet'
      case 3:
        return 'Ropsten'
      case 4:
        return 'Rinkeby'
      case 5:
        return 'Goerli'
      case 42:
        return 'Kovan'
      case 31337:
        return 'Localhost'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="max-w-md m-6 text-center bg-white shadow-lg sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-6 text-green-800">
          Connected to{' '}
          <span className="font-mono">
            {account.substring(0, 5)}...
            {account.substring(account.length - 4)}
          </span>
        </h3>
        <div className="max-w-xl mt-2 font-semibold text-green-800">
          ETH: {ethBalance}
          <p>{tokens.length} NFTs Owned</p>
        </div>

        <div className="flex items-center justify-center max-w-xl mt-2 space-x-2 text-sm font-semibold text-green-500">
          <div className="relative flex w-3 h-3">
            <span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-3 h-3 bg-green-300 rounded-full"></span>
          </div>
          <p>{readableNetworkName(networkId)} Network</p>
        </div>
      </div>
    </div>
  )
}

WalletInfoPanel.defaultProps = {
  account: '',
  ethBalance: '',
  tokens: [],
  networkId: null,
}

WalletInfoPanel.propTypes = {
  account: PropTypes.string,
  ethBalance: PropTypes.string,
  tokens: PropTypes.string,
  networkId: PropTypes.string,
}

export default WalletInfoPanel
