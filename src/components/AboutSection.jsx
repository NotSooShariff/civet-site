import React from 'react'

const AboutSection = () => {
  return (
    <div>
        <section class="overflow-x-hidden flex items-center justify-between px-10 py-16 text-white">
        <div class="lg:ml-16 w-1/2">
          <h1 class="mt-48 text-5xl font-bold">
            24/7 access to full service customer support
          </h1>
          <p class="mt-10 text-lg text-gray-500">
            We invest more resources than any other platform in making sure
            great support from real people is a click away, whenever you need
            it.
          </p>
          <button
            type="button"
            class="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-6 py-4 text-center me-2 mb-2"
          >
            Get Started
          </button>
        </div>
        <div class="overflow-hidden translate-x-80 scale-150">
          <img
            src="/brief.png"
            alt="Support Image"
            class="h-screen w-full object-contain scale-110"
          />
        </div>
      </section>
    </div>
  )
}

export default AboutSection