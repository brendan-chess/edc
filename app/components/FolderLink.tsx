"use client";

import { FormName, getFormNamesByFolderId } from "@/app/utils/form";
import { useState } from "react";
import FormLink from "./FormLink";

type FolderLinkProps = {
  id: string;
  name: string;
};

export default function FolderLink(props: FolderLinkProps) {
  const [formNames, setFormNames] = useState<FormName[]>([]);

  async function handleClick(id: string) {
    const formNamesData = await getFormNamesByFolderId(id);

    setFormNames(formNamesData);
  }

  return (
    <div className="flex flex-col">
      <div
        onClick={() => handleClick(props.id)}
        className="underline cursor-pointer"
      >
        {props.name}
      </div>
      {formNames.map((formName: FormName) => {
        return <FormLink key={formName.id} {...formName} />;
      })}
    </div>
  );
}
