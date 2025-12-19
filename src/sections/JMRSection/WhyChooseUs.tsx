import { whyChooseUs } from "@/constants"
import type { FC } from "react"

const WhyChooseUs: FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <h3 className='mt-8 text-center text-2xl sm:text-3xl font-semibold'>
        Why Choose Us?
      </h3>
      
      <div className='grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl mx-auto mt-6 sm:mt-8 mb-10 sm:mb-12 px-4 sm:px-6 lg:px-8'>
        {whyChooseUs.map((feature, index) => (
          <div 
            key={index}
            className='py-5 sm:py-2 rounded-lg shadow-2xl hover:shadow-md border border-gray-200 flex flex-col space-y-3 px-4 sm:px-5 transition-all duration-300 hover:-translate-y-1'
          >
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-5 h-5 sm:w-5 sm:h-5 object-contain"
                />
              </div>
              <h4 className='text-xs sm:text-base font-semibold'>
                {feature.title}
              </h4>
            </div>
            <p className='text-xs sm:text-xs leading-relaxed'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs