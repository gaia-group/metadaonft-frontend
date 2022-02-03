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
          First and most important - you will be minting uniquely stunning
          metaverse land.
        </p>

        <p>
          Next, you get access to the first metaverse focused community. Think
          of it like being in Manhattan in 1880 and building a network... but in
          the digital world. You&apos;ll be part of an exclusive club of
          likeminded people who want to innovate in this world.
        </p>

        <p>
          Lastly, you get early access to purchase other products launched by
          either Gaia Group of Meta DAO, including our second product that
          brings your digital collectible to life.
        </p>
      </div>
    ),
  },
  {
    id: count++,
    question: 'How much does it cost to mint a Meta DAO NFT?',
    answer: '0.149 ETH',
  },
  {
    id: count++,
    question: 'How many Meta DAO NFTs can we mint?',
    answer: '2 per wallet.',
  },
  {
    id: count++,
    question: 'How many Meta DAO NFTs will be available to mint?',
    answer: 'The Meta DAO collection comprises of 5,555 total land NFTs.',
  },
  {
    id: count++,
    question: 'How do I mint or buy a Meta DAO NFT?',
    answer:
      'We will provide exact instructions on how to mint in our discord. The mint will take place only on this official website. Do not ever click on links or talk to people in DMs. They are all 100% a scam. Always follow the instructions in our discord or on this site.',
  },
  {
    id: count++,
    question: 'What is Gaia Group?',
    answer:
      'Gaia Group is the overarching brand that is launching Meta DAO and future NFT projects. Gaia is the goddess of the earth and we use her name as we produce more land projects in the metaverse.',
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
          The Meta DAO focuses on making it easier to own and build onq
          metaverse land. The other NFT projects we release will have their own
          focus.
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
