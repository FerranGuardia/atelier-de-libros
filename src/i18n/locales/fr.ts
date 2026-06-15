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
    publishers: 'Clientes',
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
      title: 'Clients — Atelier de Libros',
      description:
        'Une sélection de ceux qui nous ont confié leurs histoires : marques, lieux, auteurs et maisons d’édition.'
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
        'Nous concevons des coins, des événements et des identités à travers le livre —pour les entreprises, les lieux, les personnalités publiques et les particuliers.',
      scroll_cue: 'Continuer'
    },

    manifesto: {
      eyebrow: 'Manifeste',
      axiom_1:
        'Nous ne décorons pas des étagères : nous concevons des atmosphères qui invitent à demeurer.',
      axiom_2:
        'Nous travaillons le livre comme un connecteur culturel —un pont qui unit l’esthétique et l’intellect.',
      axiom_3:
        'Chaque sélection agit comme un miroir du monde intérieur du client. Nous voulons vous aider à raconter votre propre histoire à travers les voix de l’univers littéraire.',
      axiom_4:
        'À une époque où nous cherchons tous l’authenticité, la profondeur d’un bon livre demeure le plus grand des luxes.'
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
        dedication: 'Pour les marques qui veulent être lues, pas seulement vues.',
        sub_a_title: 'Gestion d’image publique',
        sub_a_body:
          'Nous conseillons les marques, les entreprises et les personnes sur les livres à montrer sur leurs réseaux et lors d’événements, en construisant une narration visuelle cohérente avec les valeurs du client.',
        sub_b_title: 'It-books pour les campagnes',
        sub_b_body:
          'Nous sélectionnons les it-books pour les campagnes de mode et les lancements de produit, en veillant à ce que la charge intellectuelle du titre renforce le message de la collection.'
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
        dedication: 'Un service spécialisé dans les expériences littéraires exclusives.',
        sub_a_title: 'Salons littéraires sur mesure',
        sub_a_body:
          'Des salons conçus sur mesure pour les marques, les entreprises ou les personnalités publiques : lectures en direct, débats, micro-conférences et rencontres avec des auteurs. Nous concevons la scénographie littéraire et l’ambiance esthétique, et nous produisons le contenu visuel de l’événement.',
        sub_b_title: 'Merchandising et objets de culte',
        sub_b_body:
          'Papeterie premium, invitations en forme de livre (dans le sillage du cas Etro) et collections d’accessoires inspirées des grandes couvertures classiques.'
      }
    }
  },

  publishers: {
    page_title: 'Pour les maisons d’édition',
    eyebrow: 'L’écosystème éditorial',
    headline: 'Intégration éditoriale et collaborations de marque.',
    lead:
      'Nous intégrons des livres dans des hôtels boutique, des espaces commerciaux, des restaurants, des plateaux de tournage et des environnements corporatifs, en plus de sélectionner des titres pour des campagnes visuelles, des éditoriaux, des événements et des projets curatoriaux, créant des expériences culturelles et projetant le livre là où il n’était jamais parvenu.',
    axis_1_title: 'Activation de catalogue · backlist',
    axis_1_body:
      'Les maisons d’édition conservent des fonds bibliographiques d’une immense valeur qui perdent leur actualité sur les tables de nouveautés. Nous repêchons ces titres pour les intégrer à des projets d’intériorisme narratif —une seconde vie fondée sur leur valeur esthétique et leur contenu intemporel.',
    axis_2_title: 'Contextualisation esthétique',
    axis_2_body:
      'Nous insérons le titre dans un Salon littéraire ou un coin d’auteur : une association immédiate se crée entre la qualité littéraire et l’art de vivre du luxe —un environnement que la maison, seule, peut rarement construire.',
    axis_3_title: 'Accès à de nouveaux gatekeepers',
    axis_3_body:
      'À travers l’atelier, les maisons d’édition accèdent à des prescripteurs hors du circuit littéraire conventionnel —architectes d’intérieur, dirigeants, leaders d’opinion et créatifs—, élargissant le rayon d’influence du livre vers des secteurs économiques transversaux.',
    closer:
      'Nous portons les livres là où personne ne s’attend à les trouver et nous en faisons les protagonistes de nouveaux décors.',
    cta: 'Proposer une collaboration'
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
    portrait_caption: 'Atelier. Barcelone, 2026.'
  },

  epilogo: {
    page_title: 'Épilogue',
    intro:
      'Si vous êtes arrivé jusqu’ici, écrivez-nous. Chaque projet a une histoire à raconter. Nous, nous en trouvons le titre. Voulez-vous trouver le vôtre ?',
    form: {
      name_label: 'Nom',
      email_label: 'Courriel',
      message_label: 'Dites-nous votre intention',
      message_placeholder:
        'Une marque, un lieu, un événement, un livre — ou quelque chose qui n’a pas encore de forme.',
      submit_label: 'Envoyer à l’atelier',
      submitting_label: 'Envoi…',
      success_title: 'Reçu',
      success_body: 'Merci de nous avoir écrit. Nous revenons vers vous dès que nous l’aurons lu.',
      error_title: 'Quelque chose ne s’est pas envoyé',
      error_body:
        'Nous n’avons pas pu transmettre votre message. Réessayez dans un instant, ou écrivez directement à l’atelier.',
      legal_consent:
        'En envoyant, vous acceptez que nous conservions votre message le temps nécessaire pour vous répondre.'
    },
    contact_email: 'elatelierdelibros@gmail.com',
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
