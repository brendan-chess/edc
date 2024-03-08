"use server";

import prisma from "@/prisma/prisma";
import { Study } from "@prisma/client";

export async function getStudy(studyId: string): Promise<Study | null> {
  let study: Study | null = null;

  study = await prisma.study.findUnique({
    where: {
      id: studyId,
    },
  });

  return study;
}

export async function getStudyPartial(
  studyId: string,
  select: Partial<{ [K in keyof Study]: boolean }>
): Promise<Partial<Study> | null> {
  let study: Partial<Study> | null = null;

  study = await prisma.study.findUnique({
    where: {
      id: studyId,
    },
    select,
  });

  return study;
}
