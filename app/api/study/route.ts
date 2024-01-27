import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req: { id: string } = await request.json();

  const studyData = await prisma.study.findUnique({
    where: {
      id: req.id,
    },
  });

  return NextResponse.json(studyData);
}
