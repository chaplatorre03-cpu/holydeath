import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { nombre, correo, telefono, empresa, mensaje } = await req.json();

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('EMAIL_USER or EMAIL_PASS not set in environment variables');
      // For development/demo purposes, we'll log the data and pretend it sent if no credentials
      // BUT for production, this should be an error.
      // Given the user request, I'll return a 500 if not configured so they know they need to set it up.
      return NextResponse.json({
        message: 'Email service not configured. Please set EMAIL_USER and EMAIL_PASS.'
      }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto de ${nombre} - ${empresa}`,
      text: `
        Nombre: ${nombre}
        Correo: ${correo}
        Teléfono: ${telefono}
        Empresa: ${empresa}
        Mensaje: ${mensaje}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px;">
          <div style="background-color: #e11d48; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Red Cardinal</h1>
            <p style="margin: 5px 0 0 0;">Nuevo Lead de Contacto</p>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
              <strong style="color: #e11d48;">Nombre:</strong> ${nombre}
            </p>
            <p style="font-size: 16px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
              <strong style="color: #e11d48;">Correo:</strong> <a href="mailto:${correo}" style="color: #333; text-decoration: none;">${correo}</a>
            </p>
            <p style="font-size: 16px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
              <strong style="color: #e11d48;">Teléfono:</strong> ${telefono}
            </p>
            <p style="font-size: 16px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
              <strong style="color: #e11d48;">Empresa:</strong> ${empresa}
            </p>
            <div style="margin-top: 20px;">
              <strong style="color: #e11d48; display: block; margin-bottom: 10px;">Mensaje:</strong>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; line-height: 1.5; color: #555;">
                ${mensaje.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; font-size: 12px; color: #999;">
            Este correo fue enviado desde el formulario de contacto de Red Cardinal.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
