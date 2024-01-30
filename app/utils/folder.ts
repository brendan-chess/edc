import { Folder } from "@prisma/client";

export async function getFoldersBySubjectId(subjectId: string) {
  const foldersData = await fetch("http://localhost:3000/api/folder", {
    method: "POST",
    body: JSON.stringify({ subjectId }),
  });

  const folders: Folder[] = await foldersData.json();

  return folders;
}
