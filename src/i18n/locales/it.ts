/* T04b — Italian translation. Real copy only.
 * Lorem stubs (M02-M05 bodies, nota body_1..6, publishers body_*,
 * historias.cases) are omitted on purpose so the resolver falls back to ES
 * until Mireia delivers final copy. */

import type { PartialDictionary } from '../types'

const dict: PartialDictionary = {
  nav: {
    home: 'Atelier',
    manifiesto: 'Manifesto',
    servicios: 'Servizi',
    publishers: 'Publishers',
    historias: 'Storie',
    nota: 'La Nota',
    epilogo: 'Epilogo'
  },

  cta: {
    discover: 'Scoprire',
    contact: 'Scrivere',
    read_more: 'Continuare a leggere',
    submit: 'Inviare',
    open_menu: 'Menu',
    close_menu: 'Chiudere'
  },

  aria: {
    main_nav: 'Navigazione principale',
    footer_nav: 'Navigazione secondaria',
    language_switcher: 'Selettore di lingua',
    open_menu: 'Apri menu',
    close_menu: 'Chiudi menu',
    skip_to_content: 'Vai al contenuto',
    pending_image: 'Immagine in attesa — composizione riservata',
    pending_signature: 'Firma manoscritta in attesa'
  },

  meta: {
    home: {
      title: 'Atelier de Libros · Curatela letteraria',
      description:
        'Una boutique di stilismo letterario. Disegniamo l’anima intellettuale di marche, spazi e persone, una storia alla volta.'
    },
    servicios: {
      title: 'Servizi — Atelier de Libros',
      description:
        'Quattro pilastri: curatela d’identità, interior design narrativo, animazione culturale, eventi d’autore.'
    },
    publishers: {
      title: 'Publishers’ Room — Atelier de Libros',
      description:
        'Per le case editrici: i vostri libri nei luoghi dove nasce il gusto.'
    },
    historias: {
      title: 'Storie — Atelier de Libros',
      description:
        'Casi di curatela. Biblioteche private, salotti letterari, identità editoriali.'
    },
    nota: {
      title: 'La Nota dell’Autrice — Atelier de Libros',
      description:
        'Una dichiarazione sulla lettura come gesto, e sul libro come ultima frontiera del lusso autentico.'
    },
    epilogo: {
      title: 'Epilogo — Atelier de Libros',
      description: 'Scrivere allo studio. Qualifica di progetto.'
    }
  },

  brand: {
    wordmark: 'Atelier de Libros',
    tagline: 'Stilismo letterario'
  },

  home: {
    hero: {
      headline_part_1: 'Curatela letteraria',
      headline_part_2: 'il libro come identità',
      subheadline:
        'Disegniamo l’anima intellettuale di marche, spazi e persone, una storia alla volta.',
      scroll_cue: 'Continuare'
    },

    manifesto: {
      eyebrow: 'Manifesto',
      axiom_1:
        'Quando un libro ci arriva tra le mani, lo leggiamo. Ne cogliamo l’essenza, il messaggio, e cerchiamo il modo migliore per trasformarlo in un ricordo.',
      axiom_2:
        'Elevare una storia significa darle ritmo, simbolo e coerenza, dentro la pagina e oltre.',
      axiom_3:
        'Un libro è ciò che ancora resiste alla fretta. In una conversazione, in un’identità, in un ambiente.',
      axiom_4: 'Una buona storia non forza il tempo che le serve per essere raccontata.'
    },

    servicios_teaser: {
      eyebrow: 'L’Indice',
      title: 'Quattro modi di leggere una marca',
      lead:
        'Non è un catalogo. È un indice — l’ordine in cui un libro propone i suoi capitoli.',
      cta: 'Aprire l’indice'
    },

    portfolio_teaser: {
      eyebrow: 'Storie',
      title: 'Ogni caso, un libro aperto',
      lead:
        'Una biblioteca privata di Madrid. Un salotto letterario a Barcellona. Un’identità editoriale. Le storie si raccontano lentamente.',
      cta: 'Vedere le storie'
    },

    epilogo_cta: {
      eyebrow: 'Epilogo',
      headline: 'Se la tua marca fosse un libro, quale sarebbe il titolo?',
      cta: 'Scrivere allo studio'
    }
  },

  servicios: {
    page_title: 'L’Indice',
    intro:
      'Quattro pilastri. Si leggono in ordine o si saltano, come ogni libro. Ognuno risponde a un modo diverso di abitare la letteratura.',

    items: {
      curaduria: {
        number: 'I',
        title: 'Curatela d’identità e storytelling visivo',
        dedication: 'Per le marche che vogliono essere lette, non solo viste.'
      },
      interiorismo: {
        number: 'II',
        title: 'Interior design narrativo',
        dedication: 'Per architetti e bibliofili che intendono la parete come pagina.'
      },
      cultural: {
        number: 'III',
        title: 'Animazione culturale e community building',
        dedication: 'Per le aziende che confondono squadra con tribù — e vogliono fare centro.'
      },
      eventos: {
        number: 'IV',
        title: 'Eventi d’autore',
        dedication: 'Per gli ospiti che ricordano che anche un salotto si cura.'
      }
    }
  },

  publishers: {
    page_title: 'Publishers’ Room',
    headline: 'I vostri libri nei luoghi dove nasce il gusto.',
    cta: 'Richiedere il dossier'
  },

  historias: {
    page_title: 'Storie',
    intro:
      'Una piccola collezione. Ogni caso, un libro aperto — letto dalla persona, dalla marca o dallo spazio che lo ha commissionato.',
    case_label: 'Caso'
  },

  historia_detail: {
    back_to_index: 'Tornare all’indice',
    case_meta_label: 'Caso',
    location_label: 'Localizzazione',
    year_label: 'Anno',
    typology_label: 'Tipologia',
    next_case: 'Caso successivo',
    image_caption_pending: 'In attesa: registrazione fotografica del progetto.'
  },

  nota: {
    page_title: 'La Nota dell’Autrice',
    eyebrow: 'Una nota a chi legge',
    signature_credit: '— Mireia',
    portrait_caption: 'Studio. Madrid, 2026.'
  },

  epilogo: {
    page_title: 'Epilogo',
    intro:
      'Se sei arrivato fin qui, scrivici. Non rispondiamo in fretta — rispondiamo con calma.',
    form: {
      name_label: 'Nome',
      email_label: 'Email',
      project_label: 'Di che progetto si tratta',
      project_placeholder: 'Una marca, uno spazio, un evento, un libro…',
      book_question_label: 'Se la tua marca fosse un libro, quale sarebbe il titolo?',
      book_question_help:
        'Non cerchiamo la risposta giusta. Solo quella che scriveresti senza pensarci due volte.',
      message_label: 'Messaggio',
      submit_label: 'Inviare',
      submitting_label: 'Invio…',
      success_title: 'Ricevuto',
      success_body: 'Torneremo presto, con calma. Nel frattempo, grazie per averci letto.',
      error_title: 'Qualcosa non è stato inviato',
      error_body:
        'Non siamo riusciti a consegnare il tuo messaggio. Riprova tra un momento, o scrivi direttamente allo studio.',
      legal_consent:
        'Inviando, accetti che conserviamo il tuo messaggio per il tempo necessario a risponderti.'
    },
    contact_email: 'estudio@atelierdelibros.com',
    contact_email_label: 'Scrivere direttamente'
  },

  footer: {
    column_studio: 'Studio',
    column_languages: 'Lingue',
    column_legal: 'Legale',
    legal: {
      imprint: 'Note legali',
      privacy: 'Privacy',
      cookies: 'Cookie'
    },
    copyright: '© 2026 Atelier de Libros. Tutti i diritti riservati.',
    colophon:
      'Composto in Cormorant Garamond e Inter. Servito su carta avorio, tinta a mano.'
  },

  cookies: {
    notice:
      'Questa pagina conserva solo le briciole necessarie. Nessun tracciamento, nessun terzo.',
    accept: 'D’accordo'
  },

  errors: {
    not_found: {
      title: 'Pagina non trovata',
      body: 'Il capitolo che cercavi non esiste — o non è ancora stato scritto.',
      cta: 'Tornare all’inizio'
    }
  }
}

export default dict
