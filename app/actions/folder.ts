"use server";

import prisma from "@/prisma/prisma";
import { Folder } from "@prisma/client";

export async function getFolders(subjectId: string): Promise<Folder[]> {
  let folders: Folder[] = [];

  folders = await prisma.folder.findMany({
    where: {
      subject: subjectId,
    },
  });

  return folders;
}

export async function getFoldersPartial(
  subjectId: string,
  select: Partial<{ [K in keyof Folder]: boolean }>
): Promise<Partial<Folder>[]> {
  let folders: Partial<Folder>[] = [];

  folders = await prisma.folder.findMany({
    where: {
      subject: subjectId,
    },
    select,
  });

  return folders;
}
