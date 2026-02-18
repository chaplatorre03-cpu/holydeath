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
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nueva Petición</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #000000; font-family: 'Times New Roman', Times, serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #000000; color: #ffffff;">
            
            <!-- Header -->
            <div style="text-align: center; padding: 40px 20px 20px 20px; border-bottom: 1px solid #d4af37;">
              <h1 style="margin: 0; color: #d4af37; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">LA SANTÍSIMA</h1>
              <p style="margin: 10px 0 0 0; color: #a1a1aa; font-style: italic; font-size: 14px;">Nueva Petición Recibida</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Devoto Section -->
              <div style="margin-bottom: 30px; border-left: 2px solid #d4af37; padding-left: 20px;">
                <p style="margin: 0 0 8px 0; color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">DEVOTO</p>
                <p style="margin: 0; font-size: 20px; color: #ffffff;">${nombre}</p>
              </div>

              <!-- Motivo Section -->
              <div style="margin-bottom: 30px; border-left: 2px solid #d4af37; padding-left: 20px;">
                <p style="margin: 0 0 8px 0; color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">MOTIVO DE LA PETICIÓN</p>
                <p style="margin: 0; font-size: 20px; color: #ffffff;">${motivo}</p>
              </div>

              <!-- Contacto Section -->
              <div style="margin-bottom: 40px; border-left: 2px solid #d4af37; padding-left: 20px;">
                <p style="margin: 0 0 8px 0; color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">CONTACTO</p>
                <div style="margin-top: 5px;">
                  <p style="margin: 5px 0; font-size: 16px; color: #e5e7eb; display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 18px;">📧</span> 
                    <a href="mailto:${correo}" style="color: #e5e7eb; text-decoration: none;">${correo}</a>
                  </p>
                  <p style="margin: 5px 0; font-size: 16px; color: #e5e7eb; display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 18px;">📱</span> 
                    <span>${telefono}</span>
                  </p>
                </div>
              </div>

              <!-- Mensaje Sagrado Box -->
              <div style="background-color: #0a0a0a; border: 1px solid #27272a; padding: 25px; border-radius: 4px;">
                <p style="margin: 0 0 15px 0; color: #d4af37; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif; border-bottom: 1px solid #27272a; padding-bottom: 10px;">MENSAJE SAGRADO</p>
                <div style="color: #e5e7eb; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${mensaje}</div>
              </div>

            </div>

            <!-- Footer -->
            <div style="text-align: center; padding: 20px; color: #52525b; font-size: 12px; border-top: 1px solid #27272a;">
              <p style="margin: 0;">Este mensaje fue enviado desde el altar digital de La Santisima.</p>
            </div>

          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
