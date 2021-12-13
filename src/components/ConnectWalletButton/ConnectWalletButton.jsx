import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'

function ConnectWalletButton({ onConnected, onError }) {
  async function handleClick() {
    if (window.ethereum) {
      try {
        const [connectedAccount] = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        onConnected(connectedAccount)
      } catch (err) {
        onError(err)
      }
    }
  }

  return (
    <Button
      disabled={!window.ethereum}
      onClick={handleClick}
      label="Connect Your Profile"
      shadow
    />
  )
}

ConnectWalletButton.defaultProps = {
  onConnected: () => {},
  onError: () => {},
}

ConnectWalletButton.propTypes = {
  onConnected: PropTypes.func,
  onError: PropTypes.func,
}

export default ConnectWalletButton
