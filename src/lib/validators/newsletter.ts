import { z } from "zod"

export const newsletterSchema = z.object({
  email: z.string().email("Некорректный email"),
})

export type NewsletterFormData = z.infer<typeof newsletterSchema>