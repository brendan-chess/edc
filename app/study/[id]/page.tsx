import { Study } from "@prisma/client";

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
      <div>{study.subjects} subject</div>
      <div>{study.queries} queries</div>
    </div>
  );
}
