# Proyecto web de Ingeniería en Informática UTEM

## Enlaces principales

**[Abrir la landing pública en Vercel](https://landing-astro-bice.vercel.app/)**

[Repositorio público en GitHub](https://github.com/carlosredx/landing-astro)

## Identificación

- **Asignatura:** EFE685 — Electivo de Computación Móvil.
- **Institución y carrera:** Universidad Tecnológica Metropolitana (UTEM), Ingeniería en Informática.
- **Cliente ficticio:** Dirección de Escuela.
- **Equipo:**
  - Carlos Andrés Valdivieso Guzmán (`cvaldiviesog@utem.cl`)
  - Andrés Jesús Lugo Briceño (`alugo@utem.cl`)
- **Público principal:** estudiantes de 3.º y 4.º medio y sus familias.
- **Público secundario:** personas adultas que consideran ingresar, retomar estudios o cambiar de carrera.
- **Fecha de entrega indicada en la pauta:** 13 de noviembre de 2026.

## Propósito

La landing presenta información verificable para ayudar a postulantes a entender la carrera, su perfil de egreso, plan de estudios, campo laboral, respaldo institucional y proceso de admisión. Cada afirmación comprobable debe enlazar a una fuente vigente, con fecha o cohorte cuando corresponda. El sitio evita afirmaciones promocionales sin respaldo y distingue los datos institucionales de la interpretación del equipo.

## Requisitos de la pauta y estado del proyecto

La nota se distribuye en planificación y validación de contenido (50 %), implementación (30 %), informe (15 %) y coevaluación (5 %). La tabla registra qué está preparado y qué exige evidencia del equipo antes de la entrega.

| Fase o requisito | Exigencia de la pauta | Estado y evidencia |
|---|---|---|
| **A. Fuentes — 15 %** | Al menos 8 fuentes, con mayoría primarias; referencia APA 7, tipo, fechas, evaluación de autoridad, vigencia, trazabilidad, objetividad y pertinencia, y uso en el sitio. | Matriz de 13 fuentes en [`docs/MATRIZ-FUENTES.md`](docs/MATRIZ-FUENTES.md). Antes de entregar, confirmar que los cinco criterios queden expresados para cada fuente como cumple/no cumple, con su justificación. |
| **B. Audiencia — 10 %** | Encuesta de 5–8 preguntas o entrevistas a 5 o más personas; consentimiento; perfil de usuario basado en respuestas y preguntas priorizadas por frecuencia. | Instrumento de ocho preguntas: [`docs/INSTRUMENTO-AUDIENCIA.md`](docs/INSTRUMENTO-AUDIENCIA.md), que ahora incluye un escenario sintético para prototipado. El CSV [`docs/respuestas-audiencia.csv`](docs/respuestas-audiencia.csv) conserva solo encabezados: 0 respuestas reales registradas. Los conteos simulados no son evidencia de la Fase B. |
| **C. Arquitectura — 10 %** | Orden de secciones justificado con hallazgos de audiencia; wireframes para móvil y escritorio; trazabilidad sección → fuente. | Mapa, fuentes y wireframes en [`docs/ARQUITECTURA-CONTENIDO.md`](docs/ARQUITECTURA-CONTENIDO.md) y [`docs/wireframes/`](docs/wireframes/). La justificación del orden es inicial hasta contrastarla con respuestas reales. |
| **D. Redacción — 10 %** | Lenguaje claro; siglas explicadas; cifras con año y cita enlazada; distinguir datos, interpretación y testimonios; textos alternativos descriptivos si se usan imágenes. | Contenido implementado en el sitio y referencias enlazadas. La prioridad de FAQ debe basarse en la Fase B. Confirmar los créditos SCT con una fuente oficial antes de incorporarlos a la malla. |
| **E. Validación — 5 %** | Prueba con 3 o más personas del público objetivo; tareas concretas, consentimiento, hallazgos, correcciones y resultados. | Guion y cinco tareas en [`docs/VALIDACION-USUARIOS.md`](docs/VALIDACION-USUARIOS.md). El CSV [`docs/validacion-resultados.csv`](docs/validacion-resultados.csv) contiene solo encabezados: 0 sesiones registradas. |
| **Informe — 15 %** | Informe autocontenido y dirigido a público no técnico; explicar por qué se eligieron el contenido y las decisiones de implementación; incluir anexos y declaración de IA. | [`INFORME.md`](INFORME.md) y [`docs/DECLARACION-IA.md`](docs/DECLARACION-IA.md) están preparados. Completar perfil, prioridades, resultados, correcciones, coevaluación y el registro real de herramientas, instrucciones y cambios de IA. |
| **Implementación Astro — 15 %** | Astro estable; Node.js 24 LTS o superior; TypeScript estricto; componentes y layout reutilizables; colecciones tipadas para malla, campo laboral, FAQ y referencias; build que falle si el esquema no se cumple; JavaScript mínimo. | El proyecto usa Astro, TypeScript estricto y colecciones tipadas para malla, FAQ y referencias. El contenido de campo laboral aún está dentro del componente y debe trasladarse a una colección tipada. La isla interactiva se valora si está justificada, pero no es obligatoria. |
| **Accesibilidad y rendimiento — 10 %** | Diseño responsive probado a 360, 768 y 1280 px; WCAG 2.2 AA; CompliaScan ≥ 90/100; Lighthouse ≥ 90 en Rendimiento, Accesibilidad, Buenas prácticas y SEO. | La estructura incluye navegación por teclado, HTML semántico y estilos adaptables. Falta guardar capturas y resultados reales de las medidas, y corregir cualquier hallazgo. |
| **Publicación, repositorio y README — 5 %** | Sitio público operativo; repositorio Git con aportes de ambos integrantes, mensajes descriptivos y rama principal estable; agregar al profesor `sebasalazar`; README para personal no técnico. | Sitio desplegado en Vercel y repo público en GitHub. Confirmar la invitación al profesor y commits auténticos de ambos integrantes. Este README explica el proyecto y cómo ejecutarlo y actualizarlo. |
| **Coevaluación — 5 %** | Aporte equilibrado y evaluación de los integrantes según la pauta. | Completar y entregar según el mecanismo que indique el profesor. |


### Preguntas del instrumento de audiencia

1. ¿Qué te gustaría saber antes de considerar Ingeniería en Informática?
2. ¿Qué te genera más duda sobre la carrera o la vida universitaria?
3. ¿Qué información te ayudaría a distinguirla de otras carreras de computación o tecnología?
4. ¿Qué necesitas saber del plan de estudios para decidir?
5. ¿Qué te gustaría conocer sobre trabajos posibles después de titularte?
6. ¿Qué necesitas saber sobre admisión, requisitos, costos o beneficios?
7. ¿Qué podría impedirte postular o hacerte dudar?
8. ¿Por qué canal buscarías primero esta información?

Las respuestas y el perfil se incorporan después de consultar a cinco o más personas reales del público objetivo. Se usan códigos anónimos; los consentimientos se guardan fuera del repositorio público.
## Alcance y vigencia de la malla UTEM

La ficha pública consultada en noviembre de 2026 muestra una malla de ocho semestres, pero UTEM aprobó un rediseño de Ingeniería en Informática durante 2026. La aplicación de la malla y sus créditos a la cohorte 2027 debe confirmarse en una fuente institucional antes de presentarlos como definitivos. El sitio identifica la malla como la publicada en la ficha consultada y mantiene esta advertencia.

## Tecnologías y ejecución local

El sitio usa Astro, TypeScript, colecciones de contenido y pnpm. Se requiere Node.js 24 o superior y Git para el control de versiones.

Desde PowerShell, abrir la carpeta del proyecto e instalar las dependencias:

```powershell
pnpm install
pnpm dev
```

Astro muestra la dirección local en la terminal, normalmente `http://localhost:4321/`. Para detener el servidor, presionar `Ctrl+C`.

Para revisar los tipos y generar los archivos estáticos:

```powershell
pnpm check
pnpm build
```

La carpeta de salida es `dist/`. La compilación técnica registrada anteriormente terminó sin errores, advertencias ni pistas; las verificaciones de métricas y usuarios se registran por separado en el informe.

## Actualizar la información

- **Preguntas frecuentes:** editar los archivos Markdown en `src/content/faq/`. Ajustar preguntas y prioridad después de analizar la encuesta real.
- **Malla:** editar los archivos Markdown en `src/content/malla/`; respetar la fuente y la advertencia de vigencia.
- **Fuentes:** editar las referencias Markdown en `src/content/referencias/` y sincronizar los cambios en la matriz y en el informe.
- **Secciones del sitio:** componentes en `src/components/`; cada dato verificable debe mantener su referencia.
- **Estilos, metadatos y dominio:** `src/layouts/BaseLayout.astro` y `astro.config.ts`.
- **Registro de audiencias y validación:** completar los CSV con respuestas y resultados auténticos. No inventar participantes, respuestas, consentimientos ni métricas.

La ruta de los datos y los esquemas se documentan en `src/content.config.ts`. Si un archivo no cumple su esquema, `pnpm check` o el build deben reportarlo.

## Estructura principal

- `src/pages/index.astro`: compone la landing.
- `src/components/`: secciones reutilizables.
- `src/layouts/BaseLayout.astro`: estructura común, idioma y metadatos.
- `src/content.config.ts`: esquemas de las colecciones.
- `src/content/`: preguntas frecuentes, malla y referencias.
- `src/pages/robots.txt.ts`: genera `robots.txt` con la dirección del sitemap.
- `docs/`: matriz, instrumentos, registros y wireframes.
- `INFORME.md`: informe académico, decisiones y evidencias.
- `YO.md`: guía personal de Git y ejecución local.

## Privacidad e integridad académica

Usar códigos anónimos en los resultados de audiencia y pruebas. Los consentimientos se conservan para revisión docente y no se publican en el repositorio. Los RUT u otros identificadores personales tampoco se incluyen en la versión pública; entregar esos datos al profesor por un canal institucional privado si los solicita. Los hallazgos, métricas y créditos académicos deben proceder de registros y fuentes reales.

## Documentos del proyecto

- [`INFORME.md`](INFORME.md): informe y estado de validación.
- [`docs/MATRIZ-FUENTES.md`](docs/MATRIZ-FUENTES.md): evaluación de fuentes.
- [`docs/INSTRUMENTO-AUDIENCIA.md`](docs/INSTRUMENTO-AUDIENCIA.md): preguntas y consentimiento.
- [`docs/VALIDACION-USUARIOS.md`](docs/VALIDACION-USUARIOS.md): tareas de evaluación.
- [`docs/DECLARACION-IA.md`](docs/DECLARACION-IA.md): registro del uso de IA.
