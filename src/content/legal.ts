/* Default legal copy. Boilerplate calibrated to Spanish law (LSSI-CE
 * 34/2002, RGPD UE 2016/679, LOPDGDD 3/2018) — the site is operated
 * from Spain so the same legal regime applies regardless of the
 * visitor's language. Translations are courtesy renderings of that
 * same regime; nothing here changes by locale except the wording.
 *
 * Every `[pendiente: …]` / `[pending: …]` token must be replaced
 * before the site goes live — those are the registered titular
 * details Mireia owes us. The substantive content (purposes, rights,
 * retention) reflects the data-treatment commitment: the studio only
 * uses contact data to read the message and reply. Nothing else.
 * No marketing, no profiling, no transfer, no analytics. */

import type { Locale } from '../i18n/config'

export const STUDIO_EMAIL = 'estudio@atelierdelibros.com'

export interface LegalSection {
  heading: string
  /** Inline HTML allowed (paragraphs and anchors). */
  body: string
  /** Optional unordered list rendered under the body. */
  list?: readonly string[]
}

export interface LegalDocument {
  title: string
  metaTitle: string
  metaDescription: string
  lead: string
  sections: readonly LegalSection[]
}

export interface LegalLabels {
  eyebrow: string
  updatedLabel: string
  updatedDate: string
}

export interface LegalLocale {
  labels: LegalLabels
  imprint: LegalDocument
  privacy: LegalDocument
  cookies: LegalDocument
}

/* ─────────────────────────────────────────────────────────────────
 * ES — canonical
 * ────────────────────────────────────────────────────────────── */

