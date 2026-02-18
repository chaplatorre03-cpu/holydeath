import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { nombre, correo, telefono, motivo, mensaje } = await req.json();

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('EMAIL_USER or EMAIL_PASS not set in environment variables');
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
      subject: `Nueva Petición: ${motivo} - ${nombre}`,
      text: `
        Nueva Petición Sagrada

        Nombre: ${nombre}
        Motivo: ${motivo}
        Correo: ${correo}
        Teléfono: ${telefono}
        Mensaje: ${mensaje}
      `,
      html: `
        <div style="font-family: 'Times New Roman', serif; padding: 0; color: #e5e7eb; max-width: 600px; margin: 0 auto; background-color: #000000; border: 1px solid #d4af37;">
          <div style="background: linear-gradient(to bottom, #1a1a1a, #000000); padding: 30px 20px; text-align: center; border-bottom: 2px solid #d4af37;">
            <h1 style="margin: 0; font-size: 28px; color: #d4af37; text-transform: uppercase; letter-spacing: 2px;">La Santísima</h1>
            <p style="margin: 10px 0 0 0; color: #9ca3af; font-style: italic;">Nueva Petición Recibida</p>
          </div>
          
          <div style="padding: 30px;">
            <div style="margin-bottom: 25px; border-left: 3px solid #d4af37; padding-left: 15px;">
              <p style="font-size: 14px; color: #d4af37; margin: 0 0 5px 0; text-transform: uppercase;">Devoto</p>
              <p style="font-size: 18px; color: #ffffff; margin: 0;">${nombre}</p>
            </div>

            <div style="margin-bottom: 25px; border-left: 3px solid #d4af37; padding-left: 15px;">
              <p style="font-size: 14px; color: #d4af37; margin: 0 0 5px 0; text-transform: uppercase;">Motivo de la Petición</p>
              <p style="font-size: 18px; color: #ffffff; margin: 0;">${motivo}</p>
            </div>

            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
              <div style="flex: 1; min-width: 200px; margin-bottom: 25px; border-left: 3px solid #d4af37; padding-left: 15px;">
                <p style="font-size: 14px; color: #d4af37; margin: 0 0 5px 0; text-transform: uppercase;">Contacto</p>
                <div style="color: #cccccc; font-size: 18px;">
                  <p style="margin: 5px 0;">📧 <a href="mailto:${correo}" style="color: #cccccc; text-decoration: none;">${correo}</a></p>
                  <p style="margin: 5px 0;">📱 ${telefono}</p>
                </div>
              </div>
            </div>

            <div style="margin-top: 30px; background-color: #111111; padding: 20px; border: 1px solid #333333; border-radius: 4px;">
              <p style="font-size: 14px; color: #d4af37; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 1px solid #333; padding-bottom: 10px;">Mensaje Sagrado</p>
              <div style="color: #e5e7eb; font-size: 18px; line-height: 1.6; white-space: pre-wrap;">${mensaje}</div>
            </div>
          </div>

          <div style="background-color: #0a0a0a; padding: 20px; text-align: center; font-size: 12px; color: #666666; border-top: 1px solid #333333;">
            <p style="margin: 0;">Este mensaje fue enviado desde el altar digital de La Santísima.</p>
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
