import { ReactNode } from "react";

const Card = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card title="Academic Planning" description="Comprehensive academic planning tailored to each student's goals and learning style." />
        <Card title="Test Preparation" description="Structured test prep programs for standardized tests with proven strategies for success." />
        <Card title="College Counseling" description="Expert guidance through the college application process, from school selection to essay review." />
      </div>
    </section>
  )
}

export default Services;