const es: LegalLocale = {
  labels: {
    eyebrow: 'Legal',
    updatedLabel: 'Última actualización',
    updatedDate: '11 de mayo de 2026'
  },
  imprint: {
    title: 'Aviso legal',
    metaTitle: 'Aviso legal · Atelier de Libros',
    metaDescription:
      'Información legal del titular del sitio, datos de contacto y condiciones de uso.',
    lead: 'Información sobre el titular de este sitio web y las condiciones bajo las que se ofrece su contenido.',
    sections: [
      {
        heading: 'Titular del sitio',
        body: 'En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos del titular del sitio web:',
        list: [
          'Titular: Atelier de Libros',
          'Responsable: [pendiente: nombre y apellidos]',
          'NIF: [pendiente: NIF / CIF]',
          'Domicilio: [pendiente: dirección postal]',
          `Correo: ${STUDIO_EMAIL}`,
          'Actividad: estudio independiente de estilismo literario y dirección editorial.'
        ]
      },
      {
        heading: 'Objeto',
        body: 'Las presentes condiciones regulan el uso del sitio web atelierdelibros.com (en adelante, «el sitio»). La navegación por el sitio implica la aceptación, sin reservas, de las condiciones publicadas en el momento del acceso.'
      },
      {
        heading: 'Condiciones de uso',
        body: 'La persona usuaria se compromete a hacer un uso diligente del sitio y a no emplearlo para fines ilícitos o contrarios a la buena fe. El titular se reserva el derecho a retirar, suspender o modificar, en cualquier momento y sin previo aviso, los contenidos y servicios ofrecidos.'
      },
      {
        heading: 'Propiedad intelectual',
        body: 'Todos los contenidos del sitio — textos, fotografías, ilustraciones, tipografías, código y composición — son titularidad de Atelier de Libros o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa y por escrito del titular.'
      },
      {
        heading: 'Responsabilidad',
        body: 'El titular no garantiza la disponibilidad continuada del sitio ni se hace responsable de los daños derivados de un uso indebido del mismo, de la presencia de virus o de la interrupción del servicio. Los enlaces a páginas externas se ofrecen a título informativo y su contenido es responsabilidad exclusiva de sus titulares.'
      },
      {
        heading: 'Legislación aplicable',
        body: 'La relación entre el titular y la persona usuaria se rige por la legislación española vigente. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del titular, salvo que la normativa imperativa disponga otro fuero.'
      }
    ]
  },
  privacy: {
    title: 'Política de privacidad',
    metaTitle: 'Política de privacidad · Atelier de Libros',
    metaDescription:
      'Cómo tratamos los datos personales que recibimos a través del formulario de contacto y del correo del estudio.',
    lead: 'Tratamos los datos que nos confías con la misma discreción con la que trabajamos los libros: solo para leer tu mensaje y responderte. Nada más.',
    sections: [
      {
        heading: 'Compromiso del estudio',
        body: 'Atelier de Libros utiliza los datos que recibe a través del formulario de contacto y del correo del estudio <strong>únicamente para leer la consulta y responderla</strong>. No los empleamos para marketing, no los cedemos a terceros, no los analizamos con fines estadísticos y no los conservamos más allá de lo necesario para mantener viva la conversación.'
      },
      {
        heading: 'Responsable del tratamiento',
        body: `El responsable del tratamiento de los datos personales facilitados a través de este sitio es Atelier de Libros, con los datos de contacto indicados en el <a href="/legal/imprint">Aviso legal</a>. Para cualquier consulta relativa a tus datos, puedes escribirnos a <a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a>.`
      },
      {
        heading: 'Finalidades y base jurídica',
        body: 'Tratamos tus datos con dos finalidades, y solo dos:',
        list: [
          'Leer y responder la consulta o solicitud que nos has remitido a través del formulario o del correo del estudio. Base jurídica: consentimiento de la persona interesada al enviar el mensaje (art. 6.1.a RGPD).',
          'Mantener la correspondencia abierta si tu consulta deriva en un encargo profesional, durante el tiempo que dure la relación. Base jurídica: ejecución del contrato y obligaciones legales asociadas (art. 6.1.b y 6.1.c RGPD).'
        ]
      },
      {
        heading: 'Datos que tratamos',
        body: 'Recogemos únicamente los datos que tú nos facilitas voluntariamente: nombre, correo electrónico y el contenido del mensaje. No utilizamos cookies de análisis, no perfilamos a las personas usuarias y no compartimos los datos con terceros con fines comerciales ni publicitarios.'
      },
      {
        heading: 'Conservación',
        body: 'Los mensajes recibidos se conservan el tiempo necesario para responderlos y, en su caso, durante el plazo legal aplicable si la consulta deriva en un encargo profesional. Cuando dejan de ser necesarios, se eliminan de forma segura.'
      },
      {
        heading: 'Destinatarios',
        body: 'No cedemos tus datos a terceros salvo obligación legal. Para alojar el sitio y enviar correo utilizamos proveedores que actúan como encargados del tratamiento, sujetos a las garantías exigidas por la normativa europea de protección de datos.'
      },
      {
        heading: 'Tus derechos',
        body: `Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a <a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a>, indicando el derecho que deseas ejercer y adjuntando, si fuera necesario, prueba de tu identidad. Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" rel="noopener" target="_blank">www.aepd.es</a>).`
      }
    ]
  },
  cookies: {
    title: 'Política de cookies',
    metaTitle: 'Política de cookies · Atelier de Libros',
    metaDescription:
      'Información sobre las cookies utilizadas en atelierdelibros.com. Este sitio no instala cookies de terceros ni de análisis.',
    lead: 'Este sitio guarda únicamente las migas necesarias para funcionar. Sin rastreo, sin analítica, sin terceros.',
    sections: [
      {
        heading: '¿Qué son las cookies?',
        body: 'Una cookie es un pequeño archivo que un sitio web almacena en tu dispositivo cuando lo visitas. Se utiliza, entre otras cosas, para recordar preferencias, mantener una sesión iniciada o medir el uso del sitio.'
      },
      {
        heading: 'Cookies que utilizamos',
        body: 'Atelier de Libros no instala cookies de análisis ni de terceros. El sitio puede emplear, exclusivamente, cookies técnicas necesarias para su funcionamiento — por ejemplo, para recordar el idioma seleccionado. Estas cookies están exentas del deber de consentimiento previo según el artículo 22.2 de la LSSI-CE.'
      },
      {
        heading: 'Terceros',
        body: 'No utilizamos servicios de terceros que instalen cookies en tu navegador. No empleamos Google Analytics, píxeles publicitarios, mapas embebidos con seguimiento ni botones sociales con carga remota.'
      },
      {
        heading: 'Gestión y revocación',
        body: 'Puedes configurar o eliminar las cookies de tu navegador en cualquier momento desde sus preferencias. Los enlaces siguientes te llevan a la documentación oficial del navegador correspondiente:',
        list: [
          'Chrome — support.google.com/chrome/answer/95647',
          'Safari — support.apple.com/guide/safari/sfri11471',
          'Firefox — support.mozilla.org/kb/cookies-information-websites-store-on-your-computer',
          'Edge — support.microsoft.com/microsoft-edge'
        ]
      },
      {
        heading: 'Cambios en esta política',
        body: 'Podemos actualizar esta política para reflejar cambios técnicos o normativos. La versión vigente es siempre la publicada en esta página, con la fecha de la última actualización indicada arriba.'
      }
    ]
  }
}

/* ─────────────────────────────────────────────────────────────────
 * CA — Català
 * ────────────────────────────────────────────────────────────── */

