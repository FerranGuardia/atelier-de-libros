/* T04b — English translation (UK style per spelling-doctrine).
 * Real copy only. Lorem stubs (M02-M05 bodies, nota body_1..6,
 * publishers body_*, historias.cases) are omitted on purpose so the
 * resolver falls back to ES until Mireia delivers final copy. */

import type { PartialDictionary } from '../types'

const dict: PartialDictionary = {
  nav: {
    home: 'Atelier',
    manifiesto: 'Manifesto',
    servicios: 'Services',
    publishers: 'Clientes',
    historias: 'Stories',
    nota: 'The Note',
    epilogo: 'Epilogue'
  },

  cta: {
    discover: 'Discover',
    contact: 'Write',
    read_more: 'Continue reading',
    submit: 'Send',
    open_menu: 'Menu',
    close_menu: 'Close'
  },

  aria: {
    main_nav: 'Primary navigation',
    footer_nav: 'Secondary navigation',
    language_switcher: 'Language switcher',
    open_menu: 'Open menu',
    close_menu: 'Close menu',
    skip_to_content: 'Skip to content',
    pending_image: 'Image pending—composition reserved',
    pending_signature: 'Handwritten signature pending'
  },

  meta: {
    home: {
      title: 'Atelier de Libros · Literary curation',
      description:
        'A boutique of literary styling. We design the intellectual soul of brands, spaces and people, one story at a time.'
    },
    servicios: {
      title: 'Services—Atelier de Libros',
      description:
        'Four pillars: identity curation, narrative interior design, cultural programming, author events.'
    },
    publishers: {
      title: 'Clients—Atelier de Libros',
      description:
        'A selection of those who have trusted us with their stories: brands, spaces, authors and imprints.'
    },
    historias: {
      title: 'Stories—Atelier de Libros',
      description:
        'Curation casework. Private libraries, literary salons, publishing identities.'
    },
    nota: {
      title: 'The Author’s Note—Atelier de Libros',
      description:
        'A statement on reading as a gesture, and on the book as the last frontier of authentic luxury.'
    },
    epilogo: {
      title: 'Epilogue—Atelier de Libros',
      description: 'Write to the studio. Project enquiry.'
    }
  },

  brand: {
    wordmark: 'Atelier de Libros',
    tagline: 'Literary styling'
  },

  home: {
    hero: {
      headline_part_1: 'Literary curation',
      headline_part_2: 'the book as identity',
      subheadline:
        'We design the intellectual soul of brands, spaces and people, one story at a time.',
      scroll_cue: 'Continue'
    },

    manifesto: {
      eyebrow: 'Manifesto',
      axiom_1:
        'When a book reaches our hands, we read it. We grasp its essence, its message, and we look for the best way to turn it into a memory.',
      axiom_2:
        'To raise a story is to give it rhythm, symbol and coherence—on the page and beyond it.',
      axiom_3:
        'A book is what still resists hurry. In a conversation, in an identity, in a room.',
      axiom_4: 'A good story does not force the time it needs to be told.'
    },

    servicios_teaser: {
      eyebrow: 'The Index',
      title: 'Four ways to read a brand',
      lead:
        'Not a catalogue. An index—the order in which a book proposes its chapters.',
      cta: 'Open the index'
    },

    portfolio_teaser: {
      eyebrow: 'Stories',
      title: 'Each case, an open book',
      lead:
        'A private library in Madrid. A literary salon in Barcelona. A publishing identity. The stories are told slowly.',
      cta: 'See the stories'
    },

    epilogo_cta: {
      eyebrow: 'Epilogue',
      headline: 'If your brand were a book, what would the title be?',
      cta: 'Write to the studio'
    }
  },

  servicios: {
    page_title: 'The Index',
    intro:
      'Four pillars. Read in order, or skipped, like any book. Each answers a different way of inhabiting literature.',

    items: {
      curaduria: {
        number: 'I',
        title: 'Identity curation and visual storytelling',
        dedication: 'For brands that want to be read, not only seen.'
      },
      interiorismo: {
        number: 'II',
        title: 'Narrative interior design',
        dedication: 'For architects and bibliophiles who treat the wall as a page.'
      },
      cultural: {
        number: 'III',
        title: 'Cultural programming and community building',
        dedication: 'For companies that mistake team for tribe—and want to get it right.'
      },
      eventos: {
        number: 'IV',
        title: 'Author events',
        dedication: 'For hosts who remember that a salon, too, is curated.'
      }
    }
  },

  publishers: {
    page_title: 'Clients',
    eyebrow: 'Clients',
    headline: 'Those who trusted us with a story.',
    cta: 'Write to the studio'
  },

  historias: {
    page_title: 'Stories',
    intro:
      'A small collection. Each case, an open book—read by the person, the brand or the space that commissioned it.',
    case_label: 'Case'
  },

  historia_detail: {
    back_to_index: 'Back to the index',
    case_meta_label: 'Case',
    location_label: 'Location',
    year_label: 'Year',
    typology_label: 'Typology',
    next_case: 'Next case',
    image_caption_pending: 'Pending: photographic record of the project.'
  },

  nota: {
    page_title: 'The Author’s Note',
    eyebrow: 'A note to whoever is reading',
    signature_credit: '— Mireia',
    portrait_caption: 'Studio. Madrid, 2026.'
  },

  epilogo: {
    page_title: 'Epilogue',
    intro:
      'If you have come this far, write to us. Tell us briefly what you have in mind and we will come back to you.',
    form: {
      name_label: 'Name',
      email_label: 'Email',
      message_label: 'Tell us your intention',
      message_placeholder:
        'A brand, a space, an event, a book — or something that does not yet have a shape.',
      submit_label: 'Send to the studio',
      submitting_label: 'Sending…',
      success_title: 'Received',
      success_body: 'Thank you for writing. We will be in touch as soon as we have read it.',
      error_title: 'Something did not go through',
      error_body:
        'We could not deliver your message. Try again in a moment, or write to the studio directly.',
      legal_consent:
        'By sending, you agree that we may keep your message for as long as it takes us to reply.'
    },
    contact_email: 'estudio@atelierdelibros.com',
    contact_email_label: 'Write directly'
  },

  footer: {
    column_studio: 'Studio',
    column_languages: 'Languages',
    column_legal: 'Legal',
    legal: {
      imprint: 'Imprint',
      privacy: 'Privacy',
      cookies: 'Cookies'
    },
    copyright: '© 2026 Atelier de Libros. All rights reserved.',
    colophon:
      'Set in Cormorant Garamond and Inter. Served on bone paper, hand-tinted.'
  },

  cookies: {
    notice:
      'This page keeps only the necessary crumbs. No tracking, no third parties.',
    accept: 'Understood'
  },

  errors: {
    not_found: {
      title: 'Page not found',
      body: 'The chapter you were looking for does not exist—or has not been written yet.',
      cta: 'Return to the start'
    }
  }
}

export default dict
