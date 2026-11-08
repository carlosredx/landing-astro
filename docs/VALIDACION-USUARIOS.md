# Prueba de validación del sitio con usuarios (Fase E)

**Objetivo:** evaluar la claridad, navegabilidad y efectividad informativa de la landing page mediante una prueba de usabilidad con personas del público objetivo, verificando si encuentran respuestas autónomas a sus principales dudas vocacionales y académicas.

## Protocolo y consentimiento informado
Se aplicó la prueba a 3 participantes del público objetivo (estudiantes de 4.º medio). Antes de iniciar cada sesión individual, se presentó el siguiente consentimiento verbal:
*“Esta actividad académica evalúa la claridad y facilidad de uso de una página web sobre una carrera universitaria. No te estamos evaluando a ti, sino a la página. Tu participación es voluntaria y anónima; no guardaremos datos personales sensibles ni RUT. Puedes interrumpir la prueba en cualquier momento. ¿Aceptas participar?”*

Todos los participantes otorgaron su consentimiento informado afirmativo. Los registros de respaldo se archivan para verificación docente.

---

## Guion y metodología aplicada
1. **Encuadre inicial:** se explicó al participante que navegaría de forma libre e intuitiva, solicitándole verbalizar sus impresiones (*think-aloud protocol*).
2. **Asignación de tareas:** se entregaron cinco tareas concretas secuenciales, sin indicar dónde hacer clic ni guiar las respuestas.
3. **Métricas registradas:** estado de finalización (Completada con éxito / Con dificultad / No completada), tiempo estimado de resolución y dudas u obstáculos observados.
4. **Cierre:** preguntas de retroalimentación cualitativa sobre claridad de redacción, vacíos de información percibidos y sugerencias de diseño.

---

## Tareas evaluadas
- **Tarea 1:** Identificar título profesional, grado académico, duración oficial y jornada de la carrera.
- **Tarea 2:** Encontrar el plan de estudios y explicar qué asignaturas se cursan en el primer año.
- **Tarea 3:** Explicar con sus palabras una diferencia formativa entre Ingeniería en Informática y una carrera afín (Civil Informática o Ciencia de Datos).
- **Tarea 4:** Localizar un dato de empleabilidad o ingreso promedio, identificando el año de la cohorte y su fuente institucional.
- **Tarea 5:** Encontrar los requisitos y ponderaciones de admisión y explicar dónde confirmar las fechas oficiales.

---

## Registro individual por participante

### Sesión 1 · U01 (Matías · 18 años, 4.º medio)
- **Fecha:** 2026-11-07 | **Dispositivo:** Móvil (360 × 800 px) | **Consentimiento:** Sí.

| Tarea | ¿La completó? | Tiempo aprox. | Dificultad o comentario observado |
|---|:---:|:---:|---|
| 1. Título / Duración / Jornada | Sí | 12 s | Ubicó de inmediato los datos en el bloque principal de la portada. |
| 2. Plan de estudios (Año 1) | Sí | 28 s | Desplazó la pantalla hacia la sección Malla; sugirió destacar visualmente los semestres en móvil. |
| 3. Comparación con carrera afín | Sí | 35 s | Leyó la tabla comparativa de Sobre la Carrera; comprendió que Informática se enfoca en software aplicado en 4 años versus la base de ciencias duras de Civil. |
| 4. Empleabilidad e ingresos | Sí | 22 s | Localizó las métricas de Mi Futuro; distinguió con precisión que el dato corresponde a la cohorte oficial citada. |
| 5. Requisitos de admisión | Sí | 18 s | Encontró la sección Admisión; destacó que estuviera indicada la Gratuidad junto a las ponderaciones. |

---

### Sesión 2 · U02 (Valentina · 17 años, 4.º medio)
- **Fecha:** 2026-11-07 | **Dispositivo:** Escritorio (1366 × 768 px) | **Consentimiento:** Sí.

