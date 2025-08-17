import { Receipt, ScrollText } from "lucide-react";
import React from "react";


const defaultCompany = {
  name: "AnKT Services",
  legalForm: "SASU",
  website: "spinary.io",
  email: "support@spinary.io",
  address: "c/o Weforge, 25 rue Lenepveu, 49100 Angers, France",
  phone: "",
  cityForJurisdiction: "Angers",
  countryLaw: "français",
};

const sections = [
  { id: "objet", title: "1. Objet et champ d'application" },
  { id: "produits", title: "2. Produits et services" },
  { id: "prix", title: "3. Prix et taxes" },
  { id: "commande", title: "4. Commande et paiement" },
  { id: "credits", title: "5. Livraison des crédits" },
  { id: "retractation", title: "6. Droit de rétractation" },
  { id: "garantie", title: "7. Garanties et responsabilité" },
  { id: "resiliation", title: "8. Résiliation" },
  { id: "modifications", title: "9. Modifications des CGV" },
  { id: "droit", title: "10. Droit applicable et juridiction" },
  { id: "contact", title: "11. Contact" },
];

function formatDate(iso?: string) {
  try {
    const d = iso ? new Date(iso) : new Date();
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
    className="scroll-mt-28 text-xl md:text-2xl font-semibold text-gray-900 mt-10 mb-4"
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

const SubTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">{children}</h3>
);

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="pl-2 text-gray-700 leading-relaxed mb-2">{children}</li>
);

