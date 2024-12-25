'use client';

import { useState } from "react";

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

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-sage py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-medium text-center mb-12">Testimonials</h2>
          <div className="relative">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 focus:outline-none"
              aria-label="Previous testimonial"
            >
              &lsaquo;
            </button>
            <div className="relative overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-8"
                      style={{ width: '100%' }}
                    >
                      <blockquote className="text-center">
                        <p className="text-xl text-gray-700 italic mb-8">
                          "{testimonial.text}"
                        </p>
                        <cite className="not-italic">
                          <div className="font-semibold text-chocolate">{testimonial.name}</div>
                          <div className="text-gray-600 text-sm mt-1">{testimonial.role}</div>
                        </cite>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 focus:outline-none"
              aria-label="Next testimonial"
            >
              &rsaquo;
            </button>
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentTestimonial === index ? 'bg-chocolate' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;