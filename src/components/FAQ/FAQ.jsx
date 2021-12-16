import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

let count = 0
const faqs = [
  {
    id: count++,
    question: 'What do I get exactly by owning a Meta DAO NFT?',
    answer: (
      <div className="space-y-3">
        <p>
          You&apos;ll be part of a community of likeminded people who want to
          build in this world.
        </p>

        <p>
          Meta DAO pools funds from thousands of people and then buys real
          estate inside the Metaverse.
        </p>

        <p>More specifically, as a Meta DAO NFT Holder: </p>

        <ol className="space-y-3 list-decimal list-outside ml-7">
          <li>
            You get 1 vote in the DAO per NFT you own when there is a decision
            open to voting.
          </li>

          <li>
            Your NFT will allow you to claim an ERC-20 token ($GAIA) after the
            initial land purchases are made. $GAIA represents fractionalized
            ownership of the purchased land. You can hold $GAIA to retain
            ownership of the land, or sell it in the open market.
          </li>

          <li className="space-y-3">
            You can claim pre-sale whitelisting on all future NFT mints. Gaia
            Group plans to fund numerous land purchases with similar NFT drops
            to Meta DAO. The roadmap currently includes 3 drops within the next
            12 months.{' '}
            <p>
              Just holding your NFT means you naturally gain greater exposure to
              pristine Metaverse real estate.{' '}
            </p>
            <p>For example: </p>
            <ul className="space-y-3 list-disc list-outside ml-7">
              <li>Meta DAO secondary sales = 100 ETH </li>
              <li>
                Secondary sales royalty earned - 100 ETH * 7% Royalty = 7 ETH{' '}
              </li>
              <li>DAO profit earned - 7 ETH * 75% = 5.25 ETH </li>
              <li>
                Meta DAO takes that 5.25 ETH and buys more Metaverse land. This
                means your fractionalized ownership of your $GAIA token is now
                backed by more land than before.
              </li>
            </ul>
          </li>

          <li>
            You have the ability to stake your NFT(s) in order to earn more of
            the $GAIA token. This further increases your position of
            fractionalized ownership inside the DAO and thus Metaverse land
            passively.
          </li>

          <li>
            Get an awesome piece of artwork you can display digitally or in the
            real world.
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: count++,
    question: 'How much of the funds go into the DAO?',
    answer:
      '75% of both the initial mint and secondary sales will be going into the DAO.',
  },
  {
    id: count++,
    question: 'How much does it cost to mint a Meta DAO NFT?',
    answer: '0.08 ETH',
  },
  {
    id: count++,
    question: 'How many Meta DAO NFTs can we mint?',
    answer: '1 per wallet',
  },
  {
    id: count++,
    question: 'How many Meta DAO NFTs will be available to mint?',
    answer:
      'The Meta DAO collection comprises of 10,000 total NFTs (3000 genesis to start). We may never release all 10,000 NFTs if we actualize our property purchasing goals with less mints. We believe this approach grows a high quality, aligned community.',
  },
  {
    id: count++,
    question: 'How do I mint or buy a Meta DAO NFT?',
    answer:
      'We will provide exact instructions on how to mint in our announcements channel on Discord. The mint will take place only on this website. Do not ever click on links or talk to people in DMs. They are all 100% a scam. Always follow the instructions inside the announcements channel.',
  },
  {
    id: count++,
    question: 'What is Gaia Group?',
    answer:
      'Gaia Group is the overarching brand that is launching Meta DAO and future NFT projects. Gaia in greek methodology is the goddess of the earth. It was fitting to use her name as we take over the prime pieces of land through all Metaverses.',
  },
  {
    id: count++,
    question: 'Will $GAIA token be used for all NFTs created in the future?',
    answer:
      'Yes, $GAIA will be the only token used for all NFTs projects released by the Gaia Group.',
  },
  {
    id: count++,
    question: 'Why have Gaia Group and Meta DAO as two different brand names?',
    answer: (
      <div className="space-y-3">
        <p>
          All NFTs released by Gaia Group will have their own theme and unique
          draw to them. This creates diversity in where we buy the real estate,
          and the communities created around them.
        </p>
        <p>
          The Meta DAO focuses on its own Metaverse land acquisition strategy.
          The other NFT projects we release will have their own focus and
          acquisition strategies.
        </p>
        <p>For example:</p>
        <ul className="ml-2 list-disc list-inside">
          <li>Meta DAO -&gt; DAO votes to buy land in The Sandbox </li>
          <li>Mint Project #2 -&gt; DAO votes to buy land in Decentraland </li>
          <li>Mint Project #3 -&gt; DAO votes to buy land in Netvrk</li>
        </ul>
        <p>
          Gaia Group gives every consequent NFT project significantly more
          strength, since its perpetually backed by more Metaverse land and
          successful project launches.
        </p>
      </div>
    ),
  },
]

function FAQ() {
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-700">
          <h2 className="text-3xl font-extrabold text-center text-gray-200 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-700">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                        <span className="font-medium text-gray-400">
                          {faq.question}
                        </span>
                        <span className="flex items-center ml-6 h-7">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      enter="transition duration-300 ease-out"
                      enterFrom="transform -translate-y-1 opacity-0"
                      enterTo="transform opacity-100"
                      leave="transition duration-100 ease-out"
                      leaveFrom="transform opacity-100"
                      leaveTo="transform -translate-y-1 opacity-0"
                    >
                      <Disclosure.Panel as="dd" className="pr-12 mt-2">
                        <p className="text-base text-gray-400">{faq.answer}</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FAQ