const ca: LegalLocale = {
  labels: {
    eyebrow: 'Legal',
    updatedLabel: 'Darrera actualització',
    updatedDate: '11 de maig de 2026'
  },
  imprint: {
    title: 'Avís legal',
    metaTitle: 'Avís legal · Atelier de Libros',
    metaDescription:
      'Informació legal del titular del lloc, dades de contacte i condicions d’ús.',
    lead: 'Informació sobre el titular d’aquest lloc web i les condicions sota les quals s’ofereix el seu contingut.',
    sections: [
      {
        heading: 'Titular del lloc',
        body: 'En compliment de l’article 10 de la Llei 34/2002, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s’informa de les dades següents del titular del lloc web:',
        list: [
          'Titular: Atelier de Libros',
          'Responsable: [pendent: nom i cognoms]',
          'NIF: [pendent: NIF / CIF]',
          'Domicili: [pendent: adreça postal]',
          `Correu: ${STUDIO_EMAIL}`,
          'Activitat: estudi independent d’estilisme literari i direcció editorial.'
        ]
      },
      {
        heading: 'Objecte',
        body: 'Aquestes condicions regulen l’ús del lloc web atelierdelibros.com (d’ara endavant, «el lloc»). La navegació pel lloc implica l’acceptació, sense reserves, de les condicions publicades en el moment de l’accés.'
      },
      {
        heading: 'Condicions d’ús',
        body: 'La persona usuària es compromet a fer un ús diligent del lloc i a no emprar-lo per a finalitats il·lícites o contràries a la bona fe. El titular es reserva el dret de retirar, suspendre o modificar, en qualsevol moment i sense avís previ, els continguts i serveis oferts.'
      },
      {
        heading: 'Propietat intel·lectual',
        body: 'Tots els continguts del lloc — textos, fotografies, il·lustracions, tipografies, codi i composició — són titularitat d’Atelier de Libros o de tercers que n’han autoritzat l’ús. Queda prohibida la seva reproducció, distribució, comunicació pública o transformació sense autorització expressa i per escrit del titular.'
      },
      {
        heading: 'Responsabilitat',
        body: 'El titular no garanteix la disponibilitat continuada del lloc ni es fa responsable dels danys derivats d’un ús indegut, de la presència de virus o de la interrupció del servei. Els enllaços a pàgines externes s’ofereixen a títol informatiu i el seu contingut és responsabilitat exclusiva dels seus titulars.'
      },
      {
        heading: 'Legislació aplicable',
        body: 'La relació entre el titular i la persona usuària es regeix per la legislació espanyola vigent. Per a qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals del domicili del titular, llevat que la normativa imperativa disposi un altre fur.'
      }
    ]
  },
  privacy: {
    title: 'Política de privacitat',
    metaTitle: 'Política de privacitat · Atelier de Libros',
    metaDescription:
      'Com tractem les dades personals que rebem a través del formulari de contacte i del correu de l’estudi.',
    lead: 'Tractem les dades que ens confies amb la mateixa discreció amb què treballem els llibres: només per llegir el teu missatge i respondre’t. Res més.',
    sections: [
      {
        heading: 'Compromís de l’estudi',
        body: 'Atelier de Libros utilitza les dades que rep a través del formulari de contacte i del correu de l’estudi <strong>únicament per llegir la consulta i respondre-la</strong>. No les fem servir per a màrqueting, no les cedim a tercers, no les analitzem amb finalitats estadístiques i no les conservem més enllà del necessari per mantenir viva la conversa.'
      },
      {
        heading: 'Responsable del tractament',
        body: `El responsable del tractament de les dades personals facilitades a través d’aquest lloc és Atelier de Libros, amb les dades de contacte indicades a l’<a href="/ca/legal/imprint">Avís legal</a>. Per a qualsevol consulta relativa a les teves dades, pots escriure’ns a <a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a>.`
      },
      {
        heading: 'Finalitats i base jurídica',
        body: 'Tractem les teves dades amb dues finalitats, i només dues:',
        list: [
          'Llegir i respondre la consulta o sol·licitud que ens has tramès a través del formulari o del correu de l’estudi. Base jurídica: consentiment de la persona interessada en enviar el missatge (art. 6.1.a RGPD).',
          'Mantenir la correspondència oberta si la teva consulta deriva en un encàrrec professional, durant el temps que duri la relació. Base jurídica: execució del contracte i obligacions legals associades (art. 6.1.b i 6.1.c RGPD).'
        ]
      },
      {
        heading: 'Dades que tractem',
        body: 'Recollim únicament les dades que tu ens facilites voluntàriament: nom, correu electrònic i el contingut del missatge. No utilitzem galetes d’anàlisi, no perfilem les persones usuàries i no compartim les dades amb tercers amb finalitats comercials ni publicitàries.'
      },
      {
        heading: 'Conservació',
        body: 'Els missatges rebuts es conserven el temps necessari per respondre’ls i, si escau, durant el termini legal aplicable si la consulta deriva en un encàrrec professional. Quan deixen de ser necessaris, s’eliminen de manera segura.'
      },
      {
        heading: 'Destinataris',
        body: 'No cedim les teves dades a tercers llevat d’obligació legal. Per allotjar el lloc i enviar correu utilitzem proveïdors que actuen com a encarregats del tractament, subjectes a les garanties que exigeix la normativa europea de protecció de dades.'
      },
      {
        heading: 'Els teus drets',
        body: `Pots exercir en qualsevol moment els drets d’accés, rectificació, supressió, oposició, limitació del tractament i portabilitat escrivint a <a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a>, indicant el dret que vols exercir i adjuntant, si cal, prova de la teva identitat. Si consideres que el tractament no s’ajusta a la normativa, pots presentar una reclamació davant l’Agència Espanyola de Protecció de Dades (<a href="https://www.aepd.es" rel="noopener" target="_blank">www.aepd.es</a>) o de l’Autoritat Catalana de Protecció de Dades (<a href="https://apdcat.gencat.cat" rel="noopener" target="_blank">apdcat.gencat.cat</a>).`
      }
    ]
  },
  cookies: {
    title: 'Política de galetes',
    metaTitle: 'Política de galetes · Atelier de Libros',
    metaDescription:
      'Informació sobre les galetes utilitzades a atelierdelibros.com. Aquest lloc no instal·la galetes de tercers ni d’anàlisi.',
    lead: 'Aquest lloc desa només les molles necessàries per funcionar. Sense rastreig, sense analítica, sense tercers.',
    sections: [
      {
        heading: 'Què són les galetes?',
        body: 'Una galeta és un petit fitxer que un lloc web emmagatzema al teu dispositiu quan el visites. S’utilitza, entre altres coses, per recordar preferències, mantenir una sessió iniciada o mesurar l’ús del lloc.'
      },
      {
        heading: 'Galetes que utilitzem',
        body: 'Atelier de Libros no instal·la galetes d’anàlisi ni de tercers. El lloc pot emprar, exclusivament, galetes tècniques necessàries per al seu funcionament — per exemple, per recordar l’idioma seleccionat. Aquestes galetes estan exemptes del deure de consentiment previ segons l’article 22.2 de la LSSI-CE.'
      },
      {
        heading: 'Tercers',
        body: 'No utilitzem serveis de tercers que instal·lin galetes al teu navegador. No emprem Google Analytics, píxels publicitaris, mapes incrustats amb seguiment ni botons socials amb càrrega remota.'
      },
      {
        heading: 'Gestió i revocació',
        body: 'Pots configurar o eliminar les galetes del teu navegador en qualsevol moment des de les seves preferències. Els enllaços següents et porten a la documentació oficial del navegador corresponent:',
        list: [
          'Chrome — support.google.com/chrome/answer/95647',
          'Safari — support.apple.com/guide/safari/sfri11471',
          'Firefox — support.mozilla.org/kb/cookies-information-websites-store-on-your-computer',
          'Edge — support.microsoft.com/microsoft-edge'
        ]
      },
      {
        heading: 'Canvis en aquesta política',
        body: 'Podem actualitzar aquesta política per reflectir canvis tècnics o normatius. La versió vigent és sempre la publicada en aquesta pàgina, amb la data de la darrera actualització indicada a dalt.'
      }
    ]
  }
}

