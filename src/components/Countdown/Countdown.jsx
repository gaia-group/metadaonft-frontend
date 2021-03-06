import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton'
import classNames from 'classnames'

import MintingControls from '../MintingControls/MintingControls'
import PublicCountdown from '../PublicCountdown/PublicCountdown'
import PromoModal from '../PromoModal/PromoModal'
import PromoModal2 from '../PromoModal2/PromoModal2'

export const WHITELIST_LAUNCH_DATETIME = DateTime.fromObject(
  { month: 2, year: 2022, day: 20, hour: 9 },
  { zone: 'America/New_York' }
).setZone()

export const PUBLIC_LAUNCH_DATETIME = WHITELIST_LAUNCH_DATETIME.plus({
  hours: 6,
})

export const BOOOMER_PROMO_END_DATETIME = WHITELIST_LAUNCH_DATETIME.plus({
  hours: 1,
})

function Countdown({
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
  const [lastRecordedTime, setLastRecordedTime] = useState(DateTime.now())

  useEffect(() => {
    async function getTime() {
      // Wait for previous request to complete before fetching next one.
      let safeToFetch = true
      if (!safeToFetch) return

      try {
        safeToFetch = false
        setLastRecordedTime(DateTime.now())
      } catch (err) {
        console.error('failed to fetch time') // eslint-disable-line no-console
      }
      safeToFetch = true
    }

    getTime() // Fetch it first to avoid waiting 1 sec for interval to kick in
    const timingInterval = setInterval(getTime, 1000)

    return () => clearInterval(timingInterval)
  }, [])

  return (
    <div
      className={classNames('grid grid-cols-1', {
        'md:grid-cols-2': !!account,
      })}
    >
      <div className="flex flex-col items-center justify-start pt-4 md:pt-10 space-y-6">
        <PublicCountdown
          lastRecordedTime={lastRecordedTime}
          isWrongNetwork={isWrongNetwork}
          totalSupply={totalSupply}
        />
        {!account && window.ethereum && !isWrongNetwork && (
          <ConnectWalletButton onConnected={onConnected} onError={onError} />
        )}
        <div className="text-xl text-white font-extrabold tracking-tight text-center sm:text-2xl lg:text-3xl text-stroke-black space-y-2 pt-5 hidden sm:block">
          <div className="flex flex-col">
            <PromoModal2 lastRecordedTime={lastRecordedTime} />
            <PromoModal />
          </div>
        </div>
      </div>
      <MintingControls
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
      <div className="text-xl text-white font-extrabold tracking-tight text-center sm:text-2xl lg:text-3xl text-stroke-black space-y-2 pt-5 sm:hidden">
        <div className="flex flex-col">
          <PromoModal2 lastRecordedTime={lastRecordedTime} />
          <PromoModal />
        </div>
      </div>
    </div>
  )
}

Countdown.defaultProps = {}

Countdown.propTypes = {
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

export default Countdown
