<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Introducción a los sistemas de almacenamiento y ciclo de vida
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p En el ecosistema tecnológico contemporáneo, la información se ha consolidado como el activo estratégico más valioso de las organizaciones, al constituirse en el insumo crítico para la automatización de procesos corporativos, el desarrollo de aplicaciones de #[i software] y la analítica predictiva de negocios.
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/t1/img1.svg', alt='' style="width: 70px")
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img2.png', alt='' style="width: 300px").m-auto
        .col-xl
          .caja-3.ajuste-1(data-aos="fade-left")
            p.mb-0 Para comprender con rigor metodológico el valor de las arquitecturas de datos modernas, resulta necesario analizar la evolución de las tecnologías de almacenamiento y las limitaciones que impulsaron la transición hacia los paradigmas actuales. Este recorrido permite entender cómo surgieron las bases de datos como respuesta a las necesidades de integridad, disponibilidad y gestión eficiente de la información.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Evolución histórica del almacenamiento de datos y limitaciones del enfoque tradicional
      .bg-3
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              p Durante las décadas de 1950 y 1960, el almacenamiento y procesamiento de la información se realizaba mediante el denominado #[b enfoque tradicional de sistemas de ficheros o archivos planos]. Bajo esta arquitectura descentralizada, cada departamento o aplicación administraba y estructuraba de forma independiente sus propios archivos físicos de datos, los cuales, comúnmente, se almacenaban en cintas magnéticas o tarjetas perforadas.
              .caja-4(data-aos="fade-right")
                .row
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px").m-auto
                  .col-xl
                    p.mb-0 Aunque este modelo permitió las primeras automatizaciones de los procesos informáticos, el crecimiento de las organizaciones evidenció importantes limitaciones estructurales que afectaban la calidad, consistencia y disponibilidad de la información.  El siguiente recurso corresponde a uno de los medios de almacenamiento utilizados durante los primeros años de la informática administrativa.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img4.png', alt='' style="width: 500px").m-auto
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Tarjetas perforadas para guardar datos binarios
          figure(data-aos="zoom-in").mb-5
            img(src='@/assets/curso/temas/t1/img5.png', alt='Fotografía de varias tarjetas perforadas de cartón utilizadas como medio de almacenamiento de datos en los primeros sistemas informáticos. Las tarjetas contienen filas y columnas de perforaciones que representan información codificada en formato binario. ').m-auto
      p.mb-5 Entre las principales limitaciones del enfoque tradicional se encuentran las siguientes:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img6.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Redundancia e inconsistencia de datos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La misma información se almacenaba en múltiples archivos independientes. Por ejemplo, los datos básicos de un cliente, como el nombre, la dirección corporativa y el número de contacto, podían registrarse tanto en el sistema de facturación como en el sistema de despachos. Esta duplicidad favorecía la aparición de inconsistencias cuando una actualización se realizaba en un archivo, pero no en los demás. Como consecuencia, el sistema podía contener información contradictoria, lo que afectaba la integridad de los datos y la confiabilidad de los procesos organizacionales.
            .row(titulo="Dependencia físico-lógica entre datos y aplicaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La estructura lógica y la organización física de los registros se definían directamente en el código fuente de cada aplicación. Aspectos como el tamaño de los campos, el tipo de codificación de caracteres o la disposición de los registros en el disco estaban estrechamente ligados al software. En consecuencia, cualquier modificación en la estructura de un archivo físico, por ejemplo, la ampliación de un campo de identificación de ocho a diez dígitos para cumplir una nueva disposición legal, obligaba a modificar, recompilar y redistribuir todas las aplicaciones que interactuaban con dicho archivo. Esta dependencia incrementaba los costos de mantenimiento del #[i software] y reducía la capacidad de adaptación del sistema informático frente a los cambios del entorno empresarial.
            .row(titulo="Limitaciones operativas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los archivos planos carecían de mecanismos centralizados para administrar el acceso concurrente, controlar la seguridad y recuperar la información ante fallos. Si dos aplicaciones modificaban simultáneamente un mismo registro, podían producirse conflictos de sobreescritura que comprometían la integridad de los datos. Además, la ausencia de controles centralizados dificultaba la implementación de políticas de seguridad para restringir el acceso a usuarios específicos. Finalmente, una interrupción ocasionada por una falla eléctrica o un error de hardware podía dejar los archivos en un estado inconsistente o parcialmente actualizado, sin mecanismos automáticos para recuperar la información.
      .bg-2(data-aos="flip-up")
        .px-5
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
            .col-xl.text-white
              p.mb-0 Como resultado de estas limitaciones, el enfoque basado en archivos planos dejó de responder a las crecientes necesidades de las organizaciones. La redundancia de la información, la dependencia entre datos y aplicaciones, así como las dificultades para garantizar la integridad, la seguridad y la recuperación de los datos, impulsaron el desarrollo del paradigma de las bases de datos, tema que se abordará en el siguiente apartado.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Archivos planos en la actualidad
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-4.mb-3(data-aos="fade-right")
            .row
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img8.svg', alt='' style="width: 80px").m-auto
              .col-xl
                p.mb-0 Aunque los archivos planos surgieron en las primeras etapas de la informática, continúan siendo una alternativa útil para el almacenamiento y el intercambio de información en distintos entornos tecnológicos. Su simplicidad, compatibilidad y facilidad de procesamiento hacen que todavía sean ampliamente utilizados en procesos de integración y administración de datos.
          p.mb-0 Un archivo plano de datos, como un archivo .txt o .csv, permite almacenar y transferir información de forma sencilla, sin formatos ni estructuras complejas. A pesar de tratarse de una tecnología con varias décadas de existencia, sigue siendo un recurso fundamental en la informática moderna debido a su compatibilidad universal y ligereza (Sipecom, 2026). Entre sus principales usos en la actualidad se encuentran los siguientes:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img9.png', alt='' style="width: 500px").m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Migración de datos
                  p.mb-0.text-center Facilita la transferencia de información entre sistemas heredados y plataformas más recientes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Cargas masivas de información
                  p.mb-0.text-center Permite importar grandes volúmenes de productos, clientes o usuarios a aplicaciones y plataformas web.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Integración de sistemas
                  p.mb-0.text-center Favorece el intercambio de información entre aplicaciones desarrolladas por diferentes fabricantes o tecnologías.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Copias de seguridad
                  p.mb-0.text-center Almacena respaldos históricos de información en archivos de bajo tamaño y fácil conservación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Análisis de datos
                  p.mb-0.text-center Facilita la importación de grandes volúmenes de datos sin procesar en herramientas de análisis, como Python, R o Excel.
          .bg-2(data-aos="flip-up")
            .px-5
              .row.align-items-center
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
                .col-xl.text-white
                  p.mb-0 Como puede apreciarse, los archivos planos continúan desempeñando un papel importante en la informática actual, especialmente en procesos de migración, integración de sistemas, respaldo de información y análisis de datos, donde su simplicidad y compatibilidad representan ventajas significativas.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Emergencia del paradigma de bases de datos y conceptualización de los SGBD
      p.mb-5 Con el propósito de superar las limitaciones del sistema tradicional de archivos, la ingeniería de software dio paso al paradigma de las #[b bases de datos (BD)]. Una base de datos se define como una colección integrada, estructurada y compartida de datos lógicamente relacionados, acompañada de una descripción de dichos datos, denominada #[b metadatos], diseñada para satisfacer las necesidades de información de una organización.
      .bg-4
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .row.align-items-center.mb-3
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img16.svg', alt='' style="width: 190px").m-auto
                .col-xl
                  .caja-4.color-1.ajuste-2(data-aos="zoom-in")
                    p.mb-0 A diferencia de los ficheros dispersos, una base de datos centraliza la información en un repositorio lógico común, al que pueden acceder simultáneamente múltiples aplicaciones y diferentes perfiles de usuarios. Esta organización mejora la consistencia de los datos, facilita su administración y reduce la duplicidad de la información.
              p.mb-0 La administración, la seguridad y el acceso eficiente a este repositorio no dependen de las aplicaciones individuales, sino de un #[b Sistema de Gestión de Bases de Datos (SGBD)] o #[i Database Management System (DBMS)]. El SGBD actúa como una capa intermedia entre la base de datos almacenada físicamente, los usuarios y las aplicaciones que utilizan la información. Su función consiste en proporcionar un entorno seguro y eficiente para almacenar, recuperar y modificar los datos. Para cumplir este propósito, un SGBD incorpora diferentes lenguajes especializados que permiten definir y manipular la información de la base de datos:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img17.png', alt='' style="width: 500px").m-auto
          .bg-slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      figure
                        img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
                    .col-xl-6
                      h4 Lenguaje de Definición de Datos (#[i DDL, Data Definition Language])
                      p.mb-0 Permite definir la estructura lógica de la base de datos, crear tablas, establecer restricciones de integridad y configurar mecanismos de seguridad y acceso.
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      figure
                        img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
                    .col-xl-6
                      h4 Lenguaje de Manipulación de Datos (#[i DML, Data Manipulation Language])
                      p.mb-0 Permite consultar, insertar, actualizar y eliminar los datos almacenados en la base de datos.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p Una de las principales ventajas de implementar un SGBD es la #[b independencia de los datos]. Esto significa que la representación lógica de la información permanece separada de la forma en que los datos se almacenan físicamente en los dispositivos de almacenamiento.
              .caja-4.color-2(data-aos="fade-right")
                .row
                  .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px").m-auto
                  .col-xl
                    p.mb-0 Gracias a esta independencia, el administrador de la base de datos puede reorganizar los archivos físicos, modificar los métodos de indexación o migrar el #[i hardware] del servidor para optimizar el rendimiento del sistema, sin necesidad de reescribir o recompilar las aplicaciones que utilizan la información almacenada en el SGBD.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img20.png', alt='' style="width: 500px").m-auto
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Arquitectura de tres niveles ANSI-SPARC y terminología fundamental
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img21.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Con el propósito de garantizar la independencia de los datos y permitir que diferentes usuarios accedan a la información según sus necesidades, el comité #[i Standards Planning and Requirements Committee] (ANSI-SPARC) propuso una arquitectura de referencia que organiza el diseño de un Sistema de Gestión de Bases de Datos (SGBD) en tres niveles lógicos de abstracción. Esta arquitectura facilita la administración de la información, mejora la seguridad y permite que cada usuario interactúe únicamente con los datos que requiere. Los tres niveles de la arquitectura ANSI-SPARC se describen a continuación:
      TabsB.color-acento-contenido(data-aos="zoom-in").mb-5
        .py-4.py-md-5.p-5(titulo="Nivel externo o de vistas" icono="@/assets/curso/temas/t1/img22.svg")
          .row.align-items-center
            .col-xl-6.order-2
              h4 Nivel externo o de vistas
              p.mb-0 Es la capa más cercana a los usuarios finales. Define diferentes vistas de la base de datos según el perfil de cada usuario. Por ejemplo, en un sistema de información educativa, el aprendiz puede consultar únicamente sus calificaciones e historial académico, mientras que el instructor dispone de permisos para registrar y modificar dicha información. De esta manera, cada usuario accede exclusivamente a los datos que le corresponden.
            .col-lg-6.order-1.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/img23.png', alt="" style="max-width: 450px").m-auto
        .py-4.py-md-5.p-5(titulo="Nivel conceptual" icono="@/assets/curso/temas/t1/img22.svg")
          .row.align-items-center
            .col-xl-6.order-2
              h4 Nivel conceptual
              p.mb-0 Representa la estructura lógica global de la base de datos, sin considerar los detalles de almacenamiento físico. En este nivel se define qué información se almacena, cómo se relacionan los datos y cuáles son las restricciones de integridad que debe cumplir el sistema. Constituye el núcleo del proceso de modelado relacional.
            .col-lg-6.mb-4.mb-lg-0.order-1
              figure
                img(src='@/assets/curso/temas/t1/img24.png', alt="" style="max-width: 450px").m-auto
        .py-4.py-md-5.p-5(titulo="Nivel interno o físico" icono="@/assets/curso/temas/t1/img22.svg")
          .row.align-items-center
            .col-xl-6.order-2
              h4 Nivel interno o físico
              p.mb-0 Corresponde al nivel de menor abstracción y describe la forma en que los datos se almacenan físicamente en los dispositivos de hardware. Incluye aspectos como la asignación de espacio en memoria, la organización de los archivos, los algoritmos de compresión y la configuración de los índices de búsqueda, utilizados para optimizar el acceso a la información.
            .col-lg-6.mb-4.mb-lg-0.order-1
              figure
                img(src='@/assets/curso/temas/t1/img25.png', alt="" style="max-width: 450px").m-auto
      p.mb-5 Para comprender el funcionamiento de esta arquitectura, es necesario familiarizarse con algunos conceptos fundamentales utilizados en el diseño y administración de bases de datos: 
      TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Esquema de base de datos")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Esquema de base de datos
              p.mb-0 Es la descripción formal de la estructura lógica de la base de datos. Se diseña durante las primeras etapas del proyecto y permanece relativamente estable durante el ciclo de vida del sistema. Define las tablas, los atributos, las relaciones y las restricciones de integridad que conforman la estructura del repositorio de datos.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t1/img26.svg", alt="" style="max-width: 120px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Instancia de base de datos")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Instancia de base de datos
              p.mb-0 Corresponde al conjunto de datos almacenados en un momento determinado. A diferencia del esquema, la instancia cambia continuamente como resultado de las operaciones de inserción, actualización y eliminación realizadas por los usuarios o las aplicaciones.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t1/img27.svg", alt="" style="max-width: 120px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Metadatos")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Metadatos
              p.mb-0 Son los datos que describen otros datos. Se almacenan en el catálogo o diccionario de datos del SGBD e incluyen información sobre las tablas, los tipos de datos, la longitud de los campos, las restricciones de integridad y otros elementos necesarios para administrar la base de datos.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t1/img28.svg", alt="" style="max-width: 120px").m-auto
      .bg-2(data-aos="flip-up")
        .px-5
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
            .col-xl.text-white
              p.mb-0 El modelo ANSI-SPARC continúa siendo un referente para comprender la separación entre la estructura lógica y el almacenamiento físico de la información. Esta organización favorece la independencia de los datos, simplifica el mantenimiento de las aplicaciones y facilita la administración de los sistemas de bases de datos en entornos organizacionales.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Propiedades ACID y robustez transaccional en entornos corporativos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-4.color-2.mb-3(data-aos="fade-right")
            .row
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px").m-auto
              .col-xl
                p.mb-0 Para que una base de datos pueda utilizarse de forma confiable en sectores como el financiero, el logístico o el de la salud, el Sistema de Gestión de Bases de Datos (SGBD) debe garantizar la integridad y la disponibilidad de la información, incluso cuando múltiples usuarios ejecutan operaciones simultáneamente o se presentan fallas inesperadas. Este nivel de confiabilidad se fundamenta en el cumplimiento de las propiedades #[b ACID], un conjunto de principios que garantizan la correcta ejecución de las transacciones.
          p.mb-0 Una #[b transacción] es una unidad lógica de trabajo compuesta por una secuencia de operaciones de manipulación de datos, como consultas, inserciones, actualizaciones o eliminaciones. Estas operaciones deben ejecutarse por completo o, en caso de presentarse algún error, anularse totalmente para preservar la integridad de la información. Las propiedades ACID se describen a continuación: 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img29.png', alt='' style="width: 500px").m-auto
      TabsB.color-acento-contenido(data-aos="zoom-in").mb-5
        .py-4.py-md-5.p-5(titulo="Atomicidad" icono="@/assets/curso/temas/t1/img30.svg")
          .row.align-items-center
            .col-xl-6.order-2
              h4 Atomicidad
              p.mb-0 Garantiza que una transacción se ejecute como una unidad indivisible. El SGBD registra cada operación en un #[i log] transaccional y, si ocurre un fallo antes de finalizar el proceso, ejecuta un #[i rollback] o reversión transaccional para deshacer todos los cambios realizados. De esta manera, la base de datos retorna al estado en que se encontraba antes del inicio de la transacción. En otras palabras, la transacción se completa en su totalidad o no produce ningún cambio.
            .col-lg-6.mb-4.mb-lg-0.order-1
              figure
                img(src='@/assets/curso/temas/t1/img31.png', alt="" style="max-width: 450px").m-auto
        .py-4.py-md-5.p-5(titulo="Consistencia" icono="@/assets/curso/temas/t1/img30.svg")
          .row.align-items-center
            .col-xl-6.order-2
              h4 Consistencia
              p.mb-0 Asegura que toda transacción lleve la base de datos desde un estado válido hasta otro estado igualmente válido. Durante este proceso, el SGBD verifica el cumplimiento de las restricciones de integridad, como la unicidad de las llaves primarias, la correspondencia de las llaves foráneas y las reglas de validación de los datos. Si alguna de estas condiciones no se cumple, la transacción es cancelada y los cambios no se almacenan.
            .col-lg-6.mb-4.mb-lg-0.order-1
              figure
                img(src='@/assets/curso/temas/t1/img31.png', alt="" style="max-width: 450px").m-auto
        .py-4.py-md-5.p-5(titulo="Aislamiento" icono="@/assets/curso/temas/t1/img30.svg")
          .row.align-items-center
            .col-xl-6.order-2
              h4 Aislamiento
              p.mb-0 Garantiza que las transacciones ejecutadas de manera simultánea no interfieran entre sí. Para lograrlo, el SGBD utiliza mecanismos de bloqueo de registros (#[i locking]) o técnicas de control de concurrencia. Mientras una transacción modifica un registro, las demás deben esperar hasta que la operación finalice. De esta forma, cada transacción se ejecuta como si fuera la única que utiliza la base de datos en ese momento.
            .col-lg-6.mb-4.mb-lg-0.order-1
              figure
                img(src='@/assets/curso/temas/t1/img32.png', alt="" style="max-width: 450px").m-auto
        .py-4.py-md-5.p-5(titulo="Durabilidad" icono="@/assets/curso/temas/t1/img30.svg")
          .row.align-items-center
            .col-xl-6.order-2
              h4 Durabilidad
              p.mb-0 Establece que, una vez confirmada una transacción mediante la operación #[i commit], los cambios realizados se vuelven permanentes. Incluso si ocurre una falla del #[i hardware], una interrupción del suministro eléctrico o un error del sistema operativo, el SGBD recupera la información utilizando el log transaccional, lo que garantiza que los datos confirmados no se pierdan.
            .col-lg-6.mb-4.mb-lg-0.order-1
              figure
                img(src='@/assets/curso/temas/t1/img33.png', alt="" style="max-width: 450px").m-auto
      .bg-2.mb-5(data-aos="flip-up")
        .px-5
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
            .col-xl.text-white
              p.mb-0 El cumplimiento de estas propiedades permite que los sistemas de bases de datos mantengan la integridad, la consistencia y la disponibilidad de la información, incluso en entornos donde se procesan grandes volúmenes de transacciones de manera simultánea. Por esta razón, las propiedades ACID constituyen uno de los fundamentos más importantes para el diseño y la administración de bases de datos en el sector productivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso en el sector productivo: sistema transaccional de BancoFinanciero S. A.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-4.color-3.mb-3(data-aos="fade-right")
            p.mb-0 Para comprender la importancia de las propiedades ACID en un entorno real, se presenta el caso de una entidad bancaria que procesa diariamente millones de operaciones de depósitos, retiros y transferencias mediante cajeros automáticos, aplicaciones móviles y oficinas de atención al cliente. En este contexto, la correcta ejecución de las transacciones es fundamental para garantizar la integridad de la información y la confianza de los usuarios.
          p.mb-0 Considere la siguiente regla de negocio: un cliente desea transferir #[b $ 500.000] desde la #[b Cuenta A] hacia la #[b Cuenta B]. Desde la perspectiva de un sistema de bases de datos, esta operación no corresponde a una única acción, sino a una transacción conformada por varias operaciones de manipulación de datos (DML), las cuales deben ejecutarse en un orden específico:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img36.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-5.color-4.text-white.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img37.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Operación 1. Lectura
              p.mb-0.text-center Verificar que la Cuenta A disponga de un saldo igual o superior a #[b $ 500.000].
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img38.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Operación 2. Modificación
              p.mb-0.text-center Debitar #[b $ 500.000] del saldo disponible en la Cuenta A.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img38.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Operación 3. Lectura
              p.mb-0.text-center Validar que la Cuenta B exista y se encuentre activa en el sistema.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img38.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Operación 4. Modificación
              p.mb-0.text-center Acreditar #[b $ 500.000] al saldo de la Cuenta B.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-4.color-5.mb-3(data-aos="fade-right")
            p.mb-0 Si esta operación se realizara mediante un sistema basado en archivos planos y ocurriera una interrupción del suministro eléctrico inmediatamente después de ejecutar la segunda operación, el dinero sería descontado de la Cuenta A, pero nunca llegaría a la Cuenta B. Como consecuencia, la información quedaría inconsistente, se producirían diferencias contables y el banco tendría que enfrentar reclamaciones por parte de sus clientes.
          p.mb-0 Si durante la ejecución de estas operaciones ocurriera una interrupción del suministro eléctrico inmediatamente después de realizar el débito en la Cuenta A, el dinero sería descontado, pero no alcanzaría a acreditarse en la Cuenta B. Como consecuencia, la información quedaría inconsistente, se generarían diferencias contables y la entidad tendría que atender reclamaciones por parte de los clientes. Este tipo de situaciones evidencia la importancia de contar con mecanismos que garanticen la confiabilidad de las transacciones:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img39.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img40.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Atomicidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Agrupa las cuatro operaciones en una única transacción. Si ocurre una falla antes de finalizar el proceso, el SGBD ejecuta un proceso de #[i rollback], revierte todos los cambios realizados y restablece la base de datos al estado anterior al inicio de la transacción.
            .row(titulo="Consistencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Garantiza que la transferencia solo se complete cuando se cumplen todas las reglas de integridad definidas. Por ejemplo, impide ejecutar la operación si la Cuenta A no dispone de saldo suficiente o si la Cuenta B no existe o se encuentra inactiva.
            .row(titulo="Aislamiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Evita que otras transacciones consulten o modifiquen la información mientras la transferencia está en ejecución. De esta manera, ningún usuario accede a saldos parcialmente actualizados ni a estados intermedios que puedan generar inconsistencias.
            .row(titulo="Durabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Garantiza que, una vez confirmada la transferencia mediante la operación commit, los cambios permanezcan almacenados de forma permanente. Incluso si ocurre una falla del #[i hardware] o del sistema, el SGBD utiliza sus mecanismos de recuperación para conservar la información previamente confirmada.
      .ajustar-final-contenedor
        .bg-2(data-aos="flip-up")
          .px-5
            .row.align-items-center
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img7.png', alt='' style="width: 74px").m-auto
              .col-xl.text-white
                p.mb-0 Como puede apreciarse, las propiedades ACID permiten que las transacciones se ejecuten de forma segura, íntegra y confiable. Gracias a estos principios, los Sistemas de Gestión de Bases de Datos pueden procesar grandes volúmenes de operaciones simultáneas, preservar la consistencia de la información y garantizar la continuidad de los procesos críticos en organizaciones del sector productivo.

</template>

<script>
export default {
  name: 'Tema1',
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
