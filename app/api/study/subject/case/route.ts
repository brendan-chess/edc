import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Case } from "@prisma/client";

export async function POST(request: NextRequest) {
  const body: { subjectId: string } = await request.json();
  const { subjectId } = body;

  const subjectCase: Case | null = await prisma.case.findFirst({
    where: {
      subject: {
        equals: subjectId,
      },
    },
  });

  if (subjectCase == null) return NextResponse.json({});

  return NextResponse.json(subjectCase);
}
