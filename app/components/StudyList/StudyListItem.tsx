import { Study } from "@prisma/client";
import Link from "next/link";

export default function StudyListItem(study: Study) {
  return (
    <Link
      href={`/study/${study.id}`}
      className="bg-neutral-700 p-4 rounded-md cursor-pointer"
    >
      <div className="flex gap-2">
        <div className="font-medium">{study.nickname}</div>
        <div className="text-neutral-400">{study.sponsor}</div>
        <div className="text-neutral-400">{study.protocol}</div>
      </div>
    </Link>
  );
}
