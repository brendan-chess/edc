import { Study } from "@prisma/client";

export async function getStudyById(studyId: string) {
  const studyData = await fetch("http://localhost:3000/api/study", {
    method: "POST",
    body: JSON.stringify({
      studyId: studyId,
    }),
  });

  const study: Study = await studyData.json();

  return study;
}
