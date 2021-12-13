import React from 'react'

let count = 0
const faqs = [
  {
    id: count++,
    question: 'What do I get exactly by owning a Meta DAO NFT?',
    answer:
      'You gain access to the most exclusive real estate inside the metaverse. Meta DAO pools funds from lots of people, so it can buy prime real estate that most individuals could not. As an NFT holder, you can vote on what to develop on those pieces of digital real estate (i.e. a nightclub, casino, building, bars, gym, etc.) In a nutshell you are getting access to Manhattan real estate in 1880... but in the digital world.',
  },
  {
    id: count++,
    question: 'How many Meta DAO NFTs will be available to mint?',
    answer:
      'The upper limit is 10,000 total mints, released in small batches over time to gradually grow the community. We may never release all 10,000 mints.',
  },
  {
    id: count++,
    question: 'How do I mint or buy a Meta DAO NFT?',
    answer:
      'When we announce that mints are open on our discord, come back to this page to mint your NFT.',
  },
  {
    id: count++,
    question: 'How much does it cost to mint a Meta DAO NFT?',
    answer: '0.055 ETH',
  },
  {
    id: count++,
    question: 'WTF is an NFT?',
    answer:
      "NFT stands for Non-Fungible Token. An NFT is unique and can't be replaced with something else.",
  },
]

function FAQ() {
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-white">{faq.question}</dt>
                <dd className="mt-3 text-gray-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FAQ
