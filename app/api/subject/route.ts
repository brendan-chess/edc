import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req: { subjectId: string } = await request.json();

  const subject = await prisma.subject.findUnique({
    where: {
      id: req.subjectId,
    },
  });

  return NextResponse.json(subject);
}
