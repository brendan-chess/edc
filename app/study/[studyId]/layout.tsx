import { getStudyPartial } from "@/app/actions/study";
import { Study } from "@prisma/client";

export default async function StudyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { studyId: string };
}) {
  const study: Partial<Study> | null = await getStudyPartial(params.studyId, {
    nickname: true,
    sponsor: true,
    protocol: true,
  });

  if (study === null) return;

  return (
    <>
      <div className="flex flex-col gap-4 p-4 mb-8 bg-neutral-800 rounded-md w-min">
        <div className="flex items-baseline">
          <div className="text-2xl font-bold">{study.nickname}</div>
          <div className="text-neutral-400 ml-4 mr-2">{study.sponsor}</div>
          <div className="text-neutral-400">{study.protocol}</div>
        </div>
      </div>
      {children}
    </>
  );
}
