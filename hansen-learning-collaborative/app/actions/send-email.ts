'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: { firstName: string, lastName: string, email: string, message: string }) {
  const { firstName, lastName, email, message } = formData;

  const fullName = `${firstName} ${lastName}`;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email: ', error);
    return { success: false, error: 'Failed to send email' };
  }
}