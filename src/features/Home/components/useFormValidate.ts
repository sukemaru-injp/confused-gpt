import { z, ZodError } from 'zod';
import { CreateIntroduceRequest } from '@/model/CreateIntroduce';
import { ok, err } from 'neverthrow';

const genderSchema = z.enum(['man', 'woman']);

const createObjectSchema = z.object({
  age: z
    .number({
      required_error: '必須項目です',
    })
    .min(12),
  gender: genderSchema,
  likes: z.array(
    z.object({
      id: z.string(),
      value: z.string(),
    }),
  ),
});

export const useFormValidate = () => {
  function validateForm(input: CreateIntroduceRequest['value']) {
    try {
      const res = createObjectSchema.parse(input);
      return ok(res);
    } catch (e: unknown) {
      if (e instanceof ZodError) {
        return err({ name: 'zodError', error: e.errors });
      }
      return err({ name: 'unknown', error: e });
    }
  }

  return { validateForm };
};
