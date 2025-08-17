import React from "react";
import { FileText, ShieldCheck, ScrollText } from "lucide-react";

/**
 * Spinary – Conditions Générales d'Utilisation (CGU)
 * React + TypeScript + Tailwind CSS page
 *
 * Usage: <CGUPage onBack={...} />
 * Based on the actual Spinary.io CGU document
 */


const defaultCompany = {
  name: "AnKT Services",
  legalForm: "SASU au capital de 100 €",
  website: "https://spinary.io",
  email: "support@spinary.io",
  address: "25 rue Lenepveu, c/o Weforge, 49100 Angers, France",
  phone: "",
  cityForJurisdiction: "Angers",
  countryLaw: "France",
};

const sections = [
  { id: "objet", title: "1. Objet" },
  { id: "acces", title: "2. Accès au service" },
  { id: "compte", title: "3. Création et gestion du compte" },
  { id: "credits", title: "4. Utilisation des crédits" },
  { id: "ia-contenus", title: "5. Utilisation de l'IA et contenus générés" },
  { id: "comportement", title: "6. Comportement de l'utilisateur" },
  { id: "propriete", title: "7. Propriété intellectuelle" },
  { id: "responsabilite", title: "8. Responsabilité" },
  { id: "suspension", title: "9. Suspension et résiliation" },
  { id: "modifications", title: "10. Modifications des CGU" },
  { id: "droit", title: "11. Droit applicable et juridiction" },
  { id: "contact", title: "12. Contact" },
];

function formatDate(iso?: string) {
  try {
    const d = iso ? new Date(iso) : new Date("2025-08-10");
    return d.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  } catch {
    return iso || "10 août 2025";
  }
}

const Anchor: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100"
  >
    {children}
  </a>
);

const SectionTitle: React.FC<{ id: string; children: React.ReactNode }> = ({
  id,
  children,
}) => (
  <h2
    id={id}
    className="scroll-mt-28 text-xl md:text-2xl font-semibold text-gray-900 mt-10"
  >
    {children}
  </h2>
);

const Paragraph: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <p className={`text-gray-700 leading-relaxed mb-4 ${className ?? ""}`}>
    {children}
  </p>
);

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="pl-2 text-gray-700 leading-relaxed mb-2">{children}</li>
);

const InfoBadge: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
    <ShieldCheck className="h-3.5 w-3.5" /> {label}
  </span>
);

