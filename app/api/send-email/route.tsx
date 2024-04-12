import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import {Resend} from 'resend';

const resend= new Resend(process.env.RESEND_API_KEY)
export async function POST(){
    await resend.emails.send({
        from : 'sifatniloy20@gmail.com',
        to: "sifatniloy18@gmail.com",
        subject:"checking",
        react: <WelcomeTemplate name='sifat'/>
    })

    return NextResponse.json({});

}