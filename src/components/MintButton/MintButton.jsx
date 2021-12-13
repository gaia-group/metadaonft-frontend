import React from 'react'
import PropTypes from 'prop-types'
import { ethers } from 'ethers'
import { getWhitelistParams } from '../../utilities/merkleTrees'

import Button from '../Button/Button'

function MintButton({
  onError,
  ethBalance,
  isPaused,
  contract,
  isWrongNetwork,
  isBlockedByWhitelist,
  account,
}) {
  function errorMessage() {
    if (isWrongNetwork) return '(on wrong network)'
    if (isPaused) return '(minting is paused)'
    if (isBlockedByWhitelist) return '(whitelist required to mint)'
    if (!isPaused && parseFloat(ethBalance) < 0.2) {
      return '(not enough ETH in wallet)'
    }
  }

  async function handleClick() {
    try {
      const { proof, positions } = getWhitelistParams(account)
      const value = ethers.utils.parseEther('0.2')
      await contract.mint(account, 1, proof, positions, { value })
    } catch (err) {
      onError(err)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-1">
      <Button
        disabled={
          parseFloat(ethBalance) < 0.2 ||
          isPaused ||
          isWrongNetwork ||
          isBlockedByWhitelist
        }
        onClick={handleClick}
        label="Mint for 0.2 ETH"
        shadow
      />
      {errorMessage && (
        <div className="text-sm text-red-600">{errorMessage()}</div>
      )}
    </div>
  )
}

MintButton.defaultProps = {
  onError: () => {},
  account: '',
  ethBalance: '',
  contract: '',
  isPaused: false,
  isWrongNetwork: false,
  isBlockedByWhitelist: true,
}

MintButton.propTypes = {
  onError: PropTypes.func,
  account: PropTypes.string,
  ethBalance: PropTypes.string,
  contract: PropTypes.string,
  isPaused: PropTypes.bool,
  isWrongNetwork: PropTypes.bool,
  isBlockedByWhitelist: PropTypes.bool,
}

export default MintButton
