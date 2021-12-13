import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'
import classNames from 'classnames'

const steps = [
  {
    name: 'Q4 2021',
    description: (
      <ul className="py-1 ml-1 space-y-3">
        <li>Launch the Gen-0 NFT to fund land purchases</li>
        <li>
          <a
            className="text-green-300 hover:opacity-80"
            href="https://snapshot.org/"
          >
            Snapshot
          </a>{' '}
          vote on Gen-0 land purchase
        </li>
        <li>Purchase Gen-0 land</li>
      </ul>
    ),
    status: 'current',
  },
  {
    name: 'Q1 2022',
    description: (
      <ul className="py-1 ml-1 space-y-3">
        <li>
          Develop <span className="font-semibold">$GAIA</span>, fractionalizing
          land ownership
        </li>
        <li>
          Distribute{' '}
          <span className="font-semibold">1M $GAIA per ETH in the DAO</span> to
          all Gen-0 holders.
        </li>
      </ul>
    ),
    status: 'upcoming',
  },
  {
    name: 'Q2 2022',
    description: (
      <ul className="py-1 ml-1 space-y-3">
        <li>Launch Gen-1 NFT to fund next purchase</li>
        <li>
          <a
            className="text-green-300 hover:opacity-80"
            href="https://snapshot.org/"
          >
            Snapshot
          </a>{' '}
          vote on Gen-1 land purchase
        </li>
        <li>Purchase Gen-1 land</li>
        <li>
          Distribute{' '}
          <span className="font-semibold">900k $GAIA per ETH in the DAO</span>{' '}
          to all Gen-1 holders.
        </li>
      </ul>
    ),
    status: 'upcoming',
  },
  {
    name: 'Q3 2022',
    description: (
      <ul className="py-1 ml-1 space-y-3">
        <li>Launch Gen-2 NFT to fund next purchase</li>
        <li>
          <a
            className="text-green-300 hover:opacity-80"
            href="https://snapshot.org/"
          >
            Snapshot
          </a>{' '}
          vote on Gen-2 land purchase
        </li>
        <li>Purchase Gen-2 land</li>
        <li>
          Distribute{' '}
          <span className="font-semibold">800k $GAIA per ETH in the DAO</span>{' '}
          to all Gen-2 holders.
        </li>
      </ul>
    ),
    status: 'upcoming',
  },
]

function Roadmap() {
  return (
    <nav aria-label="Progress" className="flex justify-center bg-gray-900">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? 'pb-10' : '',
              'relative'
            )}
          >
            {step.status === 'complete' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-green-300"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start group">
                  <span className="flex items-center h-9">
                    <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-green-300 rounded-full group-hover:bg-green-800">
                      <CheckIcon
                        className="w-5 h-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span className="flex flex-col min-w-0 pb-1 ml-4 ">
                    <span className="text-2xl font-semibold tracking-wide text-green-300 uppercase md:text-3xl">
                      {step.name}
                    </span>
                    <span className="text-base text-gray-300 md:text-lg">
                      {step.description}
                    </span>
                  </span>
                </div>
              </>
            ) : step.status === 'current' ? (
              <>
                {stepIdx !== steps.length - 1 && (
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-600"
                    aria-hidden="true"
                  />
                )}
                <div
                  className="relative flex items-start group"
                  aria-current="step"
                >
                  <span className="flex items-center h-9" aria-hidden="true">
                    <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-gray-900 border-2 border-green-300 rounded-full">
                      <span className="h-2.5 w-2.5 bg-green-700 rounded-full" />
                    </span>
                  </span>
                  <span className="flex flex-col min-w-0 ml-4">
                    <span className="pb-1 text-2xl font-semibold tracking-wide text-gray-300 uppercase md:text-3xl">
                      {step.name}
                    </span>
                    <span className="text-base text-gray-300 md:text-lg">
                      {step.description}
                    </span>
                  </span>
                </div>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-600"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start group">
                  <span className="flex items-center h-9" aria-hidden="true">
                    <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-gray-900 border-2 border-gray-600 rounded-full">
                      <span className="h-2.5 w-2.5 bg-transparent rounded-full" />
                    </span>
                  </span>
                  <span className="flex flex-col min-w-0 ml-4">
                    <span className="pb-1 text-2xl font-semibold tracking-wide text-gray-300 uppercase md:text-3xl">
                      {step.name}
                    </span>
                    <span className="text-base text-gray-300 md:text-lg">
                      {step.description}
                    </span>
                  </span>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Roadmap
