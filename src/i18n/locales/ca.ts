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
      title: 'Clients — Atelier de Libros',
      description:
        'Una selecció de qui ens ha confiat les seves històries: marques, espais, autors i segells.'
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
    tagline: 'Estilisme literari'
  },

  home: {
    hero: {
      headline_part_1: 'Curadoria literària',
      headline_part_2: 'el llibre com a identitat',
      subheadline:
        'Dissenyem l’ànima intel·lectual de marques, espais i persones, una història a la vegada.',
      scroll_cue: 'Continuar'
    },

    manifesto: {
      eyebrow: 'Manifest',
      axiom_1:
        'Quan un llibre arriba a les nostres mans, el llegim. N’entenem l’essència, el missatge, i busquem la millor manera de transformar-lo en un record.',
      axiom_2:
        'Elevar una història és donar-li ritme, símbol i coherència, dins de la pàgina i fora.',
      axiom_3:
        'Un llibre és el que encara resisteix la pressa. En una conversa, en una identitat, en un ambient.',
      axiom_4: 'Una bona història no força el temps que necessita per ser contada.'
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
    intro:
      'Quatre pilars. Es llegeixen en ordre o se salten, com qualsevol llibre. Cadascun respon a una manera diferent d’habitar la literatura.',

    items: {
      curaduria: {
        number: 'I',
        title: 'Curadoria d’identitat i storytelling visual',
        dedication: 'Per a marques que volen llegir-se, no només veure’s.'
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
        dedication: 'Per a amfitrions que recorden que un saló també es cura.'
      }
    }
  },

  publishers: {
    page_title: 'Clients',
    eyebrow: 'Clients',
    headline: 'Qui ens ha confiat una història.',
    cta: 'Escriure a l’estudi'
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
    portrait_caption: 'Estudi. Madrid, 2026.'
  },

  epilogo: {
    page_title: 'Epíleg',
    intro:
      'Si has arribat fins aquí, escriu-nos. No responem ràpid — responem a poc a poc.',
    form: {
      name_label: 'Nom',
      email_label: 'Correu',
      project_label: 'De quin projecte es tracta',
      project_placeholder: 'Una marca, un espai, un esdeveniment, un llibre…',
      book_question_label: 'Si la teva marca fos un llibre, quin seria el títol?',
      book_question_help:
        'No busquem la resposta correcta. Només la que escriuries sense pensar-t’ho dues vegades.',
      message_label: 'Missatge',
      submit_label: 'Enviar',
      submitting_label: 'Enviant…',
      success_title: 'Rebut',
      success_body: 'Tornem aviat, amb calma. Mentrestant, gràcies per llegir-nos.',
      error_title: 'Alguna cosa no s’ha enviat',
      error_body:
        'No hem pogut entregar el teu missatge. Torna-ho a provar d’aquí a un moment, o escriu directament a l’estudi.',
      legal_consent:
        'En enviar, acceptes que conservem el teu missatge el temps necessari per respondre’t.'
    },
    contact_email: 'estudio@atelierdelibros.com',
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
