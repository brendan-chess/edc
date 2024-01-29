import prisma from "@/prisma/prisma";
import { Folder } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body: { subjectId: string } = await request.json();
  const { subjectId } = body;

  const folders: Folder[] | null = await prisma.folder.findMany({
    where: {
      subject: {
        equals: subjectId,
      },
    },
  });

  if (folders == null) return NextResponse.json({});

  return NextResponse.json(folders);
}
