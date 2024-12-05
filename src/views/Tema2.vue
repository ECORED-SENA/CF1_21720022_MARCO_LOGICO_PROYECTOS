<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Árbol de problemas
    p.mb-4(data-aos="fade-right") Habiendo realizado ya el análisis de involucrados, es momento de continuar con el siguiente paso en la etapa de identificación y análisis. Este es: el árbol de problemas.
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-4.bg-c3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img1.svg', style='width: 80px', alt='').m-auto
                .col
                  p.mb-0 "La participación de los involucrados en el diseño, formulación y gestión del proyecto se comienza a evidenciar durante el análisis de problemas; más específicamente durante la construcción del árbol de problemas". (CRC, 2007, p. 16).
        p.mb-0 El árbol de problemas es una herramienta fundamental en la metodología de marco lógico utilizada para identificar y analizar los problemas en el contexto de un proyecto. Su propósito es visualizar de manera estructurada las causas y efectos de un problema central, facilitando así la comprensión y el abordaje de la situación problemática.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', style='width: 390px', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 2.] Árbol de problemas 
        .row
          .col-12
            .p-4.bg-c9(data-aos="fade-down")
              figure
                img(src='@/assets/curso/tema2/img2.svg', style='width: 500px', alt='Árbol de problemas que representa la relación entre causas, problema y efectos. Las raíces del árbol indican las causas, el tronco representa el problema y las ramas junto con el follaje ilustran los efectos.').m-auto
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .px-4.py-3.bg-c10
          h3.mb-0 ¿Qué se logra con el árbol de problemas?
    .row.bg-c11.mb-5
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-11.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c7
                figure.mb-4
                  img(src='@/assets/curso/tema2/img3.svg', style='width: 120px', alt='').m-auto
                p.mb-0 #[b Analizar] la situación existente en relación con la problemática identificada por cada grupo en el análisis de involucrados.
            .col-11.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
              .p-4.bg-c7
                figure.mb-4
                  img(src='@/assets/curso/tema2/img4.svg', style='width: 120px', alt='').m-auto
                p #[b Identificar:]
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle
                    |
                    p.mb-0 Los problemas principales.
                  li.d-flex
                    i.fas.fa-check-circle
                    |
                    p.mb-0 Sus relaciones de causa-efecto.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle
                    |
                    p.mb-0 Las interrelaciones entre los problemas.
            .col-11.col-md-8.col-lg-4(data-aos="fade-left")
              .p-4.bg-c7
                figure.mb-4
                  img(src='@/assets/curso/tema2/img4.svg', style='width: 120px', alt='').m-auto
                p.mb-0 #[b Organizar] las relaciones encontradas en un diagrama, que consta de raíces (causas), tronco (problema principal) y ramas (efectos); de tal forma se facilita la comprensión y la visualización por parte de los grupos de sus aportes a la construcción del proyecto.
          .row.mb-4(data-aos="fade-down")
            .col-auto
              .row.align-items-center
                .col-auto(style="z-index: 2")
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', style="width:60px" alt='').m-auto
                .col.fig-p1(style="z-index: 1")
                  .px-5.py-2.bg-c5
                    h3.mb-0 Procedimiento
          .row.align-items-center.mb-5
            .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
              p.mb-0 El procedimiento para construir un árbol de problemas es esencial para identificar y analizar de manera estructurada los problemas que afectan un proyecto. Este proceso involucra la participación activa de los grupos de interés, facilitando la identificación de las causas y efectos del problema central. A través de sesiones colaborativas y metodológicas, se busca entender a fondo la problemática y preparar el camino para el diseño de soluciones efectivas.
            .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img6.svg', style='width: 280px', alt='').m-auto
          .row.align-items-center.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c12
                .row.align-items-center
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img7.svg', style='width: 400px', alt='').m-auto
                  .col-lg-7
                    p.fs-5.txt-c1 Construcción del Árbol de Problemas
                    p.text-white A través de sesiones colaborativas y metodológicas, se busca entender a fondo la problemática y preparar el camino para el diseño de soluciones efectivas.
                    TarjetaAudio.color-primario.mb-3(
                      texto="Construcción del árbol de problemas"
                      :audio="require('@/assets/curso/tema2/audio1.wav')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img3.png', style='width: 420px', alt='').m-auto
          p.mb-0(data-aos="fade-right") La incorporación de tips y recomendaciones prácticas es crucial para asegurar que los proyectos sean sostenibles y exitosos. Estos consejos prácticos abordan aspectos clave como la identificación y análisis de involucrados, la construcción del árbol de problemas, y la planificación estratégica basada en las realidades locales:
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img4.png', style='width: 420px', alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        .row
          .col-12
            .p-3.bg-c13
              p.mb-0 #[b Tips y recomendaciones]
          .col-12
            .p-3.bg-c14
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle
                  |
                  p.mb-0 Escriba un problema por tarjeta.
                li.d-flex
                  i.fas.fa-check-circle
                  |
                  p.mb-0 Utilice un máximo de 10 palabras para formular cada enunciado; no es necesario brindar explicación al problema enunciado.
                li.d-flex
                  i.fas.fa-check-circle
                  |
                  p.mb-0 Centre el análisis en el problema principal.
                li.d-flex
                  i.fas.fa-check-circle
                  |
                  p.mb-0 Identifique únicamente los problemas existentes, no los posibles o potenciales.
                li.d-flex
                  i.fas.fa-check-circle
                  |
                  p.mb-0 Formule los problemas, no como la ausencia de una solución, sino como un estado existente negativo.
              .row
                .col-12
                  .p-3.bg-c15
                    p #[b Ejemplo:]
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-times(style="color: #F92F60")
                        |
                        p.mb-0 No hay pesticidas.
                      li.d-flex.mb-0
                        i.fas.fa-check(style="color: #00D26A")
                        |
                        p.mb-0 La cosecha está destruida por plagas.
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema1/img3.svg', style="width:60px" alt='').m-auto
          .col.fig-p1(style="z-index: 1")
            .px-5.py-2.bg-c5
              h3.mb-0 Raíces
    .row.mb-5
      .col-12(data-aos="fade-right")
        .p-4.bg-c16
          .row.align-items-center
            .col-lg-10.mb-4.mb-lg-0
              p.mb-0 Las raíces son los problemas que, después de análisis entre los participantes, se encontró que eran causas del problema principal. Las causas más directas del problema serán raíces principales o primarias y las causas más indirectas serán las raíces secundarias o más profundas. Así entonces, después del análisis con sus grupos en el norte caldense, se encontraron las siguientes:
            .col-lg-2
              figure
                img(src='@/assets/curso/tema2/img8.svg', style='width: 200px', alt='').m-auto
      .col-12(data-aos="fade-left")
        .p-4.bg-c17
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            p.mb-0 #[b Figura 3.] Raíces del árbol
          .row
            .col-12
              .p-4
                figure.d-none.d-lg-block
                  img(src='@/assets/curso/tema2/img9.svg', style='width: 1000px', alt='La figura Raíces del árbol, causas del problema. Principales: producción no sustentable, suelos deteriorados, comunidad desorganizada. Secundarias: poca conservación, cultura organizacional deficiente, producción orgánica baja, gestión en recuperación deficiente, bajo sentido de pertenencia, distribución de tierra inadecuada.').m-auto
                figure.d-block.d-lg-none
                  img(src='@/assets/curso/tema2/img9m.svg', style='width: 350px', alt='La figura Raíces del árbol, causas del problema. Principales: producción no sustentable, suelos deteriorados, comunidad desorganizada. Secundarias: poca conservación, cultura organizacional deficiente, producción orgánica baja, gestión en recuperación deficiente, bajo sentido de pertenencia, distribución de tierra inadecuada.').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema1/img3.svg', style="width:60px" alt='').m-auto
          .col.fig-p1(style="z-index: 1")
            .px-5.py-2.bg-c5
              h3.mb-0 Tronco
    .row.align-items-center.mb-5
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Es el problema central del cual surgen todos los demás, las causas y los efectos. Después del análisis con los grupos en la comunidad, se encontró que el problema principal es:
      .col-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img10.svg', style='width: 200px', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 4.]  Tronco del árbol
        .row
          .col-12
            .p-5.bg-c9(data-aos="fade-down")
              .row.justify-content-center
                .col-auto
                  .p-4.bg-c18
                    p.mb-0 #[b Acelerado deterioro ambiental]
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema1/img3.svg', style="width:60px" alt='').m-auto
          .col.fig-p1(style="z-index: 1")
            .px-5.py-2.bg-c5
              h3.mb-0 Ramas
    .row.align-items-center.mb-4
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Las ramas son los problemas que después de análisis entre los participantes se encontró que eran efectos del problema principal. Los efectos más directos del problema serán ramas primarias y los efectos más indirectos serán las ramas secundarias. Así entonces, después del análisis con sus grupos en el norte caldense, se encontraron las siguientes:
      .col-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img11.svg', style='width: 80px', alt='').m-auto
    .row.bg-c19.mb-5
      .col-12
        .px-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido(data-aos="fade-right")
                p.mb-0 #[b Figura 5.] Ramas del árbol
              .row
                .col-12
                  .p-4.bg-c9(data-aos="fade-down")
                    figure.d-none.d-lg-block
                      img(src='@/assets/curso/tema2/img12.svg', style='width: 900px', alt='El diagrama ilustra las ramas del árbol, categorizadas en ramas principales y secundarias, donde las principales representan la disminución de la calidad de vida y la pérdida de la función de los ecosistemas. Estas se derivan de diversas ramas secundarias, que incluyen factores como bajos niveles de ingresos, pérdida de biodiversidad, incendios en épocas de sequía, alta contaminación por productos químicos y residuos sólidos y líquidos, inundaciones en épocas de lluvia, disminución del abastecimiento hídrico, incremento en el desplazamiento de la población, incremento de los cultivos para uso ilícito, inadecuado uso de los recursos públicos y disminución en la fertilidad de los suelos.').m-auto
                    figure.d-block.d-lg-none
                      img(src='@/assets/curso/tema2/img12m.svg', style='width: 390px', alt='El diagrama ilustra las ramas del árbol, categorizadas en ramas principales y secundarias, donde las principales representan la disminución de la calidad de vida y la pérdida de la función de los ecosistemas. Estas se derivan de diversas ramas secundarias, que incluyen factores como bajos niveles de ingresos, pérdida de biodiversidad, incendios en épocas de sequía, alta contaminación por productos químicos y residuos sólidos y líquidos, inundaciones en épocas de lluvia, disminución del abastecimiento hídrico, incremento en el desplazamiento de la población, incremento de los cultivos para uso ilícito, inadecuado uso de los recursos públicos y disminución en la fertilidad de los suelos.').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema1/img3.svg', style="width:60px" alt='').m-auto
          .col.fig-p1(style="z-index: 1")
            .px-5.py-2.bg-c5
              h3.mb-0 Árbol de problemas finalizado
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 El árbol de problemas es una herramienta fundamental en la metodología del Marco Lógico, utilizada para identificar y analizar las causas y efectos de un problema central en el contexto de un proyecto. Este proceso facilita la comprensión y el abordaje de la situación problemática, permitiendo a los involucrados visualizar de manera estructurada las interrelaciones entre los diferentes problemas.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img6.png', style='width: 500px', alt='').m-auto
    .row.mb-5
      .col-12
        .p-4.bg-c17
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            p.mb-0 #[b Figura 6.] Árbol de procesos finalizado 
          .row
            .col-12
              .p-4(data-aos="fade-down")
                figure.d-none.d-lg-block
                  img(src='@/assets/curso/tema2/img13.svg', style='width: 1000px', alt='El árbol de problemas presenta las causas y consecuencias del acelerado deterioro ambiental, estructurado en raíces, tronco y ramas. En la base, las raíces principales identifican factores como sistemas de producción no sostenibles, suelos deteriorados y comunidades desorganizadas, mientras que las raíces secundarias profundizan en aspectos como deficiente gestión de residuos, prácticas agrícolas inapropiadas, falta de educación ambiental y políticas ineficaces. El tronco representa el problema central: el acelerado deterioro ambiental. Por último, las ramas principales muestran efectos críticos, como la disminución de la calidad de vida y la pérdida de la función de los ecosistemas, alimentadas por ramas secundarias que incluyen disminución del abastecimiento hídrico, pérdida de biodiversidad, incendios, contaminación y degradación de los suelos. ').m-auto
                figure.d-block.d-lg-none
                  img(src='@/assets/curso/tema2/img13m.svg', style='width: 430px', alt='El árbol de problemas presenta las causas y consecuencias del acelerado deterioro ambiental, estructurado en raíces, tronco y ramas. En la base, las raíces principales identifican factores como sistemas de producción no sostenibles, suelos deteriorados y comunidades desorganizadas, mientras que las raíces secundarias profundizan en aspectos como deficiente gestión de residuos, prácticas agrícolas inapropiadas, falta de educación ambiental y políticas ineficaces. El tronco representa el problema central: el acelerado deterioro ambiental. Por último, las ramas principales muestran efectos críticos, como la disminución de la calidad de vida y la pérdida de la función de los ecosistemas, alimentadas por ramas secundarias que incluyen disminución del abastecimiento hídrico, pérdida de biodiversidad, incendios, contaminación y degradación de los suelos. ').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema1/img3.svg', style="width:60px" alt='').m-auto
          .col.fig-p1(style="z-index: 1")
            .px-5.py-2.bg-c5
              h3.mb-0 Consideraciones 
    .row
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Construir un árbol de problemas de manera efectiva para el proyecto, en la metodología de marco lógico, puede ser una tarea ardua y extensa. Así que trabaje con paciencia; probablemente sea necesaria más de una sesión para obtener los resultados esperados.
        .row.mb-3
          .col-12
            .p-4.bg-c3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img1.svg', style='width: 80px', alt='').m-auto
                .col
                  p.mb-0 Tenga presente que una de las fórmulas para encontrar el éxito en la metodología de marco lógico es la habilidad que el moderador, en este caso usted, tenga para orientar el grupo, liderar, sintetizar y llegar a acuerdos con los participantes.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img7.png', style='width: 390px', alt='').m-auto
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
