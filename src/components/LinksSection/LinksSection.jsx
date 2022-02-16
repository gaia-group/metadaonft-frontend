import React from 'react'
import SVG from 'react-inlinesvg'

import discordSocialLogo from '../../images/discord-social-logo.svg'
// FIXME: Add this in later when contract is deployed
// import etherscanSocialLogo from '../../images/etherscan-social-logo.svg'
// import openseaSocialLogo from '../../images/opensea-social-logo.svg'

const links = [
  {
    name: 'Discord',
    description: 'Connect with the team and the MetaDAO community.',
    icon: (props) => <SVG src={discordSocialLogo} title="Discord" {...props} />,
    href: 'https://discord.gg/bKtJ2nC2Rk',
  },
  {
    name: 'Twitter',
    description:
      'All major updates are shared on Twitter. Follow us to stay up to date.',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    href: 'https://twitter.com/metadaonft',
  },
  // {
  //   name: 'Contract',
  //   description:
  //     'Review the contract on Etherscan - we love to discuss our contract in Discord.',
  //   href: '#',
  //   icon: (props) => (
  //     <SVG src={etherscanSocialLogo} title="Etherscan" {...props} />
  //   ),
  // },
  // {
  //   name: 'OpenSea',
  //   description:
  //     'Access the official collection, and pick your MetaDAO up on the secondary market.',
  //   icon: (props) => <SVG src={openseaSocialLogo} title="OpenSea" {...props} />,
  //   href: '#',
  // },
]

function LinksSection() {
  return (
    <div className="bg-black overflow-hidden text-white">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-900"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
              Join the action
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {links.map((link) => (
              <div key={link.name}>
                <dt>
                  <a
                    className="flex items-center justify-center h-12 w-12 rounded-md bg-green-300 hover:bg-green-500 text-gray-900 hover:text-gray-800 transition-colors duration-100 ease-in"
                    href={link.href}
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-100">
                    {link.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-400">
                  {link.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

LinksSection.defaultProps = {}

LinksSection.propTypes = {}

export default LinksSection
