const Banner = () => {
  return (
    <div className="h-96 bg-repeat" style={{ backgroundImage: "url('/background-pattern-single.png')" }}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl md:text-6xl font-medium mb-4 text-white">
            Susan Hansen
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white">
            Educational Consulting and Coaching
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner;