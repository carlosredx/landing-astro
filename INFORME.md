# Proyecto web para Ingeniería en Informática UTEM

## Resumen ejecutivo

Este proyecto presenta una landing page informativa para estudiantes de enseñanza media, sus familias y personas que consideran cambiar de carrera. La página organiza información oficial sobre Ingeniería en Informática de la Universidad Tecnológica Metropolitana (UTEM), compara su enfoque con dos carreras afines, muestra el plan de estudios que aparece en la ficha institucional, explica los límites de vigencia de ese dato y enlaza las fuentes de admisión, empleo y respaldo institucional.

La propuesta prioriza la trazabilidad: se evita presentar una cifra sin año y fuente. El sitio está construido con Astro, TypeScript estricto y colecciones de contenido validadas. La encuesta de audiencia y la prueba con usuarios se prepararon como instrumentos, pero sus resultados requieren aplicación por el equipo y no se han fabricado.

## Equipo

- Carlos Valdivieso
- Andres Lugo

## Contexto, audiencia y propósito

El cliente definido por la pauta es la Dirección de Escuela. El público principal son estudiantes de 3.º y 4.º medio y sus familias; el secundario incluye personas que buscan cambiar de carrera o retomar estudios. La página responde qué se estudia, cómo se diferencia la carrera, qué opciones laborales describe la institución, cuál es el respaldo disponible y cómo revisar admisión.

El cuestionario de audiencia se encuentra en `docs/INSTRUMENTO-AUDIENCIA.md`. Debe aplicarse a cinco o más personas con consentimiento informado. Hasta contar con resultados, el orden de las preguntas frecuentes es una hipótesis editorial de partida, no un hallazgo observado.

## Fase A: levantamiento y evaluación de fuentes

La matriz de `docs/MATRIZ-FUENTES.md` evalúa 13 fuentes, con prioridad para UTEM, Mineduc, SIES y CNA. Cada fuente incluye autoridad, vigencia, trazabilidad, objetividad y pertinencia; se anotan límites de vigencia cuando corresponden.

Las fuentes institucionales tienen autoridad para describir la carrera, sus requisitos y sus acuerdos. La ficha del Sistema de Acceso publica los datos de admisión y empleo/ingreso basados en SIES y registros tributarios. Las cifras de empleo e ingreso se presentan como indicadores de cohortes, no como garantía individual.

### Hallazgo de vigencia que condiciona la publicación

La ficha pública UTEM consultada el 8 de noviembre de 2026 muestra una malla por ocho semestres. Sin embargo, el Consejo Superior aprobó un rediseño de Ingeniería Informática en 2026. La resolución completa del nuevo plan no se localizó entre los recursos consultados. Por eso, la página identifica la malla como la publicada en la ficha consultada y pide confirmar qué versión aplica a la cohorte 2027. Esta advertencia evita atribuir a ingresantes una estructura académica no verificada.

## Fase B: análisis de audiencia

El instrumento de 8 preguntas y el registro anonimizado están en `docs/INSTRUMENTO-AUDIENCIA.md`; el archivo de respuestas está en `docs/respuestas-audiencia.csv`. El equipo debe aplicarlo, conservar los consentimientos para revisión docente y resumir preguntas por frecuencia. Los consentimientos no se publican.

El perfil de usuario final, las prioridades basadas en frecuencia y cualquier cambio de arquitectura derivado del trabajo de campo quedan pendientes de datos reales. La landing tiene una arquitectura inicial y debe ajustarse si las respuestas muestran otras prioridades.

## Fase C: arquitectura de información

La página está ordenada para pasar de identificación rápida a decisión informada: portada; descripción y comparación; perfil de egreso; plan; campo laboral; respaldo; admisión; preguntas frecuentes; referencias. El mapa de trazabilidad aparece en `docs/ARQUITECTURA-CONTENIDO.md`.

Se incluyen wireframes de baja fidelidad para móvil y escritorio en `docs/wireframes/`. La jerarquía visual usa una portada con resumen y acciones, tarjetas para comparar carreras, bloques para explicar formación y respaldo, y acordeones accesibles para preguntas.

## Fase D: redacción y contenido

Los textos reescriben información institucional en lenguaje no especializado. Las siglas se explican al primer uso; cifras de empleo, ingresos, admisión y certificación llevan año, contexto y enlace. El sitio separa hechos institucionales y la interpretación comparativa del equipo.

