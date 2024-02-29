import { Study } from "@prisma/client";

export default function StudyListItem(study: Study) {
  return (
    <div className="bg-neutral-700 p-4 rounded-md">
      <div className="flex gap-2">
        <div className="font-semibold underline underline-offset-2 decoration-2">
          {study.nickname}
        </div>
        <div className=" text-neutral-400">{study.sponsor}</div>
        <div className=" text-neutral-400">{study.protocol}</div>
      </div>
    </div>
  );
}
