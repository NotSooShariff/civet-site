import React from 'react'

const Footer = () => {
  return (
    <footer class="text-xl md:ml-auto md:mr-auto flex flex-wrap flex-col md:flex-row items-center justify-center py-32">
      <a class="mt-2 mr-5  mb-5 hover:text-purple-500 hover:cursor-pointer">Chart</a>
      <a href="https://t.me/xerxesportal" target="_blank" class="mt-2 mr-5  mb-5 hover:text-purple-500 hover:cursor-pointer">Telegram</a>
      <a href="https://x.com/xerxeserc?s=21" target="_blank" class="mt-2 mr-5  mb-5 hover:text-purple-500 hover:cursor-pointer">X/Twitter</a>
    </footer>
  )
}

export default Footer