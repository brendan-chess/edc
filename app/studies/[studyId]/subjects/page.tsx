import { Subject as SubjectType } from "@prisma/client";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { studyId: string };
}) {
  const res = await fetch(`http://localhost:3000/api/study/subjects`, {
    method: "POST",
    body: JSON.stringify({ studyId: params.studyId }),
    next: { revalidate: 0 },
  });

  const subjects: SubjectType[] = await res.json();

  return (
    <div className="flex flex-col gap-4">
      {subjects.map((subject: SubjectType) => {
        return <Subject subject={subject} key={subject.id} />;
      })}
    </div>
  );
}

function Subject({ subject }: { subject: SubjectType }) {
  return (
    <div>
      <Link
        href={`/studies/${subject.study}/subjects/${subject.id}`}
        className="underline cursor-pointer"
      >
        {subject.number}
      </Link>
      <div>{subject.status}</div>
    </div>
  );
}
