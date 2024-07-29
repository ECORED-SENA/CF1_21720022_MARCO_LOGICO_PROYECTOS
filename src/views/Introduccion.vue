<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.p-lg-5
          .row.mb-4.mb-lg-0
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img2.png', style='width: 390px', alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              p El Marco Lógico de Proyectos es una herramienta fundamental en la #[b planificación, ejecución y evaluación de proyectos]. Su enfoque estructurado y sistemático permite identificar y analizar los problemas, objetivos, actividades y recursos necesarios para el éxito de una iniciativa. Este método es ampliamente utilizado para mejorar la gestión y efectividad de los proyectos, asegurando que todas las partes interesadas comprendan claramente los objetivos y las acciones necesarias para lograrlos.
              .row.mb-3
                .col-12
                  .p-4.bg-c2
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/intro/img1.svg', style='width: 110px', alt='')
                      .col
                        p.mb-0 Este componente está diseñado para guiar la aplicación del Marco Lógico en el contexto del Eje Cafetero, una región de gran importancia económica y ambiental en Colombia. En esta área, los proyectos d eben abordar tanto las oportunidades de desarrollo sostenible como los desafios ambientales y sociales que enfrenta la comunidad local.
              p.mb-0 El proceso comienza con la identificación y análisis de los involucrados, quienes son esenciales para el éxito del proyecto. A través de un instrumento de captura de información, se detallan los intereses, problemas percibidos, recursos y mandatos de cada grupo relevante. Este análisis inicial proporciona una comprensión integral de las dinámicas y relaciones que influencian el desarrollo regional.
          .row
            .col-12
              .p-4.bg-c3(data-aos="fade-right")
                .row.align-items-center
                  .col
                    p.mb-0 El siguiente paso es la construcción del árbol de problemas, una herramienta visual que facilita la identificación de las causas y efectos de los problemas centrales. Este ejercicio colaborativo permite a los aprendices visualizar de manera clara las interrelaciones entre los diferentes problemas, proporcionando una base sólida para la formulación de estrategias y soluciones efectivas.
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/intro/img2.svg', style='width: 130px', alt='')
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
