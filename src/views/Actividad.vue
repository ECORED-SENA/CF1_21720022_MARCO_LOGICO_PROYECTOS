<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Manejo de los residuos sólidos en la producción avícola.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo del Marco Lógico de Proyectos?',
          imagen: require('@/assets/curso/img1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Describir detalladamente todos los recursos del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar y analizar los problemas y objetivos del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proveer financiamiento para el proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Seleccionar el equipo de trabajo para el proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento del Marco Lógico se utiliza para visualizar las causas y efectos de un problema?',
          imagen: require('@/assets/curso/img2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Matriz de Evaluación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Árbol de Problemas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Plan de Contingencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estrategia de Mitigación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto:
            'En el análisis de involucrados, ¿qué aspecto es esencial identificar?',
          imagen: require('@/assets/curso/img3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los recursos financieros disponibles.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'La duración del proyecto.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Los intereses y problemas percibidos por los grupos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La tecnología necesaria para el proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el propósito principal de un árbol de problemas en el Marco Lógico?',
          imagen: require('@/assets/curso/img4.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignar tareas a los miembros del equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluar el impacto financiero del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Visualizar de manera estructurada las causas y efectos de un problema central.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar el cronograma del proyecto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué se debe hacer después de identificar el problema central en el árbol de problemas?',
          imagen: require('@/assets/curso/img1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir los objetivos del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Asignar los recursos necesarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Construir el árbol de objetivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Realizar un análisis de riesgos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes NO es un componente del Marco Lógico?',
          imagen: require('@/assets/curso/img2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Objetivos del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Indicadores de éxito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluación de desempeño del personal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Actividades necesarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué es una matriz de marco lógico?',
          imagen: require('@/assets/curso/img3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una herramienta para evaluar el desempeño financiero del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una tabla que resume los objetivos, indicadores, medios de verificación y supuestos del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un documento que detalla los antecedentes del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un diagrama que muestra el cronograma del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué debe incluirse en la columna de indicadores de una matriz de marco lógico?',
          imagen: require('@/assets/curso/img4.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los costos estimados del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los medios para verificar el cumplimiento de los objetivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Las actividades específicas para alcanzar los objetivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las posibles barreras para el proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cuál es la función de los supuestos en el Marco Lógico?',
          imagen: require('@/assets/curso/img1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Detallar el presupuesto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar los posibles riesgos y factores externos que pueden influir en el éxito del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Asignar responsabilidades dentro del equipo del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Describir las actividades diarias del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué debe hacerse si se identifican riesgos significativos en los supuestos del Marco Lógico?',
          imagen: require('@/assets/curso/img2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar los riesgos y continuar con la planificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Modificar los objetivos del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Desarrollar estrategias de mitigación y planes de contingencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reasignar los recursos del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'Te sugerimos revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Has completado el cuestionario exitosamente! Felicidades.',
      mensaje_final_reprobado:
        'No has alcanzado la puntuación mínima para aprobar. Te animamos a intentarlo de nuevo.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
