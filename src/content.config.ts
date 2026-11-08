import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faq = defineCollection({
  loader: glob({ base: './src/content/faq', pattern: '**/*.md' }),
  schema: z.object({ pregunta: z.string().min(1), prioridad: z.number().int().positive(), fuentes: z.array(z.string()).min(1) }),
});
const malla = defineCollection({
  loader: glob({ base: './src/content/malla', pattern: '**/*.md' }),
  schema: z.object({ anio: z.number().int().positive(), semestre: z.number().int().positive(), asignaturas: z.array(z.string()).min(1), fuente: z.string().min(1) }),
});
const referencias = defineCollection({
  loader: glob({ base: './src/content/referencias', pattern: '**/*.md' }),
  schema: z.object({ idFuente: z.string().min(1), organizacion: z.string().min(1), titulo: z.string().min(1), tipo: z.enum(['primaria', 'secundaria', 'testimonio']), url: z.url(), fechaConsulta: z.string().min(1), fechaDato: z.string().min(1), uso: z.string().min(1) }),
});
export const collections = { faq, malla, referencias };

