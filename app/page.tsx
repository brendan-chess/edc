import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="text-xl text-blue-900">Hello</div>
      <Link
        href={"/login"}
        className="bg-blue-700 hover:bg-blue-600 text-blue-50 px-4 py-2 w-fit rounded-lg font-bold shadow"
      >
        Log in
      </Link>
    </div>
  );
}
