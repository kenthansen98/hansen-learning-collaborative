const FormField = ({ label, id, type, placeholder }: { label: string, id: string, type: string, placeholder: string }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2" htmlFor={id}>
        {label}
      </label>
      {id !== 'message' ? <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      /> : <textarea
        id={id}
        placeholder={placeholder}
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />}
    </div>
  )
}

const ContactForm = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Get in Touch</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form className="space-y-6">
            <FormField label="Name" id="name" type="text" placeholder="Your name" />
            <FormField label="Email" id="email" type="email" placeholder="your@email.com" />
            <FormField label="Message" id="message" type="text" placeholder="Tell us how we can help..." />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm