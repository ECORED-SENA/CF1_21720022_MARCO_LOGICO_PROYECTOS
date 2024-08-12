export default {
  global: {
    componenteFormativo: 'Marco lógico de proyectos',
    descripcionCurso:
      'El Marco lógico de proyectos es una metodología estructurada para planificar, gestionar y evaluar proyectos. Este componente guía la identificación de problemas, el establecimiento de objetivos claros y la planificación de actividades. Incluye el análisis de involucrados, la construcción de árboles de problemas y objetivos, y la creación de una matriz de marco lógico, promoviendo un desarrollo sostenible.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Evaluación de la situación en el Eje Cafetero',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Árbol de problemas',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Evaluación de la situación en el Eje Cafetero',
      referencia:
        'Tecnnova UEE. (2017). Formulación Proyectos Metodología Marco Lógico y SIGP [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=YkOe47LpM8Q&ab_channel=TecnnovaUEE',
    },
    {
      tema: 'Árbol de problemas',
      referencia:
        'Legalidad Por México. (2019). 02 Árbol de Problemas [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=2flWuQoFbd4&ab_channel=LegalidadPorM%C3%A9xico',
    },
    {
      tema: 'Árbol de problemas',
      referencia:
        'COCID. (s,f.). Episodio 5 Árbol de Problema.  [Podcast]. YouTube.',
      tipo: 'Podcast',
      link: 'https://music.youtube.com/watch?v=_sFcZ6NhuQQ&feature=shared',
    },
    {
      tema: 'Árbol de problemas',
      referencia:
        'Hernández-Hernández, N., & Garnica-González, J.  (2015). Árbol de Problemas del Análisis al Diseño y Desarrollo de Productos. Conciencia Tecnológica.  (50), 38-46.',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/pdf/944/94443423006.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Árbol de problemas',
      significado:
        'herramienta que visualiza las causas y efectos de un problema central.',
    },
    {
      termino: 'Causas directas',
      significado: 'factores inmediatos que generan el problema central.',
    },
    {
      termino: 'Causas indirectas',
      significado:
        'factores subyacentes que contribuyen a las causas directas.',
    },
    {
      termino: 'Efectos directos',
      significado: 'consecuencias inmediatas del problema central.',
    },
    {
      termino: 'Efectos indirectos',
      significado: 'impactos secundarios y a largo plazo del problema central.',
    },
    {
      termino: 'Indicadores de eficacia',
      significado:
        'medidas que evalúan el logro de los objetivos del proyecto.',
    },
    {
      termino: 'Indicadores de eficiencia',
      significado:
        'medidas que evalúan los recursos utilizados para alcanzar los objetivos.',
    },
    {
      termino: 'Marco lógico',
      significado:
        'herramienta de planificación y gestión de proyectos que organiza objetivos, actividades, indicadores y supuestos.',
    },
    {
      termino: 'Medios de verificación',
      significado:
        'fuentes y métodos utilizados para comprobar el cumplimiento de los indicadores.',
    },
    {
      termino: 'Objetivo general',
      significado: 'meta amplia que el proyecto busca alcanzar.',
    },
    {
      termino: 'Objetivos específicos',
      significado:
        'metas detalladas y concretas que contribuyen al objetivo general.',
    },
    {
      termino: 'Problema central',
      significado: 'problema principal que el proyecto busca solucionar.',
    },
  ],
  referencias: [
    {
      referencia:
        'Balanzátegui, R., Sánchez, P., Dávalos, E., & Negrete, O. (2019). Evaluación de proyectos socio productivos mediante el sistema del Marco Lógico. Espacios, 40(34). ',
      link: 'https://www.revistaespacios.com/a19v40n34/a19v40n34p05.pdf',
    },
    {
      referencia:
        'Corporación Autónoma Regional del Cauca. (2007). La metodología del marco lógico del proyecto. Popayán. CRC. Cauca biosostenible. ',
      link: '',
    },
    {
      referencia:
        'Duque-Cuero, J. H., & Tinajero-Castelo, P. E. (2019). Herramientas Administrativas Básicas para el Negocio: Metodología de Marco Lógico. Memorias del Seminario Herramientas Administrativas. ',
      link:
        'https://repositorio.utn.edu.ec/bitstream/123456789/15299/1/Libro%20Memorias_Seminario%20Herramientas%20Administrativas.pdf#page=21',
    },
    {
      referencia:
        'Ingenio Empresa. (s.f.). Marco lógico: Definición, elaboración y ejemplo detallado. ',
      link: 'https://www.ingenioempresa.com/metodologia-marco-logico/',
    },
    {
      referencia:
        'Ministerio de Economía y Finanzas de Perú. (s.f.). [PDF] Metodología del Marco Lógico. ',
      link:
        'https://www.mef.gob.pe/contenidos/inv_publica/docs/capacidades/cursos_2014/set/atenci_medic_17_09/1_Salud_MML.pdf',
    },
    {
      referencia:
        'OBS Business School. (2014, 4 de octubre). El marco lógico en la gestión de un proyecto, una herramienta esencial. ',
      link:
        'https://www.obsbusiness.school/blog/el-marco-logico-en-la-gestion-de-un-proyecto-una-herramienta-esencial',
    },
    {
      referencia:
        'Torrado, L. C., & Casallas, N. E. C. (2022). Revisión del marco lógico: conceptualización, metodología, variaciones y aplicabilidad en la gerencia de proyectos y programas. Inquietud Empresarial. ',
      link:
        'https://revistas.uptc.edu.co/index.php/inquietud_empresarial/article/download/13408/11751',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección general',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Oscar Yesid Mendoza Jerez',
          cargo: 'Experto temático',
          centro:
            'Centro de Gestión Agroempresarial del Oriente - Regional Santander',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador de Recursos Educativos Digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
