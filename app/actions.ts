"use server"

import { kv } from "@vercel/kv"
import { revalidatePath } from "next/cache";

export async function deleteHabit(Habit: string) {
  await kv.hdel("habits", Habit);

  revalidatePath("/");
}