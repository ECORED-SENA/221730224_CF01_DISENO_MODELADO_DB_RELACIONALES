<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Modelado conceptual de datos: componentes esenciales del Modelo Entidad-Relación (MER)
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 El modelado conceptual constituye una de las etapas más importantes en el diseño de bases de datos relacionales, ya que permite representar la realidad del negocio antes de iniciar la implementación técnica de la solución. Durante esta fase, los requisitos recopilados se transforman en un modelo que describe las entidades, sus atributos y las relaciones existentes entre ellas, sin depender de un Sistema de Gestión de Bases de Datos (SGBD) o de aspectos relacionados con el #[i hardware] y el #[i software].
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt='' style="width: 300px").m-auto
        .col-xl
          .caja-3.ajuste-3(data-aos="fade-left")
            p.mb-0 El #[b Modelo Entidad-Relación (MER)], propuesto por #[b Peter Chen] en #[b 1976], es uno de los modelos conceptuales más utilizados para representar la información de una organización. Su propósito consiste en estructurar de manera gráfica los elementos que intervienen en un sistema de información, facilitando la comunicación entre los expertos del negocio y los diseñadores de bases de datos antes de iniciar el diseño lógico y físico.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Teoría de conjuntos y conceptualización de entidades fuertes y débiles
      p.mb-5 A continuación, se presenta un video sobre el concepto de entidad en el modelado conceptual, la diferencia entre entidad e instancia, y la clasificación de las entidades en fuertes y débiles, como elementos fundamentales para el diseño de bases de datos.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/prB_JIrkerI?si=IoNKFbEo-iinEnb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Entidades fuertes y débiles en el modelado conceptual
      p.mb-5 La diferencia entre ambos tipos de entidades puede comprenderse mediante el siguiente ejemplo: 
      TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Entidad fuerte: cuenta bancaria")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Entidad fuerte: cuenta bancaria
              p.mb-0 Puede identificarse mediante un número de cuenta único y existe de forma independiente dentro del sistema financiero.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t3/img2.svg", alt="" style="max-width: 120px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Entidad débil: movimiento")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Entidad débil: movimiento
              p.mb-0 Representa operaciones como depósitos, retiros o transferencias. Su identificación depende de la cuenta bancaria a la que pertenece, ya que un movimiento no tiene significado si no está asociado a una cuenta específica.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t3/img3.svg", alt="" style="max-width: 120px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img4.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La correcta identificación de las entidades fuertes y débiles constituye uno de los primeros pasos en el modelado conceptual, ya que permite establecer adecuadamente las relaciones entre los elementos del sistema y definir posteriormente las claves que garantizarán la integridad de la información durante el diseño lógico de la base de datos.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Taxonomía exhaustiva de atributos: simples, compuestos, multivaluados y derivados
      .bg-4
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-4(data-aos="fade-right").mb-3
                .row
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px").m-auto
                  .col-xl
                    p.mb-0 Una entidad adquiere significado dentro del Modelo Entidad-Relación (MER) cuando se describe mediante #[b atributos], los cuales representan las características que permiten identificarla y registrar la información necesaria para el funcionamiento de la organización. Cada atributo almacena un dato específico asociado a una instancia de la entidad y contribuye a representar la realidad del negocio de manera precisa.
              p.mb-0 La correcta identificación y clasificación de los atributos permite construir modelos conceptuales más completos, facilita la transformación al modelo lógico y reduce problemas relacionados con la redundancia, la pérdida de información y las dificultades durante las consultas.  De acuerdo con su estructura y comportamiento, los atributos pueden clasificarse de la siguiente manera.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img5.png', alt='' style="width: 300px").m-auto
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-6.mb-4.mb-lg-0
              .caja-4.color-4.text-white.ajuste-4(data-aos="fade-right")
                .row
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img6.svg', alt='' style="width: 70px").m-auto
                  .col-xl
                    h5 Atributo simple o atómico
                    p.mb-0 Representa una única característica que no puede dividirse en elementos con significado propio dentro del contexto del sistema. Algunos ejemplos son la edad de un cliente, el salario de un empleado o el código ISBN de un libro.
            .col-xl-6(data-aos="fade-left")
              .caja-4.color-4.text-white(data-aos="fade-right")
                .row
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img7.svg', alt='' style="width: 70px").m-auto
                  .col-xl
                    h5 Atributo compuesto
                    p.mb-0 Está conformado por varios atributos relacionados que, en conjunto, describen una misma característica. Por ejemplo, una dirección puede descomponerse en tipo de vía, número, barrio, ciudad y departamento. Esta estructura facilita el almacenamiento, la búsqueda y el análisis de la información.
          p.mb-5 Además de su estructura, los atributos pueden clasificarse según la cantidad de valores que admiten para cada instancia: 
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Atributo monovaluado
                  p.mb-0 Solo admite un valor para cada instancia de la entidad. Por ejemplo, una persona registra un único número de documento de identidad dentro del sistema.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img9.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Atributo multivaluado
                  p.mb-0 Puede contener varios valores asociados a una misma instancia. Algunos ejemplos son los números telefónicos, los correos electrónicos, las especialidades o los títulos académicos de un instructor. Este tipo de atributo requiere un tratamiento especial durante el diseño lógico para evitar redundancia y preservar la integridad de la información.
      p.mb-5 Otra clasificación importante corresponde a los atributos derivados, cuyo valor se obtiene a partir de otros datos almacenados en la base de datos.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-3.color-6.ajuste-1(data-aos="fade-right")
            h5 Atributo derivado
            p.mb-0 Su valor no se almacena de forma permanente, sino que se calcula a partir de otros atributos o de información proporcionada por el sistema. Un ejemplo es la edad, que puede obtenerse a partir de la fecha de nacimiento y de la fecha actual. De esta manera, se evita almacenar datos que cambian con el tiempo y se garantiza que la información consultada sea siempre actualizada.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img10.png', alt='' style="width: 300px").m-auto
        .col-xl
          .caja-2.color-7(data-aos="fade-left")
            p La identificación adecuada de los diferentes tipos de atributos constituye un paso fundamental en el modelado conceptual. Una correcta clasificación permite representar con mayor precisión la realidad del negocio, facilita la transformación al modelo lógico y contribuye al diseño de bases de datos más consistentes, flexibles y fáciles de mantener.
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/t3/img11.svg', alt='' style="width: 70px")
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Teoría formal de claves para la integridad semántica de los datos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-4.color-5.mb-3(data-aos="fade-right")
            p.mb-0 En el Modelo Entidad-Relación (MER), cada instancia de una entidad debe poder identificarse de manera única para evitar duplicidades y garantizar la integridad de la información. Para lograrlo, el modelado conceptual emplea un conjunto de reglas conocidas como #[b teoría de claves], las cuales permiten establecer mecanismos de identificación que posteriormente serán implementados en el modelo lógico de la base de datos.
          p.mb-0 La correcta selección de las claves facilita el control de la información, fortalece las relaciones entre las entidades y asegura que cada registro pueda diferenciarse de los demás. En el proceso de modelado conceptual se distinguen tres tipos principales de claves:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img12.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img13.png", alt="" style="width: 320px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Superclave").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es un conjunto formado por uno o más atributos que permite identificar de manera única cada instancia de una entidad. Aunque garantiza la identificación, puede contener atributos adicionales que no son necesarios para distinguir los registros. Por ejemplo, en la entidad #[b Vehículo], el conjunto #[b {Placa, Número de motor, Color, Modelo}] constituye una superclave, ya que identifica de forma única cada vehículo, aunque incluye atributos redundantes para este propósito.
            .row(titulo="Clave candidata").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a una superclave mínima, es decir, contiene únicamente los atributos indispensables para identificar una instancia de forma única. Ninguno de sus atributos puede eliminarse sin perder la capacidad de identificación. En la entidad Vehículo, tanto #[b {Placa}] como #[b {Número de motor}] representan claves candidatas, ya que cada uno identifica por sí solo un vehículo.
            .row(titulo="Clave primaria (PK, <i>Primary Key</i>)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es la clave candidata seleccionada para identificar oficialmente cada registro de una entidad. Debe cumplir dos condiciones fundamentales: #[b unicidad], de modo que no existan dos registros con el mismo valor, y #[b restricción de no nulos], lo que implica que todos los registros deben contener obligatoriamente un valor para este atributo. En el ejemplo de la entidad #[b Vehículo], el atributo #[b Placa] puede seleccionarse como clave primaria para identificar cada vehículo y establecer relaciones con otras entidades del modelo.
      .bg-5
        .px-5 
          .bg-2(data-aos="flip-up")
            .px-5
              .row.align-items-center
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
                .col-xl.text-white
                  p.mb-0 La selección adecuada de la clave primaria constituye una decisión fundamental durante el diseño de una base de datos, ya que permite garantizar la integridad de los registros y facilita el establecimiento de relaciones entre las diferentes entidades que conforman el modelo relacional.
          Separador
          #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.4 Restricción de dominio de un atributo
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-4.color-6(data-aos="fade-right").mb-3
                .row
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px").m-auto
                  .col-xl
                    p.mb-0 Además de identificar correctamente las entidades, los atributos y las claves, el modelado conceptual debe definir el #[b dominio] de cada atributo. El dominio corresponde al conjunto de valores válidos que un atributo puede almacenar y constituye un mecanismo para preservar la calidad y la consistencia de la información desde las primeras etapas del diseño.
              p.mb-0 Definir dominios adecuados permite prevenir errores durante el registro de datos y facilita la implementación posterior de reglas de validación en la base de datos. Por ejemplo, el atributo #[b Salario] de la entidad #[b Trabajador] puede definirse como un número real positivo, lo que impide registrar valores negativos o incompatibles con las reglas del negocio.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img14.png', alt='' style="width: 500px").m-auto
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: modelado conceptual de la entidad Paciente en SaludGlobal EPS
          p.mb-5 Durante el levantamiento de requisitos, la organización #[b SaludGlobal EPS] identifica la necesidad de administrar la información clínica y demográfica de sus pacientes. Entre los requerimientos definidos se encuentran el almacenamiento de la dirección detallada para apoyar la distribución de medicamentos, el registro de múltiples números telefónicos de contacto y el cálculo automático de la edad a partir de la fecha de nacimiento. Con base en estos requerimientos, el equipo de diseño elabora el siguiente modelo conceptual para la entidad #[b Paciente].
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Modelado conceptual de la entidad Paciente
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Componente MER
                  th.ajuste-border-tabla.texto-left Identificación
                  th.ajuste-border-tabla.texto-left Justificación
                  th.texto-left Clasificación
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Entidad
                  td.ajuste-border-tabla.texto-left Paciente
                  td.ajuste-border-tabla.texto-left Representa el conjunto de personas que reciben servicios de salud y sobre las cuales se administra información clínica y administrativa.
                  td.texto-left Entidad fuerte
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Atributo
                  td.ajuste-border-tabla.texto-left Documento de identidad
                  td.ajuste-border-tabla.texto-left Identifica de forma única a cada paciente dentro del sistema.
                  td.texto-left Clave primaria (PK), atributo simple y monovaluado
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Atributo
                  td.ajuste-border-tabla.texto-left Dirección de contacto
                  td.ajuste-border-tabla.texto-left Permite registrar información detallada de ubicación, como tipo de vía, número, barrio y ciudad, necesaria para procesos de georreferenciación y distribución de medicamentos.
                  td.texto-left Atributo compuesto
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Atributo
                  td.ajuste-border-tabla.texto-left Números telefónicos
                  td.ajuste-border-tabla.texto-left Permite almacenar varios números de contacto asociados a un mismo paciente.
                  td.texto-left Atributo multivaluado
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Atributo
                  td.ajuste-border-tabla.texto-left Fecha de nacimiento
                  td.ajuste-border-tabla.texto-left Registra la fecha de nacimiento del paciente y sirve como dato base para otros cálculos.
                  td.texto-left Atributo simple y monovaluado
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Atributo
                  td.ajuste-border-tabla.texto-left Edad
                  td.ajuste-border-tabla.texto-left Se obtiene automáticamente a partir de la fecha de nacimiento y de la fecha actual, evitando almacenar un dato que cambia con el tiempo.
                  td.texto-left Atributo derivado
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Dominio
                  td.ajuste-border-tabla.texto-left Estado de afiliación
                  td.ajuste-border-tabla.texto-left Restringe los valores permitidos a #[b Activo], #[b Inactivo], #[b En mora] y #[b Fallecido], garantizando la consistencia de la información registrada.
                  td.texto-left Restricción de dominio
          .ajustar-final-contenedor
            .bg-2(data-aos="flip-up")
              .px-5
                .row.align-items-center
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
                  .col-xl.text-white
                    p.mb-0 Este ejemplo integra varios de los conceptos fundamentales del Modelo Entidad-Relación. La entidad #[b Paciente] corresponde a una entidad fuerte; el #[b Documento de identidad] actúa como clave primaria; la #[b Dirección de contacto] representa un atributo compuesto; los #[b Números telefónicos] corresponden a un atributo multivaluado; la #[b Edad] se modela como un atributo derivado, y el #[b Estado de afiliación] incorpora una restricción de dominio que limita los valores permitidos. En conjunto, estas decisiones contribuyen a construir un modelo conceptual consistente, preparado para su transformación al modelo lógico y a la implementación posterior de la base de datos.

</template>

<script>
export default {
  name: 'Tema3',
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
