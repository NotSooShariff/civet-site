import React from 'react'

const Cards = () => {
  return (
        <section class="text-gray-600 body-font mt-[-100px]">
        <div class="container px-5 lg:px-24 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <div class="flex items-center flex-col h-full bg-[#1a1b23] bg-opacity-75 px-8 py-10 rounded-xl overflow-hidden text-center relative">
                <img
                  class="align-center justify-center"
                  src="/card-img1.png"
                  alt="Card Icon"
                />
                <h1 class="mt-3 title-font sm:text-2xl text-4xl font-bold text-white mb-3">
                  1B Supply
                </h1>
                <p class="text-[#898CA9] leading-relaxed mb-3">
                Limited to 1 billion coins—ensuring scarcity and value stability for a secure and enduring investment in our Solana-powered cryptocurrency.
                </p>
                <a class="text-purple-500 inline-flex items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="flex items-center flex-col h-full bg-[#1a1b23] bg-opacity-75 px-8 py-10 rounded-xl overflow-hidden text-center relative">
                <img
                  class="align-center justify-center"
                  src="/card-img2.png"
                  alt="Card Icon"
                />
                <h1 class="mt-3 title-font sm:text-2xl text-4xl font-bold text-white mb-3">
                  On Solana
                </h1>
                <p class="text-[#898CA9] leading-relaxed mb-3">
                Built on the high-performance Solana blockchain—experience rapid transaction speeds and low fees, making our coin an ideal choice for decentralized applications.
                </p>
                <a class="text-purple-500 inline-flex items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="flex items-center flex-col h-full bg-[#1a1b23] bg-opacity-75 px-8 py-10 rounded-xl overflow-hidden text-center relative">
                <img
                  class="align-center justify-center"
                  src="/card-img3.png"
                  alt="Card Icon"
                />
                <h1 class="mt-3 title-font sm:text-2xl text-4xl font-bold text-white mb-3">
                  0 Tax
                </h1>
                <p class="text-[#898CA9] leading-relaxed mb-3">
                Seamless transactions with zero tax—enjoy cost-effective and efficient transfers on the lightning-fast Solana blockchain.
                </p>
                <a class="text-purple-500 inline-flex items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img src="/stars.png" alt="Stars" class="ml-16 mt-[-100px]" />
      </section>
  )
}

export default Cards