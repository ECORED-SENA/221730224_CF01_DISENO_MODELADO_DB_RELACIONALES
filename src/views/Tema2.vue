<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Planificación técnica y gestión de proyectos de diseño de estructuras de datos
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p A continuación, se presenta un pódcast sobre diseño de estructuras de datos desde la perspectiva de la planificación del desarrollo de #[i software], destacando su relación con el ciclo de vida del desarrollo de #[i software], así como las principales herramientas de gestión que permiten organizar, controlar y garantizar la calidad del diseño de bases de datos.
          .row.align-items-center.justify-content-center.caja-6(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t2/img1.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Diseño de estructuras de datos y planificación en el desarrollo de <i>software</i>"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img2.png', alt='' style="width: 500px").m-auto
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Metodologías de planificación y el ciclo de vida del desarrollo de #[i software] (CVDS)
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img3.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El diseño de una base de datos relacional no debe abordarse como una actividad aislada. Por el contrario, forma parte del Ciclo de Vida del Desarrollo de #[i Software] (CVDS), donde cada decisión tomada durante la planificación influye directamente en la calidad, la escalabilidad y el mantenimiento de la solución tecnológica. La forma de integrar el modelado de datos dentro del CVDS depende de la metodología de gestión de proyectos adoptada por la organización. Cada enfoque presenta características particulares que influyen en la planificación, el diseño y la evolución de la base de datos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Metodologías tradicionales o en cascada
                  p.mb-0 La planificación y el diseño de la base de datos se realizan de forma secuencial durante las primeras fases del proyecto. Antes de iniciar el diseño conceptual y lógico, los requisitos del cliente deben estar completamente definidos. Este enfoque favorece una amplia documentación y reduce la probabilidad de errores estructurales en etapas posteriores, aunque ofrece menor flexibilidad frente a cambios en los requerimientos.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Metodologías ágiles (Scrum y Kanban)
                  p.mb-0 El diseño de la base de datos evoluciona de manera incremental durante cada ciclo de desarrollo o #[i Sprint]. La estructura de almacenamiento se ajusta conforme se priorizan nuevas historias de usuario. Este enfoque facilita la adaptación a cambios del negocio, pero exige aplicar prácticas de refactorización que permitan evolucionar la base de datos sin afectar la integridad de la información almacenada.
      p.mb-5 Independientemente de la metodología utilizada, el diseño de una base de datos debe desarrollarse mediante tres niveles de abstracción que permiten transformar gradualmente los requisitos del negocio en una solución técnica: 
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.color-4.text-white.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img6.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Diseño conceptual
                  p.mb-0.text-center Representa la realidad del negocio mediante entidades, atributos y relaciones, sin depender de un SGBD, del software o del #[i hardware].
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img7.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Diseño lógico
                  p.mb-0.text-center  Transforma el modelo conceptual en un modelo relacional compuesto por tablas, llaves y restricciones, manteniendo la independencia respecto al motor de base de datos que se utilizará.
            .col-xl-4.col-md-9(data-aos="zoom-in")
              .caja-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img8.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Diseño físico
                  p.mb-0.text-center Implementa el modelo lógico en un SGBD específico, definiendo aspectos como tipos de datos, índices, almacenamiento y configuraciones orientadas al rendimiento.
          .bg-2(data-aos="flip-up")
            .px-5
              .row.align-items-center
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
                .col-xl.text-white
                  p.mb-0 La ejecución ordenada de estas etapas permite construir bases de datos consistentes, escalables y fáciles de mantener. Omitir alguna de ellas e iniciar directamente con la creación de tablas en un SGBD constituye una práctica inadecuada de ingeniería, ya que incrementa la probabilidad de generar redundancias, inconsistencias y problemas de rendimiento durante la operación del sistema.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Elaboración técnica del plan de trabajo: actividades, secuenciación y dependencias
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-4.color-3.mb-3(data-aos="fade-right")
            p.mb-0 Uno de los primeros resultados de aprendizaje de este componente formativo consiste en desarrollar la capacidad para elaborar un plan de trabajo técnico que permita organizar las actividades del proyecto de manera estructurada. En el entorno productivo, este documento constituye la hoja de ruta que orienta el desarrollo de la base de datos, facilita el seguimiento de las tareas y contribuye al cumplimiento de los tiempos y entregables acordados con el cliente o con la organización.
          p.mb-0 La elaboración del plan de trabajo comienza con la descomposición del proceso de diseño en actividades específicas, medibles y organizadas cronológicamente. Esta secuencia permite establecer dependencias entre las tareas y garantizar que cada etapa se inicie únicamente cuando la anterior haya finalizado satisfactoriamente.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img9.png', alt='' style="width: 500px").m-auto
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Figura 2.
        span Secuencia general del proceso de diseño
      figure(data-aos="zoom-in").mb-5
        img(src='@/assets/curso/temas/t2/img10.png', alt='Diagrama de flujo sobre el proceso de diseño de una base de datos que organiza las etapas de levantamiento de requisitos, modelado conceptual, diseño lógico, diseño físico e implementación, mostrando la secuencia de actividades necesarias para desarrollar una base de datos relacional. ').m-auto
      p.mb-5 La siguiente estructura ejemplifica una #[b Estructura de Desglose del Trabajo (EDT)] para el diseño de una base de datos relacional.
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 1.
        span Estructura de Desglose del Trabajo (EDT) para el diseño de estructuras de datos
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left ID
              th.ajuste-border-tabla.texto-left Actividad
              th.ajuste-border-tabla.texto-left Descripción
              th.texto-left Dependencia
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold A1
              td.ajuste-border-tabla.texto-left Levantamiento y análisis de requisitos
              td.ajuste-border-tabla.texto-left Recolección y análisis de la información mediante entrevistas, revisión documental y otras técnicas para identificar las reglas de negocio que orientarán el diseño de la base de datos.
              td.texto-left Ninguna
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold A2
              td.ajuste-border-tabla.texto-left Construcción del modelo conceptual
              td.ajuste-border-tabla.texto-left Elaboración del Modelo Entidad-Relación (MER) o del Modelo Entidad-Relación Extendido (MERE), con base en los requisitos identificados durante la etapa anterior.
              td.texto-left A1 (Final a Inicio)
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold A3
              td.ajuste-border-tabla.texto-left Diseño del modelo lógico
              td.ajuste-border-tabla.texto-left Transformación del modelo conceptual en un esquema relacional de tablas, aplicando las reglas de transformación y el proceso de normalización.
              td.texto-left A2 (Final a Inicio)
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold A4
              td.ajuste-border-tabla.texto-left Definición de restricciones e integridad
              td.ajuste-border-tabla.texto-left Especificación de tipos de datos, dominios, llaves primarias, llaves foráneas y demás restricciones que garantizan la integridad de la información.
              td.texto-left A3 (Final a Inicio)
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold A5
              td.ajuste-border-tabla.texto-left Validación y documentación
              td.ajuste-border-tabla.texto-left Revisión técnica del diseño, verificación de su consistencia y elaboración del informe final del proyecto.
              td.texto-left A4 (Final a Inicio)
      .bg-3
        .px-5
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p La relación de dependencia entre las actividades determina el orden en que deben ejecutarse las tareas del proyecto. Por ejemplo, la actividad #[b A3] depende de la finalización de la actividad #[b A2] mediante una relación #[b Final a Inicio]. Esto significa que el diseño del modelo lógico solo puede comenzar cuando el modelo conceptual ha sido elaborado, revisado y aprobado.
              .caja-4.color-5(data-aos="fade-right")
                .row
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px").m-auto
                  .col-xl
                    p.mb-0 Definir correctamente estas dependencias permite controlar la secuencia del proyecto, reducir reprocesos y optimizar el uso de los recursos disponibles. Además, facilita el seguimiento del cronograma y contribuye a que el diseño de la base de datos avance de forma organizada y coherente con las reglas de negocio establecidas.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img11.png', alt='' style="width: 500px").m-auto
          Separador
          #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.3 Herramientas de gestión y diagramas de planificación: Gantt y estimación de recursos
          p.mb-5 Una vez definidas las actividades, la secuencia de ejecución y las dependencias del proyecto, el siguiente paso consiste en planificar su desarrollo mediante herramientas de gestión. Estas aplicaciones permiten organizar las tareas, asignar responsables, controlar los tiempos de ejecución y realizar seguimiento al avance del proyecto durante todo su ciclo de vida.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p Uno de los recursos más utilizados para este propósito es el #[b diagrama de Gantt], una representación gráfica que distribuye las actividades del proyecto a lo largo de una línea de tiempo. Este diagrama facilita la planificación del cronograma, la identificación de dependencias entre tareas y el seguimiento del cumplimiento de los plazos establecidos.
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/t2/img12.svg', alt='' style="width: 70px")
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 300px").m-auto
        .col-xl
          .caja-3.ajuste-3(data-aos="fade-left")
            p.mb-0 Además de representar visualmente el cronograma, las herramientas de gestión permiten centralizar la información del proyecto en entornos colaborativos. Al registrar las actividades de la Estructura de Desglose del Trabajo (EDT), es posible asignar responsables, establecer fechas de inicio y finalización, controlar la disponibilidad de los recursos y realizar ajustes cuando se presentan cambios durante el desarrollo del proyecto.
      p.mb-5 Entre las funcionalidades más utilizadas se encuentran la generación automática de diagramas de Gantt, el cálculo de dependencias, la identificación de la ruta crítica, el seguimiento del avance de las actividades y la administración de la carga de trabajo del equipo. Estas características facilitan la toma de decisiones y contribuyen al cumplimiento de los objetivos del proyecto. Las siguientes herramientas son ampliamente utilizadas para la gestión de proyectos y la planificación de actividades en entornos académicos y empresariales:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img14.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img15.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Microsoft Project
                  p.mb-0.text-center Solución especializada para la gestión de proyectos de gran complejidad. Permite elaborar cronogramas, administrar recursos, gestionar presupuestos, establecer dependencias entre actividades e identificar la ruta crítica del proyecto.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img16.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Asana
                  p.mb-0.text-center Plataforma de trabajo colaborativo que facilita la planificación y el seguimiento de actividades mediante cronogramas, asignación de responsables, control de fechas y comunicación entre los integrantes del equipo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img17.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Trello
                  p.mb-0.text-center Herramienta basada en tableros Kanban que, mediante complementos (#[i Power-Ups]), incorpora diagramas de Gantt y funciones de planificación. Su interfaz sencilla favorece la organización de proyectos pequeños y medianos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img18.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text ClickUp
                  p.mb-0.text-center Plataforma integral para la gestión de proyectos que incluye diagramas de Gantt, control del tiempo, administración de recursos, seguimiento del avance y documentación centralizada del proyecto.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img19.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text GanttPRO
                  p.mb-0.text-center Aplicación especializada en la creación y administración de diagramas de Gantt. Permite planificar actividades, gestionar hitos, controlar recursos y generar reportes para el seguimiento del proyecto.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img20.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Monday.com
                  p.mb-0.text-center Plataforma colaborativa que integra cronogramas, diagramas de Gantt, automatización de tareas, seguimiento de proyectos y control del trabajo en equipo mediante una interfaz altamente configurable.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La selección de la herramienta depende del tamaño del proyecto, la metodología de trabajo adoptada, la cantidad de integrantes del equipo y las necesidades de la organización. Independientemente de la plataforma utilizada, el objetivo es facilitar la planificación, optimizar la asignación de recursos y garantizar el cumplimiento de los tiempos establecidos durante el diseño y desarrollo de la base de datos.
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Figura 3.
        span Ejemplo Gantt en línea
      figure(data-aos="zoom-in").mb-5
        img(src='@/assets/curso/temas/t2/img22.png', alt='Diagrama Entidad-Relación que compara una entidad fuerte y una entidad débil mediante sus atributos, claves y relación de dependencia. El esquema resalta que la entidad débil requiere una entidad fuerte para su identificación dentro del modelo de datos. ').m-auto
      p.mb-5 Además de facilitar la programación de actividades, las herramientas de gestión de proyectos proporcionan indicadores que permiten controlar el avance del cronograma y anticipar posibles retrasos. Entre los conceptos más importantes para la planificación se encuentran la #[b holgura] y la #[b ruta crítica], ya que ambos permiten identificar las actividades que ofrecen flexibilidad y aquellas que determinan la duración total del proyecto.
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-7.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img23.png', alt="" ).m-auto
                  h4.text-center Holgura
                  .caja-7_p
                    p.mb-0.text-center Corresponde al tiempo máximo que una actividad puede retrasarse sin afectar la fecha de finalización del proyecto. Cuando una tarea dispone de holgura, el director del proyecto puede redistribuir recursos humanos o tecnológicos para atender imprevistos sin comprometer el cronograma general.
            .col-xl-6.col-md-9(data-aos="fade-left")
              .caja-7.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img24.png', alt="" ).m-auto
                  h4.text-center Ruta crítica (CPM, #[i Critical Path Method])
                  .caja-7_p
                    p.mb-0.text-center Es la secuencia de actividades que determina la duración mínima del proyecto. Las tareas que pertenecen a la ruta crítica tienen una holgura igual a cero; por tanto, cualquier retraso en una de ellas ocasiona un aplazamiento en la fecha de finalización del proyecto.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img25.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Además de planificar el cronograma, la gestión de proyectos requiere identificar y asignar los recursos necesarios para ejecutar cada actividad. Una adecuada estimación de estos recursos permite distribuir responsabilidades, optimizar el trabajo del equipo y garantizar la disponibilidad de la infraestructura tecnológica durante el desarrollo del proyecto.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img26.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Recursos humanos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponden a los perfiles profesionales que participan en el proyecto. Entre ellos se encuentran los ingenieros de requisitos, responsables del levantamiento de información; los diseñadores de datos, encargados del modelado conceptual y lógico; los administradores de bases de datos (DBA), quienes implementan y administran la base de datos; y los auditores de calidad, encargados de verificar el cumplimiento de los criterios técnicos establecidos.
            .row(titulo="Recursos tecnológicos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen la infraestructura de hardware, los Sistemas de Gestión de Bases de Datos (SGBD), las herramientas CASE para el modelado de datos, los sistemas de control de versiones y las demás aplicaciones necesarias para desarrollar, documentar y administrar el proyecto.
      .ajustar-final-contenedor
        .bg-2(data-aos="flip-up")
          .px-5
            .row.align-items-center
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
              .col-xl.text-white
                p.mb-0 La estimación adecuada del tiempo y de los recursos constituye un elemento esencial para la planificación de proyectos de bases de datos. Su correcta aplicación permite reducir riesgos, optimizar la ejecución de las actividades y facilitar el cumplimiento de los objetivos definidos durante el proceso de desarrollo.

</template>

<script>
import audio1 from '@/assets/curso/temas/t2/audios/audio-ej.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
