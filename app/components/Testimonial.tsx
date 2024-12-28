const Testimonial = () => {
  const testimonials = [
    {
      name: "Allison Ponce",
      role: "Dual Language Curriculum Specialist",
      text: "Susan helped me see student learning with fresh eyes, and inspired me to add new instructional practices to my daily teaching that became foundational to who I am as a reader, writer, and educator. Susan knows how to ask the right questions that made me reflect and take action in my classroom."
    },
    {
      name: "Andrea Greene",
      role: "Elementary Language Arts Curriculum Specialist",
      text: "Susan Hansen is an expert in collaboration, especially around lesson and unit design. For almost 20 years she worked with me and schools of teachers, including my team, to plan and deliver units of study that engaged and empowered our students in inquiry mindsets, practices, and skills.",
    },
    {
      name: "Carolyn Pierce",
      role: "Instructional Coach and Administrator",
      text: "I have worked closely with Susan's approach to the coaching work is deliberate, thoughtful, and always student-centered. Her extensive classroom experience as a teacher and as a coach has given her a wealth of knowledge about teaching and learning. This includes designing and implementing curriculum, best instructional practices, assessment design and interpretation, and many other relevant topics.",
    },
    {
      name: "Esmeralda Lara",
      role: "ESL Coordinator",
      text: "Susan Hansen helped me develop lessons that not only engaged students but also challenged them to reach their fullest potential. Her support and lesson designs have enriched the learning experiences of students and positively impacted my own teaching practice.",
    }
  ]

  return (
    <section className="bg-sage py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-medium text-center mb-12">Testimonials</h2>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 columns-2 sm:text-[0]">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.text}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;