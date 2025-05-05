import { NextResponse } from "next/server";

import nodemailer from "nodemailer";


export async function  POST(request:Request) {

    const {name, sender_email, subject, topic, message} = await request.json();

    console.log(name, sender_email, subject, topic, message);

    if (!name || !sender_email || !subject || !topic || !message) {
        return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
      }

    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        await transporter.sendMail({
            from: sender_email,
            to: process.env.EMAIL,
            subject: subject,
            text: `Name: ${name}\nEmail: ${sender_email}\nSubject: ${subject}\nTopic: ${topic}\nMessage: ${message}`
        });

        return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
    }catch(error){
        return NextResponse.json({ success: false, error: `Failed to send email: ${error}` }, { status: 500 })
    }
    
}