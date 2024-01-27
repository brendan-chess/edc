import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Study } from "@prisma/client";

export async function POST(request: NextRequest) {
  const body: { studyId: string } = await request.json();
  const { studyId } = body;

  const subjectIds: { subjects: Study["subjects"] } | null =
    await prisma.study.findUnique({
      where: {
        id: studyId,
      },
      select: {
        subjects: true,
      },
    });

  if (subjectIds == null) return NextResponse.json({});

  const subjects = await prisma.subject.findMany({
    where: {
      id: { in: subjectIds.subjects },
    },
  });

  return NextResponse.json(subjects);
}