/* ─────────────────────────────────────────────────────────────────
 * FR — Français
 * Narrow no-break space (U+202F) before ; : ! ? » and after «.
 * ────────────────────────────────────────────────────────────── */

const fr: LegalLocale = {
  labels: {
    eyebrow: 'Mentions',
    updatedLabel: 'Dernière mise à jour',
    updatedDate: '11 mai 2026'
  },
  imprint: {
    title: 'Mentions légales',
    metaTitle: 'Mentions légales · Atelier de Libros',
    metaDescription:
      'Informations légales du titulaire du site, coordonnées de contact et conditions d’utilisation.',
    lead: 'Informations sur le titulaire de ce site et sur les conditions dans lesquelles son contenu est proposé.',
    sections: [
      {
        heading: 'Titulaire du site',
        body: 'Conformément à l’article 10 de la loi espagnole 34/2002 sur les services de la société de l’information et le commerce électronique (LSSI-CE), les informations suivantes concernant le titulaire du site sont communiquées :',
        list: [
          'Titulaire : Atelier de Libros',
          'Responsable : [à compléter : nom et prénoms]',
          'NIF : [à compléter : NIF / CIF]',
          'Adresse : [à compléter : adresse postale]',
          `Courriel : ${STUDIO_EMAIL}`,
          'Activité : studio indépendant de stylisme littéraire et de direction éditoriale.'
        ]
      },
      {
        heading: 'Objet',
        body: 'Les présentes conditions régissent l’utilisation du site atelierdelibros.com (ci-après « le site »). La navigation sur le site implique l’acceptation, sans réserve, des conditions publiées au moment de l’accès.'
      },
      {
        heading: 'Conditions d’utilisation',
        body: 'L’utilisateur ou l’utilisatrice s’engage à faire un usage diligent du site et à ne pas l’employer à des fins illicites ou contraires à la bonne foi. Le titulaire se réserve le droit de retirer, suspendre ou modifier, à tout moment et sans préavis, les contenus et services proposés.'
      },
      {
        heading: 'Propriété intellectuelle',
        body: 'L’ensemble des contenus du site — textes, photographies, illustrations, typographies, code et composition — sont la propriété d’Atelier de Libros ou de tiers ayant autorisé leur utilisation. Toute reproduction, distribution, communication publique ou transformation est interdite sans autorisation expresse et écrite du titulaire.'
      },
      {
        heading: 'Responsabilité',
        body: 'Le titulaire ne garantit pas la disponibilité continue du site et ne peut être tenu responsable des dommages résultant d’un usage inapproprié, de la présence de virus ou d’une interruption de service. Les liens vers des pages externes sont fournis à titre informatif et leur contenu relève de la seule responsabilité de leurs titulaires.'
      },
      {
        heading: 'Législation applicable',
        body: 'La relation entre le titulaire et l’utilisateur ou l’utilisatrice est régie par la législation espagnole en vigueur. Pour tout litige, les parties se soumettent aux tribunaux du domicile du titulaire, sauf disposition impérative contraire.'
      }
    ]
  },
  privacy: {
    title: 'Politique de confidentialité',
    metaTitle: 'Politique de confidentialité · Atelier de Libros',
    metaDescription:
      'Comment nous traitons les données personnelles reçues via le formulaire de contact et l’adresse courriel du studio.',
    lead: 'Nous traitons les données que vous nous confiez avec la même discrétion que nous mettons dans les livres : uniquement pour lire votre message et y répondre. Rien d’autre.',
    sections: [
      {
        heading: 'Engagement du studio',
        body: 'Atelier de Libros utilise les données reçues via le formulaire de contact et l’adresse courriel du studio <strong>uniquement pour lire la demande et y répondre</strong>. Nous ne les utilisons pas à des fins de marketing, nous ne les cédons pas à des tiers, nous ne les analysons pas à des fins statistiques et nous ne les conservons pas au-delà de la durée nécessaire au maintien de l’échange.'
      },
      {
        heading: 'Responsable du traitement',
        body: `Le responsable du traitement des données personnelles fournies via ce site est Atelier de Libros, dont les coordonnées figurent dans les <a href="/fr/legal/imprint">Mentions légales</a>. Pour toute question relative à vos données, vous pouvez nous écrire à <a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a>.`
      },
      {
        heading: 'Finalités et base juridique',
        body: 'Nous traitons vos données pour deux finalités, et seulement deux :',
        list: [
          'Lire et répondre à la demande ou à la question que vous nous avez adressée via le formulaire ou le courriel du studio. Base juridique : consentement de la personne concernée lors de l’envoi du message (art. 6.1.a du RGPD).',
          'Maintenir la correspondance ouverte si votre demande débouche sur une mission professionnelle, pour la durée de la relation. Base juridique : exécution du contrat et obligations légales associées (art. 6.1.b et 6.1.c du RGPD).'
        ]
      },
      {
        heading: 'Données traitées',
        body: 'Nous ne recueillons que les données que vous nous communiquez volontairement : nom, adresse courriel et contenu du message. Nous n’utilisons pas de cookies d’analyse, nous ne profilons pas les utilisateurs et utilisatrices et nous ne partageons pas les données avec des tiers à des fins commerciales ou publicitaires.'
      },
      {
        heading: 'Conservation',
        body: 'Les messages reçus sont conservés le temps nécessaire à leur traitement et, le cas échéant, pendant la durée légale applicable si la demande débouche sur une mission professionnelle. Lorsqu’ils ne sont plus nécessaires, ils sont supprimés de manière sécurisée.'
      },
      {
        heading: 'Destinataires',
        body: 'Nous ne cédons pas vos données à des tiers, sauf obligation légale. Pour héberger le site et acheminer les courriels, nous faisons appel à des prestataires qui agissent comme sous-traitants, soumis aux garanties exigées par la réglementation européenne en matière de protection des données.'
      },
      {
        heading: 'Vos droits',
        body: `Vous pouvez exercer à tout moment vos droits d’accès, de rectification, d’effacement, d’opposition, de limitation du traitement et de portabilité en écrivant à <a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a>, en précisant le droit que vous souhaitez exercer et en joignant, le cas échéant, une preuve d’identité. Si vous estimez que le traitement n’est pas conforme à la réglementation, vous pouvez introduire une réclamation auprès de l’Agence espagnole de protection des données (<a href="https://www.aepd.es" rel="noopener" target="_blank">www.aepd.es</a>) ou de votre autorité nationale de contrôle.`
      }
    ]
  },
  cookies: {
    title: 'Politique relative aux cookies',
    metaTitle: 'Politique cookies · Atelier de Libros',
    metaDescription:
      'Informations sur les cookies utilisés sur atelierdelibros.com. Ce site n’installe ni cookies tiers ni cookies d’analyse.',
    lead: 'Ce site ne conserve que les miettes strictement nécessaires à son fonctionnement. Pas de pistage, pas d’analytique, pas de tiers.',
    sections: [
      {
        heading: 'Qu’est-ce qu’un cookie ?',
        body: 'Un cookie est un petit fichier qu’un site web enregistre sur votre appareil lors de votre visite. Il sert, entre autres, à mémoriser des préférences, maintenir une session ouverte ou mesurer l’usage du site.'
      },
      {
        heading: 'Cookies utilisés',
        body: 'Atelier de Libros n’installe ni cookies d’analyse ni cookies tiers. Le site peut employer, à titre exclusif, des cookies techniques nécessaires à son fonctionnement — par exemple, pour mémoriser la langue choisie. Ces cookies sont dispensés de consentement préalable au titre de l’article 22.2 de la LSSI-CE.'
      },
      {
        heading: 'Tiers',
        body: 'Nous n’utilisons aucun service tiers susceptible d’installer des cookies dans votre navigateur. Pas de Google Analytics, pas de pixels publicitaires, pas de cartes intégrées avec suivi, pas de boutons sociaux à chargement distant.'
      },
      {
        heading: 'Gestion et révocation',
        body: 'Vous pouvez configurer ou supprimer les cookies de votre navigateur à tout moment depuis ses préférences. Les liens suivants renvoient à la documentation officielle du navigateur correspondant :',
        list: [
          'Chrome — support.google.com/chrome/answer/95647',
          'Safari — support.apple.com/guide/safari/sfri11471',
          'Firefox — support.mozilla.org/kb/cookies-information-websites-store-on-your-computer',
          'Edge — support.microsoft.com/microsoft-edge'
        ]
      },
      {
        heading: 'Modifications de la politique',
        body: 'Nous pouvons mettre à jour cette politique pour refléter des évolutions techniques ou réglementaires. La version en vigueur est toujours celle publiée sur cette page, avec la date de dernière mise à jour indiquée en haut.'
      }
    ]
  }
}

