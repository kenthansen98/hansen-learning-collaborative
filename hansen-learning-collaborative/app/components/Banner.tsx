import Image from "next/image";

const Banner = () => {
  return (
    // <div className="relative h-96">
    //   {/* Background Image */}
    //   <div className="absolute inset-0 bg-repeat">
    //     <Image
    //       src="/background-pattern.png"
    //       alt="Background pattern"
    //       className="object-cover"
    //       width="100"
    //       height="100"
    //       priority
    //     />
    //     {/* Overlay for better text readability */}
    //     <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    //   </div>
    <div className="h-96 bg-[url('/background-pattern.png')] bg-repeat">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl md:text-6xl font-medium mb-4 text-gray-800">
            Susan Hansen
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-700">
            Educational Consulting and Coaching
          </p>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Banner;