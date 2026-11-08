# Proyecto web: Ingeniería en Informática UTEM

## Descripción

Sitio web informativo de una sola página sobre la carrera de Ingeniería en Informática de la Universidad Tecnológica Metropolitana (UTEM). El proyecto organiza información académica y de admisión para que las personas interesadas puedan conocer la carrera, revisar sus fuentes y continuar su investigación en los canales oficiales.

La página incluye descripción y perfil de egreso, comparación con carreras afines de la UTEM, malla publicada por la universidad, campo laboral, indicadores de empleo e ingresos, certificación y acreditación institucional, admisión 2027, preguntas frecuentes y referencias.

## Identificación del proyecto

- **Institución:** Universidad Tecnológica Metropolitana (UTEM).
- **Carrera:** Ingeniería en Informática.
- **Cliente institucional definido en la pauta:** Dirección de Escuela.
- **Equipo:** Carlos Valdivieso y Andres Lugo.
- **Público principal:** estudiantes de 3.º y 4.º medio y sus familias.
- **Público secundario:** personas adultas que evalúan ingresar, retomar estudios o cambiarse de carrera.

## Objetivo

Diseñar y desarrollar una página clara, adaptable y verificable que ayude a las personas interesadas a entender qué se estudia en Ingeniería en Informática UTEM, cómo se relaciona con carreras cercanas, qué información oficial existe sobre admisión y campo laboral, y dónde comprobar cada dato.

## Alcance y requisitos del proyecto

La propuesta académica organiza el trabajo en cinco fases. Los resultados de investigación y evaluación con personas deben completarse con datos reales del equipo.

### Fase A — Levantamiento y evaluación de fuentes

La matriz evalúa 13 fuentes principalmente primarias según autoridad, vigencia, trazabilidad, objetividad y pertinencia. Cada dato publicado debe poder rastrearse a una fuente y mostrar fecha, cohorte o contexto cuando corresponda. Se priorizan UTEM, el Ministerio de Educación, SIES y CNA.

**Entregable:** [`docs/MATRIZ-FUENTES.md`](docs/MATRIZ-FUENTES.md).

**Hallazgo de vigencia:** la ficha pública de la carrera consultada en noviembre de 2026 muestra una malla de ocho semestres; el Consejo Superior aprobó un rediseño en 2026. La aplicación de la malla visible a la cohorte de Admisión 2027 requiere confirmación institucional. Por eso el sitio la identifica como la malla publicada y advierte que se debe verificar su vigencia.

### Fase B — Investigación de audiencia

La pauta requiere consultar al menos a cinco personas del público objetivo, con consentimiento informado. Las respuestas se registran de manera anónima y se usan para resumir las dudas más frecuentes, elaborar el perfil de usuario y ajustar la prioridad del contenido.

**Instrumento y registro:** [`docs/INSTRUMENTO-AUDIENCIA.md`](docs/INSTRUMENTO-AUDIENCIA.md) y [`docs/respuestas-audiencia.csv`](docs/respuestas-audiencia.csv).

**Estado:** el instrumento está preparado; falta aplicarlo. La jerarquía actual de preguntas frecuentes es provisional y no representa resultados de encuesta.

### Fase C — Arquitectura de información

El contenido sigue el recorrido de una persona interesada: identificar la carrera, comprender su perfil y plan de estudios, explorar campo laboral y respaldo, revisar admisión y verificar las fuentes. La arquitectura vincula cada sección con las preguntas que responde y con las fuentes correspondientes.

**Entregables:** [`docs/ARQUITECTURA-CONTENIDO.md`](docs/ARQUITECTURA-CONTENIDO.md) y wireframes de baja fidelidad en [`docs/wireframes/`](docs/wireframes/).

### Fase D — Redacción y desarrollo

Los textos usan lenguaje claro, explican siglas y contextualizan cifras. La comparación distingue los perfiles publicados por UTEM y no declara una carrera superior a otra. El sitio separa la información institucional de la interpretación editorial del equipo.

**Entregable:** sitio Astro implementado en `src/`.

### Fase E — Prueba y evaluación con usuarios

La pauta requiere probar el sitio con al menos tres personas usando tareas definidas, registrar si se completan, anotar dudas o dificultades, aplicar mejoras y comprobar los cambios.

