import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // crc user id: 65ada6746b85c7fe1e3448f0
  // const requestBody: { userId: string } = await request.json();

  const userStudies: { studies: string[] } | null =
    await prisma.user.findUnique({
      where: {
        id: "65ada6746b85c7fe1e3448f0",
      },
      select: {
        studies: true,
      },
    });

  if (userStudies == null) return NextResponse.json({});

  const studies = await prisma.study.findMany({
    where: {
      id: { in: userStudies.studies },
    },
  });

  return NextResponse.json(studies);
}
