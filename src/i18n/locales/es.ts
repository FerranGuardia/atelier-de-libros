/* T04b — Canonical Spanish dictionary. Source of truth.
 *
 * Conventions follow .claude/spelling-doctrine.md (T04c):
 *   - curly quotes ’ ’ ’
 *   - «…» for primary quotation in literary register
 *   - em-dash —, en-dash –, ellipsis …
 *   - sentence case for headings; no Title Case
 *   - "solo" not "sólo" (RAE 2010+)
 *
 * Keys with `__LOREM__` prefix are M02-M05 placeholders pending Mireia.
 * The M01 manifesto values are the Ferran-locked draft from
 * .claude/tasks-mireia/M01-drafts.md — Mireia revises on the rendered
 * page, not in this file.
 */

const dict = {
  nav: {
    home: 'Atelier',
    manifiesto: 'Manifiesto',
    servicios: 'Servicios',
    publishers: 'Publishers',
    historias: 'Historias',
    nota: 'La Nota',
    epilogo: 'Epílogo'
  },

  cta: {
    discover: 'Descubrir',
    contact: 'Escribir',
    read_more: 'Seguir leyendo',
    submit: 'Enviar',
    open_menu: 'Menú',
    close_menu: 'Cerrar'
  },

  aria: {
    main_nav: 'Navegación principal',
    footer_nav: 'Navegación secundaria',
    language_switcher: 'Selector de idioma',
    open_menu: 'Abrir menú',
    close_menu: 'Cerrar menú',
    skip_to_content: 'Saltar al contenido',
    pending_image: 'Imagen pendiente — composición reservada',
    pending_signature: 'Firma manuscrita pendiente'
  },

  meta: {
    home: {
      title: 'Atelier de Libros · Curaduría literaria',
      description:
        'Boutique de estilismo literario. Diseñamos el alma intelectual de marcas, espacios y personas, una historia a la vez.'
    },
    servicios: {
      title: 'Servicios — Atelier de Libros',
      description:
        'Cuatro pilares: curaduría de identidad, interiorismo narrativo, dinamización cultural, eventos de autor.'
    },
    publishers: {
      title: 'Publishers’ Room — Atelier de Libros',
      description:
        'Para sellos editoriales: vuestros libros en los espacios donde nace la tendencia.'
    },
    historias: {
      title: 'Historias — Atelier de Libros',
      description:
        'Casos de curaduría. Bibliotecas privadas, salones literarios, identidades editoriales.'
    },
    nota: {
      title: 'La Nota de la Autora — Atelier de Libros',
      description:
        'Una declaración sobre la lectura como gesto, y sobre el libro como la última frontera del lujo auténtico.'
    },
    epilogo: {
      title: 'Epílogo — Atelier de Libros',
      description: 'Escribir al estudio. Cualificación de proyecto.'
    }
  },

  brand: {
    wordmark: 'Atelier de Libros',
    tagline: 'Estilismo literario'
  },

  home: {
    hero: {
      headline_part_1: 'Curaduría literaria',
      headline_part_2: 'el libro como identidad',
      subheadline:
        'Diseñamos el alma intelectual de marcas, espacios y personas, una historia a la vez.',
      scroll_cue: 'Continuar'
    },

    /* M01 — Mireia draft (lives on the page until she signs off). */
    manifesto: {
      eyebrow: 'Manifiesto',
      axiom_1:
        'Cuando un libro llega a nuestras manos, lo leemos. Entendemos su esencia, su mensaje, y buscamos la mejor manera de transformarlo en un recuerdo.',
      axiom_2:
        'Elevar una historia es darle ritmo, símbolo y coherencia, dentro de la página y fuera de ella.',
      axiom_3:
        'Un libro es lo que aún resiste la prisa. En una conversación, en una identidad, en un ambiente.',
      axiom_4: 'Una buena historia no fuerza el tiempo que requiere para ser contada.'
    },

    servicios_teaser: {
      eyebrow: 'El Índice',
      title: 'Cuatro maneras de leer una marca',
      lead:
        'No es un catálogo. Es un índice — el orden en que un libro propone sus capítulos.',
      cta: 'Abrir el índice'
    },

    portfolio_teaser: {
      eyebrow: 'Historias',
      title: 'Cada caso, un libro abierto',
      lead:
        'Una biblioteca privada de Madrid. Un salón literario en Barcelona. Una identidad editorial. Las historias se cuentan despacio.',
      cta: 'Ver historias'
    },

    epilogo_cta: {
      eyebrow: 'Epílogo',
      headline: 'Si tu marca fuera un libro, ¿cuál sería el título?',
      cta: 'Escribir al estudio'
    }
  },

  servicios: {
    page_title: 'El Índice',
    intro:
      'Cuatro pilares. Se leen en orden o se saltan, como cualquier libro. Cada uno responde a una manera distinta de habitar la literatura.',

    items: {
      curaduria: {
        number: 'I',
        title: 'Curaduría de identidad y storytelling visual',
        dedication: 'Para marcas que quieren leerse, no solo verse.',
        body: '__LOREM_M02_1__ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      interiorismo: {
        number: 'II',
        title: 'Interiorismo narrativo',
        dedication: 'Para arquitectos y bibliófilos que entienden la pared como página.',
        body: '__LOREM_M02_2__ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
      },
      cultural: {
        number: 'III',
        title: 'Dinamización cultural y community building',
        dedication: 'Para empresas que confunden equipo con tribu — y quieren acertar.',
        body: '__LOREM_M02_3__ At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
      },
      eventos: {
        number: 'IV',
        title: 'Eventos de autor',
        dedication: 'Para anfitriones que recuerdan que un salón también se cura.',
        body: '__LOREM_M02_4__ Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
      }
    }
  },

  publishers: {
    page_title: 'Publishers’ Room',
    headline: 'Vuestros libros en los espacios donde nace la tendencia.',
    body_1:
      '__LOREM_M03_1__ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    body_2:
      '__LOREM_M03_2__ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pullquote:
      '__LOREM_M03_PULL__ Un fondo editorial no se vende — se traslada al lugar donde será encontrado.',
    body_3:
      '__LOREM_M03_3__ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
    body_4:
      '__LOREM_M03_4__ Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    cta: 'Solicitar dossier'
  },

  historias: {
    page_title: 'Historias',
    intro:
      'Una pequeña colección. Cada caso, un libro abierto — leído por la persona, la marca o el espacio que lo encargó.',
    case_label: 'Caso',
    cases: {
      lorem_1: {
        slug: '_lorem-1',
        eyebrow: 'I · Biblioteca privada',
        title: 'Salón Marais',
        location: 'Madrid · primavera de 2026',
        excerpt:
          '__LOREM_M05_1__ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Una biblioteca privada compuesta despacio, durante una temporada, en torno al gusto declarado de su anfitriona.'
      },
      lorem_2: {
        slug: '_lorem-2',
        eyebrow: 'II · Identidad editorial',
        title: 'Sello Albariza',
        location: 'Barcelona · 2025',
        excerpt:
          '__LOREM_M05_2__ Sed ut perspiciatis unde omnis iste. Una colección joven que necesitaba un punto de vista — no una nueva tipografía.'
      },
      lorem_3: {
        slug: '_lorem-3',
        eyebrow: 'III · Salón de autora',
        title: 'Velada en La Latina',
        location: 'Madrid · invierno de 2025',
        excerpt:
          '__LOREM_M05_3__ Nemo enim ipsam voluptatem. Una noche de presentación que se diseñó como capítulo, no como evento.'
      }
    }
  },

  historia_detail: {
    back_to_index: 'Volver al índice',
    case_meta_label: 'Caso',
    location_label: 'Localización',
    year_label: 'Año',
    typology_label: 'Tipología',
    next_case: 'Siguiente caso',
    image_caption_pending:
      'Pendiente: registro fotográfico del proyecto.'
  },

  nota: {
    page_title: 'La Nota de la Autora',
    eyebrow: 'Una nota a quien lee',
    body_1:
      '__LOREM_M04_1__ Empecé este oficio porque los libros me enseñaron antes que los maestros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    body_2:
      '__LOREM_M04_2__ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    body_3:
      '__LOREM_M04_3__ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    body_4:
      '__LOREM_M04_4__ Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    body_5:
      '__LOREM_M04_5__ At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.',
    body_6:
      '__LOREM_M04_6__ Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    signature_credit: '— Mireia',
    portrait_caption: 'Estudio. Madrid, 2026.'
  },

  epilogo: {
    page_title: 'Epílogo',
    intro:
      'Si has llegado hasta aquí, escríbenos. No respondemos rápido — respondemos despacio.',
    form: {
      name_label: 'Nombre',
      email_label: 'Correo',
      project_label: 'De qué proyecto se trata',
      project_placeholder: 'Una marca, un espacio, un evento, un libro…',
      book_question_label: 'Si tu marca fuera un libro, ¿cuál sería el título?',
      book_question_help:
        'No buscamos la respuesta correcta. Solo la que escribirías sin pensarlo dos veces.',
      message_label: 'Mensaje',
      submit_label: 'Enviar',
      submitting_label: 'Enviando…',
      success_title: 'Recibido',
      success_body: 'Volvemos en breve, con calma. Mientras, gracias por leernos.',
      error_title: 'Algo no se envió',
      error_body:
        'No hemos podido entregar tu mensaje. Vuelve a intentarlo en un momento, o escribe directamente al estudio.',
      legal_consent:
        'Al enviar, aceptas que conservemos tu mensaje el tiempo necesario para responderte.'
    },
    contact_email: 'estudio@atelierdelibros.com',
    contact_email_label: 'Escribir directamente'
  },

  footer: {
    column_studio: 'Estudio',
    column_languages: 'Idiomas',
    column_legal: 'Legal',
    legal: {
      imprint: 'Aviso legal',
      privacy: 'Privacidad',
      cookies: 'Cookies'
    },
    copyright: '© 2026 Atelier de Libros. Todos los derechos reservados.',
    colophon:
      'Compuesto en Cormorant Garamond e Inter. Servido sobre papel hueso, tintado a mano.'
  },

  cookies: {
    notice:
      'Esta página guarda únicamente las migas necesarias. Sin rastreo, sin terceros.',
    accept: 'Entendido'
  },

  errors: {
    not_found: {
      title: 'Página no encontrada',
      body: 'El capítulo que buscabas no existe — o aún no ha sido escrito.',
      cta: 'Volver al inicio'
    }
  }
} as const

export default dict
