type Study = {
  id: string;
  sponsor: string;
  code: string;
  nickname: string;
  status: string;
  subjects: number;
  queries: number;
};

// const sampleStudies: Study[] = [
//   {
//     sponsor: "AstraZeneca",
//     code: "D7960C00006",
//     nickname: "PURSUIT",
//     status: "Active",
//     subjects: 34,
//     queries: 7,
//   },
//   {
//     sponsor: "AstraZeneca",
//     code: "D2375C00194",
//     nickname: "SUPERNOVA",
//     status: "Active",
//     subjects: 19,
//     queries: 11,
//   },
// ];

export default async function StudyList() {
  const studies = await fetch("http://localhost:3000/api/user/studies", {
    method: "POST",
    body: "",
    next: { revalidate: 0 },
  });

  const studiesData: Study[] = await studies.json();

  console.log(studiesData);

  return (
    <div className="flex flex-col gap-4 text-slate-200 bg-slate-800 p-4 rounded">
      <div className="text-xl font-semibold">My Studies</div>
      <div className="grid grid-cols-2 gap-4">
        {studiesData.map((study: Study) => (
          <Study study={study} />
        ))}
      </div>
      <div className="text-sm text-slate-400 font-medium underline cursor-pointer hover:text-slate-300 w-fit">
        All studies
      </div>
    </div>
  );
}

function Study({ study }: { study: Study }) {
  return (
    <div className="bg-slate-700 rounded p-4">
      <div className="font-semibold text-lg">{study.nickname}</div>
      <div className="mb-2 font-medium text-slate-400">
        {study.sponsor} {study.code}
      </div>
      <div className="flex justify-evenly items-center">
        <div className="text-sm font-medium text-green-400">{study.status}</div>
        {/* <div className="text-slate-400 font-semibold">|</div> */}
        <div className="flex items-center gap-2 text-sm font-medium text-blue-400 cursor-pointer hover:text-blue-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          {study.subjects}
        </div>
        {/* <div className="text-slate-400 font-semibold">|</div> */}
        <div className="flex gap-2 items-center text-sm font-medium text-red-400 cursor-pointer hover:text-red-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          {study.queries}
        </div>
      </div>
      {/* <div className="text-xs text-slate-400">{study.title}</div> */}
    </div>
  );
}
