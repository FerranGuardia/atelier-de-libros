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
    publishers: 'Clientes',
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
      title: 'Clienti — Atelier de Libros',
      description:
        'Una selezione di chi ci ha affidato le proprie storie: marchi, spazi, autori e case editrici.'
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
    tagline: 'Curatela letteraria'
  },

  home: {
    hero: {
      headline_part_1: 'Curatela letteraria',
      headline_part_2: 'il libro come identità',
      subheadline:
        'Curiamo angoli, eventi e identità attraverso il libro —per aziende, spazi, figure pubbliche e privati.',
      scroll_cue: 'Continuare'
    },

    manifesto: {
      eyebrow: 'Manifesto',
      axiom_1:
        'Non decoriamo scaffali: disegniamo atmosfere che invitano a restare.',
      axiom_2:
        'Trattiamo il libro come un connettore culturale —un ponte che unisce l’estetica e l’intelletto.',
      axiom_3:
        'Ogni selezione funziona come uno specchio del mondo interiore del cliente. Vogliamo aiutarti a raccontare la tua storia attraverso le voci dell’universo letterario.',
      axiom_4:
        'In un’epoca in cui tutti cerchiamo autenticità, la profondità di un buon libro resta il più grande dei lussi.'
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
    kicker: 'I nostri servizi',
    intro:
      'Quattro pilastri. Si leggono in ordine o si saltano, come ogni libro. Ognuno risponde a un modo diverso di abitare la letteratura.',

    items: {
      curaduria: {
        number: 'I',
        title: 'Curatela d’identità e storytelling visivo',
        dedication: 'Per le marche che vogliono essere lette, non solo viste.',
        sub_a_title: 'Gestione dell’immagine pubblica',
        sub_a_body:
          'Consigliamo marchi, aziende e persone su quali libri mostrare sui propri canali e agli eventi, costruendo una narrazione visiva coerente con i valori del cliente.',
        sub_b_title: 'It-books per le campagne',
        sub_b_body:
          'Selezioniamo gli it-books per le campagne di moda e i lanci di prodotto, assicurandoci che il peso intellettuale del titolo rafforzi il messaggio della collezione.'
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
        dedication: 'Un servizio dedicato a esperienze letterarie esclusive.',
        sub_a_title: 'Salotti letterari su misura',
        sub_a_body:
          'Salotti disegnati su misura per marchi, aziende o figure pubbliche: letture dal vivo, dibattiti, micro-conferenze e incontri con autori. Disegniamo la scenografia letteraria e l’ambientazione estetica, e produciamo il contenuto visivo dell’evento.',
        sub_b_title: 'Merchandising e oggetti di culto',
        sub_b_body:
          'Cartoleria premium, inviti in forma di libro (sulla scia del caso Etro) e collezioni di accessori ispirate alle grandi copertine classiche.'
      }
    },
    extensions: {
      visuales: {
        title: 'Produzioni visive',
        lead:
          'Un servizio che integra i libri come elementi strategici nelle campagne visive.',
        body:
          'Selezione di libri per shooting fotografici, editoriali, sfilate o pop-up. Creazione di scenografie letterarie. Props per modellazione e storytelling visivo.'
      },
      imagen: {
        title: 'Gestione dell’immagine',
        lead:
          'Un servizio di consulenza culturale ed estetica per personalità pubbliche.',
        body:
          'Selezione di libri per social media, interviste o apparizioni pubbliche. Costruzione di un’identità letteraria coerente. Audit della presenza digitale e della narrazione culturale.'
      },
      contenido: {
        title: 'Contenuto digitale e comunicazione letteraria',
        lead:
          'Un servizio di creazione di contenuti visivi e narrativi basati sui libri.',
        body:
          'Produzione di fotografie, video, reel e stories. Copywriting letterario per campagne. Narrazioni visive per social media.'
      },
      merchandising: {
        title: 'Merchandising, cartoleria e materiale promozionale',
        lead:
          'Un servizio di design e produzione di oggetti letterari esclusivi.',
        body:
          'Design editoriale e impaginazione di pezzi speciali.'
      }
    }
  },

  publishers: {
    page_title: 'Per le case editrici',
    eyebrow: 'L’ecosistema editoriale',
    headline: 'Integrazione editoriale e collaborazioni di marca.',
    lead:
      'Integriamo libri in hotel boutique, spazi commerciali, ristoranti, set cinematografici e ambienti corporate, oltre a selezionare titoli per campagne visive, editoriali, eventi e progetti curatoriali, creando esperienze culturali e portando il libro dove non era mai arrivato.',
    axis_1_title: 'Attivazione di catalogo · backlist',
    axis_1_body:
      'Le case editrici conservano fondi bibliografici di immenso valore che perdono attualità sui tavoli delle novità. Recuperiamo questi titoli per integrarli in progetti di interior design narrativo —una seconda vita fondata sul loro valore estetico e sul contenuto senza tempo.',
    axis_2_title: 'Contestualizzazione estetica',
    axis_2_body:
      'Inseriamo il titolo in un Salotto letterario o in un angolo d’autore: si crea un’associazione immediata tra la qualità letteraria e lo stile di vita del lusso —un ambiente che il marchio, da solo, raramente può costruire.',
    axis_3_title: 'Accesso a nuovi gatekeeper',
    axis_3_body:
      'Attraverso lo studio, le case editrici raggiungono prescrittori fuori dal circuito letterario convenzionale —interior designer, dirigenti, opinion leader e creativi—, ampliando il raggio d’influenza del libro verso settori economici trasversali.',
    closer:
      'Portiamo i libri dove nessuno si aspetta di trovarli e li trasformiamo in protagonisti di nuovi scenari.',
    cta: 'Proporre una collaborazione'
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
    portrait_caption: 'Studio. Barcellona, 2026.'
  },

  epilogo: {
    page_title: 'Epilogo',
    intro:
      'Se sei arrivato fin qui, scrivici. Ogni progetto ha una storia da raccontare. Noi ne troviamo il titolo. Vuoi trovare il tuo?',
    form: {
      name_label: 'Nome',
      email_label: 'Email',
      message_label: 'Raccontaci la tua intenzione',
      message_placeholder:
        'Una marca, uno spazio, un evento, un libro — o qualcosa che ancora non ha forma.',
      submit_label: 'Inviare allo studio',
      submitting_label: 'Invio…',
      success_title: 'Ricevuto',
      success_body: 'Grazie per averci scritto. Ti rispondiamo non appena lo avremo letto.',
      error_title: 'Qualcosa non è stato inviato',
      error_body:
        'Non siamo riusciti a consegnare il tuo messaggio. Riprova tra un momento, o scrivi direttamente allo studio.',
      legal_consent:
        'Inviando, accetti che conserviamo il tuo messaggio per il tempo necessario a risponderti.'
    },
    contact_email: 'elatelierdelibros@gmail.com',
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
