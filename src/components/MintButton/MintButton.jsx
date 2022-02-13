import React from 'react'
import PropTypes from 'prop-types'
import { ethers } from 'ethers'
import { getWhitelistParams } from '../../utilities/merkleTrees'

import Button from '../Button/Button'

const MINT_PRICE = 0.04

function MintButton({
  onError,
  ethBalance,
  contract,
  isWrongNetwork,
  isBlockedByWhitelist,
  account,
}) {
  function errorMessage() {
    if (isWrongNetwork) return '(on wrong network)'
    if (isBlockedByWhitelist) return '(whitelist required to mint)'
    if (parseFloat(ethBalance) < MINT_PRICE) {
      return '(not enough ETH in wallet)'
    }
  }

  async function handleClick() {
    try {
      const { proof, positions } = getWhitelistParams(account)
      const value = ethers.utils.parseEther(MINT_PRICE.toString())
      await contract.mint(account, 1, proof, positions, { value })
    } catch (err) {
      onError(err)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-1">
      <Button
        disabled={
          parseFloat(ethBalance) < MINT_PRICE ||
          isWrongNetwork ||
          isBlockedByWhitelist
        }
        onClick={handleClick}
        label={`Mint for ${MINT_PRICE} ETH`}
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
  isWrongNetwork: false,
  isBlockedByWhitelist: true,
}

MintButton.propTypes = {
  onError: PropTypes.func,
  account: PropTypes.string,
  ethBalance: PropTypes.string,
  contract: PropTypes.string,
  isWrongNetwork: PropTypes.bool,
  isBlockedByWhitelist: PropTypes.bool,
}

export default MintButton
