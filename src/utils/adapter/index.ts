import { ok, err, Ok, Err } from 'neverthrow';

type DefaultError = {
  name: 'error';
  error: unknown;
};
export type AdapterType<T, E = DefaultError> = Ok<T, never> | Err<never, E>;
