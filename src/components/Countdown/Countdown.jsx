import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import { default as ReactCountdown } from 'react-countdown'
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton'
import classNames from 'classnames'

import MintingControls from '../MintingControls/MintingControls'
import LoadingCountdown from '../LoadingCountdown/LoadingCountdown'
import ClosedPresaleCountdown from '../ClosedPresaleCountdown/ClosedPresaleCountdown'
import PublicCountdown from '../PublicCountdown/PublicCountdown'

export const WHITELIST_LAUNCH_DATETIME = DateTime.now()
  .plus({ hours: 12 })
  .setZone()

export const PUBLIC_LAUNCH_DATETIME = WHITELIST_LAUNCH_DATETIME.plus({
  hours: 6,
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
  const [lastRecordedTime, setLastRecordedTime] = useState(null)

  useEffect(() => {
    async function getTime() {
      // Wait for previous request to complete before fetching next one.
      let safeToFetch = true
      if (!safeToFetch) return

      try {
        safeToFetch = false
        const dateData = await fetch(
          'https://worldtimeapi.org/api/timezone/GMT'
        )
        const dateJson = await dateData.json()
        const newDate = new Date(dateJson.datetime)
        setLastRecordedTime(newDate)
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
    <ReactCountdown
      date={WHITELIST_LAUNCH_DATETIME.valueOf()}
      now={() => lastRecordedTime}
      renderer={({
        days,
        hours,
        minutes,
        seconds,
        completed,
        props: { date },
      }) => {
        if (!lastRecordedTime || days > 5) {
          // Date still being fetched from server. Place spacer.
          return <LoadingCountdown />
        } else if (!completed) {
          return (
            <ClosedPresaleCountdown
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              expirationDate={date}
            />
          )
        } else {
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
                  <ConnectWalletButton
                    onConnected={onConnected}
                    onError={onError}
                  />
                )}
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
            </div>
          )
        }
      }}
    />
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
