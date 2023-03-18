import { getHello } from "../api"
import { ok, err } from 'neverthrow'
import { Hello } from "../model";
import { AdapterType } from ".";

export type HelloAdapter = AdapterType<Hello>

export const helloAdapter = async (): Promise<HelloAdapter> => {
  try {
    const { data } = await getHello()
    return ok(data)
  } catch(e: unknown) {
    return err({ name: 'error' as const, error: e })
  }
}