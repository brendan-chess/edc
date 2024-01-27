import { Subject as SubjectType } from "@prisma/client";

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/study/subjects`, {
    method: "POST",
    body: JSON.stringify({ studyId: params.id }),
    next: { revalidate: 0 },
  });

  const subjects: SubjectType[] = await res.json();

  return (
    <div className="flex flex-col gap-4">
      {subjects.map((subject: SubjectType) => {
        return <Subject subject={subject} />;
      })}
    </div>
  );
}

function Subject({ subject }: { subject: SubjectType }) {
  return (
    <div>
      <div>{subject.number}</div>
      <div>{subject.status}</div>
    </div>
  );
}
