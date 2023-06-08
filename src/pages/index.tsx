import Header from 'import/components/common/header/Header';
import ServicesCard from 'import/components/home/services/ServicesCard';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
    <main>
      {/* hero section */}
      <div className="bg-primaryLight">
      {/* <div className="px-10 pt-10">
        <Header />
      </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-40 flex flex-col md:flex-row">
          {/* Left section */}
          <div className="md:w-1/2 pt-10">
            <h1 className="text-4xl font-bold text-black mb-2">
                <span className="text-primary mb-3">WE PROVIDE</span> <br />
                ACTION-PROVOKING
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
                TO HELP YOU GROW AUDIENCE 
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-8">
              Lörem ipsum onas. Ivera. Prende exoment: gigad för tralig nehahusade. 
              Parasocial platinade och tyvaling, suskade, gäv. <br />
              Beseng kopimism inte teröktig. 
            </p>
            <button className="mt-10 bg-primary text-white border text-sm font-medium border-primary px-6 py-2 rounded transition-colors hover:bg-primaryLight hover:text-primary hover:border-primary">
              Learn more
            </button>
            <button className="mt-10 mx-5 bg-transparent hover:bg-primary text-primary text-sm font-medium hover:text-white py-2 px-6 border border-primary hover:border-transparent rounded">
              Learn more
            </button>
          </div>
          {/* Right section */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/images/home/hero/hero_img.svg" alt="Hero image" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* services section */}
      <div className=" bg-light relative">
          <img className="absolute top-96 transform" src="/images/home/services/Saly-1.svg" alt="Placeholder" />
          <img className="absolute right-0 top-3/4 transform" src="/images/home/services/Saly-2.svg" alt="Placeholder" />
          <div className="max-w-7xl mx-auto pt-40">
              <h2 className="text-3xl font-bold text-center">Our Services and Prices</h2>
              <p className="text-center text-base py-2 px-10">
                  ContentAlpha offers optimal solutions at affordable rates for every content need. Understanding your requirements and
                  generating results that satisfy you is our core mission. With us, you will be able to get the maximum possible ROI.
              </p>
          </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row">
          <div className="flex flex-wrap justify-center items-center">
              <ServicesCard/>
              <ServicesCard/>
              <ServicesCard/>
              <ServicesCard/>
              <ServicesCard/>
              <ServicesCard/>
          </div>
        </div>
      </div>

      {/* earn coins section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row">
        testing
      </div>
    </main>
  )
}
