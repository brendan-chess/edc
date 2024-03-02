import { Folder, Study, Subject } from "@prisma/client";
import { getSubjectById } from "@/app/utils/subject";
import { getStudyById } from "@/app/utils/study";
import { getFoldersBySubjectId } from "@/app/utils/folder";
import FolderLink from "@/app/components/FolderLink";

export default async function Page({
  params,
}: {
  params: { studyId: string; subjectId: string };
}) {
  const subject: Subject = await getSubjectById(params.subjectId);
  const study: Study = await getStudyById(params.studyId);
  const folders: Folder[] = await getFoldersBySubjectId(params.subjectId);

  return (
    <div className="flex flex-col gap-4">
      <div>{study.nickname}</div>
      <div>
        {study.sponsor} {study.protocol}
      </div>
      <div>{subject.number}</div>
      <div>{subject.status}</div>
      {folders.map((folder: Folder) => {
        return <FolderLink key={folder.id} id={folder.id} name={folder.name} />;
      })}
    </div>
  );
}