/* ─────────────────────────────────────────────────────────────────
 * EN — British English
 * No spaces around em-dashes (EN-2).
 * ────────────────────────────────────────────────────────────── */

const en: LegalLocale = {
  labels: {
    eyebrow: 'Legal',
    updatedLabel: 'Last updated',
    updatedDate: '11 May 2026'
  },
  imprint: {
    title: 'Imprint',
    metaTitle: 'Imprint · Atelier de Libros',
    metaDescription:
      'Legal information about the site owner, contact details and conditions of use.',
    lead: 'Information about the owner of this website and the terms under which its content is offered.',
    sections: [
      {
        heading: 'Site owner',
        body: 'In accordance with article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following information about the owner of this website is provided:',
        list: [
          'Owner: Atelier de Libros',
          'Responsible: [pending: full name]',
          'Tax ID (NIF): [pending: NIF / CIF]',
          'Address: [pending: postal address]',
          `Email: ${STUDIO_EMAIL}`,
          'Activity: independent studio of literary styling and editorial direction.'
        ]
      },
      {
        heading: 'Purpose',
        body: 'These terms govern use of the website atelierdelibros.com (hereinafter, “the site”). Browsing the site implies unreserved acceptance of the terms published at the time of access.'
      },
      {
        heading: 'Conditions of use',
        body: 'Visitors undertake to use the site responsibly and not to employ it for unlawful purposes or purposes contrary to good faith. The owner reserves the right to withdraw, suspend or modify the contents and services offered at any time, without prior notice.'
      },
      {
        heading: 'Intellectual property',
        body: 'All content on the site—text, photographs, illustrations, typefaces, code and layout—is owned by Atelier de Libros or by third parties who have authorised its use. Reproduction, distribution, public communication or transformation without the owner’s express written permission is prohibited.'
      },
      {
        heading: 'Liability',
        body: 'The owner does not guarantee continuous availability of the site and is not liable for damage arising from improper use, the presence of viruses or any interruption of service. Links to external pages are offered for information only; their content is the sole responsibility of their respective owners.'
      },
      {
        heading: 'Applicable law',
        body: 'The relationship between the owner and the visitor is governed by current Spanish law. For any dispute, the parties submit to the courts of the owner’s domicile, unless mandatory regulations provide otherwise.'
      }
    ]
  },
  privacy: {
    title: 'Privacy policy',
    metaTitle: 'Privacy policy · Atelier de Libros',
    metaDescription:
      'How we handle personal data received through the contact form and the studio email address.',
    lead: 'We handle the data you entrust to us with the same discretion we bring to the books: only to read your message and reply. Nothing else.',
    sections: [
      {
        heading: 'Studio commitment',
        body: 'Atelier de Libros uses the data received through the contact form and the studio email address <strong>solely to read the enquiry and reply to it</strong>. We do not use it for marketing, we do not pass it to third parties, we do not analyse it for statistical purposes, and we do not keep it any longer than is needed to keep the conversation alive.'
      },
      {
        heading: 'Data controller',
        body: `The controller of the personal data submitted through this site is Atelier de Libros, with contact details set out in the <a href="/en/legal/imprint">Imprint</a>. For any data-related query, you may write to <a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a>.`
      },
      {
        heading: 'Purposes and legal basis',
        body: 'We process your data for two purposes, and only two:',
        list: [
          'To read and reply to the enquiry or request you have sent us through the contact form or the studio email. Legal basis: consent of the data subject when sending the message (art. 6(1)(a) GDPR).',
          'To keep the correspondence open if your enquiry leads to a professional engagement, for as long as the relationship lasts. Legal basis: performance of the contract and related legal obligations (art. 6(1)(b) and 6(1)(c) GDPR).'
        ]
      },
      {
        heading: 'Data we process',
        body: 'We collect only the data you provide voluntarily: name, email address and message contents. We do not use analytics cookies, we do not profile visitors, and we do not share data with third parties for commercial or advertising purposes.'
      },
      {
        heading: 'Retention',
        body: 'Messages are kept for as long as is needed to reply to them and, where applicable, for the legal retention period if the enquiry leads to a professional engagement. Once no longer needed, they are deleted securely.'
      },
      {
        heading: 'Recipients',
        body: 'We do not pass your data to third parties unless required by law. For site hosting and email delivery we rely on providers acting as processors, subject to the safeguards required by European data-protection law.'
      },
      {
        heading: 'Your rights',
        body: `You may exercise at any time your rights of access, rectification, erasure, objection, restriction of processing, and portability by writing to <a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a>, stating which right you wish to exercise and attaching, where necessary, proof of identity. If you believe the processing does not comply with the regulations, you may lodge a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es" rel="noopener" target="_blank">www.aepd.es</a>) or with your national supervisory authority.`
      }
    ]
  },
  cookies: {
    title: 'Cookie policy',
    metaTitle: 'Cookie policy · Atelier de Libros',
    metaDescription:
      'Information about the cookies used on atelierdelibros.com. This site sets no third-party or analytics cookies.',
    lead: 'This site keeps only the crumbs strictly needed to function. No tracking, no analytics, no third parties.',
    sections: [
      {
        heading: 'What are cookies?',
        body: 'A cookie is a small file that a website stores on your device when you visit it. It is used, among other things, to remember preferences, keep a session open or measure how the site is used.'
      },
      {
        heading: 'Cookies we use',
        body: 'Atelier de Libros sets no analytics or third-party cookies. The site may use, exclusively, technical cookies strictly necessary for its operation—for instance, to remember the chosen language. These cookies are exempt from prior consent under article 22(2) of the LSSI-CE.'
      },
      {
        heading: 'Third parties',
        body: 'We use no third-party services that set cookies in your browser. No Google Analytics, no advertising pixels, no embedded maps with tracking, no remotely loaded social buttons.'
      },
      {
        heading: 'Management and revocation',
        body: 'You can configure or remove cookies in your browser at any time from its preferences. The following links lead to the official documentation for each browser:',
        list: [
          'Chrome — support.google.com/chrome/answer/95647',
          'Safari — support.apple.com/guide/safari/sfri11471',
          'Firefox — support.mozilla.org/kb/cookies-information-websites-store-on-your-computer',
          'Edge — support.microsoft.com/microsoft-edge'
        ]
      },
      {
        heading: 'Changes to this policy',
        body: 'We may update this policy to reflect technical or regulatory changes. The version in force is always the one published on this page, with the last-updated date shown above.'
      }
    ]
  }
}

