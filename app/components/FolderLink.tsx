"use client";

import { getFormNamesByFolderId } from "@/app/utils/form";
import { useState } from "react";
import FormLink from "./FormLink";

type FolderLinkProps = {
  id: string;
  name: string;
};

export default function FolderLink(props: FolderLinkProps) {
  const [forms, setForms] = useState<{ id: string; name: string }[]>([]);

  async function handleClick(id: string) {
    const formData = await getFormNamesByFolderId(id);

    setForms(formData);
  }

  return (
    <div className="flex flex-col">
      <div
        onClick={() => handleClick(props.id)}
        className="underline cursor-pointer"
      >
        {props.name}
      </div>
      {forms.map((form) => {
        return <FormLink key={form.id} {...form} />;
      })}
    </div>
  );
}
