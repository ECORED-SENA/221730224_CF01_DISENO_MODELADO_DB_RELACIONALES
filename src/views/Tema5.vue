<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Ingeniería de #[i software] relacional: metodología de transformación lógica y herramientas CASE
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p Una vez finalizado el modelo conceptual mediante el Modelo Entidad-Relación Extendido (MERE), el siguiente paso consiste en transformarlo en una estructura que pueda implementarse en un Sistema de Gestión de Bases de Datos (SGBD). Esta etapa corresponde al #[b diseño lógico], cuyo propósito es convertir los elementos del modelo conceptual en tablas, columnas, claves y restricciones propias del modelo relacional.
          .caja-4.color-6(data-aos="fade-right").mb-3
            .row
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px").m-auto
              .col-xl
                p.mb-0 El diseño lógico constituye el puente entre el análisis del negocio y la implementación técnica de la base de datos. Aunque todavía no depende de un SGBD específico, define la estructura que posteriormente será implementada en motores como PostgreSQL, MySQL, Oracle o SQL Server.
          p.mb-0 Durante esta unidad se estudiarán las reglas de transformación que permiten convertir entidades en tablas, atributos en columnas y relaciones en mecanismos de integridad referencial mediante llaves primarias y llaves foráneas. Asimismo, se abordará el uso de herramientas CASE (#[i Computer-Aided Software Engineering]), las cuales apoyan el diseño de bases de datos y automatizan parte del proceso de desarrollo.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img1.png', alt='' style="width: 500px").m-auto
      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Arquitectura del modelo lógico relacional y la teoría de Codd
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El modelo lógico relacional, propuesto por Edgar F. Codd, se fundamenta en la teoría de conjuntos y en la lógica de predicados. Este modelo proporciona una estructura organizada para almacenar y administrar la información mediante tablas relacionadas entre sí. Para comprender el funcionamiento del modelo relacional, es importante familiarizarse con algunos conceptos fundamentales:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Figura 11.
        span Ejemplo elementos fundamentales del modelo relacional
      figure(data-aos="zoom-in").mb-5
        img(src='@/assets/curso/temas/t5/img3.png', alt='Diagrama de una tabla del modelo relacional que identifica los principales componentes de una relación, como atributos, registros o tuplas, dominios, clave primaria y estructura tabular utilizada en las bases de datos relacionales. ').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img4.svg", alt="" style="width: 320px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Relación (tabla)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es una estructura bidimensional organizada en filas y columnas que almacena información de una misma entidad. En el modelo relacional, el término #[b relación] equivale a una tabla y no debe confundirse con las relaciones del Modelo Entidad-Relación (MER), las cuales representan asociaciones entre entidades.
            .row(titulo="Tupla (fila o registro)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a cada una de las filas de una tabla. Cada tupla representa una instancia específica de la entidad almacenada.
            .row(titulo="Atributo (columna o campo)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a cada una de las columnas de la tabla. Cada atributo almacena un tipo específico de información y todos sus valores deben pertenecer al mismo dominio de datos.
            .row(titulo="Grado de una relación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde al número total de atributos o columnas que conforman una tabla.
            .row(titulo="Cardinalidad de una relación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representa el número total de tuplas o registros almacenados en una tabla en un momento determinado.
      p.mb-5 Además de definir estos conceptos, el modelo relacional establece un conjunto de reglas que garantizan la integridad y la consistencia de la información almacenada.
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.color-4.text-white.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t5/img5.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Unicidad de las tuplas
                  p.mb-0.text-center No pueden existir dos registros completamente idénticos dentro de una misma tabla.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t5/img6.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Independencia del orden
                  p.mb-0.text-center El orden en que se almacenan las filas y las columnas no modifica el significado de la información ni afecta el funcionamiento del SGBD.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t5/img7.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Atomicidad de los valores
                  p.mb-0.text-center Cada celda de la tabla debe contener un único valor indivisible. No se permite almacenar listas, colecciones o múltiples valores dentro de un mismo atributo.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t5/img8.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Dominio de los atributos
                  p.mb-0.text-center Todos los valores almacenados en una columna deben pertenecer al dominio definido para ese atributo y cumplir las restricciones establecidas durante el diseño.
          .bg-2(data-aos="flip-up").mb-0
            .px-5
              .row.align-items-center
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
                .col-xl.text-white
                  p.mb-0 El cumplimiento de estos principios garantiza que las tablas del modelo relacional mantengan una estructura consistente y preparada para implementar mecanismos de integridad referencial, normalización y optimización del almacenamiento. Estas características constituyen la base para el diseño e implementación de bases de datos confiables en entornos organizacionales.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Reglas de transformación formal del MER/MERE al modelo relacional de tablas
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/img9.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Una vez elaborado el modelo conceptual, el siguiente paso consiste en transformarlo en un modelo lógico que pueda implementarse en un Sistema de Gestión de Bases de Datos (SGBD). Este proceso se realiza mediante un conjunto de reglas de transformación que permiten convertir entidades, atributos y relaciones en tablas, columnas y restricciones de integridad referencial. La aplicación sistemática de estas reglas garantiza que el modelo lógico conserve la estructura y las reglas de negocio definidas durante el modelado conceptual:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img10.svg", alt="" style="width: 320px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Regla 1. Transformación de entidades fuertes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cada entidad fuerte del MER se convierte en una tabla independiente. La clave primaria de la entidad se transforma en la clave primaria de la tabla y los atributos simples pasan a convertirse en columnas.
            .row(titulo="Regla 2. Transformación de entidades débiles").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cada entidad débil también se transforma en una tabla. Su clave primaria está compuesta por la clave primaria de la entidad fuerte de la que depende, la cual actúa como llave foránea, junto con la clave parcial que identifica la entidad débil.
            .row(titulo="Regla 3. Transformación de relaciones uno a varios (1:N)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La clave primaria de la entidad ubicada en el lado #[b uno (1)] se incorpora como llave foránea en la tabla correspondiente al lado #[b varios (N)], estableciendo la relación entre ambas tablas y garantizando la integridad referencial.
            .row(titulo="Regla 4. Transformación de relaciones varios a varios (N:M)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las relaciones de este tipo requieren la creación de una tabla intermedia o tabla puente. Esta nueva tabla contiene como llaves foráneas las claves primarias de las dos tablas relacionadas y, cuando la relación posee atributos propios, estos también se incorporan como columnas de la tabla puente.
            .row(titulo="Regla 5. Transformación de atributos multivaluados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los atributos multivaluados no pueden almacenarse directamente en una tabla porque el modelo relacional admite un único valor por celda. Por esta razón, se crea una nueva tabla que contiene la clave primaria de la entidad original como llave foránea y el valor correspondiente al atributo multivaluado.
      .bg-2(data-aos="flip-up").mb-0
        .px-5
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
            .col-xl.text-white
              p.mb-0 La aplicación correcta de estas reglas permite transformar el modelo conceptual en un esquema relacional consistente y preparado para su implementación en un SGBD. Además, facilita la preservación de la integridad de los datos y garantiza que las relaciones definidas durante el análisis del negocio se mantengan durante la construcción de la base de datos.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Criterios de selección e Ingeniería de #[i Software] Asistida por Computadora (Herramientas CASE)
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-4.color-6(data-aos="fade-right").mb-3
            .row
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px").m-auto
              .col-xl
                p.mb-0 A medida que aumenta la complejidad del diseño de una base de datos, también se incrementa la necesidad de utilizar herramientas que faciliten el modelado, reduzcan errores y automaticen parte del proceso de desarrollo. Para este propósito se emplean las #[b herramientas CASE] (#[i Computer-Aided Software Engineering]), aplicaciones especializadas que apoyan el análisis, el diseño y la documentación de sistemas de información.
          p.mb-0 En el diseño de bases de datos, estas herramientas permiten elaborar modelos conceptuales y lógicos, validar la consistencia de las estructuras, generar código SQL automáticamente y mantener sincronizados los modelos con la implementación física de la base de datos. La selección de una herramienta CASE debe responder a las necesidades del proyecto y a las características técnicas de la organización. Entre los principales criterios de evaluación se encuentran los siguientes:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img11.png', alt='' style="width: 500px").m-auto
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.color-4.text-white.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t5/img12.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Soporte de notaciones estándar
                  p.mb-0.text-center La herramienta debe permitir utilizar notaciones ampliamente reconocidas, como #[b #[i Information Engineering] (IE)] o #[b IDEF1X], facilitando la interpretación de los modelos por parte de analistas, diseñadores de datos y administradores de bases de datos (DBA).
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t5/img13.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Ingeniería hacia adelante (#[i Forward Engineering])
                  p.mb-0.text-center Permite generar automáticamente el código SQL a partir del modelo lógico. Mediante este proceso, la herramienta crea instrucciones como #[b CREATE TABLE], #[b ALTER TABLE], #[b PRIMARY KEY] y #[b FOREIGN KEY], listas para ejecutarse en un Sistema de Gestión de Bases de Datos (SGBD).
            .col-xl-4.col-md-9(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t5/img14.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Ingeniería inversa (#[i Reverse Engineering])
                  p.mb-0.text-center Permite reconstruir el modelo lógico a partir de una base de datos existente. Para ello, la herramienta analiza la estructura almacenada en el SGBD y genera automáticamente el diagrama correspondiente, facilitando las actividades de documentación, mantenimiento y auditoría.
          p.mb-5 Actualmente existen diversas herramientas CASE que apoyan el diseño de bases de datos y ofrecen funcionalidades orientadas a diferentes tipos de proyectos:
          .bg-slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      figure
                        img(src='@/assets/curso/temas/t5/img15.png', alt='' style="max-width: 500px").m-auto
                    .col-xl-6
                      h4 dbdiagram.io
                      p.mb-0 Plataforma web orientada al modelado de bases de datos mediante una sintaxis sencilla basada en texto. Es una alternativa práctica para proyectos académicos y prototipos de rápida elaboración.
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      figure
                        img(src='@/assets/curso/temas/t5/img16.png', alt='' style="max-width: 500px").m-auto
                    .col-xl-6
                      h4 MySQL Workbench
                      p.mb-0 Herramienta oficial para el diseño, administración y mantenimiento de bases de datos MySQL. Permite desarrollar modelos, generar código SQL y realizar ingeniería inversa de manera integrada.
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      figure
                        img(src='@/assets/curso/temas/t5/img17.png', alt='' style="max-width: 500px").m-auto
                    .col-xl-6
                      h4 Erwin Data Modeler
                      p.mb-0 Solución ampliamente utilizada en entornos empresariales para el modelado conceptual, lógico y físico de bases de datos. Ofrece funciones avanzadas de documentación, estandarización y administración de modelos de gran complejidad.
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      figure
                        img(src='@/assets/curso/temas/t5/img18.png', alt='' style="max-width: 500px").m-auto
                    .col-xl-6
                      h4 Oracle SQL Developer Data Modeler
                      p.mb-0 Herramienta gratuita desarrollada por Oracle para el diseño de bases de datos. Permite crear modelos conceptuales, lógicos y físicos, además de realizar ingeniería hacia adelante e ingeniería inversa sobre diferentes Sistemas de Gestión de Bases de Datos.
      p.mb-5 La incorporación de herramientas CASE en el proceso de diseño contribuye a mejorar la calidad de los modelos de datos, reducir errores durante la implementación y optimizar la documentación técnica del proyecto. Asimismo, facilita el trabajo colaborativo entre los diferentes integrantes del equipo de desarrollo y favorece la construcción de bases de datos consistentes, mantenibles y alineadas con las necesidades de la organización.
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Figura 12.
        span Pantallazo de herramienta que mezcla utilidades visuales y consola de código integrado
      figure(data-aos="zoom-in")
        img(src='@/assets/curso/temas/t5/img19.png', alt='Captura de pantalla de una herramienta CASE para el diseño de bases de datos que integra un editor gráfico de diagramas Entidad-Relación, un panel de navegación de objetos y una consola para la generación y edición de código SQL. ').m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
