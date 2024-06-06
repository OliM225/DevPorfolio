//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import database from "../../config/database";
import { resolve } from 'styled-jsx/css';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL

/*export async function POST(req,res) {
    const { body } = await req.json();
    const { email, subject, message } = body
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['olivier@gmail.com', email],
      subject: subject,
      react: 
        <div>
            <h1>{subject}</h1>
            <p>Thank you for contacting us</p>
            <p>New Message submitted:</p>
            <p>{message}</p>
        </div>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}*/


