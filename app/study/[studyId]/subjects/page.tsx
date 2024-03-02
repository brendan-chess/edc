import { getStudyPartial, getSubjects } from "@/app/actions/study";
import { Study, Subject } from "@prisma/client";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { studyId: string };
}) {
  const subjects: Subject[] = await getSubjects(params.studyId);

  return (
    <div className=" grid grid-cols-2 gap-4">
      {subjects.map((subject: Subject) => {
        return <Subject subject={subject} key={subject.id} />;
      })}
    </div>
  );
}

function Subject({ subject }: { subject: Subject }) {
  return (
    <div className="flex items-center gap-4 bg-neutral-800 p-4 rounded-md cursor-pointer">
      <Link
        href={`/study/${subject.study}/subject/${subject.id}`}
        className="text-lg font-semibold cursor-pointer"
      >
        {subject.number}
      </Link>
      <div>{subject.status}</div>
    </div>
  );
}
