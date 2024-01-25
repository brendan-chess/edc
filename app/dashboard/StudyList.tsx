type Study = {
  sponsor: string;
  code: string;
  nickname: string;
  status: string;
  subjects: number;
  queries: number;
};

const sampleStudies: Study[] = [
  {
    sponsor: "AstraZeneca",
    code: "D7960C00006",
    nickname: "PURSUIT",
    status: "Active",
    subjects: 34,
    queries: 7,
  },
  {
    sponsor: "AstraZeneca",
    code: "D2375C00194",
    nickname: "SUPERNOVA",
    status: "Active",
    subjects: 19,
    queries: 11,
  },
];

export default function StudyList() {
  return (
    <div className="flex flex-col gap-4 text-slate-200 bg-slate-800 p-4 rounded">
      <div className="text-xl font-semibold">Pinned Studies</div>
      <div className="grid grid-cols-2 gap-4">
        {sampleStudies.map((study: Study) => (
          <Study study={study} />
        ))}
      </div>
      <div className="">View all studies {">"}</div>
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
      <div className="flex justify-evenly items-center p-1 border border-slate-400 rounded">
        <div className="text-sm font-medium text-green-400">{study.status}</div>
        <div className="text-slate-400 font-semibold">|</div>
        <div className="text-sm font-medium text-blue-400 underline cursor-pointer hover:text-blue-300">
          {study.subjects} subjects
        </div>
        <div className="text-slate-400 font-semibold">|</div>
        <div className="text-sm font-medium text-red-400 underline cursor-pointer hover:text-red-300">
          {study.queries} queries
        </div>
      </div>
      {/* <div className="text-xs text-slate-400">{study.title}</div> */}
    </div>
  );
}
