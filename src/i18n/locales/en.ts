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
      title: 'For publishers—Atelier de Libros',
      description:
        'Editorial integration and brand collaborations: we place books in boutique hotels, retail spaces, film sets and campaigns—where they had never reached before.'
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
    tagline: 'Literary curation'
  },

  home: {
    hero: {
      headline_part_1: 'Literary curation',
      headline_part_2: 'the book as identity',
      subheadline:
        'We curate corners, events and identities through the book—for companies, spaces, public figures and private clients.',
      scroll_cue: 'Continue'
    },

    manifesto: {
      eyebrow: 'Manifesto',
      axiom_1:
        'We don’t decorate shelves: we design atmospheres that invite you to stay.',
      axiom_2:
        'We treat the book as a cultural connector—a bridge between the aesthetic and the intellect.',
      axiom_3:
        'Every selection works as a mirror of the client’s inner world. We want to help you tell your own story through the voices of the literary universe.',
      axiom_4:
        'In an age when we are all looking for authenticity, the depth of a good book remains the greatest of luxuries.'
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
    kicker: 'Our services',
    intro:
      'Four pillars. Read in order, or skipped, like any book. Each answers a different way of inhabiting literature.',

    items: {
      curaduria: {
        number: 'I',
        title: 'Identity curation and visual storytelling',
        dedication: 'For brands that want to be read, not only seen.',
        sub_a_title: 'Public image management',
        sub_a_body:
          'We advise brands, companies and individuals on which books to show on their channels and at events, building a visual narrative consistent with the client’s values.',
        sub_b_title: 'It-books for campaigns',
        sub_b_body:
          'We select the it-books for fashion campaigns and product launches, making sure the intellectual weight of the title reinforces the collection’s message.'
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
        dedication: 'A service devoted to exclusive literary experiences.',
        sub_a_title: 'Bespoke literary salons',
        sub_a_body:
          'Salons designed to measure for brands, companies or public figures: live readings, debates, micro-talks and encounters with authors. We design the literary set and the aesthetic atmosphere, and we produce the event’s visual content.',
        sub_b_title: 'Merchandising and cult objects',
        sub_b_body:
          'Premium stationery, book-shaped invitations (in the wake of the Etro case) and accessory collections inspired by great classic covers.'
      }
    },
    extensions: {
      visuales: {
        title: 'Visual productions',
        lead:
          'A service that integrates books as strategic elements in visual campaigns.',
        body:
          'Book selection for photo shoots, editorials, runway shows or pop-ups. Creation of literary sets. Props for modelling and visual storytelling.'
      },
      imagen: {
        title: 'Image management',
        lead:
          'A cultural and aesthetic advisory service for public personalities.',
        body:
          'Book selection for social media, interviews or public appearances. Construction of a coherent literary identity. Audit of digital presence and cultural narrative.'
      },
      contenido: {
        title: 'Digital content and literary communication',
        lead:
          'A service for creating visual and narrative content based on books.',
        body:
          'Production of photography, videos, reels and stories. Literary copywriting for campaigns. Visual narratives for social media.'
      },
      merchandising: {
        title: 'Merchandising, stationery and promotional material',
        lead:
          'A service for designing and producing exclusive literary objects.',
        body:
          'Editorial design and layout of special pieces.'
      }
    }
  },

  publishers: {
    page_title: 'For publishers',
    eyebrow: 'The publishing ecosystem',
    headline: 'Editorial integration and brand collaborations.',
    lead:
      'We place books in boutique hotels, retail spaces, restaurants, film sets and corporate environments, and we select titles for visual campaigns, editorials, events and curatorial projects—creating cultural experiences and carrying the book where it had never reached before.',
    closer:
      'We take books where no one expects to find them and turn them into the protagonists of new settings.',
    cta: 'Propose a collaboration'
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
    portrait_caption: 'Studio. Barcelona, 2026.'
  },

  epilogo: {
    page_title: 'Epilogue',
    intro:
      'If you have come this far, write to us. Every project has a story to tell. We find its title. Would you like to find yours?',
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
    contact_email: 'elatelierdelibros@gmail.com',
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
