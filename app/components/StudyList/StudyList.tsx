import { Study } from "@prisma/client";
import { getStudies } from "../../actions/user";
import StudyListItem from "./StudyListItem";

export default async function StudyList() {
  const studies: Study[] = await getStudies("65ada6746b85c7fe1e3448f0");

  return (
    <div className="p-4 bg-neutral-800 rounded-md w-min">
      <div className="text-2xl font-bold mb-4">Studies</div>
      <div className="flex flex-col gap-4">
        {studies.map((study: Study) => {
          return <StudyListItem key={study.id} {...study} />;
        })}
      </div>
    </div>
  );
}
