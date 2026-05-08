/* T04b — French translation. Real copy only.
 * Lorem stubs (M02-M05 bodies, nota body_1..6, publishers body_*,
 * historias.cases) are omitted on purpose so the resolver falls back to ES
 * until Mireia delivers final copy. */

import type { PartialDictionary } from '../types'

const dict: PartialDictionary = {
  nav: {
    home: 'Atelier',
    manifiesto: 'Manifeste',
    servicios: 'Services',
    publishers: 'Publishers',
    historias: 'Histoires',
    nota: 'La Note',
    epilogo: 'Épilogue'
  },

  cta: {
    discover: 'Découvrir',
    contact: 'Écrire',
    read_more: 'Poursuivre la lecture',
    submit: 'Envoyer',
    open_menu: 'Menu',
    close_menu: 'Fermer'
  },

  aria: {
    main_nav: 'Navigation principale',
    footer_nav: 'Navigation secondaire',
    language_switcher: 'Sélecteur de langue',
    open_menu: 'Ouvrir le menu',
    close_menu: 'Fermer le menu',
    skip_to_content: 'Aller au contenu',
    pending_image: 'Image en attente — composition réservée',
    pending_signature: 'Signature manuscrite en attente'
  },

  meta: {
    home: {
      title: 'Atelier de Libros · Curation littéraire',
      description:
        'Boutique de stylisme littéraire. Nous dessinons l’âme intellectuelle des marques, des lieux et des personnes, une histoire à la fois.'
    },
    servicios: {
      title: 'Services — Atelier de Libros',
      description:
        'Quatre piliers : curation d’identité, intériorisme narratif, animation culturelle, événements d’auteur.'
    },
    publishers: {
      title: 'Publishers’ Room — Atelier de Libros',
      description:
        'Pour les maisons d’édition : vos livres dans les lieux où naît la tendance.'
    },
    historias: {
      title: 'Histoires — Atelier de Libros',
      description:
        'Cas de curation. Bibliothèques privées, salons littéraires, identités éditoriales.'
    },
    nota: {
      title: 'La Note de l’Auteure — Atelier de Libros',
      description:
        'Une déclaration sur la lecture comme geste, et sur le livre comme dernière frontière du luxe authentique.'
    },
    epilogo: {
      title: 'Épilogue — Atelier de Libros',
      description: 'Écrire à l’atelier. Qualification de projet.'
    }
  },

  brand: {
    wordmark: 'Atelier de Libros',
    tagline: 'Stylisme littéraire'
  },

  home: {
    hero: {
      headline_part_1: 'Curation littéraire',
      headline_part_2: 'le livre comme identité',
      subheadline:
        'Nous dessinons l’âme intellectuelle des marques, des lieux et des personnes, une histoire à la fois.',
      scroll_cue: 'Continuer'
    },

    manifesto: {
      eyebrow: 'Manifeste',
      axiom_1:
        'Quand un livre nous parvient, nous le lisons. Nous en saisissons l’essence, le message, et nous cherchons la meilleure façon de le transformer en souvenir.',
      axiom_2:
        'Élever une histoire, c’est lui donner rythme, symbole et cohérence, dans la page et au-delà.',
      axiom_3:
        'Un livre est ce qui résiste encore à la hâte. Dans une conversation, dans une identité, dans une atmosphère.',
      axiom_4: 'Une bonne histoire ne force pas le temps qu’il lui faut pour être racontée.'
    },

    servicios_teaser: {
      eyebrow: 'L’Index',
      title: 'Quatre manières de lire une marque',
      lead:
        'Ce n’est pas un catalogue. C’est un index — l’ordre dans lequel un livre propose ses chapitres.',
      cta: 'Ouvrir l’index'
    },

    portfolio_teaser: {
      eyebrow: 'Histoires',
      title: 'Chaque cas, un livre ouvert',
      lead:
        'Une bibliothèque privée à Madrid. Un salon littéraire à Barcelone. Une identité éditoriale. Les histoires se racontent lentement.',
      cta: 'Voir les histoires'
    },

    epilogo_cta: {
      eyebrow: 'Épilogue',
      headline: 'Si votre marque était un livre, quel en serait le titre ?',
      cta: 'Écrire à l’atelier'
    }
  },

  servicios: {
    page_title: 'L’Index',
    intro:
      'Quatre piliers. Ils se lisent dans l’ordre ou s’enjambent, comme tout livre. Chacun répond à une façon différente d’habiter la littérature.',

    items: {
      curaduria: {
        number: 'I',
        title: 'Curation d’identité et storytelling visuel',
        dedication: 'Pour les marques qui veulent être lues, pas seulement vues.'
      },
      interiorismo: {
        number: 'II',
        title: 'Intériorisme narratif',
        dedication: 'Pour les architectes et bibliophiles qui voient le mur comme une page.'
      },
      cultural: {
        number: 'III',
        title: 'Animation culturelle et community building',
        dedication: 'Pour les entreprises qui confondent équipe et tribu — et veulent viser juste.'
      },
      eventos: {
        number: 'IV',
        title: 'Événements d’auteur',
        dedication: 'Pour les hôtes qui se rappellent qu’un salon, aussi, se cure.'
      }
    }
  },

  publishers: {
    page_title: 'Publishers’ Room',
    headline: 'Vos livres dans les lieux où naît la tendance.',
    cta: 'Demander le dossier'
  },

  historias: {
    page_title: 'Histoires',
    intro:
      'Une petite collection. Chaque cas, un livre ouvert — lu par la personne, la marque ou le lieu qui l’a commandé.',
    case_label: 'Cas'
  },

  historia_detail: {
    back_to_index: 'Retour à l’index',
    case_meta_label: 'Cas',
    location_label: 'Lieu',
    year_label: 'Année',
    typology_label: 'Typologie',
    next_case: 'Cas suivant',
    image_caption_pending: 'En attente : reportage photographique du projet.'
  },

  nota: {
    page_title: 'La Note de l’Auteure',
    eyebrow: 'Une note à qui lit',
    signature_credit: '— Mireia',
    portrait_caption: 'Atelier. Madrid, 2026.'
  },

  epilogo: {
    page_title: 'Épilogue',
    intro:
      'Si vous êtes arrivé jusqu’ici, écrivez-nous. Nous ne répondons pas vite — nous répondons lentement.',
    form: {
      name_label: 'Nom',
      email_label: 'Courriel',
      project_label: 'De quel projet s’agit-il',
      project_placeholder: 'Une marque, un lieu, un événement, un livre…',
      book_question_label: 'Si votre marque était un livre, quel en serait le titre ?',
      book_question_help:
        'Nous ne cherchons pas la bonne réponse. Seulement celle que vous écririez sans y réfléchir à deux fois.',
      message_label: 'Message',
      submit_label: 'Envoyer',
      submitting_label: 'Envoi…',
      success_title: 'Reçu',
      success_body: 'Nous revenons bientôt, avec calme. En attendant, merci de nous lire.',
      error_title: 'Quelque chose ne s’est pas envoyé',
      error_body:
        'Nous n’avons pas pu transmettre votre message. Réessayez dans un instant, ou écrivez directement à l’atelier.',
      legal_consent:
        'En envoyant, vous acceptez que nous conservions votre message le temps nécessaire pour vous répondre.'
    },
    contact_email: 'estudio@atelierdelibros.com',
    contact_email_label: 'Écrire directement'
  },

  footer: {
    column_studio: 'Atelier',
    column_languages: 'Langues',
    column_legal: 'Mentions',
    legal: {
      imprint: 'Mentions légales',
      privacy: 'Confidentialité',
      cookies: 'Cookies'
    },
    copyright: '© 2026 Atelier de Libros. Tous droits réservés.',
    colophon:
      'Composé en Cormorant Garamond et Inter. Servi sur papier ivoire, teinté à la main.'
  },

  cookies: {
    notice:
      'Cette page ne garde que les miettes nécessaires. Pas de pistage, pas de tiers.',
    accept: 'Compris'
  },

  errors: {
    not_found: {
      title: 'Page introuvable',
      body: 'Le chapitre que vous cherchiez n’existe pas — ou n’a pas encore été écrit.',
      cta: 'Retourner à l’accueil'
    }
  }
}

export default dict
