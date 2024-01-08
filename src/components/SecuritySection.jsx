import React from 'react'

const SecuritySection = () => {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="auth"
              class="ml-[-600px] lg:w-full w-full lg:h-screen h-full object-cover object-center rounded"
              src="/auth-bg.jpg"
            />
            <div class="lg:text-left text-center lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="mt-48 text-5xl text-white font-bold">
                24/7 access to full service customer support
              </h1>
              <p class="mt-10 text-lg text-gray-500">
                We invest more resources than any other platform in making sure
                great support from real people is a click away, whenever you
                need it.
              </p>
              <button
                type="button"
                class="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-6 py-4 text-center me-2 mb-2"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default SecuritySection