La comparación propuesta usa las fichas oficiales de Ingeniería Civil en Computación mención Informática e Ingeniería Civil en Ciencia de Datos. La síntesis no afirma superioridad: distingue énfasis curriculares según los perfiles que publica UTEM.

## Fase E: validación

El guion de prueba con cinco tareas y el registro para al menos tres personas están en `docs/VALIDACION-USUARIOS.md`; el archivo consolidado está en `docs/validacion-resultados.csv`. Las tareas piden localizar datos, interpretar citas y encontrar requisitos. El equipo debe registrar si cada tarea se completa, dudas, cambios aplicados y verificación posterior. Esta fase se completa después de que personas reales prueben el sitio. No se reportan resultados simulados.

## Decisiones de implementación

- **Astro:** genera una página estática con poco JavaScript en el navegador; la página no necesita una base de datos ni interactividad compleja.
- **Componentes:** cada sección tiene un componente `.astro` reutilizable y el layout concentra metadatos, navegación y estilos compartidos.
- **TypeScript estricto:** el proyecto hereda el perfil `strict` de Astro y declara tipos de props en componentes.
- **Colecciones tipadas:** malla, preguntas y referencias viven en Markdown; `src/content.config.ts` exige campos y tipos. El build debe fallar si un archivo no cumple el esquema.
- **Accesibilidad:** HTML semántico, enlaces de salto, encabezados estructurados, foco visible, acordeones nativos, contraste alto y soporte de movimiento reducido.
- **SEO:** título y descripción, metadatos Open Graph, idioma `es-CL`, sitemap y `robots.txt`. La URL `example.com` se debe reemplazar por el dominio final.
- **Imágenes:** el diseño usa una composición CSS decorativa y favicon vectorial propio; no se reutilizan imágenes institucionales sin permiso.

## Validación técnica

Astro y TypeScript se verificaron localmente con `pnpm check`; también se generó correctamente la salida estática con `pnpm build`. La página se revisó visualmente en el navegador local. Quedan pendientes las capturas específicas a 360, 768 y 1280 px, y las mediciones públicas de Lighthouse y CompliaScan, que requieren desplegar el sitio.

| Verificación | Resultado | Evidencia |
|---|---|---|
| Astro / TypeScript | Correcto: 15 archivos, 0 errores, 0 advertencias, 0 pistas | `pnpm check`, 2026-11-08 |
| Build estático | Correcto: generó `dist/index.html`, sitemap y `robots.txt` | `pnpm build`, 2026-11-08 |
| Responsive 360 / 768 / 1280 px | Pendiente | Revisión adicional en esos anchos |
| Lighthouse, cuatro categorías ≥ 90 | Pendiente de sitio público | Informe de PageSpeed Insights |
| CompliaScan ≥ 90/100 | Pendiente de sitio público | Informe de CompliaScan |
| Prueba con personas ≥ 3 | Pendiente | `docs/validacion-resultados.csv` |

## Limitaciones y próximos pasos

1. Confirmar la malla del rediseño aprobado en 2026 y la cohorte a la que aplica.
2. Aplicar el cuestionario a cinco o más personas y priorizar dudas según frecuencia.
3. Ejecutar la prueba de usabilidad con tres personas, corregir la página y completar el registro.
4. Sustituir `example.com` por la dirección definitiva de Vercel, volver a compilar y verificar sitemap y metadatos.
5. Incorporar integrantes adicionales si corresponde; revisar con el docente qué datos necesita para identificarlos plenamente.
6. Agregar al repositorio a los integrantes y al docente según instrucciones de la asignatura. La carpeta local no tiene Git configurado.

## Declaración de uso de IA

El anexo `docs/DECLARACION-IA.md` registra el uso de OpenAI Codex para estructurar el borrador de código y documentación. El equipo debe revisar y poder explicar cada parte, validar los datos en fuentes primarias y completar cualquier cambio que realice antes de entregar.

## Glosario breve

- **Astro:** herramienta para generar sitios web estáticos con componentes.
- **Colección de contenido:** conjunto de archivos de datos validados por un esquema.
- **Malla curricular:** asignaturas organizadas por semestre.
- **SIES:** Servicio de Información de Educación Superior.
- **Sitemap:** archivo que ayuda a buscadores a descubrir páginas del sitio.
- **UTEM:** Universidad Tecnológica Metropolitana.
