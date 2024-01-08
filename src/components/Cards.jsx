import React from 'react'

const Cards = () => {
  return (
        <section class="text-gray-600 body-font mt-[-100px]">
        <div class="container px-24 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <div class="flex items-center flex-col h-full bg-[#1a1b23] bg-opacity-75 px-8 pt-16 pb-24 rounded-xl overflow-hidden text-center relative">
                <img
                  class="align-center justify-center"
                  src="/card-img1.png"
                  alt="Card Icon"
                />
                <h1 class="mt-3 title-font sm:text-2xl text-4xl font-bold text-white mb-3">
                  Trade Desk
                </h1>
                <p class="text-[#898CA9] leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
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
              <div class="flex items-center flex-col h-full bg-[#1a1b23] bg-opacity-75 px-8 pt-16 pb-24 rounded-xl overflow-hidden text-center relative">
                <img
                  class="align-center justify-center"
                  src="/card-img2.png"
                  alt="Card Icon"
                />
                <h1 class="mt-3 title-font sm:text-2xl text-4xl font-bold text-white mb-3">
                  Coinflip ATMs
                </h1>
                <p class="text-[#898CA9] leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
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
              <div class="flex items-center flex-col h-full bg-[#1a1b23] bg-opacity-75 px-8 pt-16 pb-24 rounded-xl overflow-hidden text-center relative">
                <img
                  class="align-center justify-center"
                  src="/card-img3.png"
                  alt="Card Icon"
                />
                <h1 class="mt-3 title-font sm:text-2xl text-4xl font-bold text-white mb-3">
                  Coinflip Wallet
                </h1>
                <p class="text-[#898CA9] leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
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