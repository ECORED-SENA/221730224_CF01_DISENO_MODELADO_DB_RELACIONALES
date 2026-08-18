<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .ajustar-final-contenedor
        .bg-1
          .px-5
            .row.justify-content-center.align-items-center.mb-5
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/intro/img1.png', alt='' style="width: 300px").m-auto
              .col-xl
                p En la actualidad, las bases de datos constituyen uno de los pilares fundamentales de los sistemas de información utilizados por organizaciones de todos los sectores productivos. Desde aplicaciones financieras y plataformas de comercio electrónico hasta sistemas de salud, educación y logística, la gestión eficiente de los datos permite apoyar la toma de decisiones, optimizar procesos y garantizar la disponibilidad de información confiable. Por esta razón, el diseño de estructuras de datos requiere una metodología que combine el análisis de las necesidades del negocio con principios técnicos orientados a la calidad, la integridad y la seguridad de la información.
                .caja-1(data-aos="zoom-in")
                  .row.align-items-center
                    .col-xl.order-2.order-lg-1.caja-1-p
                      p.mb-0 El desarrollo de una base de datos relacional comprende un proceso organizado que inicia con la identificación de los requerimientos de información y continúa con la planificación del proyecto, el modelado conceptual y la transformación de los modelos en estructuras lógicas listas para su implementación en un Sistema de Gestión de Bases de Datos (SGBD). Durante este proceso se aplican metodologías, reglas de modelado y herramientas especializadas que permiten representar correctamente las entidades, los atributos, las relaciones y las restricciones definidas por las reglas de negocio de una organización.
                    .col-xl-auto.order-1.order-lg-2
                      figure
                        img(src='@/assets/curso/temas/intro/img2.jpg', alt='' style="width: 400px").m-auto
            .bg-2(data-aos="flip-up")
              .px-5
                .row.align-items-center
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 85px").m-auto
                  .col-xl.text-white
                    p.mb-0 Este componente formativo proporciona los fundamentos necesarios para comprender el ciclo de vida del diseño de bases de datos relacionales, desde la evolución de los sistemas de almacenamiento hasta la aplicación del Modelo Entidad-Relación (MER), el Modelo Entidad-Relación Extendido (MERE) y las reglas de transformación hacia el modelo relacional. Asimismo, aborda la planificación técnica de proyectos y el uso de herramientas CASE como apoyo al proceso de diseño, con el propósito de desarrollar soluciones de almacenamiento de datos consistentes, escalables y alineadas con las necesidades del sector productivo.

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
