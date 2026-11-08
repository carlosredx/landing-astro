# Proyecto web para Ingeniería en Informática UTEM

## Resumen ejecutivo

Este proyecto presenta una landing page informativa y rigurosa dirigida a estudiantes de enseñanza media, sus familias y personas interesadas en continuar estudios superiores o cambiarse de carrera. La plataforma organiza y presenta información oficial verificable sobre la carrera de Ingeniería en Informática de la Universidad Tecnológica Metropolitana (UTEM), compara de forma fundamentada su enfoque formativo con dos carreras afines, expone el plan de estudios publicado por la institución detallando sus límites de vigencia, e integra enlaces directos a las fuentes institucionales de admisión, empleabilidad, aranceles y acreditación.

La propuesta se rige por un principio estricto de trazabilidad y honestidad comunicacional: se erradica cualquier frase publicitaria carente de sustento y ninguna cifra o porcentaje se muestra sin su año de vigencia y fuente primaria citada en formato APA 7. El sitio fue desarrollado con el framework Astro sobre TypeScript en modo estricto, empleando colecciones de contenido tipadas y validadas con Zod. La investigación de audiencia (Fase B, 5 participantes) y la validación de usabilidad (Fase E, 3 participantes) fueron aplicadas y sistematizadas, respaldando con evidencia real cada decisión de diseño, jerarquía y contenido.

## Equipo

- Carlos Valdivieso
- Andres Lugo

## Contexto, audiencia y propósito

El cliente institucional definido en el encargo es la Dirección de Escuela, que requiere un portal de una sola vista para orientar y atraer postulantes con datos confiables. El público objetivo principal comprende estudiantes de 3.º y 4.º medio y sus familias; el público secundario abarca egresados de enseñanza media previa, técnicos y postulantes adultos que buscan reconversión laboral. 

La página resuelve de forma directa las cinco interrogantes esenciales del postulante: qué es la carrera y cómo se diferencia; qué competencias desarrollará y cómo se distribuye la malla; en qué áreas trabajará y cuáles son los ingresos reales de la industria; qué respaldo y acreditación posee la institución; y cuáles son las vías, ponderaciones y fechas de admisión.

El instrumento de audiencia de 8 preguntas (`docs/INSTRUMENTO-AUDIENCIA.md`) fue aplicado a 5 participantes con consentimiento informado. Sus resultados permitieron jerarquizar la arquitectura de contenidos y definir el orden de las preguntas frecuentes a partir de frecuencias observadas y no de supuestos editoriales.

## Fase A: levantamiento y evaluación de fuentes

La matriz de fuentes (`docs/MATRIZ-FUENTES.md`) evalúa 13 fuentes con preponderancia de fuentes primarias oficiales: UTEM, Ministerio de Educación (Subsecretaría de Educación Superior / Acceso Mineduc), SIES, CNA-Chile y acuerdos del Consejo Superior. Cada fuente fue sometida al análisis de los cinco criterios exigidos: autoridad, vigencia, trazabilidad, objetividad y pertinencia.

Las fuentes institucionales aportan la descripción formal del perfil de egreso, la malla y los acuerdos normativos. Los registros del Sistema de Acceso y Mi Futuro sustentan los datos cuantitativos de admisión y los indicadores de empleabilidad e ingresos al 4.° año tras la titulación, basados en cruces de registros tributarios (SII). Todas las cifras se reportan con indicación explícita de la cohorte evaluada, evitando promesas individuales garantizadas.

### Hallazgo de vigencia que condiciona la publicación

La ficha oficial de la carrera en el portal de la UTEM consultada en noviembre de 2026 muestra un plan de estudios estructurado en 8 semestres (4 años). No obstante, el Consejo Superior aprobó un rediseño del plan de estudios de Ingeniería en Informática en julio de 2026 (Acuerdo N.° 41/2026). Debido a que la resolución completa con el nuevo plan no ha sido publicada a la fecha de consulta, la landing page mantiene la malla pública vigente pero incorpora una advertencia explícita y transparente, instando a los postulantes de la cohorte 2027 a corroborar con la Escuela la aplicación del nuevo plan formativo.

## Fase B: análisis de audiencia y perfil de usuario

El instrumento de 8 preguntas fue aplicado a 5 personas representativas del público objetivo bajo consentimiento informado, registrándose en `docs/INSTRUMENTO-AUDIENCIA.md` y en el repositorio estructurado `docs/respuestas-audiencia.csv`.

### Perfil de usuario consolidado (Buyer Persona)

- **Arquetipo:** Matías (18 años, estudiante de 4.º medio).
- **Contexto vocacional:** Finaliza la enseñanza media y tiene marcado interés por la tecnología, pero siente confusión ante la oferta de carreras similares. Su familia depende de la Gratuidad universitaria y exige certeza institucional sobre la acreditación de la universidad.
- **Preguntas principales:** ¿Cuál es la diferencia real entre Ingeniería en Informática (4 años) y las ingenierías civiles (5.5 a 6 años)? ¿Qué asignaturas se cursan en el primer año y qué tan difícil es la matemática? ¿Cuáles son los sueldos y la empleabilidad real de los titulados?
- **Dudas y barreras:** Temor a reprobar asignaturas filtro de ciencias básicas; desconfianza frente a sitios web con información publicitaria no verificable; incertidumbre sobre el puntaje de corte PAES.
- **Canal de acceso principal:** Búsqueda en Google desde smartphone y consulta de enlaces compartidos en redes o por orientadores escolares.

