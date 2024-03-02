"use server";

import prisma from "@/prisma/prisma";
import { Study } from "@prisma/client";

export async function getStudy(studyId: string): Promise<Study | null> {
  const study = await prisma.study.findUnique({
    where: {
      id: studyId,
    },
  });

  return study;
}
