<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo:
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre la planificación y el modelado conceptual y lógico de estructuras de datos. Organiza los contenidos en cinco bloques temáticos: sistemas de almacenamiento y sistemas gestores de bases de datos (SGBD), modelo conceptual (MER), semántica avanzada (MERE), restricciones lógicas e ingeniería de software relacional. Cada bloque se divide en conceptos específicos, como evolución de los sistemas de almacenamiento, lenguajes DDL y DML, entidades, atributos, claves, relaciones, cardinalidades, jerarquías, restricciones de integridad, modelo lógico relacional, reglas de transformación y herramientas CASE. ")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
