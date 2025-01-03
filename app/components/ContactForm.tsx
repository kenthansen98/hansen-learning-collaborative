'use client';

import { sendEmail } from "@/app/actions/send-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  message: z.string(),
})

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    }
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const result = await sendEmail(data);

    if (result.success) {
      setSubmitStatus({
        type: 'success',
        message: 'Your message was sent successfully!'
      });
    } else {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was a problem sending your message. Please try again.'
      });
    }

    setSubmitting(false);
    form.reset();
  }

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-4xl font-medium text-center mb-8 ">Get in touch</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-xl sm:mt-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-chocolate"
                {...form.register("firstName")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-chocolate"
                {...form.register("lastName")}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-chocolate"
                {...form.register("email")}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-chocolate"
                {...form.register("message")}
              />
            </div>
          </div>
        </div>
        {submitStatus.message && (
          <div className={`p-4 mt-5 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
            {submitStatus.message}
          </div>
        )}
        <div className={`${submitStatus.message ? 'mt-5' : 'mt-10'}`}>
          <button
            type="submit"
            className="block w-full rounded-md bg-chocolate px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-chocolate_dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm