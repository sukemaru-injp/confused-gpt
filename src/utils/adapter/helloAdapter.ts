import { getHello } from "../api"
import { ok, err, Ok, Err } from 'neverthrow'
import { Hello } from "../model";

export type HelloAdapter = Ok<Hello, never> | Err<never, {
  name: "error";
  error: unknown;
}>

export const helloAdapter = async () => {
  try {
    const { data } = await getHello()
    return ok(data)
  } catch(e: unknown) {
    return err({name: 'error' as const, error: e})
  }
}