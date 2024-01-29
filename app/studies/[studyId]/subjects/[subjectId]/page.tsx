import { Folder, Study, Subject } from "@prisma/client";

export default async function Page({
  params,
}: {
  params: { studyId: string; subjectId: string };
}) {
  const subjectData = await fetch("http://localhost:3000/api/subject", {
    method: "POST",
    body: JSON.stringify({
      subjectId: params.subjectId,
    }),
  });

  const subject: Subject = await subjectData.json();

  const studyData = await fetch("http://localhost:3000/api/study", {
    method: "POST",
    body: JSON.stringify({
      studyId: params.studyId,
    }),
  });

  const study: Study = await studyData.json();

  const res = await fetch("http://localhost:3000/api/folder", {
    method: "POST",
    body: JSON.stringify({
      subjectId: params.subjectId,
      selection: "all",
    }),
    next: { revalidate: 0 },
  });

  const folders = await res.json();

  return (
    <div className="flex flex-col gap-4">
      <div>{study.nickname}</div>
      <div>
        {study.sponsor} {study.protocol}
      </div>
      <div>{subject.number}</div>
      <div>{subject.status}</div>
      {folders.map((folder: Folder) => {
        return <div key={folder.id}>{folder.name}</div>;
      })}
    </div>
  );
}
