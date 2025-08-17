import {
  ArrowLeft,
  Cookie,
  Lock,
  ScrollText,
  ShieldCheck,
  Database,
  Users,
  Globe,
  Calendar,
  Mail,
  FileText,
} from "lucide-react";
import React from "react";

const defaultCompany = {
  name: "AnKT Services",
  legalForm: "SASU",
  website: "Spinary.io",
  email: "support@spinary.io",
  address: "25 rue Lenepveu, 49100 Angers, France (c/o Weforge)",
  phone: "[TÉLÉPHONE]",
  cityForJurisdiction: "Angers",
  countryLaw: "France",
};

function formatDate(iso?: string) {
  try {
    const d = iso ? new Date(iso) : new Date();
    return d.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  } catch {
    return iso || "11 août 2025";
  }
}

const SectionTitle: React.FC<{
  id: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}> = ({ id, children, icon }) => (
  <h2
    id={id}
    className="scroll-mt-28 text-xl md:text-2xl font-semibold text-gray-900 mt-10 flex items-center gap-2"
  >
    {icon}
    {children}
  </h2>
);

const SubTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">{children}</h3>
);

const Paragraph: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <p className={`text-gray-700 leading-relaxed mb-4 ${className ?? ""}`}>
    {children}
  </p>
);

const Bullet: React.FC<{ children: React.ReactNode; strong?: string }> = ({
  children,
  strong,
}) => (
  <li className="pl-2 text-gray-700 leading-relaxed mb-2">
    {strong && <strong>{strong} : </strong>}
    {children}
  </li>
);

const InfoBox: React.FC<{
  children: React.ReactNode;
  type?: "warning" | "info";
}> = ({ children, type = "info" }) => {
  const bgColor =
    type === "warning"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : "bg-blue-50 border-blue-200 text-blue-800";

  return (
    <div className={`mt-6 rounded-lg border p-4 text-sm ${bgColor}`}>
      <Lock className="mr-2 inline h-4 w-4" />
      {children}
    </div>
  );
};

export type PrivacyPolicyPageProps = {
  onBack?: () => void;
  lastUpdatedISO?: string;
  company?: {
    name: string;
    legalForm?: string;
    website: string;
    email: string;
    address?: string;
    phone?: string;
    cityForJurisdiction?: string;
    countryLaw?: string;
  };
};

