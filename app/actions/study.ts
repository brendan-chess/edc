"use server";

import prisma from "@/prisma/prisma";
import { Study, Subject } from "@prisma/client";

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

export async function getSubjects(studyId: string): Promise<Subject[]> {
  let subjects: Subject[] = [];

  const study = await getStudyPartial(studyId, { subjects: true });

  if (study === null) return subjects; // also check if there are subjects

  subjects = await prisma.subject.findMany({
    where: {
      id: { in: study.subjects },
    },
  });

  return subjects;
}