const CGVPage = () => {
  const c = defaultCompany;
  const lastUpdated = formatDate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600">
              <Receipt className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 md:text-xl">
                Conditions Générales de Vente
              </h1>
              <div className="mt-0.5 text-xs text-gray-500">
                Dernière mise à jour : {lastUpdated}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[260px_1fr] md:px-6 md:py-10">
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

        <article className="rounded-2xl border border-gray-200 bg-white p-5 md:p-8">
          <Paragraph>
            Les présentes Conditions Générales de Vente (CGV) s'appliquent à
            toute commande passée sur la plateforme {c.website}, éditée par{" "}
            {c.name} {c.legalForm ? `(${c.legalForm})` : ""}. En passant
            commande sur ce site, le client reconnaît avoir pris connaissance
            des CGV et les accepter sans réserve.
          </Paragraph>

          <SectionTitle id="objet">
            1. Objet et champ d'application
          </SectionTitle>
          <Paragraph>
            Ces CGV encadrent la vente de crédits et l'accès aux services de la
            plateforme Spinary. Elles définissent les obligations de {c.name}{" "}
            (ci-après "l'éditeur") et du client dans ce cadre, et prévalent sur
            tout autre document. La validation d'une commande implique
            l'adhésion pleine et entière du client aux présentes conditions.
          </Paragraph>

          <SectionTitle id="produits">2. Produits et services</SectionTitle>
          <Paragraph>
            Spinary est une plateforme en ligne permettant de générer
            automatiquement du contenu textuel optimisé pour le SEO à grande
            échelle grâce à l'intelligence artificielle. La société propose la
            vente de crédits utilisables sur cette plateforme pour la génération
            de contenu, ainsi que des services associés (par exemple, accès à
            des outils d'analyse ou support client). Chaque crédit correspond à
            une génération de contenu. Les crédits n'ont d'usage que sur la
            plateforme Spinary pour bénéficier des fonctionnalités offertes.
          </Paragraph>

          <SectionTitle id="prix">3. Prix et taxes</SectionTitle>
          <Paragraph>
            Les prix des crédits et services sont indiqués en euros. Ils peuvent
            être affichés hors taxes (HT) ou toutes taxes comprises (TTC) selon
            la réglementation applicable.
          </Paragraph>

          <SubTitle>Modification des tarifs</SubTitle>
          <Paragraph>
            Les tarifs peuvent être modifiés à tout moment par l'éditeur, mais
            le prix facturé sera toujours celui en vigueur au moment de la
            commande validée par le client.
          </Paragraph>

          <SubTitle>Taxes applicables</SubTitle>
          <Paragraph>
            Les taxes (TVA et autres le cas échéant) sont calculées et affichées
            lors du processus de paiement, en fonction de la législation en
            vigueur et des informations fournies par le client (lieu de
            résidence, statut, etc.).
          </Paragraph>

          <SubTitle>Absence de frais supplémentaires</SubTitle>
          <Paragraph>
            Aucun frais de livraison n'est applicable pour les crédits, ceux-ci
            étant fournis par voie numérique. Le montant total indiqué lors de
            la commande (prix + taxes) est le montant dû par le client.
          </Paragraph>

          <SectionTitle id="commande">4. Commande et paiement</SectionTitle>
          <Paragraph>
            Les commandes de crédits s'effectuent en ligne via l'interface du
            site Spinary. Le client sélectionne un forfait de crédits ou un
            montant personnalisé, puis renseigne les informations de paiement
            sur la page de commande sécurisée. Le paiement s'effectue
            immédiatement par l'intermédiaire d'un prestataire de paiement
            sécurisé (par exemple, carte bancaire via une solution de paiement
            en ligne).
          </Paragraph>
          <Paragraph>
            Une commande est considérée comme ferme et définitive une fois le
            paiement confirmé. Dès validation du paiement, le client reçoit une
            confirmation de commande par email, récapitulant l'ensemble des
            éléments de sa commande (montant, nombre de crédits achetés, etc.).
            Une facture correspondante peut être consultée et téléchargée depuis
            l'espace client du site.
          </Paragraph>
          <Paragraph>
            À noter : en cas de refus de paiement ou d'incident de transaction,
            la commande sera automatiquement annulée.
          </Paragraph>

          <SectionTitle id="credits">5. Livraison des crédits</SectionTitle>
          <Paragraph>
            La livraison des crédits est immédiate une fois le paiement validé.
            Les crédits achetés sont ajoutés instantanément au compte
            utilisateur du client sur la plateforme Spinary, ce qui lui permet
            de les utiliser sans délai. Sauf mention contraire expresse lors de
            l'achat, ces crédits n'expirent pas et restent disponibles sur le
            compte tant qu'ils n'ont pas été consommés. Le client peut consulter
            à tout moment son solde de crédits depuis son espace personnel sur
            le site.
          </Paragraph>

          <SectionTitle id="retractation">
            6. Droit de rétractation
          </SectionTitle>
          <Paragraph>
            Conformément à la législation en vigueur, le client dispose en
            principe d'un délai de quatorze (14) jours à compter de la
            conclusion du contrat pour exercer son droit de rétractation lors
            d'un achat en ligne. Cependant, conformément à l'article L221-28 du
            Code de la consommation, le droit de rétractation ne s'applique pas
            dans certains cas, notamment :
          </Paragraph>
          <ul className="list-disc space-y-2 pl-6 mb-4">
            <Bullet>
              (a) pour les services pleinement exécutés avant la fin du délai de
              quatorze jours, si l'exécution a commencé avec l'accord du client,
              et
            </Bullet>
            <Bullet>
              (b) pour les contenus numériques non fournis sur un support
              matériel (tels que les crédits ou contenus numériques fournis en
              ligne) dont l'exécution a commencé après accord préalable exprès
              du client et renonciation expresse de sa part à exercer son droit
              de rétractation.
            </Bullet>
          </ul>
          <Paragraph>
            En validant une commande de crédits sur Spinary, le client reconnaît
            ainsi que la fourniture du service (crédits donnant accès à du
            contenu numérique) débute immédiatement après la confirmation du
            paiement, et renonce expressément à son droit de rétractation. Par
            conséquent, sauf erreur imputable à l'éditeur ou cas particulier
            prévu par la loi, aucun remboursement ne sera effectué une fois les
            crédits délivrés et le service commencé.
          </Paragraph>

          <SectionTitle id="garantie">
            7. Garanties et responsabilité
          </SectionTitle>

          <SubTitle>Service fourni "en l'état"</SubTitle>
          <Paragraph>
            {c.name} met à disposition la plateforme Spinary et ses services en
            l'état, c'est-à-dire sans garantie spécifique quant à l'adéquation
            aux besoins particuliers du client. L'éditeur ne garantit pas que
            les contenus générés par l'IA permettront d'atteindre un résultat
            précis ou un objectif particulier du client (par exemple un
            classement SEO amélioré ou un style rédactionnel particulier). Le
            client utilise les outils de génération de contenu sous sa propre
            responsabilité quant aux résultats obtenus.
          </Paragraph>

          <SubTitle>Limitation de responsabilité</SubTitle>
          <Paragraph>
            La responsabilité de {c.name}, dans le cadre de l'exécution des
            services ou de la vente de crédits, est strictement limitée au
            montant que le client a effectivement payé pour la commande
            concernée. En aucun cas {c.name} ne pourra être tenue responsable
            des dommages indirects ou imprévisibles subis par le client ou des
            tiers du fait de l'utilisation de la plateforme ou des contenus
            générés. Par dommages indirects ou imprévisibles, on entend
            notamment la perte de chiffre d'affaires, la perte de données, le
            préjudice commercial, ou tout autre dommage non directement et
            exclusivement imputable à une défaillance de l'éditeur dans la
            fourniture du service.
          </Paragraph>

          <SubTitle>Utilisation des contenus générés</SubTitle>
          <Paragraph>
            Le client est seul responsable de l'utilisation qu'il fait des
            contenus générés via la plateforme Spinary. Il lui appartient de
            s'assurer que ces contenus sont utilisés conformément aux lois et
            réglementations en vigueur (par exemple en matière de propriété
            intellectuelle, de données personnelles, ou de contenu illicite).{" "}
            {c.name} ne saurait être tenu responsable de l'usage que le client
            fait des textes ou données produits par l'outil d'IA. En outre, le
            client reconnaît que les performances de l'intelligence artificielle
            peuvent varier et que les contenus générés peuvent contenir des
            erreurs ou nécessiter une relecture humaine ; l'éditeur n'assume
            aucune responsabilité quant aux conséquences d'éventuelles erreurs
            ou omissions dans les contenus générés.
          </Paragraph>

          <SectionTitle id="resiliation">8. Résiliation</SectionTitle>
          <Paragraph>
            En cas de non-respect par le client des présentes CGV ou de toute
            violation des lois et règlements applicables, {c.name} se réserve le
            droit de suspendre temporairement ou de désactiver définitivement le
            compte de l'utilisateur, sans préavis. Cette suspension ou
            résiliation pour faute du client peut intervenir, par exemple, en
            cas de fraude, de tentative de contournement du système,
            d'utilisation abusive du service, ou de tout comportement nuisant au
            bon fonctionnement de la plateforme ou aux intérêts de l'éditeur.
          </Paragraph>
          <Paragraph>
            En cas de résiliation du compte pour manquement du client aux CGV,
            les crédits éventuellement restants sur son compte ne pourront pas
            faire l'objet d'un remboursement, sauf disposition légale impérative
            contraire. De même, l'accès aux services payés sera interrompu sans
            que le client puisse réclamer une quelconque indemnisation, sauf cas
            prévus par la loi. {c.name} pourra également engager des poursuites
            judiciaires si les manquements du client ont causé un préjudice ou
            enfreint la loi.
          </Paragraph>

          <SectionTitle id="modifications">
            9. Modifications des CGV
          </SectionTitle>
          <Paragraph>
            {c.name} se réserve le droit de modifier à tout moment les présentes
            conditions générales de vente. Toute nouvelle version des CGV sera
            publiée sur le site {c.website} avec mention de la date de mise à
            jour. Les modifications entreront en vigueur dès leur publication en
            ligne, sauf indication contraire.
          </Paragraph>
          <Paragraph>
            Il incombe au client de consulter régulièrement la section CGV du
            site afin de se tenir informé d'éventuelles modifications. En cas de
            changement substantiel affectant les droits ou obligations du
            client, l'éditeur pourra en informer les utilisateurs par tout moyen
            approprié (notification sur le site, email, etc.). Quoi qu'il en
            soit, le fait de continuer à utiliser la plateforme ou de passer des
            commandes de crédits après la mise en ligne de nouvelles CGV vaut
            acceptation tacite de ces modifications de la part du client.
          </Paragraph>

          <SectionTitle id="droit">
            10. Droit applicable et juridiction
          </SectionTitle>
          <Paragraph>
            Les présentes conditions générales de vente sont soumises au droit{" "}
            {c.countryLaw}. Ainsi, elles seront interprétées et exécutées
            conformément à la législation française, y compris pour les clients
            résidant hors de France.
          </Paragraph>
          <Paragraph>
            En cas de litige relatif à l'interprétation ou à l'exécution des
            présentes CGV, les parties s'efforceront de trouver une solution
            amiable dans un premier temps. À défaut d'accord amiable, tout
            différend sera soumis à la compétence exclusive des tribunaux d'
            {c.cityForJurisdiction}, la ville du siège social de {c.name}, y
            compris en cas de pluralité de défendeurs ou d'appel en garantie.
            Cette clause s'applique sous réserve des dispositions légales
            impératives protectrices du consommateur (le cas échéant) qui
            pourraient prévoir une autre juridiction compétente.
          </Paragraph>

          <SectionTitle id="contact">11. Contact</SectionTitle>
          <Paragraph>
            Pour toute question, réclamation ou demande d'information
            complémentaire relative aux présentes CGV ou aux services Spinary,
            le client peut contacter l'éditeur aux coordonnées suivantes :
          </Paragraph>
          <div className="bg-gray-50 rounded-lg p-4 mt-4">
            <p className="font-medium text-gray-900">
              {c.name} {c.legalForm ? `(${c.legalForm})` : ""}
            </p>
            <p className="text-gray-700 mt-1">{c.address}</p>
            {c.phone && <p className="text-gray-700">Téléphone : {c.phone}</p>}
            <p className="text-gray-700">E-mail : {c.email}</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default CGVPage;