const sectionsPrivacy = [
  {
    id: "responsable",
    title: "1. Identité du responsable",
    icon: <Users className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "donnees",
    title: "2. Données collectées",
    icon: <Database className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "finalites",
    title: "3. Finalités des traitements",
    icon: <FileText className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "bases",
    title: "4. Bases légales",
    icon: <ShieldCheck className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "destinataires",
    title: "5. Destinataires des données",
    icon: <Globe className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "duree",
    title: "6. Durées de conservation",
    icon: <Calendar className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "securite",
    title: "7. Sécurité et hébergement",
    icon: <Lock className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "cookies",
    title: "8. Cookies et traceurs",
    icon: <Cookie className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "droits",
    title: "9. Droits des utilisateurs",
    icon: <Users className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "exercice",
    title: "10. Exercice des droits",
    icon: <Mail className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "transferts",
    title: "11. Transferts hors UE",
    icon: <Globe className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "maj",
    title: "12. Modifications",
    icon: <FileText className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: "contact",
    title: "13. Contact",
    icon: <Mail className="h-5 w-5 text-indigo-600" />,
  },
];

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onBack,
  lastUpdatedISO,
  company,
}) => {
  const c = { ...defaultCompany, ...(company || {}) };
  const lastUpdated = formatDate(lastUpdatedISO);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 md:text-xl">
                Politique de Confidentialité
              </h1>
              <div className="mt-0.5 text-xs text-gray-500">
                Dernière mise à jour : {lastUpdated}
              </div>
            </div>
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className="hidden md:inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" /> Retour
            </button>
          )}
        </div>
      </header>

      {/* Layout */}
      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[280px_1fr] md:px-6 md:py-10">
        {/* TOC */}
        <aside className="hidden md:block">
          <div className="sticky top-20 rounded-xl border border-gray-200 bg-white p-2">
            <div className="flex items-center gap-2 px-3 py-2">
              <ScrollText className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-gray-900">
                Sommaire
              </span>
            </div>
            <nav className="mt-1 border-t border-gray-100 pt-1">
              {sectionsPrivacy.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  {s.icon}
                  <span className="text-xs">{s.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <article className="rounded-2xl border border-gray-200 bg-white p-5 md:p-8">
          <Paragraph>
            La présente politique de confidentialité s'applique au site{" "}
            <strong>{c.website}</strong>, exploité par la société{" "}
            <strong>{c.name}</strong>. Elle décrit comment nous collectons,
            utilisons et protégeons vos données personnelles conformément au
            RGPD et aux lois applicables.
          </Paragraph>

          <SectionTitle
            id="responsable"
            icon={<Users className="h-6 w-6 text-indigo-600" />}
          >
            1. Identité du responsable du traitement
          </SectionTitle>
          <Paragraph>
            <strong>{c.name}</strong> est une {c.legalForm} dont l'adresse du
            siège est {c.address}.{c.name} est le responsable du traitement des
            données collectées via {c.website}. Pour toute question ou demande
            relative aux données personnelles, vous pouvez contacter {c.name} à
            l'adresse email <strong>{c.email}</strong>.
          </Paragraph>

          <SectionTitle
            id="donnees"
            icon={<Database className="h-6 w-6 text-indigo-600" />}
          >
            2. Données collectées
          </SectionTitle>
          <Paragraph>
            Nous veillons à ne collecter que les données personnelles
            strictement nécessaires aux finalités exposées ci-après. Les
            catégories de données susceptibles d'être collectées sur {c.website}{" "}
            comprennent :
          </Paragraph>

          <SubTitle>Données d'identification et de contact</SubTitle>
          <Paragraph>
            Informations que vous fournissez via les formulaires (création de
            compte, contact). Cela inclut notamment votre nom, prénom, adresse
            email, mot de passe (stocké de manière chiffrée) et éventuellement
            d'autres informations de profil que vous choisissez de fournir. Ces
            données permettent de créer et gérer votre compte utilisateur et de
            communiquer avec vous si nécessaire.
          </Paragraph>

          <SubTitle>Données d'utilisation du site</SubTitle>
          <Paragraph>
            Informations collectées automatiquement lors de votre navigation :
            adresse IP, type et version de votre navigateur, dispositif de
            connexion, pages consultées, dates et heures de consultation,
            informations sur votre interaction avec le site. Ces données nous
            aident à sécuriser le service et à comprendre comment il est
            utilisé.
          </Paragraph>

          <SubTitle>Contenu généré via l'IA</SubTitle>
          <Paragraph>
            Lorsque vous utilisez les fonctionnalités de génération de contenu
            par intelligence artificielle (propulsées par OpenAI), nous traitons
            les données que vous saisissez dans vos requêtes ainsi que les
            contenus générés en réponse.
            <strong> Attention :</strong> nous vous invitons à ne pas saisir de
            données personnelles sensibles dans vos requêtes d'IA. OpenAI s'est
            engagé à ne pas utiliser les données envoyées via son API pour
            entraîner ses modèles et ne conserve ces données que 30 jours
            maximum.
          </Paragraph>

          <SubTitle>Données de paiement</SubTitle>
          <Paragraph>
            Lors d'un paiement, vos données sont traitées via notre prestataire
            Stripe : nom, prénom, adresse de facturation, email, détails
            partiels du moyen de paiement. {c.website} ne collecte ni ne stocke
            vos informations de carte bancaire complètes, celles-ci sont
            transmises directement à Stripe de façon sécurisée.
          </Paragraph>

          <SectionTitle
            id="finalites"
            icon={<FileText className="h-6 w-6 text-indigo-600" />}
          >
            3. Finalités des traitements
          </SectionTitle>
          <Paragraph>
            Les données collectées sont traitées pour des finalités précises,
            explicites et légitimes :
          </Paragraph>
          <ul className="list-disc space-y-2 pl-6 mb-4">
            <Bullet strong="Fournir et gérer le service">
              Permettre votre inscription, authentification, gestion de votre
              compte, et vous fournir les fonctionnalités offertes par{" "}
              {c.website}.
            </Bullet>
            <Bullet strong="Exécution des requêtes d'IA">
              Traiter vos requêtes auprès du module d'intelligence artificielle
              et vous délivrer les réponses générées.
            </Bullet>
            <Bullet strong="Gestion des paiements et facturation">
              Permettre le paiement des services, vérifier les transactions,
              émettre des factures, prévenir la fraude.
            </Bullet>
            <Bullet strong="Communication avec vous">
              Vous contacter au sujet du service, notifications importantes,
              modifications des conditions, assistance.
            </Bullet>
            <Bullet strong="Amélioration du service">
              Comprendre l'utilisation du site pour améliorer nos produits et
              services.
            </Bullet>
            <Bullet strong="Sécurité et intégrité">
              Assurer la sécurité des comptes, prévenir les activités
              malveillantes, appliquer nos conditions d'utilisation.
            </Bullet>
            <Bullet strong="Respect des obligations légales">
              Gérer les demandes d'exercice des droits, conserver les données
              requises par la loi, répondre aux obligations légales.
            </Bullet>
          </ul>

          <SectionTitle
            id="bases"
            icon={<ShieldCheck className="h-6 w-6 text-indigo-600" />}
          >
            4. Bases légales des traitements
          </SectionTitle>
          <Paragraph>
            Conformément au RGPD, chaque traitement repose sur une base
            juridique valide :
          </Paragraph>
          <ul className="list-disc space-y-2 pl-6 mb-4">
            <Bullet strong="Exécution d'un contrat (article 6(1)(b))">
              Gestion de votre compte, fourniture des fonctionnalités,
              traitement des paiements.
            </Bullet>
            <Bullet strong="Consentement (article 6(1)(a))">
              Cookies non essentiels, communications marketing. Vous pouvez
              retirer votre consentement à tout moment.
            </Bullet>
            <Bullet strong="Intérêts légitimes (article 6(1)(f))">
              Sécurité du site, amélioration des services, communications
              importantes. Vous avez le droit de vous y opposer.
            </Bullet>
            <Bullet strong="Obligations légales (article 6(1)(c))">
              Conservation des données de facturation (10 ans), respect des
              obligations comptables et fiscales.
            </Bullet>
          </ul>

          <SectionTitle
            id="destinataires"
            icon={<Globe className="h-6 w-6 text-indigo-600" />}
          >
            5. Destinataires des données
          </SectionTitle>
          <Paragraph>
            Vos données sont accessibles en interne par les personnes habilitées
            d'AnKT Services sous obligation de confidentialité. Nous pouvons
            également transmettre vos données à des sous-traitants de confiance
            :
          </Paragraph>
          <ul className="list-disc space-y-2 pl-6 mb-4">
            <Bullet strong="Supabase (hébergement)">
              Stockage sécurisé des données sur des serveurs en Union
              européenne. DPA signé conforme au RGPD.
            </Bullet>
            <Bullet strong="OpenAI (intelligence artificielle)">
              Traitement des requêtes d'IA. Conservation temporaire de 30 jours
              maximum. Les données ne sont pas utilisées pour l'entraînement.
            </Bullet>
            <Bullet strong="Stripe (paiement)">
              Traitement sécurisé des paiements. Nous n'avons pas accès aux
              données complètes de carte bancaire.
            </Bullet>
            <Bullet strong="Outils d'analyse">
              Collecte de statistiques anonymisées sur l'utilisation du site
              (avec votre consentement).
            </Bullet>
          </ul>

          <SectionTitle
            id="duree"
            icon={<Calendar className="h-6 w-6 text-indigo-600" />}
          >
            6. Durées de conservation
          </SectionTitle>
          <ul className="list-disc space-y-2 pl-6 mb-4">
            <Bullet strong="Données de compte et profil">
              Pendant la durée de vie de votre compte, puis archivage légal ou
              suppression.
            </Bullet>
            <Bullet strong="Contenus générés et requêtes d'IA">
              Tant que vous ne les supprimez pas ou tant que votre compte
              demeure actif. Chez OpenAI : 30 jours maximum.
            </Bullet>
            <Bullet strong="Données de paiement et facturation">
              10 ans minimum conformément aux obligations comptables françaises.
            </Bullet>
            <Bullet strong="Logs techniques">
              12 mois maximum à des fins de sécurité et d'audits.
            </Bullet>
            <Bullet strong="Communications support">
              1 à 3 ans pour traçabilité et amélioration du support.
            </Bullet>
          </ul>

          <SectionTitle
            id="securite"
            icon={<Lock className="h-6 w-6 text-indigo-600" />}
          >
            7. Sécurité et hébergement des données
          </SectionTitle>
          <Paragraph>
            Nous mettons en œuvre des mesures de sécurité techniques et
            organisationnelles appropriées pour protéger vos données :
          </Paragraph>
          <ul className="list-disc space-y-2 pl-6 mb-4">
            <Bullet strong="Hébergement sécurisé">
              Données hébergées par Supabase sur des serveurs sécurisés en Union
              européenne.
            </Bullet>
            <Bullet strong="Chiffrement">
              Communications via HTTPS/TLS, données chiffrées en transit et au
              repos, mots de passe hachés.
            </Bullet>
            <Bullet strong="Contrôle d'accès">
              Accès restreint selon le principe du moindre privilège,
              authentification forte.
            </Bullet>
            <Bullet strong="Sauvegardes">
              Sauvegardes régulières chiffrées avec procédures de restauration.
            </Bullet>
          </ul>

          <SectionTitle
            id="cookies"
            icon={<Cookie className="h-6 w-6 text-indigo-600" />}
          >
            8. Cookies et traceurs
          </SectionTitle>
          <Paragraph>
            Un cookie est un petit fichier texte déposé sur votre terminal lors
            de la visite du site. Nous utilisons plusieurs catégories de cookies
            :
          </Paragraph>

          <SubTitle>Cookies strictement nécessaires</SubTitle>
          <Paragraph>
            Indispensables au fonctionnement du site (cookies de session,
            authentification). Ces cookies sont exemptés de consentement.
          </Paragraph>

          <SubTitle>Cookies de mesure d'audience</SubTitle>
          <Paragraph>
            Avec votre consentement, nous utilisons des cookies pour analyser la
            fréquentation du site (Google Analytics). Durée de vie limitée à 13
            mois maximum.
          </Paragraph>

          <SubTitle>Cookies de paiement (Stripe)</SubTitle>
          <Paragraph>
            Nécessaires à la sécurité des transactions. Ils aident à détecter
            les fraudes et sécuriser les paiements.
          </Paragraph>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-green-200 bg-green-50 px-3 py-1 text-xs text-green-700">
              <Cookie className="h-3.5 w-3.5" /> Cookies nécessaires
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700">
              <Cookie className="h-3.5 w-3.5" /> Mesure d'audience (opt-in)
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-orange-200 bg-orange-50 px-3 py-1 text-xs text-orange-700">
              <Cookie className="h-3.5 w-3.5" /> Paiement sécurisé
            </span>
          </div>

          <SectionTitle
            id="droits"
            icon={<Users className="h-6 w-6 text-indigo-600" />}
          >
            9. Droits des utilisateurs
          </SectionTitle>
          <Paragraph>
            Conformément au RGPD, vous disposez des droits suivants :
          </Paragraph>
          <ul className="list-disc space-y-2 pl-6 mb-4">
            <Bullet strong="Droit d'accès">
              Obtenir confirmation que nous détenons vos données et en recevoir
              une copie.
            </Bullet>
            <Bullet strong="Droit de rectification">
              Demander la correction des données inexactes ou incomplètes.
            </Bullet>
            <Bullet strong="Droit d'opposition">
              Vous opposer aux traitements fondés sur l'intérêt légitime ou à la
              prospection.
            </Bullet>
            <Bullet strong="Droit à l'effacement">
              Demander la suppression de vos données dans certaines conditions.
            </Bullet>
            <Bullet strong="Droit à la limitation">
              Demander la suspension temporaire du traitement de vos données.
            </Bullet>
            <Bullet strong="Droit à la portabilité">
              Recevoir vos données dans un format structuré et lisible par
              machine.
            </Bullet>
            <Bullet strong="Retrait du consentement">
              Retirer votre consentement à tout moment pour les traitements
              concernés.
            </Bullet>
          </ul>

          <SectionTitle
            id="exercice"
            icon={<Mail className="h-6 w-6 text-indigo-600" />}
          >
            10. Exercice des droits
          </SectionTitle>
          <Paragraph>
            Pour exercer vos droits, vous pouvez nous contacter :
          </Paragraph>
          <ul className="list-disc space-y-1 pl-6 mb-4">
            <Bullet>
              <strong>Par email :</strong> {c.email}
            </Bullet>
            <Bullet>
              <strong>Par courrier :</strong> {c.name} – {c.address}
            </Bullet>
          </ul>
          <Paragraph>
            Merci de préciser clairement quel droit vous souhaitez exercer et de
            fournir les informations permettant de vous identifier. Nous
            répondrons dans un délai d'un mois maximum.
          </Paragraph>

          <SectionTitle
            id="transferts"
            icon={<Globe className="h-6 w-6 text-indigo-600" />}
          >
            11. Transferts de données hors de l'Union Européenne
          </SectionTitle>
          <Paragraph>
            Certains de nos sous-traitants étant basés hors UE, des transferts
            peuvent avoir lieu vers :
          </Paragraph>
          <ul className="list-disc space-y-2 pl-6 mb-4">
            <Bullet strong="OpenAI (États-Unis)">
              Clauses Contractuelles Types, engagement de ne pas utiliser les
              données pour l'entraînement.
            </Bullet>
            <Bullet strong="Stripe (États-Unis)">
              Règles d'entreprise contraignantes (BCR) et Clauses Contractuelles
              Types.
            </Bullet>
          </ul>
          <Paragraph>
            Ces transferts sont encadrés par des garanties appropriées pour
            assurer un niveau de protection équivalent à celui de l'UE.
          </Paragraph>

          <SectionTitle
            id="maj"
            icon={<FileText className="h-6 w-6 text-indigo-600" />}
          >
            12. Mise à jour de la politique de confidentialité
          </SectionTitle>
          <Paragraph>
            Cette politique peut être mise à jour. En cas de modification
            substantielle, nous vous en informerons par affichage sur le site ou
            par email. La date de dernière mise à jour est indiquée en haut du
            document.
          </Paragraph>

          <SectionTitle
            id="contact"
            icon={<Mail className="h-6 w-6 text-indigo-600" />}
          >
            13. Contact
          </SectionTitle>
          <Paragraph>
            Pour toute question relative à cette politique ou au traitement de
            vos données personnelles :
          </Paragraph>
          <ul className="list-disc space-y-1 pl-6 mb-4">
            <Bullet>
              <strong>Email :</strong> {c.email}
            </Bullet>
            <Bullet>
              <strong>Courrier :</strong> {c.name} – {c.address}
            </Bullet>
          </ul>
          <Paragraph>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez
            introduire une réclamation auprès de la CNIL (Commission Nationale
            de l'Informatique et des Libertés) via www.cnil.fr.
          </Paragraph>

          <InfoBox type="info">
            <strong>Vos données vous appartiennent.</strong> Notre rôle est d'en
            être les gardiens responsables et transparents. Nous nous engageons
            à protéger vos données avec le plus grand soin, dans le respect de
            vos droits et de la réglementation en vigueur.
          </InfoBox>
        </article>
      </main>
    </div>
  );
};
