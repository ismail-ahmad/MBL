// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

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
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filename = file.name || 'unnamed';
        attachments.push({ filename, content: buffer });
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
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
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






// // pages/api/contact.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { createTransport, Transporter } from 'nodemailer';
// import { Formidable, File as FormidableFile } from 'formidable';
// import fs from 'fs';
// import path from 'path';

// // Disable body parser to handle multipart/form-data
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const form = new Formidable({
//     keepExtensions: true,
//     maxFileSize: 10 * 1024 * 1024, // 10 MB
//     uploadDir: path.join(process.cwd(), 'public', 'uploads'),
//   });

//   try {
//     // Parse form data
//     const [fields, files] = await form.parse(req);

//     // Helper to safely get first value from field array
//     const getField = (key: string): string =>
//       Array.isArray(fields[key]) ? fields[key][0] : String(fields[key] || '');

//     const name = getField('name');
//     const email = getField('email');
//     const phone = getField('phone');
//     const message = getField('message');

//     // Handle file attachments
//     const attachments: { filename: string; content: Buffer }[] = [];

//     const fileArray = files.file;
//     if (fileArray) {
//       const filesList = Array.isArray(fileArray) ? fileArray : [fileArray];
//       for (const file of filesList) {
//         if (file && 'filepath' in file && file.filepath) {
//           const content = fs.readFileSync(file.filepath);
//           const filename = file.originalFilename || path.basename(file.filepath);
//           attachments.push({ filename, content });

//           // Clean up temp file
//           fs.unlinkSync(file.filepath);
//         }
//       }
//     }

//     // Configure Nodemailer
//     const transporter: Transporter = createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.GMAIL,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: `"${name}" <${email}>`,
//       to: 'myemail@gmail.com',
//       subject: `New Contact Form Submission from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
//       `,
//       attachments,
//     };

//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({ success: true, message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error('Contact form error:', error);
//     return res.status(500).json({ success: false, error: 'Failed to send email.' });
//   }
// };

// export default handler;