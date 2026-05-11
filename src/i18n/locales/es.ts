/* T04b — Canonical Spanish dictionary. Source of truth.
 *
 * Conventions follow .claude/spelling-doctrine.md (T04c):
 *   - curly quotes ’ ’ ’
 *   - «…» for primary quotation in literary register
 *   - em-dash —, en-dash –, ellipsis …
 *   - sentence case for headings; no Title Case
 *   - "solo" not "sólo" (RAE 2010+)
 *
 * Copy is anchored in atelier-de-libros.md (Mireia's TFM):
 *   - M01 manifesto: §1.1 tesis + §1.2 valores
 *   - M02 servicios: §"Los pilares fundamentales" (sub-services verbatim)
 *   - M03 editoriales: §2 "El Ecosistema Editorial" (tres ejes verbatim)
 *   - M04 nota: §1.1 + §1.2 + §"El valor real"
 *   - M05 historias: §Casos prácticos (los tres casos)
 *
 * Todo el texto sigue siendo borrador hasta que Mireia firme; lo
 * revisa sobre la página renderizada, no en este archivo.
 */

const dict = {
  nav: {
    home: 'Atelier',
    manifiesto: 'Manifiesto',
    servicios: 'Servicios',
    publishers: 'Editoriales',
    historias: 'Historias',
    nota: 'La Nota',
    epilogo: 'Epílogo',
    b_servicios: 'Servicios',
    b_casos: 'Casos',
    b_proceso: 'Proceso',
    b_contacto: 'Contacto'
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
      title: 'Para editoriales — El Atelier de Libros',
      description:
        'Product placement intelectual: activación de catálogo, contextualización estética y acceso a nuevos gatekeepers fuera del circuito convencional.'
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
    wordmark: 'El Atelier de Libros',
    tagline: 'Estilismo literario'
  },

  home: {
    hero: {
      headline_part_1: 'Estilismo literario',
      headline_part_2: 'el libro como conector cultural',
      subheadline:
        'Comisariamos rincones, eventos e identidades a través del libro —para empresas, espacios y figuras públicas.',
      scroll_cue: 'Continuar'
    },

    /* M01 — Anchored in TFM §1.1 (tesis) y §1.2 (Atemporalidad ·
     * Intelectualidad · Personalidad). Frases entresacadas del TFM,
     * editadas a primera persona del plural. */
    manifesto: {
      eyebrow: 'Manifiesto',
      axiom_1:
        'No decoramos estanterías: diseñamos atmósferas que invitan a la permanencia.',
      axiom_2:
        'Trabajamos el libro como un conector cultural —un puente que une la estética con el intelecto.',
      axiom_3:
        'Cada selección funciona como un espejo del mundo interior del cliente. No la pose; la autenticidad curada.',
      axiom_4:
        'En la era de la imagen rápida, la profundidad de un buen libro sigue siendo el mayor de los lujos.'
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

    /* Sub-servicios (sub_a / sub_b) extraídos del TFM §"Los pilares
     * fundamentales", capítulo a capítulo. Texto editorialmente
     * compactado a primera persona del plural, sin invención. */
    items: {
      curaduria: {
        number: 'I',
        title: 'Curaduría de identidad y storytelling visual',
        dedication:
          'Las lecturas de una marca o persona son su mejor carta de presentación.',
        sub_a_title: 'Gestión de imagen pública',
        sub_a_body:
          'Asesoramos a directivos y figuras públicas sobre qué libros mostrar en sus plataformas, construyendo un relato coherente con sus valores. No la pose: la autenticidad curada.',
        sub_b_title: 'It-books para campañas',
        sub_b_body:
          'Seleccionamos los it-books para campañas de moda y lanzamientos de producto, asegurando que la carga intelectual del título refuerce el mensaje de la colección.'
      },
      interiorismo: {
        number: 'II',
        title: 'Interiorismo narrativo y diseño de espacios',
        dedication:
          'El libro deja de ser contenido para convertirse en un elemento arquitectónico y emocional.',
        sub_a_title: 'Córners literarios',
        sub_a_body:
          'Transformamos zonas de espera y rincones desaprovechados —en hoteles, boutiques, clínicas— en oasis de pausa: la marca se percibe culta y acogedora.',
        sub_b_title: 'Bibliotecas de autor',
        sub_b_body:
          'Para particulares o empresas, diseñamos colecciones con un sentido narrativo profundo, espejo del mundo interior de quien habita el espacio.'
      },
      cultural: {
        number: 'III',
        title: 'Dinamización cultural y community building',
        dedication:
          'El libro es la excusa perfecta para generar fidelización a través del intelecto.',
        sub_a_title: 'Clubes de lectura · «Book of the Week»',
        sub_a_body:
          'Programas periódicos de libro del mes para marcas, hoteles y restaurantes. Al recomendar una lectura, la marca deja de vender un producto y empieza a ofrecer una visión del mundo.',
        sub_b_title: 'Contenido digital',
        sub_b_body:
          'Producimos fotografía, vídeo y reels donde el libro es el protagonista estético, alimentando la presencia digital con discurso y sustancia.'
      },
      eventos: {
        number: 'IV',
        title: 'Eventos de autor: el nuevo salón literario',
        dedication:
          'Recuperamos la esencia de los históricos salones franceses para la exclusividad contemporánea.',
        sub_a_title: 'Salones literarios a medida',
        sub_a_body:
          'Encuentros donde el debate, la lectura en vivo y el networking se mezclan en un entorno diseñado al detalle. Branding cultural para marcas de lujo e instituciones.',
        sub_b_title: 'Merchandising y objetos de culto',
        sub_b_body:
          'Papelería premium, invitaciones en formato libro (en la estela del caso Etro) y colecciones de accesorios inspiradas en grandes cubiertas clásicas.'
      }
    }
  },

  /* Para editoriales — TFM §2 «El Ecosistema Editorial: Del Product
   * Placement a la Prescripción Estética». Los tres ejes (backlist,
   * contextualización, gatekeepers) están extraídos verbatim de §2.X.2. */
  publishers: {
    page_title: 'Para editoriales',
    eyebrow: 'El ecosistema editorial',
    headline: 'Del product placement a la prescripción estética.',
    lead:
      'En la era de la infoxicación, el valor de una editorial no reside solo en publicar, sino en prescribir. Operamos como curador de confianza para los sellos que buscan posicionar su fondo fuera de las librerías saturadas, en entornos de aspiracionalidad: hoteles boutique, campañas de moda, marcas personales.',
    axis_1_eyebrow: 'I',
    axis_1_title: 'Activación de catálogo · backlist',
    axis_1_body:
      'Las editoriales conservan fondos bibliográficos de inmenso valor que pierden vigencia en las mesas de novedades. Rescatamos esos títulos para integrarlos en proyectos de interiorismo narrativo —una segunda vida basada en su valor estético y contenido atemporal.',
    axis_2_eyebrow: 'II',
    axis_2_title: 'Contextualización estética',
    axis_2_body:
      'Insertamos el título en un Salón Literario o un córner de autor: se genera una asociación inmediata entre la calidad literaria y el estilo de vida de lujo —un entorno que el sello, por sí solo, rara vez puede construir.',
    axis_3_eyebrow: 'III',
    axis_3_title: 'Acceso a nuevos gatekeepers',
    axis_3_body:
      'A través del estudio, las editoriales acceden a prescriptores fuera del circuito literario convencional —interioristas, directivos, líderes de opinión y creativos—, expandiendo el radio de influencia del libro hacia sectores económicos transversales.',
    closer:
      'Una colaboración con editoriales no es una venta cruzada: es una estrategia de Brand Experience donde el lector no adquiere solo un texto, sino un símbolo de pertenencia a una comunidad culta y sofisticada.',
    cta: 'Plantear una colaboración'
  },

  /* Casos prácticos extraídos del TFM. Tres encargos hipotéticos
   * documentados como ejercicio del Proyecto Final de Máster —
   * fotografía aún pendiente. Texto verbatim del TFM §Casos prácticos. */
  historias: {
    page_title: 'Historias',
    intro:
      'Tres encargos documentados como ejercicio del Proyecto Final de Máster. Cada caso resuelve un pilar distinto del estilismo literario.',
    case_label: 'Caso',
    cases: {
      casa_filomena: {
        slug: 'casa-filomena',
        eyebrow: 'I · Curaduría de identidad',
        title: 'Casa Filomena',
        location: 'Casa de huéspedes',
        excerpt:
          'Colaboración con la casa de huéspedes para transformar su oferta alojativa en una experiencia cultural inmersiva. Diseño de una biblioteca de autor y córners literarios en las zonas comunes, con selección de títulos que reflejan el espíritu de la casa y una guía de lectura de cortesía para los huéspedes.'
      },
      hey_chabbela: {
        slug: 'hey-chabbela',
        eyebrow: 'II · The Literary Pop-Up',
        title: 'Hey Chabbela',
        location: 'Lanzamiento de colección cápsula',
        excerpt:
          'Para el lanzamiento de una colección cápsula de una marca de moda, creación de un evento efímero donde la colección se presenta integrada en una biblioteca temática. Diseño de la invitación en formato libro objeto —en la estela del caso Etro— y selección de los it-books que acompañan la campaña en redes sociales.'
      },
      salon_literario: {
        slug: 'salon-literario',
        eyebrow: 'III · Salón literario',
        title: 'Salón literario para figura pública',
        location: 'Asesoría integral · directivo o influencer',
        excerpt:
          'Asesoría integral para una figura pública que busca transicionar hacia un perfil más sofisticado y cultural —en el modelo de Dua Lipa o Emma Watson. Auditoría de su presencia digital para curar los libros que muestra; como evento de lanzamiento de la nueva identidad, organización de un salón literario privado en un espacio exclusivo, con temática de debate y merchandising literario personalizado.'
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

  /* La Nota — borrador anclado en el TFM (§1.1 tesis, §1.2 valores,
   * §"El valor real para el cliente", §opening). Sigue siendo un draft
   * a la espera de la voz personal de Mireia; el texto no inventa
   * biografía: extrae las tesis del documento. */
  nota: {
    page_title: 'La Nota de la Autora',
    eyebrow: 'Una nota a quien lee',
    body_1:
      'El estilismo literario es el arte de comisariar y dotar de significado estético y cultural a espacios, marcas y figuras públicas a través del universo del libro. No se trata de organizar información, como hace la biblioteconomía: se trata de construir una narrativa visual y aspiracional que proyecte sofisticación, valores y profundidad intelectual.',
    body_2:
      'Trabajo desde tres convicciones. La primera es la atemporalidad: en un mercado de modas inmediatas, el libro aporta un sentido de permanencia —un lujo que no caduca con el tiempo.',
    body_3:
      'La segunda es la intelectualidad. El objetivo no es decorar, sino dotar a cada proyecto de una carga narrativa profunda y una voz culta —transformar la cultura en un activo estratégico que comunique exclusividad.',
    body_4:
      'La tercera es la personalidad. Cada selección funciona como un espejo del mundo interior del cliente. No la pose; la autenticidad curada. Solo así se construye un relato que conecta emocionalmente, de manera única.',
    body_5:
      'En lugar de ver el libro como algo que se guarda en una estantería, lo trato como un conector cultural: un puente que une la estética con el intelecto, transformando un lugar común en una experiencia con historia.',
    body_6:
      'En la era de la imagen rápida, la profundidad de un buen libro sigue siendo el mayor de los lujos.',
    signature_credit: '— Mireia García Domènech',
    portrait_caption: 'Estudio. Madrid, 2026.'
  },

  epilogo: {
    page_title: 'Epílogo',
    intro:
      'Si has llegado hasta aquí, escríbenos. Cuéntanos brevemente qué tienes en mente y volvemos contigo.',
    form: {
      name_label: 'Nombre',
      email_label: 'Correo',
      message_label: 'Cuéntanos tu intención',
      message_placeholder: 'Una marca, un espacio, un evento, un libro — o algo que aún no tiene forma.',
      submit_label: 'Enviar al estudio',
      submitting_label: 'Enviando…',
      success_title: 'Recibido',
      success_body: 'Gracias por escribirnos. Volvemos contigo en cuanto lo hayamos leído.',
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
