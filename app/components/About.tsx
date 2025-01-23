import Image from "next/image";

const About = () => {
  return (
    <section className="lg:h-[75vh] md:h-[100vh] bg-sage py-16">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row items-center gap-12 h-full">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="h-[300px] w-[300px] relative">
              <Image
                src="/Selfie.jpg"
                alt="Susan Hansen"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-medium text-gray-800">
              About Me
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Whether as a teacher, instructional coach or administrator, I see myself as a collaborative problem solver.
                My two decades of experience in elementary and secondary public education have taught me to listen deeply,
                ask questions and work alongside my clients to arrive at solutions that move them forward towards their goals.
                Using systems thinking and quality improvement tools I help my clients keep the big picture in mind as they
                optimize their various processes. My areas of expertise include project-based learning, dual language education,
                and literacy for multilinguals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;