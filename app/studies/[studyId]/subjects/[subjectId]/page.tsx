import { Folder } from "@prisma/client";
import { getSubjectById } from "@/app/utils/subject";
import { getStudyById } from "@/app/utils/study";
import { getFoldersBySubjectId } from "@/app/utils/folder";

export default async function Page({
  params,
}: {
  params: { studyId: string; subjectId: string };
}) {
  const subject = await getSubjectById(params.subjectId);
  const study = await getStudyById(params.studyId);
  const folders = await getFoldersBySubjectId(params.subjectId);

  return (
    <div className="flex flex-col gap-4">
      <div>{study.nickname}</div>
      <div>
        {study.sponsor} {study.protocol}
      </div>
      <div>{subject.number}</div>
      <div>{subject.status}</div>
      {folders.map((folder: Folder) => {
        return (
          <div key={folder.id} className="underline cursor-pointer">
            {folder.name}
          </div>
        );
      })}
    </div>
  );
}
