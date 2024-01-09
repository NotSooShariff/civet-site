import React from 'react'

const About = () => {
  return (
    <div>
        <section>
        <div class="flex flex-col justify-center items-center">
          <h1 class="mt-30 text-center text-5xl text-white font-bold drop-shadow-lg">
           Inspired by the Unique Asian Palm Civet
          </h1>
          <p class="mt-5 lg:px-64 text-center text-xl text-white opacity-70">
          This cat-like creature is behind the world's most luxurious coffee, Kopi Luwak, 
          <wbr />
          made from beans processed in its digestive system, creating a rare and exquisite flavor. 
          <wbr />
          Our project, symbolized by the tagline "The Cat with a Utility," reflects this blend of natural wonder and luxury. 
          <wbr />
          We invite you to join us in unveiling Civet to the world, a symbol of rarity, innovation, 
          <wbr />
          and the extraordinary journey from nature to blockchain luxury.
          </p>
          <button
            type="button"
            class="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-6 py-4 text-center me-2 mb-2"
          >
            Buy Now!
          </button>
        </div>
      </section>
    </div>
  )
}

export default About