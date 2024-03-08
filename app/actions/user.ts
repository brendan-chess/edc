"use server";

import prisma from "@/prisma/prisma";
import { Study } from "@prisma/client";

export async function getStudies(userId: string): Promise<Study[]> {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      studies: true,
    },
  });

  if (user == null) return [];

  const studies = await prisma.study.findMany({
    where: {
      id: { in: user.studies },
    },
  });

  return studies;
}
