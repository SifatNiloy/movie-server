import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props{
    params: {id: string}
}

export async function GET(request: NextRequest, {params}: {params: {id: string}}){
    const user= await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })
    if(!user){
        return NextResponse.json({error : 'user not found'},{status: 404})
    }

    return NextResponse.json(user)
}

export async function PUT(request: NextRequest,  {params}: {params: {id: string}}){
    //validate the request body
    const body= await request.json();
    const validation= schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors, {status: 400})
    }

    const user= await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })
    if(!user){
        return NextResponse.json({error: 'user not found'}, {status: 404})
    }

    const updatedUser= await prisma.user.update({
        where: {id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(updatedUser)
}

export function DELETE(request: NextRequest,  {params}: {params: {id: number}}){
    //fetch user from db
    if(params.id>10){
        return NextResponse.json({error: 'user not found'},{status: 404})
    }
    return NextResponse.json({})
}