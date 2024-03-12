"use client";

import { Folder, Form } from "@prisma/client";
import { useState } from "react";
import { getFormsPartial } from "../actions/form";

export default function FolderMenu({ name, forms }: Partial<Folder>) {
  const [expanded, setExpanded] = useState(false);
  const [formMenu, setFormMenu] = useState<Partial<Form>[]>([]);

  async function onClick() {
    if (formMenu.length === 0 && forms) {
      const formObjects = await getFormsPartial(forms, { name: true });
      setFormMenu(formObjects);
    }

    setExpanded(!expanded);
  }

  return (
    <div className="flex flex-col gap-4 bg-neutral-800 w-fit p-4 rounded-md select-none">
      <div
        onClick={onClick}
        className="flex gap-2 items-center cursor-pointer w-fit"
      >
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
            d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
        <div className="font-medium">{name}</div>
      </div>
      {expanded &&
        formMenu.map((form) => {
          return (
            <div key={form.id} className="flex gap-2 items-center ml-6">
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              {form.name}
            </div>
          );
        })}
    </div>
  );
}