### Tabla de priorización temática por frecuencia observada

| Tema / Necesidad detectada | Frecuencia ($n=5$) | Participantes | Prioridad | Sección que la resuelve |
|---|:---:|---|:---:|---|
| Malla curricular, duración y contenido de programación | 5 de 5 (100%) | P01 a P05 | Alta (1) | `Malla.astro` |
| Empleabilidad, ingresos y campo laboral oficial | 5 de 5 (100%) | P01 a P05 | Alta (2) | `CampoLaboral.astro` |
| Admisión, requisitos PAES, puntajes y Gratuidad | 5 de 5 (100%) | P01 a P05 | Alta (3) | `Admision.astro` |
| Nivel de matemática inicial y conocimientos previos de código | 4 de 5 (80%) | P01, P02, P03, P05 | Media-alta (4) | `PreguntasFrecuentes.astro` |
| Diferenciación con carreras afines y talleres prácticos | 4 de 5 (80%) | P02 a P05 | Media-alta (5) | `SobreCarrera.astro` |

## Fase C: arquitectura de información

La secuencia de la landing page sigue una progresión lógica orientada a la toma de decisiones informada, estructurada en 9 componentes modulares:
1. **Portada (Hero):** Identificación unívoca de la carrera, grado, título, duración y llamado a la acción.
2. **Sobre la carrera:** Definición formativa y tabla comparativa fundamentada con 2 carreras afines de la UTEM (Ingeniería Civil en Computación e Ingeniería Civil en Ciencia de Datos).
3. **Perfil de egreso:** Capacidades y competencias declaradas oficialmente, reescritas en lenguaje directo y sin tecnicismos opacos.
4. **Plan de estudios:** Organización semestral con advertencia transparente de vigencia y rediseño.
5. **Campo laboral:** Áreas de desempeño profesional con cifras verificables de empleabilidad (Mi Futuro / SIES).
6. **Respaldo institucional:** Acreditación institucional CNA (4 años), perfil docente y equipamiento.
7. **Admisión:** Ponderaciones de pruebas PAES, vacantes, puntaje de corte y estado de Gratuidad.
8. **Preguntas frecuentes:** Acordeón accesible que da respuesta a las dudas priorizadas en la Fase B.
9. **Referencias:** Directorio exhaustivo de fuentes en norma APA 7 con enlace directo e hipervínculos bidireccionales en el texto.

El mapa de trazabilidad y los wireframes estructurales para dispositivos móviles y escritorio se encuentran documentados en `docs/ARQUITECTURA-CONTENIDO.md` y en la carpeta `docs/wireframes/`.

## Fase D: redacción y contenido

La redacción de los contenidos cumple con las directrices de lenguaje claro:
- Enunciados directos y oraciones de extensión controlada (menos de 25 palabras).
- Explicación de siglas técnicas e institucionales en su primera aparición (SCT, CNA, SIES, DEMRE, PAES, FUAS).
- Distinción tipográfica y contextual explícita entre datos oficiales emanados de fuentes primarias y las interpretaciones analíticas del equipo.
- Separación limpia de la capa de datos: los contenidos estructurados de preguntas frecuentes, malla y referencias se gestionan de forma desacoplada en archivos Markdown dentro de `src/content/`, tipados y validados mediante esquemas en `src/content.config.ts`.

## Fase E: validación con usuarios

La prueba de usabilidad fue realizada con 3 participantes del público objetivo (estudiantes de 4.º medio) bajo protocolo de consentimiento informado y pensamiento en voz alta (*think-aloud*). Los participantes completaron cinco tareas concretas sobre el prototipo funcional:
1. Identificar título, duración y jornada.
2. Localizar el plan de estudios y asignaturas de primer año.
3. Explicar la diferencia entre Ingeniería en Informática y una carrera afín.
4. Identificar un dato de empleabilidad, su año y fuente.
5. Localizar los requisitos de admisión y el enlace oficial.

El 100% de las tareas fueron completadas exitosamente con tiempos promedio de respuesta entre 10 y 35 segundos. Las observaciones levantadas motivaron las siguientes correcciones de diseño aplicadas al sitio:
- **Optimización de jerarquía en la malla para pantallas móviles:** Se reforzó el identificador visual de año académico para facilitar el escaneo rápido en pantallas de 360 px.
- **Clarificación de cifras salariales:** Se precisó en el texto de `CampoLaboral.astro` que las estimaciones salariales corresponden a promedios brutos reportados a partir de registros tributarios (SII/SIES).
- **Contextualización de la nota de vigencia:** Se clarificó la redacción en `Malla.astro` para transmitir seguridad al postulante respecto a la vigencia institucional del título profesional.

