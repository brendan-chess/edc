import { Folder, Subject } from "@prisma/client";
import FolderLink from "@/app/components/FolderLink";
import { getSubject } from "@/app/actions/subject";
import { getFolders } from "@/app/actions/folder";
import FolderMenu from "@/app/components/FolderMenu";

export default async function Page({
  params,
}: {
  params: { studyId: string; subjectId: string };
}) {
  const subject: Subject | null = await getSubject(params.subjectId);
  if (subject === null) return;

  const folders: Folder[] = await getFolders(params.subjectId); // could convert to getFoldersPartial

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-semibold">{subject.number}</div>
      {folders.map((folder: Folder) => {
        return <FolderMenu key={folder.id} {...folder} />;
        // return <FolderLink key={folder.id} id={folder.id} name={folder.name} />;
      })}
    </div>
  );
}
