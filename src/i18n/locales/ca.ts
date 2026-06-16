/* T04b — Catalan translation. Real copy only.
 * Lorem stubs (M02-M05 bodies, nota body_1..6, publishers body_*,
 * historias.cases) are omitted on purpose so the resolver falls back to ES
 * until Mireia delivers final copy. */

import type { PartialDictionary } from '../types'

const dict: PartialDictionary = {
  nav: {
    home: 'Atelier',
    manifiesto: 'Manifest',
    servicios: 'Serveis',
    publishers: 'Clientes',
    historias: 'Històries',
    nota: 'La Nota',
    epilogo: 'Epíleg'
  },

  cta: {
    discover: 'Descobrir',
    contact: 'Escriure',
    read_more: 'Continuar llegint',
    submit: 'Enviar',
    open_menu: 'Menú',
    close_menu: 'Tancar'
  },

  aria: {
    main_nav: 'Navegació principal',
    footer_nav: 'Navegació secundària',
    language_switcher: 'Selector d’idioma',
    open_menu: 'Obrir menú',
    close_menu: 'Tancar menú',
    skip_to_content: 'Saltar al contingut',
    pending_image: 'Imatge pendent — composició reservada',
    pending_signature: 'Signatura manuscrita pendent'
  },

  meta: {
    home: {
      title: 'Atelier de Libros · Curadoria literària',
      description:
        'Boutique d’estilisme literari. Dissenyem l’ànima intel·lectual de marques, espais i persones, una història a la vegada.'
    },
    servicios: {
      title: 'Serveis — Atelier de Libros',
      description:
        'Quatre pilars: curadoria d’identitat, interiorisme narratiu, dinamització cultural, esdeveniments d’autor.'
    },
    publishers: {
      title: 'Per a editorials — Atelier de Libros',
      description:
        'Integració editorial i col·laboracions de marca: integrem llibres en hotels boutique, espais comercials, sets de rodatge i campanyes, i els portem on mai no havien arribat.'
    },
    historias: {
      title: 'Històries — Atelier de Libros',
      description:
        'Casos de curadoria. Biblioteques privades, salons literaris, identitats editorials.'
    },
    nota: {
      title: 'La Nota de l’Autora — Atelier de Libros',
      description:
        'Una declaració sobre la lectura com a gest, i sobre el llibre com a última frontera del luxe autèntic.'
    },
    epilogo: {
      title: 'Epíleg — Atelier de Libros',
      description: 'Escriure a l’estudi. Qualificació de projecte.'
    }
  },

  brand: {
    wordmark: 'Atelier de Libros',
    tagline: 'Curadoria literària'
  },

  home: {
    hero: {
      headline_part_1: 'Curadoria literària',
      headline_part_2: 'el llibre com a identitat',
      subheadline:
        'Comissariem racons, esdeveniments i identitats a través del llibre —per a empreses, espais, figures públiques i particulars.',
      scroll_cue: 'Continuar'
    },

    manifesto: {
      eyebrow: 'Manifest',
      axiom_1:
        'No decorem prestatgeries: dissenyem atmosferes que conviden a la permanència.',
      axiom_2:
        'Treballem el llibre com un connector cultural —un pont que uneix l’estètica amb l’intel·lecte.',
      axiom_3:
        'Cada selecció funciona com un mirall del món interior del client. Volem ajudar-te a explicar la teva pròpia història a través de les veus de l’univers literari.',
      axiom_4:
        'En una era en què tots busquem autenticitat, la profunditat d’un bon llibre continua sent el més gran dels luxes.'
    },

    servicios_teaser: {
      eyebrow: 'L’Índex',
      title: 'Quatre maneres de llegir una marca',
      lead:
        'No és un catàleg. És un índex — l’ordre en què un llibre proposa els seus capítols.',
      cta: 'Obrir l’índex'
    },

    portfolio_teaser: {
      eyebrow: 'Històries',
      title: 'Cada cas, un llibre obert',
      lead:
        'Una biblioteca privada de Madrid. Un saló literari a Barcelona. Una identitat editorial. Les històries es conten a poc a poc.',
      cta: 'Veure històries'
    },

    epilogo_cta: {
      eyebrow: 'Epíleg',
      headline: 'Si la teva marca fos un llibre, quin seria el títol?',
      cta: 'Escriure a l’estudi'
    }
  },

  servicios: {
    page_title: 'L’Índex',
    kicker: 'Els nostres serveis',
    intro:
      'Quatre pilars. Es llegeixen en ordre o se salten, com qualsevol llibre. Cadascun respon a una manera diferent d’habitar la literatura.',

    items: {
      curaduria: {
        number: 'I',
        title: 'Curadoria d’identitat i storytelling visual',
        dedication: 'Per a marques que volen llegir-se, no només veure’s.',
        sub_a_title: 'Gestió d’imatge pública',
        sub_a_body:
          'Assessorem marques, empreses i persones sobre quins llibres mostrar a les xarxes i en esdeveniments, construint una narrativa visual coherent amb els valors del client.',
        sub_b_title: 'It-books per a campanyes',
        sub_b_body:
          'Seleccionem els it-books per a campanyes de moda i llançaments de producte, assegurant que la càrrega intel·lectual del títol reforci el missatge de la col·lecció.'
      },
      interiorismo: {
        number: 'II',
        title: 'Interiorisme narratiu',
        dedication: 'Per a arquitectes i bibliòfils que entenen la paret com a pàgina.'
      },
      cultural: {
        number: 'III',
        title: 'Dinamització cultural i community building',
        dedication: 'Per a empreses que confonen equip amb tribu — i volen encertar-ho.'
      },
      eventos: {
        number: 'IV',
        title: 'Esdeveniments d’autor',
        dedication: 'Servei especialitzat en experiències literàries exclusives.',
        sub_a_title: 'Salons literaris a mida',
        sub_a_body:
          'Salons dissenyats a mida per a marques, empreses o figures públiques: lectures en directe, debats, microxerrades i trobades amb autors. Dissenyem l’escenografia literària i l’ambientació estètica, i produïm el contingut visual de l’esdeveniment.',
        sub_b_title: 'Marxandatge i objectes de culte',
        sub_b_body:
          'Papereria premium, invitacions en format llibre (en l’estela del cas Etro) i col·leccions d’accessoris inspirades en grans cobertes clàssiques.'
      }
    },
    extensions: {
      visuales: {
        title: 'Produccions visuals',
        lead:
          'Servei que integra llibres com a elements estratègics en campanyes visuals.',
        body:
          'Selecció de llibres per a sessions fotogràfiques, editorials, desfilades o pop-ups. Creació d’escenografies literàries. Props per a modelatge i storytelling visual.'
      },
      imagen: {
        title: 'Gestió d’imatge',
        lead:
          'Servei d’assessoria cultural i estètica per a personalitats públiques.',
        body:
          'Selecció de llibres per a xarxes socials, entrevistes o aparicions públiques. Construcció d’una identitat literària coherent. Auditoria de presència digital i narrativa cultural.'
      },
      contenido: {
        title: 'Contingut digital i comunicació literària',
        lead:
          'Servei de creació de contingut visual i narratiu basat en llibres.',
        body:
          'Producció de fotografies, vídeos, reels i stories. Copywriting literari per a campanyes. Narratives visuals per a xarxes socials.'
      },
      merchandising: {
        title: 'Marxandatge, papereria i material promocional',
        lead:
          'Servei de disseny i producció d’objectes literaris exclusius.',
        body:
          'Disseny editorial i maquetació de peces especials.'
      }
    }
  },

  publishers: {
    page_title: 'Per a editorials',
    eyebrow: 'L’ecosistema editorial',
    headline: 'Integració editorial i col·laboracions de marca.',
    lead:
      'Integrem llibres en hotels boutique, espais comercials, restaurants, sets de rodatge i entorns corporatius, a més de seleccionar títols per a campanyes visuals, editorials, esdeveniments i projectes curatorials, creant experiències culturals i projectant el llibre fins on mai no havia arribat.',
    closer:
      'Portem els llibres allà on ningú espera trobar-los i els convertim en protagonistes de nous escenaris.',
    cta: 'Plantejar una col·laboració'
  },

  historias: {
    page_title: 'Històries',
    intro:
      'Una petita col·lecció. Cada cas, un llibre obert — llegit per la persona, la marca o l’espai que el va encarregar.',
    case_label: 'Cas'
  },

  historia_detail: {
    back_to_index: 'Tornar a l’índex',
    case_meta_label: 'Cas',
    location_label: 'Localització',
    year_label: 'Any',
    typology_label: 'Tipologia',
    next_case: 'Cas següent',
    image_caption_pending: 'Pendent: registre fotogràfic del projecte.'
  },

  nota: {
    page_title: 'La Nota de l’Autora',
    eyebrow: 'Una nota a qui llegeix',
    signature_credit: '— Mireia',
    portrait_caption: 'Estudi. Barcelona, 2026.'
  },

  epilogo: {
    page_title: 'Epíleg',
    intro:
      'Si has arribat fins aquí, escriu-nos. Cada projecte té una història per explicar. Nosaltres n’esbrinem el títol. Vols trobar el teu?',
    form: {
      name_label: 'Nom',
      email_label: 'Correu',
      message_label: 'Explica’ns la teva intenció',
      message_placeholder:
        'Una marca, un espai, un esdeveniment, un llibre — o alguna cosa que encara no té forma.',
      submit_label: 'Enviar a l’estudi',
      submitting_label: 'Enviant…',
      success_title: 'Rebut',
      success_body: 'Gràcies per escriure’ns. Tornem amb tu tan aviat com ho haguem llegit.',
      error_title: 'Alguna cosa no s’ha enviat',
      error_body:
        'No hem pogut entregar el teu missatge. Torna-ho a provar d’aquí a un moment, o escriu directament a l’estudi.',
      legal_consent:
        'En enviar, acceptes que conservem el teu missatge el temps necessari per respondre’t.'
    },
    contact_email: 'elatelierdelibros@gmail.com',
    contact_email_label: 'Escriure directament'
  },

  footer: {
    column_studio: 'Estudi',
    column_languages: 'Idiomes',
    column_legal: 'Legal',
    legal: {
      imprint: 'Avís legal',
      privacy: 'Privacitat',
      cookies: 'Galetes'
    },
    copyright: '© 2026 Atelier de Libros. Tots els drets reservats.',
    colophon:
      'Compost en Cormorant Garamond i Inter. Servit sobre paper d’os, tintat a mà.'
  },

  cookies: {
    notice:
      'Aquesta pàgina guarda únicament les molles necessàries. Sense rastreig, sense tercers.',
    accept: 'Entesos'
  },

  errors: {
    not_found: {
      title: 'Pàgina no trobada',
      body: 'El capítol que buscaves no existeix — o encara no ha estat escrit.',
      cta: 'Tornar a l’inici'
    }
  }
}

export default dict
