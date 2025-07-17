import z from "zod";

export const helloInputSchema = z.object({
  text: z.string(),
});

export const helloOutputSchema = z.object({
  greeting: z.string(),
});

export type HelloInput = z.infer<typeof helloInputSchema>;
export type HelloOutput = z.infer<typeof helloOutputSchema>;

export async function hello(input: HelloInput): Promise<HelloOutput> {
  return {
    greeting: `hello ${input.text}`,
  };
}
