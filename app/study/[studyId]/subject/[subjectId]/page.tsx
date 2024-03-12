import { Folder, Subject } from "@prisma/client";
import { getSubject } from "@/app/actions/subject";
import { getFoldersPartial } from "@/app/actions/folder";
import FolderMenu from "@/app/components/FolderMenu";

export default async function Page({
  params,
}: {
  params: { studyId: string; subjectId: string };
}) {
  const subject: Subject | null = await getSubject(params.subjectId);
  if (subject === null) return;

  const folders: Partial<Folder>[] = await getFoldersPartial(params.subjectId, {
    id: true,
    name: true,
    forms: true,
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-semibold">{subject.number}</div>
      {folders.map((folder: Partial<Folder>) => {
        return <FolderMenu key={folder.id} {...folder} />;
      })}
    </div>
  );
}
