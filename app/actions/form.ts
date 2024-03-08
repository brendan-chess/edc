"use server";

import prisma from "@/prisma/prisma";
import { Form } from "@prisma/client";

export async function getFormsPartial(
  formIds: string[],
  select: Partial<{ [K in keyof Form]: boolean }>
): Promise<Partial<Form>[]> {
  let forms: Partial<Form>[] = [];

  forms = await prisma.form.findMany({
    where: {
      id: { in: formIds },
    },
    select,
  });

  return forms;
}
