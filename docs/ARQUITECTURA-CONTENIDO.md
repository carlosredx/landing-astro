# Arquitectura de información

## Audiencia objetivo
La pauta define como público principal a estudiantes de 3.º y 4.º medio y sus familias; como público secundario, postulantes adultos y personas que buscan un cambio de carrera. El orden y la jerarquía de contenidos están determinados directamente por los resultados del instrumento aplicado en la Fase B (`INSTRUMENTO-AUDIENCIA.md`), asegurando que la landing page resuelva prioritariamente las dudas más frecuentes detectadas en la audiencia.

## Orden y propósito
1. **Portada (Hero):** identifica carrera, institución, grado, duración y acción principal en segundos.
2. **Sobre la carrera:** explica el área de estudio y diferencia la formación frente a dos carreras afines de la universidad.
3. **Perfil de egreso:** conecta la formación con capacidades profesionales en lenguaje claro y accesible.
4. **Malla:** ayuda a anticipar contenidos y la progresión curricular semestral.
5. **Campo laboral:** relaciona el aprendizaje con funciones reales y datos oficiales de empleo e ingresos contextualizados.
6. **Respaldo institucional:** presenta certificación, acreditación CNA y cuerpo académico con fuentes verificables.
7. **Admisión:** ubica requisitos, ponderaciones PAES, vacantes y enlaces oficiales cerca del cierre de decisión.
8. **Preguntas frecuentes:** resume y responde directamente las dudas detectadas en el análisis de audiencia, organizadas por orden de frecuencia observada.
9. **Referencias:** lista completa en formato APA 7 que permite auditar y verificar cada dato publicado en el sitio.

## Trazabilidad sección → fuentes
| Sección | Fuentes |
|---|---|
| Portada | F01 |
| Sobre la carrera y comparación | F01, F04, F05 |
| Perfil de egreso | F01 |
| Plan de estudios | F01; F03 y F09 para advertencia de vigencia |
| Campo laboral | F01, F02 |
| Respaldo institucional | F06, F07, F10, F12, F13 |
| Admisión | F02, F11 |
| Preguntas frecuentes | F01-F07 |
| Referencias | F01-F13 |

## Wireframes
- `wireframes/movil.svg`
- `wireframes/escritorio.svg`

Son bocetos estructurales que definen la jerarquía de bloques y la disposición visual antes del desarrollo.

## Matriz de necesidades de audiencia y arquitectura

Esta síntesis vincula directamente las necesidades detectadas en el levantamiento de audiencia con las secciones de la arquitectura web, justificando el orden y contenido del sitio.

| Necesidad detectada | Frecuencia observada | Sección relacionada | Respuesta implementada en la landing |
|---|:---:|---|---|
| Conocer malla, asignaturas, duración y contenidos | 5/5 | Malla | Presenta la malla oficial por semestres, incorporando de forma explícita la advertencia de vigencia para la cohorte 2027 según acuerdos institucionales. |
| Explorar trabajos, funciones y oportunidades | 5/5 | Campo laboral | Detalla funciones del perfil y cifras oficiales contextualizadas de empleabilidad e ingresos (Mi Futuro/SIES). |
| Revisar admisión y financiamiento | 5/5 | Admisión | Informa ponderaciones PAES, requisitos oficiales de ingreso, vacantes y adscripción a Gratuidad. |
| Entender dificultad y conocimientos previos | 4/5 | Preguntas frecuentes | Responde en lenguaje claro la transición desde la enseñanza media y los requisitos de nivelación inicial. |
| Conocer diferenciación de carrera y proyectos | 4/5 | Sobre la carrera / Malla | Establece un cuadro comparativo verificable con carreras afines (Civil en Computación y Ciencia de Datos) y áreas de formación práctica. |

La arquitectura de información queda validada y justificada a partir de los datos consolidados en la Fase B, garantizando una navegación intuitiva y orientada a la toma de decisiones informada del postulante.