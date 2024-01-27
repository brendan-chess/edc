import { Study } from "@prisma/client";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch("http://localhost:3000/api/study", {
    method: "POST",
    body: JSON.stringify({ id: params.id }),
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
      <Link href={`/study/${study.id}/subjects`}>
        {study.subjects.length} subjects
      </Link>
      <div>{study.queries} queries</div>
    </div>
  );
}
