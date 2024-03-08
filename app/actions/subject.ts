"use server";

import prisma from "@/prisma/prisma";
import { Subject } from "@prisma/client";
import { getStudyPartial } from "./study";

export async function getSubject(subjectId: string): Promise<Subject | null> {
  let subject: Subject | null = null;

  subject = await prisma.subject.findUnique({
    where: {
      id: subjectId,
    },
  });

  return subject;
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
