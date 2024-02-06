import prisma from "@/prisma/prisma";
import { Form } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body: { folderId: string } = await request.json();
  const { folderId } = body;

  const forms: { id: string; name: string }[] | null =
    await prisma.form.findMany({
      where: {
        folder: {
          equals: folderId,
        },
      },
      select: {
        id: true,
        name: true,
      },
    });

  if (forms == null) return NextResponse.json({});

  return NextResponse.json(forms);
}
