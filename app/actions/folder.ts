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
