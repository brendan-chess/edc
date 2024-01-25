import prisma from "@/prisma/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const requestBody:{username: string} = await request.json()

    const user = await prisma.user.findFirst({
        where: {
            name: requestBody.username
        }
    })

    const success = user != null
    
    let error = ''

    if(!success) error = "Username not recognized"

    return NextResponse.json({user, success, error})
}