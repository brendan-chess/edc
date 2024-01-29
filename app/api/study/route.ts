import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req: { studyId: string } = await request.json();

  const studyData = await prisma.study.findUnique({
    where: {
      id: req.studyId,
    },
  });

  return NextResponse.json(studyData);
}
