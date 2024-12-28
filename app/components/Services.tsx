const Card = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6">
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-medium text-chocolate">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <section className="bg-peach">
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-medium text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Consulting"
            description="Are you thinking about how to meet the needs of your diverse learners? Do you need a thinking partner as you contemplate infusing your curriculum with inquiry? Do you want to align your practices with your school or district's mission and vision? You can count on me to listen and collaborate with you and your stakeholders." />
          <Card
            title="Training and Coaching"
            description="I am availabe to coach teachers and administrators, indivdually or as teams. I am here to be help you meet your professional goals and better serve your students and your community." />
          <Card
            title="Curriculum Design"
            description="Either through collaboration with Disrict personnel or as a deliverable, I can create project-based units of study for any subject area where students' language, culture and interests are used to build motivation and relevance." />
        </div>
      </div>
    </section>
  )
}

export default Services;