import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="text-xl text-slate-200">Hello</div>
      <Link
        href={"/login"}
        className="bg-slate-700 text-slate-200 px-4 py-2 w-fit rounded-lg font-bold shadow mt-4"
      >
        Log in
      </Link>
    </div>
  );
}
