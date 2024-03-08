import { getStudy } from "@/app/actions/study";
import { Study } from "@prisma/client";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { studyId: string };
}) {
  const study: Study | null = await getStudy(params.studyId);

  if (study === null) return;

  return (
    <div className="flex w-fit items-center gap-8 p-4 bg-neutral-800 rounded-md">
      <div>{study.status}</div>
      <div className="flex gap-2 items-center hover:scale-105 transition cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <Link href={`/study/${study.id}/subjects`}>
          {study.subjects.length}{" "}
          <span className=" text-neutral-400">subjects</span>
        </Link>
      </div>
      <div className="flex gap-2 items-center hover:scale-105 transition cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
        <div>
          {study.queries} <span className=" text-neutral-400">queries</span>
        </div>
      </div>
    </div>
  );
}
