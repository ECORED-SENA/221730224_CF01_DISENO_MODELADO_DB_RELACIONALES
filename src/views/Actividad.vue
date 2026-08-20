<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Planificación y modelado conceptual y lógico de estructuras de datos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar de manera integral el nivel de apropiación y la capacidad de análisis crítico respecto a los fundamentos de los sistemas gestores de bases de datos, las metodologías de planificación técnica. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
      {
          id: 1,
          texto:
            'Un SGBD relacional garantiza que si una transacción se interrumpe abruptamente debido a un fallo eléctrico antes de confirmarse, se aplique un mecanismo automático de rollback para devolver el repositorio al estado original. ¿Qué propiedad ACID se está aplicando de forma directa en este proceso técnico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consistencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Atomicidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Durabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'En la arquitectura de referencia de tres niveles ANSI-SPARC, ¿cuál es el nivel encargado de describir qué datos se almacenan globalmente en la organización y qué relaciones lógicas existen entre ellos, manteniendo total independencia del software específico del motor?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nivel interno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nivel físico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nivel externo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nivel conceptual.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Durante el diseño curricular de un proyecto de datos, se identifica una actividad técnica cuyas tareas subsiguientes dependen obligatoriamente de su finalización total (relación final a inicio), y cuya holgura es exactamente igual a cero. Esta tarea forma parte de:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El amortiguador de contingencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La ruta crítica del cronograma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La línea base opcional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El bloque de diseño físico inverso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cómo se define formalmente una Entidad Débil dentro del Modelo Entidad-Relación (MER)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atributo multivaluado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Atributo derivado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Atributo compuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Atributo simple.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Dentro de la jerarquía técnica de la teoría formal de claves, ¿qué es conceptualmente una clave candidata?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una superclave mínima que permite identificar unívocamente cada instancia sin atributos redundantes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La llave foránea seleccionada por el DBA para permitir conexiones N:M con tablas intermedias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cualquier atributo derivado que posea una restricción de dominios numéricos negativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El identificador físico que genera de forma automática la ingeniería inversa de una herramienta CASE.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Al transformar una asociación conceptual de tipo Varios a Varios (N:M) del MER al modelo lógico relacional, la regla técnica mandatoria exige:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Duplicar la clave primaria de cualquier lado e insertarla en la tabla opuesta como una columna simple.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generar una nueva tabla intermedia cuya clave primaria esté compuesta por las PK de las tablas base.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mapear la asociación como un atributo compuesto monovaluado dentro de la superclase.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar una de las dos entidades base para evitar anomalías lógicas de inserción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿En qué consiste la capacidad de "Ingeniería hacia adelante" (Forward Engineering) integrada en las herramientas CASE especializadas en la arquitectura de datos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En compilar el modelo lógico visual para generar el script de código fuente SQL (DDL) de creación de tablas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En compilar el modelo lógico visual para generar el script de código fuente SQL (DDL) de creación de tablas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En reestructurar el Diagrama de Gantt cuando una tarea de la ruta crítica presenta retrasos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En transformar un archivo plano COBOL en una hoja de cálculo relacional descentralizada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Dentro de la jerarquía técnica de la teoría formal de claves, ¿qué es conceptualmente una clave candidata?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una superclave mínima que permite identificar unívocamente cada instancia sin atributos redundantes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La llave foránea seleccionada por el DBA para permitir conexiones N:M con tablas intermedias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cualquier atributo derivado que posea una restricción de dominios numéricos negativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El identificador físico que genera de forma automática la ingeniería inversa de una herramienta CASE.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes opciones describe una de las limitaciones críticas del enfoque tradicional de sistemas de archivos planos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dependencia físico-lógica estrecha entre los datos organizativos y los programas de aplicación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Excesivo uso de restricciones Check de dominio matemático que ralentizan el hardware.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Imposibilidad absoluta de almacenar variables de tipo de dato de caracteres o cadenas de texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Obligatoriedad de implementar el lenguaje DDL en cada consulta operativa de los usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La restricción de disyunción (exclusividad) en una jerarquía del Modelo Entidad-Relación Extendido (MERE) determina que:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las subclases no pueden heredar de ninguna manera la clave primaria de la superclase.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una instancia de la superclase puede pertenecer simultáneamente a múltiples subclases.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una instancia de la superclase puede pertenecer a lo sumo a una sola de las subclases.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El grado de las relaciones asociadas al bloque debe ser estrictamente ternario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el rol técnico del Administrador de Bases de Datos (DBA) dentro de las fases de planificación de un plan de trabajo curricular estándar?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar de forma exclusiva el cronograma visual en Microsoft Project o ClickUp.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar las entrevistas cualitativas de requisitos con los operarios de la empresa logístico-productiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Configurar detalladamente las restricciones de integridad física, dominios y optimización de espacios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evaluar la competencia de los aprendices mediante rúbricas estáticas de formación constructivista.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Si en una relación binaria entre la entidad "ProgramaDeFormación" y la entidad "Aprendiz" (donde un programa contiene muchos aprendices), la regla estipula una participación parcial del lado del programa, esto significa matemáticamente que:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un programa de formación registrado en el sistema puede existir temporalmente con cero aprendices matriculados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un aprendiz puede matricularse en múltiples programas de formación complementaria en el mismo ciclo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La clave primaria del aprendiz debe propagarse obligatoriamente hacia la tabla del programa de formación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La base de datos arrojará un error de inconsistencia referencial si se inscribe un aprendiz nuevo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'En el modelo lógico relacional, la intersección entre una tupla y un atributo debe contener única y exclusivamente un valor atómico. Esta restricción formal obedece a:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las propiedades de durabilidad de los logs transaccionales del servidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La arquitectura de vistas del nivel externo propuesta por la organización ANSI.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las reglas de Codd y los fundamentos lógicos del paradigma relacional de datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El uso restrictivo de metodologías ágiles como Scrum o tableros Kanban.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El atributo "Dirección" de un empleado incluye dentro de su estructura los datos de calle, carrera, número de inmueble, barrio y ciudad. De acuerdo con la taxonomía del MER, este elemento se clasifica como un:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atributo Compuesto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Atributo Simple.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Atributo Derivado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Atributo Monovaluado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Cuando una relación del tipo Uno a Varios (1:N) es derivada formalmente al modelo lógico de tablas, el mecanismo de ingeniería relacional exige:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear una tabla puente intermedia para romper la dependencia cíclica de las claves.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fusionar ambas entidades en una sola estructura compuesta desprovista de claves primarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Propagar la clave primaria del lado "Uno" como llave foránea (FK) en la tabla del lado "Varios".',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Extraer las columnas descriptivas y transformarlas en atributos multivaluados indexados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'En el Modelo Entidad-Relación Extendido (MERE), ¿cómo se denomina técnicamente al principio fundamental según el cual las subclases adquieren de manera automática e implícita la clave primaria, los atributos descriptivos y las asociaciones de su superclase correspondiente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agregación semántica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Herencia de atributos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disyunción solapada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Propagación de claves.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Un centro médico gestiona la asignación de quirófanos mediante archivos independientes. El software de cirugía utiliza un archivo en el que el código de la sala médica está definido con el tipo de dato CHAR(5). Como consecuencia de la ampliación de la infraestructura física del hospital, el departamento de sistemas modifica la longitud de ese campo en el archivo de almacenamiento a CHAR(8). A partir de este cambio, la aplicación encargada de programar las citas médicas deja de funcionar y genera errores críticos de compilación. Con base en este escenario, determine qué fallo conceptual e informático, propio del enfoque tradicional de archivos, se evidencia de manera explícita.',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inconsistencia de datos por duplicación transaccional no controlada de marcas de tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dependencia físico-lógica entre los datos almacenados en disco y los programas de aplicación de software.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Violación estricta de la restricción de valores atómicos en las tuplas lógicas de Codd.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ausencia absoluta de la propiedad de aislamiento (Isolation) en consultas concurrentes de quirófanos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Durante el levantamiento de requisitos de una academia, se establece la siguiente regla de negocio: «Los instructores dictan cursos. Cada curso pertenece a un área de conocimiento y se imparte en un salón de clases». A partir de esta información, el equipo de desarrollo diseña, en el modelo entidad-relación (MER), una relación ternaria directa entre las entidades Instructor, Curso y Salón. Sin embargo, al revisar las reglas del negocio, se determina que un instructor dicta un curso específico con independencia del salón físico que la administración le asigne posteriormente. Con base en la semántica avanzada aplicada a la ingeniería de datos, determine cuál es la decisión de diseño más adecuada para corregir el modelo conceptual y optimizar su consistencia.',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la entidad Salón del modelo y transformarla en un atributo derivado dentro de la superclase Instructor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener la relación ternaria aplicando una regla check de dominio restrictivo que impida salarios negativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Romper la relación ternaria, estructurar una relación binaria 1:N entre Instructor y Curso, y utilizar la Agregación para asociar ese bloque consolidado contra la entidad Salón.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Forzar a que la clave del salón se duplique como clave primaria compuesta dentro del catálogo de metadatos de la vista externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'El software de facturación de una cadena minorista sufrió una desconexión total del servidor en el momento exacto en que un cajero registraba la venta de un televisor. Tras reiniciar el hardware e inspeccionar el repositorio relacional, el auditor técnico del negocio encontró que el valor de la venta fue registrado correctamente en la tabla contable de ingresos de la empresa; sin embargo, el inventario del televisor no fue descontado de la tabla de existencias de la bodega de despacho de la sucursal. Con base en esta situación, y considerando los principios de la robustez transaccional y los estándares de calidad del software, determine qué componente de la arquitectura de datos relacional falló de manera directa al permitir este estado de inconsistencia.',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El subsistema de almacenamiento físico de la herramienta CASE al no aplicar ingeniería inversa de índices.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La propiedad de durabilidad al guardar datos atómicos dentro de campos que correspondían a atributos compuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El motor de base de datos relacional (SGBD) al no garantizar la propiedad de Atomicidad de la transacción que agrupa las operaciones de venta y descuento de stock.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La definición de los dominios cerrados que gobernaban la propagación de claves primarias hacia la subclase de venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'El modelo relacional de una empresa de finca raíz contiene una tabla llamada PROPIEDAD con las columnas: id_propiedad (PK), tipo_inmueble, precio_venta y comision_asesor. La regla de negocio indica que la comisión del asesor se calcula siempre multiplicando de forma fija el 3% sobre el precio de venta registrado de la casa. Un desarrollador novato codifica el sistema para que cada vez que se venda un inmueble, el programa calcule matemáticamente el valor y lo guarde de forma persistente y física en la columna comision_asesor de la fila. Evaluación analítica: evaluando el escenario bajo criterios de buenas prácticas de diseño de ingeniería de datos universitaria, el modelo propuesto es deficiente porque:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Introduce una redundancia controlada de datos e incumple el concepto de Atributo Derivado, el cual debe ser calculado dinámicamente en las consultas lógicas y no almacenado físicamente en disco duro de forma estática.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Impide el funcionamiento de la ingeniería hacia adelante de herramientas CASE como MySQL Workbench.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Convierte a la columna id_propiedad en una entidad débil con dependencia semántica total disjunta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Viola la restricción de no nulos que la teoría de Codd exige de forma mandatoria sobre las llaves foráneas compuestas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        }
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
