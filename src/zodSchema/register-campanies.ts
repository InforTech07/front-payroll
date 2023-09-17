import z from 'zod';

export const registerCompaniesSchema = z.object({
    email: z.string().email({ message: 'Invalid email' }),
    password: z.string().min(6,{ message:'password debil'}).max(100),
});

export type registerCompaniesSchemaType = z.infer<typeof registerCompaniesSchema>;