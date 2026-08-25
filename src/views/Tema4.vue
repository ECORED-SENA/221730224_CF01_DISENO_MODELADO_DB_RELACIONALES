<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Semántica avanzada y extensiones en el modelado conceptual (MERE)
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-5(data-aos="fade-right")
            p.mb-0 El modelado conceptual de bases de datos no se limita a identificar entidades y atributos. También requiere representar las relaciones existentes entre los diferentes elementos del sistema y las reglas de negocio que determinan su comportamiento. A medida que aumenta la complejidad de los procesos organizacionales, resulta necesario incorporar mecanismos que permitan expresar con mayor precisión las asociaciones, restricciones y jerarquías presentes en la información.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img1.png', alt='' style="width: 300px").m-auto
        .col-xl
          .caja-3.ajuste-1(data-aos="fade-left")
            p.mb-0 El #[b Modelo Entidad-Relación Extendido (MERE)] amplía las capacidades del Modelo Entidad-Relación (MER) al incorporar conceptos como la generalización, la especialización, la agregación y otras abstracciones que facilitan la representación de escenarios más complejos. Estas extensiones permiten construir modelos conceptuales más cercanos a la realidad del negocio y simplifican su posterior transformación al modelo lógico.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 El concepto de relación: grado, cardinalidad y restricciones de participación
      .bg-6
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-4.ajuste-1(data-aos="fade-right")
                .row
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px").m-auto
                  .col-xl
                    p.mb-0 Una relación representa la asociación lógica entre dos o más entidades dentro de un modelo conceptual. Gracias a estas asociaciones es posible representar la forma en que interactúan los diferentes elementos de un sistema de información y reflejar las reglas de negocio que rigen el funcionamiento de una organización. Para describir correctamente una relación, es necesario analizar tres aspectos fundamentales: el #[b grado], la #[b cardinalidad] y las #[b restricciones de participación]. Estos elementos permiten definir cómo se conectan las entidades y cuáles son las condiciones que regulan dicha interacción.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img2.png', alt='' style="width: 300px").m-auto
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Grado de una relación
          p.mb-5 El #[b grado] corresponde al número de entidades que participan en una relación. De acuerdo con esta característica, las relaciones pueden clasificarse de la siguiente manera.
          TabsB.color-acento-contenido(data-aos="zoom-in").mb-5
            .py-4.py-md-5.p-5(titulo="Unaria o recursiva" icono="@/assets/curso/temas/t1/img22.svg")
              .row.align-items-center
                .col-xl-6.order-1.mb-4.mb-lg-0
                  h4 Unaria o recursiva
                  p.mb-0 Una entidad se relaciona consigo misma. Por ejemplo, en la entidad #[b Empleado], la relación #[b Supervisa] permite representar que un empleado puede supervisar a otros empleados de la misma organización.
                .col-lg-6.mb-4.mb-md-0.order-2
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 4.
                    span Ejemplo relación recursiva (unaria) de supervisión
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t4/img3.png', alt='Diagrama Entidad-Relación que representa una relación recursiva en la que una misma entidad participa dos veces con diferentes roles. El ejemplo corresponde a empleados que supervisan a otros empleados dentro de una organización. ').m-auto
            .py-4.py-md-5.p-5(titulo="Binaria" icono="@/assets/curso/temas/t1/img22.svg")
              .row.align-items-center
                .col-xl-6.order-1.mb-4.mb-lg-0
                  h4 Binaria
                  p.mb-0 Involucra exactamente dos entidades y constituye el tipo de relación más utilizado en el diseño de bases de datos. Un ejemplo es la relación entre las entidades #[b Cliente] y #[b Producto], donde un cliente realiza la compra de uno o varios productos.
                .col-lg-6.mb-4.mb-md-0.order-2
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 5.
                    span Ejemplo relación binaria entre cliente y producto
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t4/img4.png', alt='Diagrama Entidad-Relación que representa una relación binaria entre las entidades Cliente y Producto mediante una asociación de compra. Incluye las entidades, la relación y las cardinalidades que describen la interacción entre ambos elementos. ').m-auto
            .py-4.py-md-5.p-5(titulo="Ternaria o de grado superior" icono="@/assets/curso/temas/t1/img22.svg")
              .row.align-items-center
                .col-xl-6.order-1.mb-4.mb-lg-0
                  h4 Ternaria o de grado superior
                  p.mb-0 Involucra tres o más entidades dentro de una misma relación. Su utilización se justifica cuando la regla de negocio no puede representarse adecuadamente mediante varias relaciones binarias independientes.
                .col-lg-6.mb-4.mb-md-0.order-2
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 6.
                    span Ejemplo relación ternaria: inscripción
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t4/img5.png', alt='Diagrama Entidad-Relación que representa una relación ternaria entre tres entidades relacionadas mediante una única asociación. El esquema ilustra cómo una operación depende simultáneamente de los tres elementos participantes. ').m-auto
      p.mb-5 La identificación correcta del grado de una relación permite representar con mayor precisión las reglas del negocio y facilita la construcción de modelos conceptuales consistentes. Esta información será determinante durante el diseño lógico, ya que influirá en la forma como las relaciones se transforman posteriormente en tablas y restricciones dentro de la base de datos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cardinalidad de mapeo (razones de cardinalidad)
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-4.color-2.mb-3(data-aos="fade-right")
            p.mb-0 La #[b cardinalidad de mapeo] indica el número máximo de instancias de una entidad que pueden asociarse con una instancia de otra entidad mediante una relación. Este concepto permite representar las reglas de negocio y definir cómo interactúan los diferentes elementos del modelo conceptual.
          p.mb-0 De acuerdo con el número de ocurrencias permitidas, las relaciones pueden clasificarse de la siguiente manera.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img6.png', alt='' style="width: 300px").m-auto
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Uno a uno (1:1)
                  p.mb-0 Cada instancia de una entidad se relaciona con una única instancia de la otra entidad y viceversa. Un ejemplo es la relación entre #[b Instructor] y #[b Centro de formación], cuando cada centro es dirigido por un solo instructor y cada instructor dirige únicamente un centro.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 7.
                    span Ejemplo relación uno a uno (1:1)
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t4/img7.png', alt='Diagrama Entidad-Relación que ejemplifica una relación de cardinalidad uno a uno entre dos entidades. Cada registro de una entidad se asocia únicamente con un registro de la otra entidad. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Uno a varios (1:N)
                  p.mb-0 Una instancia de una entidad puede relacionarse con varias instancias de la otra, mientras que cada instancia de esta última solo puede asociarse con una de la primera. Por ejemplo, un #[b Grupo de formación] puede estar conformado por varios #[b Aprendices], pero cada aprendiz pertenece a un solo grupo.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 8.
                    span Ejemplo relación uno a varios (1:N)
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t4/img8.png', alt='Diagrama Entidad-Relación que representa una relación de cardinalidad uno a varios. Un registro de la entidad principal puede asociarse con múltiples registros de la entidad relacionada, mientras que cada uno de estos pertenece a un solo registro principal. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Varios a varios (N:M)
                  p.mb-0 Varias instancias de una entidad pueden relacionarse con varias instancias de la otra. Por ejemplo, un #[b Aprendiz] puede desarrollar varios #[b Resultados de aprendizaje], y un mismo resultado puede estar asociado a diferentes aprendices. En este tipo de relación es común que existan atributos propios de la asociación, como la #[b calificación final], la #[b fecha de evaluación] o el #[b porcentaje de asistencia], los cuales describen la relación y no a las entidades de forma independiente.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 9.
                    span Ejemplo relación varios a varios (N:M)
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t4/img9.png', alt='Diagrama Entidad-Relación que representa una relación de cardinalidad varios a varios entre dos entidades. Cada registro puede asociarse con múltiples registros de la otra entidad, generalmente mediante una entidad o tabla intermedia. ').m-auto
      .bg-2(data-aos="flip-up").mb-5
        .px-5
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
            .col-xl.text-white
              p.mb-0 La correcta identificación de la cardinalidad facilita la representación de las reglas de negocio y constituye un paso fundamental para la transformación del modelo conceptual en el modelo lógico.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Restricciones de participación (cardinalidad mínima)
      p.mb-5 Además de establecer el número máximo de asociaciones entre entidades, el modelo conceptual define si la participación de una entidad en una relación es obligatoria u opcional. Esta condición se conoce como #[b restricción de participación] o #[b cardinalidad mínima]. Las restricciones de participación pueden clasificarse de la siguiente manera:
      TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Participación total u obligatoria")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Participación total u obligatoria
              p.mb-0 Todas las instancias de la entidad deben participar al menos una vez en la relación. La cardinalidad mínima es #[b 1.] Por ejemplo, todo #[b Envío] debe estar asociado obligatoriamente a un #[b Cliente] que realiza la solicitud.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t4/img10.svg", alt="" style="max-width: 120px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Participación parcial u opcional")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Participación parcial u opcional
              p.mb-0 Las instancias de la entidad pueden participar o no en la relación. La cardinalidad mínima es #[b 0]. Por ejemplo, un #[b Cliente] puede estar registrado en el sistema sin haber realizado todavía ninguna #[b Compra].
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t4/img11.svg", alt="" style="max-width: 120px").m-auto
      .bg-2(data-aos="flip-up").mb-0
        .px-5
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
            .col-xl.text-white
              p.mb-0 La definición de la cardinalidad y de las restricciones de participación permite representar con mayor precisión las reglas de negocio de una organización. Estos elementos sirven de base para construir modelos conceptuales consistentes y facilitan la implementación posterior de las relaciones y restricciones de integridad en la base de datos relacional.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Extensiones del Modelo (MERE): jerarquías de generalización y especialización
      .bg-6
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-4(data-aos="fade-right").mb-3
                .row
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px").m-auto
                  .col-xl
                    p.mb-0 En algunos sistemas de información, varias entidades comparten características comunes, pero también poseen atributos o comportamientos que las diferencian. En estos casos, el #[b Modelo Entidad-Relación Extendido (MERE)] incorpora mecanismos que permiten representar estas similitudes y diferencias sin duplicar información dentro del modelo conceptual.
              p.mb-0 Las principales extensiones utilizadas para este propósito son la #[b generalización] y la #[b especialización], las cuales organizan las entidades mediante jerarquías compuestas por una #[b superclase] y una o varias #[b subclases]: 
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img12.png', alt='' style="width: 450px").m-auto
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t4/img13.png", alt="" style="width: 300px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Generalización").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Es un proceso de diseño ascendente que identifica las características comunes de varias entidades para integrarlas en una entidad más general denominada #[b superclase]. Esta estrategia reduce la redundancia y facilita la organización del modelo conceptual.
                .row(titulo="Especialización").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3Es Un proceso de diseño descendente mediante el cual una #[b superclase] se divide en varias #[b subclases], de acuerdo con atributos, funciones o características particulares de cada grupo. Cada subclase incorpora propiedades específicas sin perder las características comunes definidas en la superclase.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-4.color-2.mb-3(data-aos="fade-right")
                p.mb-0 Una característica fundamental de estas jerarquías es el principio de #[b herencia], mediante el cual las subclases reciben automáticamente la clave primaria, los atributos y las relaciones definidas en la superclase. Gracias a este mecanismo, se evita la duplicación de información y se mantiene la consistencia del modelo conceptual.
              p.mb-0 Además de la herencia, las jerarquías deben definir reglas que establezcan cómo se distribuyen las instancias entre las diferentes subclases.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img14.svg', alt='' style="width: 500px").m-auto
      .bg-4
        .px-5
          .bg-slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      figure
                        img(src='@/assets/curso/temas/t4/img15.png', alt='' style="max-width: 500px").m-auto
                    .col-xl-6
                      h4 Disjunta (exclusiva)
                      p.mb-0 Cada instancia de la superclase solo puede pertenecer a una única subclase. Por ejemplo, un #[b Vehículo] puede clasificarse como #[b Automóvil] o #[b Camión], pero no como ambos al mismo tiempo.
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      figure
                        img(src='@/assets/curso/temas/t4/img16.png', alt='' style="max-width: 500px").m-auto
                    .col-xl-6
                      h4 Superpuesta (solapada)
                      p.mb-0 Una misma instancia puede pertenecer simultáneamente a varias subclases. Por ejemplo, una #[b Persona] puede desempeñar al mismo tiempo los roles de #[b Estudiante] y #[b Empleado] dentro de una institución educativa.
          p.mb-5 Las jerarquías también requieren definir si todas las instancias de la superclase deben pertenecer a alguna subclase.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-6.mb-4.mb-lg-0
              .caja-4.color-4.text-white(data-aos="fade-right")
                .row
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img17.svg', alt='' style="width: 70px").m-auto
                  .col-xl
                    h5 Total
                    p.mb-0 Todas las instancias de la superclase deben pertenecer obligatoriamente a una de las subclases definidas.
            .col-xl-6(data-aos="fade-left")
              .caja-4.color-4.text-white(data-aos="fade-right")
                .row
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img17.svg', alt='' style="width: 70px").m-auto
                  .col-xl
                    h5 Parcial
                    p.mb-0 Algunas instancias pueden permanecer únicamente en la superclase, sin pertenecer a ninguna subclase específica.
          p.mb-0 La aplicación adecuada de la generalización y la especialización permite construir modelos conceptuales más organizados, reducir la redundancia de información y representar con mayor precisión la estructura y el comportamiento de los datos dentro de una organización.
          Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Semántica de la agregación y restricciones de exclusividad en relaciones
      .bg-7
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-4.color-2.mb-3(data-aos="fade-right")
                p.mb-0 En determinadas situaciones, las reglas de negocio requieren representar relaciones de mayor complejidad que no pueden modelarse únicamente mediante entidades y asociaciones tradicionales. Para estos casos, el Modelo Entidad-Relación Extendido incorpora mecanismos como la #[b agregación] y las #[b restricciones de exclusividad], los cuales permiten representar escenarios más cercanos a la realidad organizacional.
              p La #[b agregación] consiste en tratar una relación existente entre dos entidades como si fuera una nueva entidad conceptual. Este mecanismo permite establecer nuevas relaciones sobre una asociación previamente definida, evitando estructuras excesivamente complejas y facilitando la representación de procesos empresariales. Por ejemplo, una relación entre las entidades #[b Empleado] y #[b Proyecto], denominada #[b Participa], puede convertirse en una unidad conceptual sobre la cual otra entidad, como #[b Auditoría], registre información relacionada con la participación de los empleados en cada proyecto.
              p.mb-0 Por otra parte, las #[b restricciones de exclusividad] establecen reglas que limitan las relaciones que una entidad puede mantener simultáneamente con otras entidades. Estas restricciones garantizan que el modelo conceptual refleje correctamente las políticas y condiciones establecidas por la organización:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img18.png', alt='' style="width: 400px").m-auto
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t4/img19.png", alt="" style="width: 320px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Agregación").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite representar una relación como una entidad conceptual para establecer nuevas asociaciones con otras entidades del modelo. Esta técnica facilita la representación de procesos complejos sin incrementar innecesariamente el número de relaciones.
                .row(titulo="Exclusividad en relaciones").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Define situaciones en las que una entidad puede participar en varias relaciones posibles, pero únicamente una de ellas puede estar activa en un momento determinado. Estas restricciones sirven como base para implementar posteriormente reglas de integridad dentro de la base de datos.
          .bg-2(data-aos="flip-up").mb-5
            .px-5
              .row.align-items-center
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
                .col-xl.text-white
                  p.mb-0 La utilización de estas extensiones amplía las capacidades del Modelo Entidad-Relación y permite representar estructuras organizacionales más complejas de forma clara y consistente. De esta manera, el modelo conceptual se convierte en una representación más precisa de las reglas de negocio y facilita la transición hacia las etapas posteriores del diseño de la base de datos.
      .bg-3
        .px-5
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: estructuración avanzada del MERE para LogísticaExpress S. A.
          p.mb-5 Para integrar los conceptos de generalización, especialización, agregación y restricciones de participación, considere el caso de #[b LogísticaExpress S. A.], una empresa dedicada al transporte de mercancías. Durante el levantamiento de requisitos se identificaron varias reglas de negocio que requieren el uso de las extensiones del Modelo Entidad-Relación Extendido (MERE) para representar adecuadamente la realidad operativa de la organización. Entre las principales reglas de negocio se encuentran las siguientes:
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-4.color-3.mb-3.ajuste-3(data-aos="fade-right")
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La empresa dispone de una flota de vehículos conformada por #[b camiones] y #[b motocicletas]. Cada vehículo pertenece exclusivamente a una de estas categorías. Los camiones registran la capacidad de carga y el volumen de almacenamiento, mientras que las motocicletas almacenan el cilindraje y el tipo de baúl. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Los #[b conductores] pueden operar diferentes vehículos a lo largo del tiempo y cada vehículo puede ser conducido por varios conductores. Además, es necesario registrar la fecha de asignación y las horas de conducción correspondientes a cada asignación. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Cada #[b orden de servicio] se asigna a una ruta logística específica y debe asociarse con la combinación de conductor y vehículo responsable del despacho, con el fin de garantizar la trazabilidad de la operación. 
              p.mb-0 Con base en estas reglas de negocio, el equipo de diseño elabora el siguiente modelo conceptual.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img20.png', alt='' style="width: 400px").m-auto
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 3.
            span Aplicación de las extensiones del MERE en LogísticaExpress S. A.
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Regla de negocio
                  th.ajuste-border-tabla.texto-left Componente del MERE
                  th.texto-left Aplicación en el modelo
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Clasificación de la flota de vehículos.
                  td.ajuste-border-tabla.texto-left Especialización total y disyunta
                  td.texto-left La entidad Vehículo actúa como superclase, mientras que #[b Camión] y #[b Motocicleta] corresponden a subclases. Ambas heredan la clave primaria y los atributos comunes del vehículo, además de incorporar sus atributos específicos. La especialización es total porque todo vehículo debe pertenecer a una de las subclases, y es disyunta porque un vehículo no puede clasificarse simultáneamente como camión y motocicleta.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Asignación de conductores a vehículos.
                  td.ajuste-border-tabla.texto-left Relación varios a varios (N:M)
                  td.texto-left La relación #[b Conduce] vincula las entidades #[b Conductor] y #[b Vehículo]. Esta relación incorpora atributos propios, como #[b Fecha de asignación] y #[b Horas de conducción], los cuales describen la interacción entre ambas entidades y no pertenecen de forma independiente a ninguna de ellas.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Asignación de órdenes de servicio.
                  td.ajuste-border-tabla.texto-left Agregación
                  td.texto-left La relación #[b Conduce], junto con las entidades #[b Conductor] y #[b Vehículo], se considera una unidad conceptual sobre la cual se establece la relación con la entidad #[b Orden de servicio]. De esta manera, cada orden queda asociada a la combinación específica de conductor y vehículo responsable del transporte, garantizando la trazabilidad de la operación.
      p.mb-5 Este caso evidencia cómo las extensiones del Modelo Entidad-Relación Extendido permiten representar escenarios empresariales de mayor complejidad. La aplicación de la especialización, las relaciones de cardinalidad varios a varios y la agregación facilitan la construcción de modelos conceptuales más precisos, reducen la ambigüedad en las reglas de negocio y preparan la estructura de datos para su transformación al modelo lógico e implementación en un Sistema de Gestión de Bases de Datos (SGBD).
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Figura 10.
        span Modelo E-R Extendido (MERE) del caso de uso
      figure(data-aos="zoom-in").mb-0
        img(src='@/assets/curso/temas/t4/img21.png', alt='Diagrama del Modelo Entidad-Relación Extendido que integra entidades, atributos, relaciones, cardinalidades, jerarquías de generalización y especialización, además de elementos de agregación utilizados para representar reglas de negocio complejas. ').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