El registro detallado y la matriz consolidada de hallazgos se encuentran en `docs/VALIDACION-USUARIOS.md` y `docs/validacion-resultados.csv`.

## Decisiones técnicas de implementación

- **Framework Astro (v5):** Generación de sitio puramente estático (SSG) con cero JavaScript innecesario en el cliente, optimizando el tiempo de carga y eliminando vulnerabilidades dinámicas.
- **TypeScript Estricto:** Configuración estricta (`astro/tsconfigs/strict`) en `tsconfig.json`. Props de componentes, funciones utilitarias y esquemas de validación tipados exhaustivamente sin empleo de `any`.
- **Content Collections Tipadas:** Empleo de la API de colecciones de contenido de Astro con esquemas Zod en `src/content.config.ts`. La compilación del proyecto falla de forma automática si algún registro omite campos obligatorios o no respeta los tipos definidos.
- **Accesibilidad Web (WCAG 2.2 AA):** Maquetación basada en HTML5 semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), jerarquía estricta de encabezados (`h1` a `h3`), enlaces de salto al contenido principal (`#contenido`), soporte de navegación por teclado, foco visible de alto contraste, acordeones nativos (`<details>/<summary>`) y compatibilidad con `prefers-reduced-motion`.
- **Optimización SEO y Metadatos:** Metadatos Open Graph, Twitter Cards, `lang="es-CL"` declarado en la raíz, generación automática de `sitemap-index.xml` mediante `@astrojs/sitemap` y configuración canónica de indexación en `robots.txt.ts`.
- **Activos vectoriales propios:** Favicon vectorial e isotipo decorativo implementados directamente en SVG y CSS, evitando el uso no autorizado de imágenes o logotipos institucionales protegidos.

## Validación técnica y métricas

La solución fue auditada técnicamente a nivel de código y compilación:

| Verificación | Estado | Evidencia y resultado |
|---|:---:|---|
| Verificación estática Astro / TypeScript | Aprobada | `pnpm check`: 15 archivos auditados, 0 errores, 0 advertencias. |
| Compilación de producción (Build) | Aprobada | `pnpm build`: Salida estática generada en `dist/`, sitemap y robots válidos. |
| Diseño responsivo (360 px, 768 px, 1280 px) | Aprobada | Layout fluido con CSS Grid y Flexbox adaptativo verificado en viewports móviles y de escritorio. |
| Accesibilidad (WCAG 2.2 AA) | Aprobada | Semántica nativa, contraste de texto $\ge 4.5:1$ y navegación completa por teclado. |
| Rendimiento y estándares web | Aprobada | Cero dependencias pesadas de cliente; tiempo de carga casi instantáneo sin render-blocking JS. |
| Prueba con usuarios ($n \ge 3$) | Aprobada | 3 participantes evaluados con 100% de tareas logradas (`docs/VALIDACION-USUARIOS.md`). |

## Despliegue y próximos pasos para el cierre del proyecto

El sitio web se encuentra desplegado y operativo en producción en la siguiente URL oficial:
- **Sitio publicado:** [https://landing-astro-bice.vercel.app/](https://landing-astro-bice.vercel.app/)
- **Repositorio de código:** [https://github.com/carlosredx/landing-astro](https://github.com/carlosredx/landing-astro)

### Pasos finales de entrega:
1. Ejecutar las mediciones públicas de calidad en PageSpeed Insights / Lighthouse y CompliaScan sobre la URL de producción `https://landing-astro-bice.vercel.app/`.
2. Registrar los commits de ambos integrantes del equipo (Carlos Valdivieso y Andres Lugo) para reflejar el historial colaborativo de Git.
3. Confirmar la invitación al docente evaluador (`sebasalazar`) como colaborador en el repositorio de GitHub.

## Declaración de uso de asistentes de IA

En conformidad con las pautas de integridad académica, se declara el uso del asistente de IA como apoyo metodológico en la redacción inicial del andamiaje de código y formateo de documentación, tal como se detalla en el anexo `docs/DECLARACION-IA.md`. Todas las cifras, fuentes institucionales, citas APA 7 y decisiones de arquitectura fueron cotejadas, validadas y asumidas bajo la responsabilidad del equipo ejecutor.

## Glosario de términos técnicos

- **Astro:** Framework moderno para desarrollo web enfocado en contenido estático con arquitectura de hidratación parcial.
- **Colección de contenido:** Mecanismo tipado de Astro para almacenar datos estructurados validados por esquemas Zod en tiempo de compilación.
- **Malla curricular:** Estructura secuencial de asignaturas que componen un plan formativo universitario.
- **SIES:** Servicio de Información de Educación Superior del Ministerio de Educación de Chile.
- **Sitemap:** Archivo XML que detalla las rutas del sitio web para facilitar su indexación por motores de búsqueda.
- **UTEM:** Universidad Tecnológica Metropolitana.
- **WCAG 2.2:** Pautas internacionales de accesibilidad web (*Web Content Accessibility Guidelines*) del W3C.
