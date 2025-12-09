import illustration from '@/assets/404illustration.svg';


const NotFoundSection = () => {
  return (
    <div className="flex flex-col items-center justify-center my-15 px-4 text-center space-x-30 ">
      <div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img
          src={illustration}
          alt="Page Not Found Illustration"
          className="w-full max-w-sm mx-auto"
        />
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-800 mb-4">
          404
        </h1>
        <p className="text-lg sm:text-2xl text-gray-600 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition w-50 rounded-md"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default NotFoundSection