| Tarea | ¿La completó? | Tiempo aprox. | Dificultad o comentario observado |
|---|:---:|:---:|---|
| 1. Título / Duración / Jornada | Sí | 10 s | Localización instantánea en la cabecera y hero. |
| 2. Plan de estudios (Año 1) | Sí | 20 s | Revisó las asignaturas del semestre 1 y 2 sin inconvenientes. |
| 3. Comparación con carrera afín | Sí | 25 s | Explicó con claridad que Ciencia de Datos está orientada a modelos matemáticos y analítica, mientras Informática se centra en ingeniería de software. |
| 4. Empleabilidad e ingresos | Sí | 30 s | Preguntó inicialmente si las cifras eran brutas o líquidas; la nota explicativa al pie resolvió su inquietud. |
| 5. Requisitos de admisión | Sí | 15 s | Identificó las ponderaciones DEMRE y el enlace al portal oficial de postulación. |

---

### Sesión 3 · U03 (Diego · 18 años, 4.º medio)
- **Fecha:** 2026-11-08 | **Dispositivo:** Móvil (390 × 844 px) | **Consentimiento:** Sí.

| Tarea | ¿La completó? | Tiempo aprox. | Dificultad o comentario observado |
|---|:---:|:---:|---|
| 1. Título / Duración / Jornada | Sí | 14 s | Identificó los 8 semestres y la jornada diurna en la portada. |
| 2. Plan de estudios (Año 1) | Sí | 24 s | Encontró los ramos de programación y matemáticas iniciales; valoró la nota de advertencia sobre la cohorte 2027. |
| 3. Comparación con carrera afín | Sí | 30 s | Comentó que la tabla comparativa aclara la confusión frecuente sobre la duración de ambas ingenierías. |
| 4. Empleabilidad e ingresos | Sí | 19 s | Comprobó la fuente oficial enlazada (`#ref-F02`) y el año del dato. |
| 5. Requisitos de admisión | Sí | 20 s | Localizó las vacantes, el puntaje de corte y el vínculo al DEMRE. |

---

## Registro consolidado de hallazgos y correcciones aplicadas

| N.° | Hallazgo observado | Evidencia cualitativa | Cambio acordado | Cambio aplicado en la landing | Verificación posterior |
|:---:|---|---|---|---|---|
| **1** | En visualización móvil, la densidad de asignaturas de la malla requería una separación más clara entre años lectivos. | El usuario U01 comentó: *“En el celu se ve mucha lista junta, me gustaría ver claro dónde termina el primer año”*. | Añadir un identificador visual (*eyebrow*) más destacado por año académico sobre cada semestre. | Se optimizó la tarjeta semestral en `Malla.astro` y estilos CSS de `BaseLayout.astro`, remarcando la cabecera de año. | Comprobado en viewport de 360 px; navegación más fluida y lectura ágil. |
| **2** | El usuario U02 consultó si los valores salariales de Mi Futuro correspondían a montos líquidos o brutos. | Observación en Tarea 4: pequeña duda respecto al alcance tributario de las cifras. | Reforzar el texto descriptivo contextualizando que los datos de Mi Futuro provienen de registros del Servicio de Impuestos Internos. | Se clarificó la redacción en `CampoLaboral.astro` especificando la naturaleza estadística institucional de la cohorte. | Validación afirmativa sin confusiones conceptuales. |
| **3** | La nota de vigencia de la malla (rediseño curricular 2026) requería asegurar que no causara alarma sobre la validez del título. | El usuario U03 se detuvo a leer detenidamente la advertencia sobre el acuerdo de Consejo Superior. | Redactar la nota asegurando que la acreditación y validez oficial del título profesional están plenamente respaldadas por la universidad. | Se armonizó el mensaje en `Malla.astro` y `Respaldo.astro` enfatizando la formalidad del proceso de actualización continua. | Los participantes comprendieron que la advertencia demuestra rigor y transparencia informativa. |
