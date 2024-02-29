export type FormName = {
  id: string;
  name: string;
};

export async function getFormNamesByFolderId(
  folderId: string
): Promise<FormName[]> {
  const formsData = await fetch("http://localhost:3000/api/form", {
    method: "POST",
    body: JSON.stringify({ folderId }),
  });

  const formNames: FormName[] = await formsData.json();

  return formNames;
}
