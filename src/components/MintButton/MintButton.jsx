import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ethers } from 'ethers'
import pluralize from 'pluralize'

import { getWhitelistParams } from '../../utilities/merkleTrees'
import Button from '../Button/Button'

const MINT_PRICE = 0.04

function MintButton({
  onError,
  ethBalance,
  contract,
  isWrongNetwork,
  isBlockedByWhitelist,
  isPublicMintingAllowed,
  account,
}) {
  const [amountToMint, setAmountToMint] = useState(1)

  function errorMessage() {
    if (isWrongNetwork) return '(on wrong network)'
    if (isBlockedByWhitelist) return '(whitelist required to mint)'
    if (parseFloat(ethBalance) < MINT_PRICE * amountToMint) {
      return '(not enough ETH in wallet)'
    }
  }

  async function handleClick() {
    try {
      const { proof, positions } = getWhitelistParams(account)
      const value = ethers.utils.parseEther(
        (MINT_PRICE * amountToMint).toString()
      )
      await contract.mint(account, amountToMint, proof, positions, { value })
    } catch (err) {
      onError(err)
    }
  }

  return (
    <div>
      <div className="flex items-center space-x-2">
        <select
          value={amountToMint}
          onChange={(e) => setAmountToMint(e.target.value)}
          className="block h-12 w-22 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          disabled={
            parseFloat(ethBalance) < MINT_PRICE ||
            isWrongNetwork ||
            isBlockedByWhitelist
          }
        >
          {Array.from({ length: isPublicMintingAllowed ? 5 : 2 }).map(
            (_, i) => (
              <option key={String(i)} value={i + 1}>
                {pluralize('Mint', i + 1, true)}
              </option>
            )
          )}
        </select>
        <Button
          disabled={
            parseFloat(ethBalance) < MINT_PRICE ||
            isWrongNetwork ||
            isBlockedByWhitelist
          }
          onClick={handleClick}
          label={`Mint ${amountToMint} for ${MINT_PRICE * amountToMint} ETH`}
          shadow
        />
      </div>
      <p className="text-center pt-2">
        {errorMessage && (
          <div className="text-sm text-red-600">{errorMessage()}</div>
        )}
      </p>
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
  isPublicMintingAllowed: PropTypes.bool,
}

export default MintButton
