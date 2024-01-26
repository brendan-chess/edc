import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="bg-slate-800 text-slate-200 p-2 mb-2 text-right rounded">
        username
      </div>
      {children}
    </div>
  );
}
