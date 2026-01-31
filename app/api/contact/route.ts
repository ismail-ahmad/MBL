// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();

    const name = formData.get('Name')?.toString() || '';
    const email = formData.get('Email')?.toString() || '';
    const phone = formData.get('Phone Number')?.toString() || '';
    const message = formData.get('Message')?.toString() || '';

    // Handle multiple file attachments
    const attachments: { filename: string; content: Buffer }[] = [];
const files = formData.getAll('Attachments');

for (const file of files) {
  if (file instanceof File) {
    if (file.name === '' || file.size === 0) {
      continue;
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    attachments.push({ filename: file.name, content: buffer });
  }
}

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: name ? `"${name}" <${email}>`:`<${email}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: name ? `Inquiry via Contact Us by ${name}` : `Inquiry via Contact Us`,
      text: `${name ? `Name: ${name}\n` : ''}Email: ${email}\nPhone: ${phone}${message ? `${`\nMessage: ${message}`}`: ''}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        ${attachments.length > 0 ? `<p><strong>Attachments:</strong> ${attachments.length} file(s)</p>` : ''}
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email.' },
      { status: 500 }
    );
  }
};