const CGUPage = () => {
  const c = defaultCompany;
  const lastUpdated = formatDate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 md:text-xl">
                Conditions Générales d'Utilisation de Spinary.io
              </h1>
              <div className="mt-0.5 text-xs text-gray-500">
                Dernière mise à jour : {lastUpdated}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <InfoBadge label="SaaS IA" />
            <InfoBadge label="Crédits" />
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[280px_1fr] md:px-6 md:py-10">
        {/* Sidebar TOC */}
        <aside className="hidden md:block">
          <div className="sticky top-20 rounded-xl border border-gray-200 bg-white p-2">
            <div className="flex items-center gap-2 px-3 py-2">
              <ScrollText className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-gray-900">
                Sommaire
              </span>
            </div>
            <nav className="mt-1 border-t border-gray-100 pt-1">
              {sections.map((s) => (
                <Anchor key={s.id} href={`#${s.id}`}>
                  {s.title}
                </Anchor>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <article className="rounded-2xl border border-gray-200 bg-white p-5 md:p-8">
          <div className="prose max-w-none prose-headings:scroll-mt-28">
            {/* 1. Objet */}
            <SectionTitle id="objet">1. Objet</SectionTitle>
            <Paragraph>
              La plateforme en ligne Spinary.io (ci-après « la Plateforme »),
              accessible via le site{" "}
              <a href={c.website} className="text-indigo-600 hover:underline">
                {c.website}
              </a>{" "}
              (ci-après « le Site »), est exploitée par la société {c.name} (
              {c.legalForm}, immatriculée au RCS d'Angers sous le n° 843 902
              156, siège social : {c.address} – ci-après « la Société »).
            </Paragraph>
            <Paragraph>
              Les présentes Conditions Générales d'Utilisation (ci-après « CGU
              ») ont pour objet de définir les modalités et conditions
              d'utilisation du Service Spinary.io ainsi que les droits et
              obligations de l'Utilisateur (ci-après « l'Utilisateur ») et de la
              Société dans ce cadre. L'utilisation de la Plateforme implique
              l'acceptation sans réserve des présentes CGU.
            </Paragraph>
            <Paragraph>
              Spinary.io est une plateforme SaaS permettant à l'Utilisateur de{" "}
              <strong>
                générer du contenu à l'aide d'une intelligence artificielle, via
                un système de crédits
              </strong>
              . Les présentes CGU encadrent l'utilisation de ce service de
              génération de contenus par IA fonctionnant sur crédits. Elles
              s'appliquent à toute personne utilisant la Plateforme. En cas de
              non-acceptation des CGU, l'Utilisateur doit renoncer à accéder au
              Service.
            </Paragraph>

            {/* 2. Accès au service */}
            <SectionTitle id="acces">2. Accès au service</SectionTitle>
            <Paragraph>
              La Plateforme est accessible en ligne via Internet, en principe
              24h/24 et 7j/7. La Société met en œuvre tous les moyens
              raisonnables pour assurer un accès continu au Service, sans
              toutefois garantir une disponibilité absolue.
            </Paragraph>
            <Paragraph>
              L'accès au Service peut notamment être interrompu temporairement
              pour des opérations de maintenance, de mise à jour ou pour toute
              autre raison technique. La Société ne saurait être tenue
              responsable des indisponibilités ou dysfonctionnements du Service,
              qu'elle qu'en soit la cause (panne, maintenance, cas de force
              majeure, etc.).
            </Paragraph>
            <Paragraph>
              L'accès à certaines fonctionnalités de la Plateforme (notamment la
              génération de contenus par l'IA) nécessite la création préalable
              d'un compte utilisateur (voir article 3). Il appartient par
              ailleurs à l'Utilisateur de disposer d'un équipement informatique
              et d'une connexion Internet suffisants pour accéder au Service.
              L'Utilisateur doit s'assurer que sa configuration (navigateur à
              jour, activation des cookies et du JavaScript, etc.) est
              compatible avec la Plateforme. La Société ne pourra être tenue
              responsable d'un défaut d'accès dû à un équipement ou une
              connexion inadaptés de l'Utilisateur.
            </Paragraph>

            {/* 3. Création et gestion du compte */}
            <SectionTitle id="compte">
              3. Création et gestion du compte
            </SectionTitle>
            <Paragraph>
              Pour utiliser pleinement le Service, l'Utilisateur doit au
              préalable créer un compte personnel sur la Plateforme. Lors de
              l'inscription, l'Utilisateur s'engage à fournir des informations
              exactes, complètes et à jour, puis à les maintenir à jour en cas
              de modifications ultérieures.
            </Paragraph>
            <Paragraph>
              L'Utilisateur choisit des identifiants de connexion, constitués
              d'une adresse email valide et d'un mot de passe sécurisé. Ces
              Identifiants sont strictement personnels et confidentiels ;
              l'Utilisateur s'engage à ne pas les communiquer à des tiers ni les
              réutiliser pour le compte d'une autre personne. Il est responsable
              de la conservation et de la confidentialité de ses Identifiants.
              Toute connexion ou action effectuée via son compte est réputée
              émaner de lui.
            </Paragraph>
            <Paragraph>
              En cas d'utilisation non autorisée de ses Identifiants ou de
              suspicion de violation de la sécurité de son compte, l'Utilisateur
              doit en avertir immédiatement la Société afin que celle-ci prenne
              les mesures appropriées.
            </Paragraph>
            <Paragraph>
              En créant un compte, l'Utilisateur déclare être âgé d'au moins 18
              ans et disposer de la capacité juridique de contracter. Les
              mineurs de moins de 18 ans doivent obtenir l'autorisation de leur
              représentant légal avant de s'inscrire et d'utiliser le Service.
              La Société se réserve le droit de demander un justificatif d'âge
              ou d'identité en cas de doute sur l'exactitude des informations
              fournies.
            </Paragraph>
            <Paragraph>
              Toute fausse déclaration ou usurpation d'identité lors de la
              création du compte pourra entraîner la suspension ou la
              suppression immédiate du compte de l'Utilisateur, sans préavis et
              sans préjudice de toute poursuite judiciaire ultérieure. La
              Société se réserve également le droit de refuser l'inscription ou
              l'accès au Service à toute personne ne respectant pas les
              présentes CGU.
            </Paragraph>
            <Paragraph>
              L'Utilisateur peut demander à tout moment la suppression de son
              compte en contactant la Société (voir article 12 Contact). La
              fermeture ou la suppression d'un compte, qu'elle soit initiée par
              l'Utilisateur ou par la Société, n'ouvre droit à aucun
              remboursement des crédits éventuellement restants sur le compte
              (sauf disposition contraire dans les conditions commerciales
              applicables ou accord spécifique de la Société).
            </Paragraph>

            {/* 4. Utilisation des crédits */}
            <SectionTitle id="credits">4. Utilisation des crédits</SectionTitle>
            <Paragraph>
              L'utilisation des fonctionnalités de génération de contenus via
              l'IA sur la Plateforme est conditionnée par un système de crédits.
              Chaque requête ou action de génération effectuée par l'Utilisateur
              entraîne la consommation d'un certain nombre de crédits, dont le
              montant peut varier en fonction du type de contenu demandé ou de
              la complexité du modèle d'IA utilisé. L'Utilisateur doit donc
              disposer d'un solde de crédits suffisant sur son compte pour
              pouvoir générer du contenu.
            </Paragraph>
            <Paragraph>
              Des crédits peuvent être alloués gratuitement à l'Utilisateur lors
              de son inscription ou à titre promotionnel (par exemple, via une
              offre d'essai), et/ou être achetés par l'Utilisateur sur le Site
              en fonction des formules proposées (packs de crédits, abonnement
              mensuel, etc.). Les modalités d'achat, de prix et de paiement des
              crédits font l'objet de conditions contractuelles ou commerciales
              spécifiques communiquées à l'Utilisateur.
            </Paragraph>
            <Paragraph>
              <strong>
                Les crédits n'ont pas de valeur monétaire en dehors de la
                Plateforme.
              </strong>{" "}
              Ils sont personnels à chaque compte utilisateur, non transférables
              à un autre compte et non remboursables (sauf disposition légale
              impérative contraire). Toute tentative de transfert, échange ou
              revente de crédits en dehors du Service est prohibée.
            </Paragraph>
            <Paragraph>
              Certains crédits (notamment ceux offerts à titre gracieux ou
              promotionnel) peuvent avoir une date d'expiration au-delà de
              laquelle ils seront automatiquement invalidés. Le cas échéant,
              cette information (durée de validité des crédits) sera précisée à
              l'Utilisateur lors de l'octroi des crédits ou dans son espace
              personnel. Il incombe à l'Utilisateur d'utiliser ses crédits avant
              expiration le cas échéant.
            </Paragraph>
            <Paragraph>
              La Société se réserve le droit de faire évoluer à tout moment sa
              politique de crédits, notamment le barème de consommation de
              crédits par action, le prix d'acquisition des crédits, ou les
              offres promotionnelles, afin de s'adapter aux évolutions
              techniques, économiques ou réglementaires. En cas de modification
              substantielle affectant les droits de l'Utilisateur, la Société en
              informera préalablement l'Utilisateur par tout moyen approprié.
            </Paragraph>
            <Paragraph>
              En cas de manquement de l'Utilisateur aux présentes CGU, notamment
              en cas d'utilisation frauduleuse des crédits ou de tentative de
              contournement du système, la Société se réserve le droit d'annuler
              tout ou partie des crédits acquis indûment par l'Utilisateur et/ou
              de suspendre le compte de ce dernier sans préavis.
            </Paragraph>

            {/* 5. Utilisation de l'IA et contenus générés */}
            <SectionTitle id="ia-contenus">
              5. Utilisation de l'IA et contenus générés
            </SectionTitle>
            <Paragraph>
              La Plateforme permet à l'Utilisateur de générer des contenus
              variés (textes, images, données, etc.) par l'intermédiaire d'un
              agent d'intelligence artificielle, à partir des instructions,
              données ou prompts fournis par l'Utilisateur. Les contenus ainsi
              produits par le Service sont désignés comme « Contenus Générés ».
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Responsabilité de l'Utilisateur sur les données fournies
            </h3>
            <Paragraph>
              L'Utilisateur demeure propriétaire et responsable des données,
              informations et contenus qu'il fournit ou soumet sur la Plateforme
              dans le cadre de l'utilisation de l'IA. Il s'engage à ne pas
              utiliser le Service pour générer ou diffuser des contenus
              illicites, interdits ou portant atteinte aux droits de quiconque.
              L'Utilisateur garantit également qu'il détient tous les droits et
              autorisations nécessaires sur les éléments qu'il soumet à l'IA.
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Nature des contenus générés
            </h3>
            <Paragraph>
              L'Utilisateur reconnaît que{" "}
              <strong>
                les résultats fournis par l'intelligence artificielle peuvent
                s'avérer inexacts, incomplets, biaisés ou inadaptés à certains
                contextes
              </strong>
              . La Société ne contrôle pas exhaustivement les Contenus Générés
              et ne garantit aucunement leur exactitude, leur qualité ni leur
              pertinence. Les contenus produits par l'IA sont fournis tels quels
              à titre purement informatif, et ne sauraient être assimilés à des
              conseils personnalisés ni se substituer à une consultation
              professionnelle adaptée aux besoins spécifiques de l'Utilisateur.
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Usage des contenus générés
            </h3>
            <Paragraph>
              L'Utilisateur est seul responsable de l'utilisation qu'il fait des
              Contenus Générés et des décisions qu'il prend sur la base de
              ceux-ci. Il lui appartient de vérifier et, si nécessaire, de
              compléter ou corriger les Contenus Générés avant de les exploiter.
              L'Utilisateur assume ainsi pleinement les conséquences de
              l'utilisation des résultats fournis par la Plateforme. La Société
              décline toute responsabilité quant à l'utilisation des Contenus
              Générés par l'Utilisateur et aux éventuels dommages ou pertes
              pouvant en résulter.
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Limites et obligations liées à l'IA
            </h3>
            <Paragraph>
              La Société met en œuvre des mesures pour éviter, autant que
              possible, la production de contenus illicites ou inappropriés par
              l'IA. À ce titre, la Plateforme peut intégrer des filtres ou des
              restrictions imposées soit par la Société, soit par les modèles
              d'IA tiers utilisés. L'Utilisateur s'engage à ne pas tenter de
              contourner ces filtres ou restrictions techniques.
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Droits sur les contenus générés
            </h3>
            <Paragraph>
              Dans la mesure permise par la loi applicable, l'Utilisateur
              conserve les droits de propriété intellectuelle sur les Contenus
              Générés résultant de ses propres requêtes, sous réserve que ces
              contenus soient éligibles à une protection par le droit d'auteur.
              La Société ne revendique aucun droit de propriété sur ces Contenus
              Générés.
            </Paragraph>
            <Paragraph>
              Il est expressément porté à l'attention de l'Utilisateur que les
              contenus produits par une IA peuvent incorporer des éléments issus
              des données d'entraînement du modèle ou de sources tierces. La
              Société ne garantit pas que les Contenus Générés sont entièrement
              libres de droits de tiers.
            </Paragraph>

            {/* 6. Comportement de l'utilisateur */}
            <SectionTitle id="comportement">
              6. Comportement de l'utilisateur
            </SectionTitle>
            <Paragraph>
              Chaque Utilisateur s'engage à utiliser la Plateforme et le Service
              de manière légale et appropriée. Il doit adopter un comportement
              respectueux envers la Société, les autres utilisateurs et les lois
              en vigueur. Sont strictement interdits dans le cadre de
              l'utilisation du Service, notamment :
            </Paragraph>

            <ul className="list-disc space-y-3 pl-6 mb-4">
              <Bullet>
                <strong>Activités illégales ou abusives :</strong> Utiliser la
                Plateforme à des fins illégales, frauduleuses, abusives ou
                contraires à l'ordre public et aux bonnes mœurs.
              </Bullet>
              <Bullet>
                <strong>Contenus illicites ou répréhensibles :</strong> Générer,
                transmettre ou diffuser tout contenu diffamatoire, injurieux,
                obscène, pornographique, pédopornographique, violent, haineux,
                discriminatoire, xénophobe, négationniste/révisionniste,
                incitant à la haine ou à la violence, faisant l'apologie de
                crimes, ou de manière générale tout contenu portant atteinte à
                la dignité humaine ou aux droits d'autrui.
              </Bullet>
              <Bullet>
                <strong>Atteinte aux droits de tiers :</strong> Utiliser le
                Service d'une manière qui enfreint les droits de tiers,
                notamment les droits de propriété intellectuelle ou les droits
                de la personnalité.
              </Bullet>
              <Bullet>
                <strong>Intrusion et perturbation technique :</strong> Porter
                atteinte ou tenter de porter atteinte à l'intégrité du Service
                et de la Plateforme, introduire des virus ou codes malveillants,
                procéder à des tests de sécurité non autorisés.
              </Bullet>
              <Bullet>
                <strong>Usurpation d'identité :</strong> Usurper l'identité
                d'une personne physique ou morale, accéder ou tenter d'accéder
                au compte d'un autre utilisateur.
              </Bullet>
              <Bullet>
                <strong>Contournement du système de crédits :</strong> Détourner
                ou tenter de détourner le système de crédits ou tout autre
                mécanisme mis en place sur la Plateforme.
              </Bullet>
              <Bullet>
                <strong>
                  Revente ou exploitation commerciale non autorisée :
                </strong>{" "}
                Revendre, louer, partager, ou fournir à des tiers tout ou partie
                de l'accès au Service sans autorisation écrite préalable de la
                Société.
              </Bullet>
              <Bullet>
                <strong>Spam et actions malveillantes :</strong> Utiliser la
                Plateforme pour envoyer des communications non sollicitées de
                masse, effectuer du phishing, ou réaliser des envois
                automatisés.
              </Bullet>
            </ul>

            <Paragraph>
              Cette liste d'interdictions n'est pas exhaustive. De façon
              générale, l'Utilisateur s'engage à adopter une utilisation loyale
              et responsable de la Plateforme. En cas de non-respect de ces
              règles de conduite, la Société se réserve le droit de suspendre ou
              résilier immédiatement le compte de l'Utilisateur fautif, sans
              préavis.
            </Paragraph>

            {/* 7. Propriété intellectuelle */}
            <SectionTitle id="propriete">
              7. Propriété intellectuelle
            </SectionTitle>
            <Paragraph>
              La Plateforme Spinary.io, ainsi que l'ensemble de son contenu et
              de ses composantes, sont protégés par le droit de la propriété
              intellectuelle. Sauf mention contraire explicite, tous les
              éléments mis à disposition via le Service sont la propriété
              exclusive de la Société ou de ses éventuels
              partenaires/fournisseurs. Cela comprend la technologie et le
              logiciel de la Plateforme, son code source, sa structure et son
              interface, les textes et contenus éditoriaux, les bases de
              données, les images, graphismes et illustrations, le design et
              l'ergonomie, les logos, marques et signes distinctifs.
            </Paragraph>
            <Paragraph>
              L'utilisation du Service par l'Utilisateur ne saurait entraîner la
              cession ou l'octroi d'aucun droit de propriété intellectuelle au
              bénéfice de celui-ci sur les éléments précités. La Société concède
              à l'Utilisateur un droit d'accès et d'utilisation personnel, non
              exclusif, non cessible et limité de la Plateforme, strictement aux
              fins de l'utilisation du Service conformément aux présentes CGU.
            </Paragraph>
            <Paragraph>
              En particulier, l'Utilisateur s'interdit de copier, reproduire,
              représenter, modifier, adapter, publier, distribuer, traduire,
              désassembler, rétroconcevoir, extraire ou réutiliser de manière
              substantielle tout ou partie de la Plateforme ou de son contenu,
              sans l'accord exprès et préalable de la Société. Le non-respect de
              ces règles constitue une contrefaçon passible de sanctions civiles
              et pénales.
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Contenus de l'Utilisateur
            </h3>
            <Paragraph>
              L'Utilisateur peut, dans le cadre de l'utilisation du Service,
              fournir des contenus ou données. L'Utilisateur demeure titulaire
              de l'intégralité des droits de propriété sur les contenus qu'il
              fournit. Il accorde néanmoins à la Société, pour le monde entier
              et pour la durée légale de protection des droits, une licence non
              exclusive, gratuite et sublicenciable visant à utiliser, héberger,
              stocker, reproduire et traiter ces contenus de l'Utilisateur,
              uniquement dans le but de fournir le Service et d'améliorer les
              algorithmes ou le fonctionnement de la Plateforme.
            </Paragraph>

            {/* 8. Responsabilité */}
            <SectionTitle id="responsabilite">8. Responsabilité</SectionTitle>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Obligation de moyens
            </h3>
            <Paragraph>
              La Société s'engage à mettre en œuvre les moyens raisonnables pour
              assurer le bon fonctionnement et la disponibilité du Service.
              Néanmoins, la Société n'est tenue qu'à une obligation de moyens et
              ne garantit pas que le Service fonctionnera sans interruption ni
              sans erreur. Le Service est fourni « en l'état » et dans la limite
              de sa disponibilité.
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Limitations de responsabilité de la Société
            </h3>
            <Paragraph>
              La Société ne pourra en aucun cas être tenue pour responsable des
              dommages résultant de causes échappant à son contrôle raisonnable,
              notamment en cas de défaillance du réseau Internet, d'intrusion
              malveillante d'un tiers, de mauvaise utilisation du Service par
              l'Utilisateur, ou de force majeure.
            </Paragraph>
            <Paragraph>
              En tout état de cause, la Société exclut toute responsabilité pour
              les dommages indirects ou imprévisibles que pourrait subir
              l'Utilisateur. Sont notamment considérés comme indirects : tout
              préjudice financier ou commercial, perte de profit, perte de
              revenus, perte de données, perte d'opportunité, atteinte à l'image
              ou interruption d'activité.
            </Paragraph>
            <Paragraph>
              Dans l'hypothèse où la responsabilité de la Société viendrait à
              être engagée, elle sera plafonnée au montant total des sommes
              effectivement versées par l'Utilisateur à la Société au titre de
              l'achat de crédits au cours des douze (12) derniers mois précédant
              le fait générateur de responsabilité. Si l'Utilisateur n'a versé
              aucune somme, la responsabilité totale de la Société sera limitée
              à 100 €.
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Responsabilité de l'Utilisateur
            </h3>
            <Paragraph>
              L'Utilisateur est seul responsable de l'usage qu'il fait du
              Service et des contenus qu'il génère ou utilise via le Service. Il
              lui appartient d'utiliser le Service conformément aux présentes
              CGU et aux lois applicables. En particulier, la Société ne
              contrôle pas les finalités pour lesquelles l'Utilisateur utilise
              les Contenus Générés.
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Indemnisation
            </h3>
            <Paragraph>
              L'Utilisateur s'engage à garantir et indemniser la Société contre
              toute réclamation, action, procédure ou condamnation émanant d'un
              tiers et trouvant son origine dans l'utilisation que l'Utilisateur
              fait du Service, dans les Contenus Générés qu'il a obtenus ou
              diffusés via la Plateforme, ou dans la violation par l'Utilisateur
              des présentes CGU.
            </Paragraph>

            {/* 9. Suspension et résiliation */}
            <SectionTitle id="suspension">
              9. Suspension et résiliation
            </SectionTitle>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Suspension/résiliation par la Société en cas de manquement
            </h3>
            <Paragraph>
              En cas de non-respect par l'Utilisateur des présentes CGU, ou de
              soupçon sérieux de non-respect, la Société se réserve le droit de
              suspendre immédiatement et sans préavis l'accès de l'Utilisateur
              au Service, et/ou de résilier son compte de façon définitive. La
              suspension ou la fermeture du compte pour faute peut intervenir
              sans mise en demeure préalable.
            </Paragraph>
            <Paragraph>
              En cas de résiliation du compte pour manquement aux CGU,
              l'Utilisateur ne pourra prétendre au remboursement d'aucun crédit
              restant sur son compte au moment de la fermeture, ceux-ci étant
              considérés comme perdus du fait de la violation contractuelle de
              l'Utilisateur.
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Données et contenus à la résiliation
            </h3>
            <Paragraph>
              En cas de suppression du compte de l'Utilisateur, l'accès au
              compte sera définitivement fermé. L'Utilisateur n'aura plus accès
              à ses données stockées sur la Plateforme, celles-ci pouvant être
              supprimées par la Société. Il appartient donc à l'Utilisateur de
              récupérer ses données personnelles et contenus qu'il souhaite
              conserver avant la clôture du compte.
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Droit de retrait du Service par la Société
            </h3>
            <Paragraph>
              La Société se réserve le droit, à tout moment, de suspendre
              temporairement l'accès à l'ensemble de la Plateforme pour des
              raisons opérationnelles. En outre, la Société peut décider de
              cesser définitivement l'exploitation de la Plateforme. Dans une
              telle hypothèse, l'Utilisateur sera informé avec un préavis
              raisonnable (au minimum 30 jours à l'avance sauf urgence). Les
              crédits achetés et non utilisés feront, dans la mesure du
              possible, l'objet d'un remboursement ou d'une compensation.
            </Paragraph>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Désinscription par l'Utilisateur
            </h3>
            <Paragraph>
              L'Utilisateur peut à tout moment décider de ne plus utiliser le
              Service et demander la fermeture de son compte. En cas de
              résiliation du compte à l'initiative de l'Utilisateur, celui-ci
              comprend et accepte que les crédits non utilisés sur son compte au
              moment de la clôture seront perdus et ne pourront donner lieu à
              remboursement, sauf accord commercial exceptionnel de la Société.
            </Paragraph>

            {/* 10. Modifications des CGU */}
            <SectionTitle id="modifications">
              10. Modifications des CGU
            </SectionTitle>
            <Paragraph>
              La Société se réserve le droit de modifier, compléter ou mettre à
              jour les présentes CGU à tout moment, notamment en cas
              d'évolutions du Service, de la législation, ou pour tout autre
              motif légitime. En cas de modification substantielle des CGU, la
              nouvelle version sera portée à la connaissance de l'Utilisateur
              par tout moyen approprié.
            </Paragraph>
            <Paragraph>
              L'utilisation continue du Service après l'entrée en vigueur des
              CGU modifiées vaut acceptation sans réserve de ces dernières par
              l'Utilisateur. Si l'Utilisateur n'accepte pas les nouvelles
              conditions, il doit cesser d'utiliser la Plateforme et peut
              demander la suppression de son compte.
            </Paragraph>
            <Paragraph>
              La version en vigueur des CGU est toujours accessible en ligne sur
              le Site. La date de dernière mise à jour figurant en tête des
              présentes permet à l'Utilisateur d'identifier les modifications
              récentes.
            </Paragraph>

            {/* 11. Droit applicable et juridiction */}
            <SectionTitle id="droit">
              11. Droit applicable et juridiction
            </SectionTitle>
            <Paragraph>
              Les présentes CGU sont régies exclusivement par le droit français.
              Elles sont rédigées en langue française, cette version faisant foi
              en cas d'interprétation.
            </Paragraph>
            <Paragraph>
              En cas de contestation ou de litige relatif à l'exécution ou à
              l'interprétation des présentes, les parties conviennent de tenter
              de trouver une solution amiable dans un esprit de bonne foi. À
              défaut de résolution amiable dans un délai raisonnable, tout
              différend sera porté devant les tribunaux compétents d'Angers,
              seuls compétents, y compris en cas de pluralité de défendeurs ou
              d'appel en garantie.
            </Paragraph>
            <Paragraph>
              Cette clause attributive de juridiction s'appliquera sous réserve
              des dispositions légales impératives qui pourraient reconnaître
              une compétence différente, notamment en matière de protection des
              consommateurs.
            </Paragraph>

            {/* 12. Contact */}
            <SectionTitle id="contact">12. Contact</SectionTitle>
            <Paragraph>
              Pour toute question, demande d'information ou réclamation relative
              à la Plateforme ou aux présentes CGU, l'Utilisateur peut contacter
              la Société aux coordonnées suivantes :
            </Paragraph>
            <div className="bg-gray-50 rounded-lg p-4 my-4">
              <p className="text-gray-700 mb-2">
                <strong>Par e-mail :</strong>{" "}
                <a
                  href={`mailto:${c.email}`}
                  className="text-indigo-600 hover:underline"
                >
                  {c.email}
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Par courrier :</strong> {c.name} (Spinary.io),{" "}
                {c.address}
              </p>
            </div>
            <Paragraph>
              La Société s'efforce de répondre à toute demande dans les
              meilleurs délais.
            </Paragraph>

            {/* Footer Note */}
            <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
              <strong>Note :</strong> Ces conditions générales d'utilisation
              sont spécifiquement adaptées à Spinary.io, plateforme SaaS de
              génération de contenus par intelligence artificielle. Elles
              entrent en vigueur dès l'utilisation du service et sont régies par
              le droit français.
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
            <a href="#top" className="text-sm text-indigo-700 hover:underline">
              Retour en haut
            </a>
            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()} Spinary.io - AnKT Services. Tous
              droits réservés.
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default CGUPage;
