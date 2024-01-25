import prisma from "@/prisma/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const requestBody:{username: string} = await request.json()

    const userExists = await prisma.user.findFirst({
        where: {
            name: requestBody.username
        }
    })

    return NextResponse.json(userExists)
}