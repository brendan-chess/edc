import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-xl text-blue-900 my-4 underline underline-offset-8">
        Log in
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-blue-900 ml-3 font-semibold text-sm">Username</div>
        <input
          type="text"
          className="border-2 border-blue-700 text-blue-900 rounded-lg shadow px-2 py-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-blue-900 ml-3 font-semibold text-sm">Password</div>
        <input
          type="password"
          className="border-2 border-blue-700 text-blue-900 rounded-lg shadow px-2 py-1"
        />
      </div>
      <Link
        href="/"
        className="bg-blue-700 hover:bg-blue-600 text-blue-50 px-4 py-2 w-fit rounded-lg font-bold shadow mt-4"
      >
        Submit
      </Link>
    </div>
  );
}