**Instrumento y registro:** [`docs/VALIDACION-USUARIOS.md`](docs/VALIDACION-USUARIOS.md) y [`docs/validacion-resultados.csv`](docs/validacion-resultados.csv).

**Estado:** guion y hoja de registro preparados; la prueba debe ejecutarse con personas reales. No se presentan resultados simulados.

## Criterios de evaluación de la pauta

La planificación y validación del contenido representan el 50 %, la implementación el 30 % y el informe y coevaluación el 20 %. Por ese motivo, el proyecto incluye instrumentos, matrices y registros, además del sitio. La documentación preparada no reemplaza la evidencia de encuesta, prueba ni coevaluación que deba producir el equipo.

## Características del sitio

- Diseño adaptable para móvil, tableta y escritorio.
- Navegación por secciones y enlace para saltar al contenido.
- HTML semántico, foco visible, acordeones nativos y respeto por la preferencia de movimiento reducido.
- Referencias enlazadas para verificar las afirmaciones.
- Colecciones de contenido validadas para preguntas frecuentes, malla y fuentes.
- Metadatos básicos para buscadores, sitemap y `robots.txt`.
- Maquetación visual realizada con CSS y un favicon vectorial propio.

## Tecnologías y comandos

El sitio está construido con Astro y TypeScript, y usa pnpm para administrar dependencias. Se requiere Node.js 24 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

Astro mostrará en la terminal la dirección local para abrir el sitio. Para terminar el servidor, presiona `Ctrl+C`.

Comprobación de tipos y generación de la versión estática:

```bash
pnpm check
pnpm build
```

Los archivos generados para publicar quedan en `dist/`. La comprobación técnica local registrada en este proyecto terminó con 15 archivos, 0 errores, 0 advertencias y 0 pistas. Revisa [`INFORME.md`](INFORME.md) para conocer las verificaciones que faltan.

## Organización de archivos

- `src/pages/index.astro`: ensambla la página.
- `src/components/`: componentes de contenido por sección.
- `src/layouts/BaseLayout.astro`: estructura general, estilos y metadatos.
- `src/content.config.ts`: esquemas de validación de contenido.
- `src/content/faq/`: preguntas frecuentes.
- `src/content/malla/`: asignaturas por semestre según la ficha consultada.
- `src/content/referencias/`: fichas de fuentes citadas.
- `src/pages/robots.txt.ts`: genera `robots.txt` con la dirección del sitemap.
- `docs/`: instrumentos, documentación, registros y wireframes del proyecto.
- `INFORME.md`: desarrollo de la propuesta, decisiones, validación y pendientes.
- `PLANIFICACION.md`: fases, arquitectura y trazabilidad.
- `YO.md`: guía personal para iniciar el repositorio Git local y correr el sitio.

## Pendientes para cerrar la entrega académica

1. Confirmar con UTEM qué malla corresponde a la cohorte de Admisión 2027.
2. Aplicar el instrumento de audiencia a cinco o más personas y actualizar el contenido con esos resultados.
3. Probar el sitio con al menos tres personas, registrar hallazgos y hacer las mejoras necesarias.
4. Completar la coevaluación y los demás antecedentes que solicite el docente.
5. Revisar la página en 360, 768 y 1280 px.
6. Cuando el sitio esté desplegado, reemplazar `https://example.com` en `astro.config.ts` por el dominio definitivo y ejecutar las mediciones públicas indicadas por la pauta, incluyendo Lighthouse y CompliaScan.

Las tareas de encuesta, pruebas, confirmación académica y coevaluación requieren participación del equipo; este repositorio no inventa esos resultados.

## Documentación relacionada

- [`INFORME.md`](INFORME.md): informe del proyecto.
- [`PLANIFICACION.md`](PLANIFICACION.md): organización de fases y entregables.
- [`docs/MATRIZ-FUENTES.md`](docs/MATRIZ-FUENTES.md): evaluación de fuentes.
- [`docs/INSTRUMENTO-AUDIENCIA.md`](docs/INSTRUMENTO-AUDIENCIA.md): cuestionario y registro de audiencia.
- [`docs/VALIDACION-USUARIOS.md`](docs/VALIDACION-USUARIOS.md): tareas y evaluación de usabilidad.
- [`docs/DECLARACION-IA.md`](docs/DECLARACION-IA.md): declaración de uso de IA, para revisión del equipo.