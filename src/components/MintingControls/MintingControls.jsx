import React from 'react'
import PropTypes from 'prop-types'

import BrowserNotSupportedNotification from '../BrowserNotSupportedNotification/BrowserNotSupportedNotification'
import WalletInfoPanel from '../WalletInfoPanel/WalletInfoPanel'
import MintButton from '../MintButton/MintButton'

function MintingControls({
  account,
  onError,
  ethBalance,
  tokens,
  networkId,
  isWrongNetwork,
  isBlockedByWhitelist,
  isPublicMintingAllowed,
  contract,
}) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-8 mx-auto">
        {!window.ethereum && <BrowserNotSupportedNotification />}
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
            isWrongNetwork={isWrongNetwork}
            isBlockedByWhitelist={isBlockedByWhitelist}
            isPublicMintingAllowed={isPublicMintingAllowed}
          />
        )}
      </div>
    </div>
  )
}

MintingControls.defaultProps = {}

MintingControls.propTypes = {
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

export default MintingControls
