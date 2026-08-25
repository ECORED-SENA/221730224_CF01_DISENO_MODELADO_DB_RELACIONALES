export default {
  global: {
    Name: 'Planificación y modelado conceptual y lógico de estructuras de datos',
    Description:
      'Este componente capacita al aprendiz en la ingeniería de datos inicial, abarcando desde la gestión del proyecto hasta la transformación relacional. Mediante la estructuración de planes de trabajo y el dominio del Modelo Entidad-Relación y esquemas lógicos, el estudiante resolverá problemas del entorno productivo, garantizando que las estructuras tecnológicas diseñadas respondan fielmente a los requerimientos y reglas del negocio corporativo.  ',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a los sistemas de almacenamiento y ciclo de vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Evolución histórica del almacenamiento de datos y limitaciones del enfoque tradicional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Archivos planos en la actualidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Emergencia del paradigma de bases de datos y conceptualización de los SGBD',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Arquitectura de tres niveles ANSI-SPARC y terminología fundamental',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Propiedades ACID y robustez transaccional en entornos corporativos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Planificación técnica y gestión de proyectos de diseño de estructuras de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Metodologías de planificación y el ciclo de vida del desarrollo de <i>software</i> (CVDS)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Elaboración técnica del plan de trabajo: actividades, secuenciación y dependencias',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Herramientas de gestión y diagramas de planificación: Gantt y estimación de recursos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Modelado conceptual de datos: componentes esenciales del Modelo Entidad-Relación (MER)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Teoría de conjuntos y conceptualización de entidades fuertes y débiles',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Taxonomía exhaustiva de atributos: simples, compuestos, multivaluados y derivados',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Teoría formal de claves para la integridad semántica de los datos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Restricción de dominio de un atributo',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Semántica avanzada y extensiones en el modelado conceptual (MERE)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'El concepto de relación: grado, cardinalidad y restricciones de participación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Extensiones del modelo (MERE): jerarquías de generalización y especialización',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Semántica de la agregación y restricciones de exclusividad en relaciones',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Ingeniería de <i>software</i> relacional: metodología de transformación lógica y herramientas CASE',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Arquitectura del modelo lógico relacional y la teoría de Codd',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Reglas de transformación formal del MER/MERE al Modelo Relacional de tablas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Criterios de selección e Ingeniería de <i>Software</i> Asistida por Computadora (Herramientas CASE)',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Atributos',
      significado: 'Propiedades descriptivas de una entidad o relación que poseen una semántica y un valor específico para cada instancia de la misma.'
    },
    {
      termino: 'Clave primaria (PK)',
      significado: 'Identificador único y obligatorio seleccionado por el diseñador para asegurar que cada instancia de una entidad sea distinguible de todas las demás.'
    },
    {
      termino: 'DBA',
      significado: 'Siglas de Database Administrator (Administrador de Bases de Datos), perfil profesional responsable de la gestión, mantenimiento y configuración técnica de los sistemas de datos.'
    },
    {
      termino: 'Entidad',
      significado: 'Cualquier objeto, persona, lugar, concepto o evento del mundo real que posee una existencia independiente y sobre el cual la organización necesita almacenar información.'
    },
    {
      termino: 'Esquema de BD',
      significado: 'Descripción formal y global de la estructura lógica de la base de datos, que actúa como el esqueleto analítico del sistema.'
    },
    {
      termino: 'Herramientas CASE',
      significado: 'Soluciones de software especializado (Computer-Aided Software Engineering) que automatizan la diagramación, transformación lógica y generación de código de bases de datos.'
    },
    {
      termino: 'Llave foránea (FK)',
      significado: 'Mecanismo de integridad referencial donde la clave primaria de una tabla se replica en otra para establecer un vínculo lógico entre ambas estructuras.'
    },
    {
      termino: 'Metadatos',
      significado: 'Definidos estrictamente como datos acerca de los datos; son las descripciones lógicas de la estructura almacenadas en el catálogo o diccionario de datos del sistema.'
    },
    {
      termino: 'Propiedades ACID',
      significado: 'Estándar de robustez transaccional que garantiza la invulnerabilidad de la información mediante la Atomicidad, Consistencia, Aislamiento y Durabilidad.'
    },
    {
      termino: 'Script',
      significado: 'Conjunto de instrucciones estructuradas en lenguaje SQL (generalmente DDL) generado de forma automatizada para crear tablas, claves y restricciones en un motor de base de datos.'
    },
    {
      termino: 'SGBD',
      significado: '<i>Software</i> de alta ingeniería que actúa como interfaz entre la base de datos física, los usuarios y las aplicaciones, centralizando la administración y seguridad de los datos.'
    },
    {
      termino: 'Triggers',
      significado: 'Denominados también disparadores, son reglas de verificación estricta que se implementan para impedir la corrupción de la lógica del negocio ante acciones específicas.'
    },
    {
      termino: 'Tupla de información',
      significado: 'Constituye cada una de las filas individuales (registros) que componen una relación o tabla, representando una ocurrencia o instancia particular de los datos.'
    }
  ],
  referencias: [
    {
      referencia: 'CEPETEL. (2023). Introducción a bases de datos y programación SQL.',
      link: 'https://www.cepetel.org.ar/wp-content/uploads/2024/02/Introduccion-a-Bases-de-Datos-y-Programacion-SQL.pdf'
    },
    {
      referencia: 'Camps Paré, R., Casillas Santillán, L., Costal Costa, D., Ginestà, M., Martín Escofet, C., & Pérez Mora, O. (2024). Software libre. Universitat Oberta de Catalunya.',
      link: 'https://www.uoc.edu/pdf/masters/oficiales/img/913.pdf'
    },
    {
      referencia: 'Casas Roma, J. (2013). Introducción al diseño de bases de datos. Universitat Oberta de Catalunya.',
      link: 'https://gc.scalahed.com/recursos/files/r161r/w25213w/M1CDN112_S1_Introduccion_al_diseno_de_bases.pdf'
    },
    {
      referencia: 'Dalmasso, C. (2022). Introducción a las bases de datos. Escuela Superior de Comercio, Universidad Nacional de Rosario.',
      link: 'https://esupcom.unr.edu.ar/bv_tics/archivos/informacion_complementaria/ofimatica/base_datos.pdf'
    },
    {
      referencia: 'Marqués, M. (2011). Bases de datos. Departament d’Enginyeria i Ciència dels Computadors, Universitat Jaume I.',
      link: ''
    },
    {
      referencia: 'SIPECOM. (2026, 12 de enero). Bases de datos: El gran salto de los archivos físicos a la nube inteligente.',
      link: 'https://sipecom.com/2026/01/12/bases-de-datos-el-gran-salto-de-los-archivos-fisicos-a-la-nube-inteligente/'
    },
    {
      referencia: 'Torregrosa García, B. (2020). Modelos de datos. Universitat Oberta de Catalunya.',
      link: 'https://openaccess.uoc.edu/server/api/core/bitstreams/cd624356-d7bd-4022-888f-e2324ee440aa/content'
    }
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
