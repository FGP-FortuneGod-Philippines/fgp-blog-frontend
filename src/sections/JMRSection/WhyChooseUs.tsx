const WhyChooseUs = () => {
  const features = [
    {
      title: "🚀 Unparalleled Expertise",
      description: "Our team boasts years of experience and expertise in customs clearance."
    },
    {
      title: "❤️‍🔥 Customer Centric Approach",
      description: "We prioritize your needs and offer personalized solutions."
    },
    {
      title: "⚡ Efficiency and Accuracy",
      description: "We ensure your shipments are processed smoothly, avoiding costly delays."
    },
    {
      title: "🌍 Global Reach",
      description: "We handle customs clearances across international borders."
    }
  ]

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <h3 className='mt-8 text-center text-2xl sm:text-3xl font-semibold '>
        Why Choose Us?
      </h3>
      
      <div className='grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl mx-auto mt-6 sm:mt-8 mb-10 sm:mb-12 px-4 sm:px-6 lg:px-8'>
        {features.map((feature, index) => (
          <div 
            key={index}
            className='py-5 sm:py-2 rounded-lg shadow-2xl hover:shadow-md border border-gray-200 flex flex-col space-y-3 px-4 sm:px-5 transition-all duration-300 hover:-translate-y-1'
          >
            <h4 className='text-base sm:text-base font-semibold'>
              {feature.title}
            </h4>
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