/* ─────────────────────────────────────────────────────────────────
 * IT — Italiano
 * ────────────────────────────────────────────────────────────── */

const it: LegalLocale = {
  labels: {
    eyebrow: 'Legale',
    updatedLabel: 'Ultimo aggiornamento',
    updatedDate: '11 maggio 2026'
  },
  imprint: {
    title: 'Note legali',
    metaTitle: 'Note legali · Atelier de Libros',
    metaDescription:
      'Informazioni legali del titolare del sito, dati di contatto e condizioni d’uso.',
    lead: 'Informazioni sul titolare di questo sito web e sulle condizioni con cui ne è offerto il contenuto.',
    sections: [
      {
        heading: 'Titolare del sito',
        body: 'In ottemperanza all’articolo 10 della Legge spagnola 34/2002 sui Servizi della Società dell’Informazione e del Commercio Elettronico (LSSI-CE), si comunicano i seguenti dati del titolare del sito web:',
        list: [
          'Titolare: Atelier de Libros',
          'Responsabile: [da definire: nome e cognome]',
          'NIF: [da definire: NIF / CIF]',
          'Indirizzo: [da definire: indirizzo postale]',
          `E-mail: ${STUDIO_EMAIL}`,
          'Attività: studio indipendente di stilismo letterario e direzione editoriale.'
        ]
      },
      {
        heading: 'Oggetto',
        body: 'Le presenti condizioni regolano l’uso del sito web atelierdelibros.com (di seguito, «il sito»). La navigazione del sito implica l’accettazione, senza riserve, delle condizioni pubblicate al momento dell’accesso.'
      },
      {
        heading: 'Condizioni d’uso',
        body: 'L’utente si impegna a fare un uso diligente del sito e a non utilizzarlo per finalità illecite o contrarie alla buona fede. Il titolare si riserva il diritto di ritirare, sospendere o modificare, in qualsiasi momento e senza preavviso, i contenuti e i servizi offerti.'
      },
      {
        heading: 'Proprietà intellettuale',
        body: 'Tutti i contenuti del sito — testi, fotografie, illustrazioni, caratteri tipografici, codice e composizione — sono di titolarità di Atelier de Libros o di terzi che ne hanno autorizzato l’uso. È vietata la riproduzione, la distribuzione, la comunicazione pubblica o la trasformazione senza autorizzazione espressa e scritta del titolare.'
      },
      {
        heading: 'Responsabilità',
        body: 'Il titolare non garantisce la disponibilità continuativa del sito e non risponde dei danni derivanti da un uso improprio, dalla presenza di virus o dall’interruzione del servizio. I link a pagine esterne sono forniti a titolo informativo e il loro contenuto è di esclusiva responsabilità dei rispettivi titolari.'
      },
      {
        heading: 'Legge applicabile',
        body: 'Il rapporto tra il titolare e l’utente è disciplinato dalla legge spagnola vigente. Per qualsiasi controversia, le parti si sottomettono ai tribunali del domicilio del titolare, salvo che norme imperative dispongano un foro differente.'
      }
    ]
  },
  privacy: {
    title: 'Informativa sulla privacy',
    metaTitle: 'Informativa sulla privacy · Atelier de Libros',
    metaDescription:
      'Come trattiamo i dati personali ricevuti tramite il modulo di contatto e l’e-mail dello studio.',
    lead: 'Trattiamo i dati che ci affidi con la stessa discrezione con cui lavoriamo i libri: solo per leggere il tuo messaggio e risponderti. Nient’altro.',
    sections: [
      {
        heading: 'Impegno dello studio',
        body: 'Atelier de Libros utilizza i dati ricevuti tramite il modulo di contatto e l’e-mail dello studio <strong>esclusivamente per leggere la richiesta e rispondervi</strong>. Non li impieghiamo per attività di marketing, non li cediamo a terzi, non li analizziamo a fini statistici e non li conserviamo oltre il tempo necessario a mantenere viva la conversazione.'
      },
      {
        heading: 'Titolare del trattamento',
        body: `Il titolare del trattamento dei dati personali forniti attraverso questo sito è Atelier de Libros, con i recapiti indicati nelle <a href="/it/legal/imprint">Note legali</a>. Per qualsiasi richiesta relativa ai tuoi dati, puoi scriverci a <a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a>.`
      },
      {
        heading: 'Finalità e base giuridica',
        body: 'Trattiamo i tuoi dati per due finalità, e soltanto due:',
        list: [
          'Leggere e rispondere alla richiesta che ci hai inviato tramite il modulo o l’e-mail dello studio. Base giuridica: consenso dell’interessato al momento dell’invio del messaggio (art. 6, par. 1, lett. a GDPR).',
          'Mantenere aperta la corrispondenza se la tua richiesta dà luogo a un incarico professionale, per tutta la durata del rapporto. Base giuridica: esecuzione del contratto e obblighi legali connessi (art. 6, par. 1, lett. b e c GDPR).'
        ]
      },
      {
        heading: 'Dati trattati',
        body: 'Raccogliamo soltanto i dati che ci fornisci volontariamente: nome, indirizzo e-mail e contenuto del messaggio. Non utilizziamo cookie di analisi, non profiliamo gli utenti e non condividiamo i dati con terzi a fini commerciali o pubblicitari.'
      },
      {
        heading: 'Conservazione',
        body: 'I messaggi ricevuti sono conservati per il tempo necessario a rispondervi e, ove applicabile, per il termine legale previsto se la richiesta dà luogo a un incarico professionale. Quando non sono più necessari, vengono cancellati in modo sicuro.'
      },
      {
        heading: 'Destinatari',
        body: 'Non cediamo i tuoi dati a terzi salvo obbligo di legge. Per ospitare il sito e recapitare l’e-mail ci avvaliamo di fornitori che agiscono come responsabili del trattamento, soggetti alle garanzie richieste dalla normativa europea in materia di protezione dei dati.'
      },
      {
        heading: 'I tuoi diritti',
        body: `Puoi esercitare in qualsiasi momento i diritti di accesso, rettifica, cancellazione, opposizione, limitazione del trattamento e portabilità scrivendo a <a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a>, indicando il diritto che desideri esercitare e allegando, se necessario, prova della tua identità. Se ritieni che il trattamento non sia conforme alla normativa, puoi presentare reclamo all’Agenzia Spagnola di Protezione Dati (<a href="https://www.aepd.es" rel="noopener" target="_blank">www.aepd.es</a>) o al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" rel="noopener" target="_blank">www.garanteprivacy.it</a>).`
      }
    ]
  },
  cookies: {
    title: 'Informativa sui cookie',
    metaTitle: 'Informativa sui cookie · Atelier de Libros',
    metaDescription:
      'Informazioni sui cookie utilizzati su atelierdelibros.com. Il sito non installa cookie di terze parti né di analisi.',
    lead: 'Questo sito conserva soltanto le briciole necessarie a funzionare. Niente tracciamento, niente analitica, niente terze parti.',
    sections: [
      {
        heading: 'Che cosa sono i cookie?',
        body: 'Un cookie è un piccolo file che un sito web memorizza sul tuo dispositivo quando lo visiti. Serve, tra le altre cose, a ricordare le preferenze, a mantenere aperta una sessione o a misurare l’utilizzo del sito.'
      },
      {
        heading: 'Cookie utilizzati',
        body: 'Atelier de Libros non installa cookie di analisi né di terze parti. Il sito può impiegare esclusivamente cookie tecnici necessari al suo funzionamento — per esempio, per ricordare la lingua scelta. Tali cookie sono esenti dall’obbligo di consenso preventivo ai sensi dell’art. 22.2 della LSSI-CE.'
      },
      {
        heading: 'Terze parti',
        body: 'Non utilizziamo servizi di terze parti che installino cookie nel tuo browser. Niente Google Analytics, niente pixel pubblicitari, niente mappe incorporate con tracciamento, niente pulsanti social a caricamento remoto.'
      },
      {
        heading: 'Gestione e revoca',
        body: 'Puoi configurare o eliminare i cookie del tuo browser in qualsiasi momento dalle sue preferenze. I link seguenti rinviano alla documentazione ufficiale del browser corrispondente:',
        list: [
          'Chrome — support.google.com/chrome/answer/95647',
          'Safari — support.apple.com/guide/safari/sfri11471',
          'Firefox — support.mozilla.org/kb/cookies-information-websites-store-on-your-computer',
          'Edge — support.microsoft.com/microsoft-edge'
        ]
      },
      {
        heading: 'Modifiche all’informativa',
        body: 'Possiamo aggiornare questa informativa per riflettere modifiche tecniche o normative. La versione in vigore è sempre quella pubblicata su questa pagina, con la data dell’ultimo aggiornamento indicata in alto.'
      }
    ]
  }
}

const legalByLocale: Record<Locale, LegalLocale> = { es, ca, fr, en, it }

export function getLegal(locale: Locale): LegalLocale {
  return legalByLocale[locale]
}
