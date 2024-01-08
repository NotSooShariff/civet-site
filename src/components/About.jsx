import React from 'react'

const About = () => {
  return (
    <div>
        <section>
        <div class="flex flex-col justify-center items-center">
          <h1 class="mt-30 text-center text-5xl text-white font-bold drop-shadow-lg">
            A crypto investment platform <br /> that invests in you
          </h1>
          <p class="mt-5 text-center text-xl text-white opacity-70">
            We invest more resources than any other platrom in making sure great{" "}
            <br /> support from real people is a click away, whenever you need
            it.
          </p>
          <button
            type="button"
            class="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-6 py-4 text-center me-2 mb-2"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
}

export default About