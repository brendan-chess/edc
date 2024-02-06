export async function getFormNamesByFolderId(folderId: string) {
  const formsData = await fetch("http://localhost:3000/api/form", {
    method: "POST",
    body: JSON.stringify({ folderId }),
  });

  const forms: { id: string; name: string }[] = await formsData.json();

  return forms;
}
