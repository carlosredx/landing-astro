# Planificación de contenidos y trazabilidad

**Proyecto:** landing page de Ingeniería en Informática, UTEM  
**Equipo:** Carlos Valdivieso y Andres Lugo  
**Fecha de entrega indicada por la pauta:** 13 de noviembre de 2026

## Fase A — fuentes

La matriz está en `docs/MATRIZ-FUENTES.md` y contiene 13 fuentes, todas primarias. Registra autoridad, vigencia, trazabilidad, objetividad, pertinencia, fecha del dato, fecha de consulta y sección donde se usa. El sitio enlaza cada dato con su referencia mediante ID.

Hallazgo crítico: la ficha de UTEM consultada en noviembre de 2026 todavía publica una malla de ocho semestres; el Consejo Superior aprobó un rediseño de la carrera en julio de 2026. El equipo debe confirmar la malla aplicable a la cohorte antes de presentar esos cursos como plan definitivo.

## Fase B — audiencia

Aplicar `docs/INSTRUMENTO-AUDIENCIA.md` a 5 o más postulantes o familiares. Solicitar consentimiento informado. Usar códigos anónimos. Registrar respuestas en `docs/respuestas-audiencia.csv`, contar la frecuencia de cada duda y completar el perfil de usuario. Los consentimientos se guardan para revisión docente y no se publican.

La página incluye 6 preguntas iniciales; su prioridad es provisional hasta que el equipo ordene las dudas usando las respuestas reales.

## Fase C — arquitectura

Wireframes de baja fidelidad: `docs/wireframes/movil.svg` y `docs/wireframes/escritorio.svg`.

| Orden | Sección | Pregunta que responde | Fuentes |
|---|---|---|---|
| 1 | Portada | ¿Qué carrera es y dónde se imparte? | F01 |
| 2 | Sobre la carrera y comparación | ¿En qué se diferencia de carreras afines? | F01, F04, F05 |
| 3 | Perfil de egreso | ¿Qué sabré hacer? | F01 |
| 4 | Plan publicado | ¿Qué aprenderé y cómo se organiza? | F01, F03, F09 |
| 5 | Campo laboral | ¿Qué funciones y datos oficiales puedo revisar? | F01, F02 |
| 6 | Respaldo institucional | ¿Qué certificación y acreditación están documentadas? | F06, F07, F10, F12, F13 |
| 7 | Admisión | ¿Cuáles son los factores y requisitos del proceso 2027? | F02, F11 |
| 8 | Preguntas frecuentes | ¿Qué dudas iniciales se responden? | F01-F07 |
| 9 | Referencias | ¿Dónde puedo verificar cada afirmación? | F01-F13 |

La arquitectura prioriza la orientación inicial, después la formación y el futuro profesional, y finalmente admisión y referencias. Se debe revisar con la frecuencia de dudas de la Fase B.

## Fase D — redacción

- Lenguaje claro, voz activa, siglas explicadas al primer uso.
- Cada cifra tiene año, contexto y enlace a fuente.
- La comparación está identificada como síntesis de perfiles oficiales; la interpretación del equipo se etiqueta por separado.
- La página usa una ilustración CSS decorativa sin fotografía externa.
- Se usan 6 preguntas frecuentes como punto de partida. Deben ajustarse al cuestionario aplicado.

## Fase E — validación

Aplicar `docs/VALIDACION-USUARIOS.md` a 3 o más personas después de implementar el sitio. Las tareas comprueban título/duración, malla, comparación, dato de empleo e ingreso, y requisitos de admisión. Registrar observaciones en `docs/validacion-resultados.csv`, implementar correcciones y repetir las tareas afectadas. No completar resultados antes de hacer la prueba.

## Mapa técnico

- `src/pages/index.astro`: ensambla la landing y carga colecciones.
- `src/components/`: un componente por sección.
- `src/layouts/BaseLayout.astro`: idioma, metadatos, canonicals y estilos globales.
- `src/content.config.ts`: esquemas estrictos de datos.
- `src/content/faq/`, `malla/`, `referencias/`: contenido editable en Markdown.
- `src/pages/robots.txt.ts`: robots con URL de sitemap derivada del dominio configurado.
- Astro sitemap: genera `sitemap-index.xml` y mapa XML de las páginas.

## Métricas de la rúbrica

- Planificación y validación de contenido: 50 %.
- Implementación: 30 %.
- Informe y coevaluación: 20 %.

## Pendientes que dependen del equipo

1. Confirmar con UTEM la nueva malla que aplica a la cohorte 2027.
2. Aplicar el cuestionario y completar persona/preguntas priorizadas con evidencia real.
3. Probar la página con tres personas y completar hallazgos y correcciones.
4. Revisar la identidad plena del equipo según lo que exija el docente.
5. Cambiar `example.com` por el dominio real en `astro.config.ts`; revisar sitemap después del despliegue.
6. El equipo inicia y administra su propio Git/GitHub; esta carpeta no incluye repositorio configurado.
