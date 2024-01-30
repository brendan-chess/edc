import { Subject } from "@prisma/client";

export async function getSubjectById(subjectId: string) {
  const subjectData = await fetch("http://localhost:3000/api/subject", {
    method: "POST",
    body: JSON.stringify({
      subjectId: subjectId,
    }),
  });

  const subject: Subject = await subjectData.json();

  return subject;
}
