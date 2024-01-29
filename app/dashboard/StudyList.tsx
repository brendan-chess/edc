import Link from "next/link";
import { Study } from "@prisma/client";

export default async function StudyList() {
  const studies = await fetch("http://localhost:3000/api/user/studies", {
    method: "POST",
    body: "",
    next: { revalidate: 0 },
  });

  const studiesData: Study[] = await studies.json();

  return (
    <div className="flex flex-col gap-8">
      <div>My Studies</div>
      {studiesData.map((study: Study) => (
        <Study study={study} key={study.id} />
      ))}
      <div>All studies</div>
    </div>
  );
}

function Study({ study }: { study: Study }) {
  return (
    <div>
      <Link href={`/studies/${study.id}`} className="underline">
        {study.nickname}
      </Link>
      <div>
        {study.sponsor} {study.protocol}
      </div>
      <div>{study.status}</div>
      <div>{study.subjects.length} subjects</div>
      <div>{study.queries} queries</div>
    </div>
  );
}
