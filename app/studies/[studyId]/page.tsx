import { Study } from "@prisma/client";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { studyId: string };
}) {
  const res = await fetch("http://localhost:3000/api/study", {
    method: "POST",
    body: JSON.stringify({ studyId: params.studyId }),
    next: { revalidate: 0 },
  });

  const study: Study = await res.json();

  return (
    <div>
      <div>{study.nickname}</div>
      <div>
        {study.sponsor} {study.protocol}
      </div>
      <div>{study.status}</div>
      <Link href={`/studies/${study.id}/subjects`} className="underline">
        {study.subjects.length} subjects
      </Link>
      <div>{study.queries} queries</div>
    </div>
  );
}
