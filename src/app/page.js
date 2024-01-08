import Image from "next/image";
import Navbar from "./../components/Navbar";
import Cards from "@/components/Cards";
import About from "@/components/About";
import SecuritySection from "@/components/SecuritySection";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StatsTable from "@/components/StatsTable";
export default function Home() {
  return (
    <main>
      <header class="relative w-full h-screen bg-[url('/hero2.jpg')] bg-cover bg-center flex justify-center items-center">
        <nav class="fixed top-0 w-full p-4 ">
          <Navbar />
        </nav>
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-center text-8xl text-white font-bold drop-shadow-lg">
            We make crypto <br /> clear and simple
          </h1>
          <p class="mt-5 text-center text-xl text-white opacity-70">
            Buy, sell, and grow your crypto with CoinFlip, the platform
            dedicated <br /> to every trader at every level.
          </p>
          <button
            type="button"
            class="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-6 py-4 text-center me-2 mb-2"
          >
            Get Started
          </button>
        </div>
      </header>

      <Cards/>
      <About/>
      <SecuritySection/>
      {/* <StatsTable/> */}
      <AboutSection/>
      <Contact/>
      <Footer/>

    </main>
  );
}
