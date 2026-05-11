import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Compass,
  ShieldCheck,
  Search,
  FileText,
  Presentation,
  Calendar,
  ClipboardCheck,
  Rocket,
  AlertTriangle,
  Sparkles,
  BadgeCheck,
  GraduationCap,
  Building2,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackCTAClick, trackEvent } from "@/lib/analytics";
import Footer from "@/components/Footer";
import ogImage from "@/assets/og-cap-digital.jpg";

const CALENDLY_URL =
  "https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange";

const trackLeadCapDigital = (location: string) => {
  trackEvent("Lead Cap Digital", { cta_location: location });
  trackCTAClick("Réserver mon entretien gratuit", location, CALENDLY_URL);
};

const CapDigital = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Une décision dérisquée avant tout investissement lourd",
    "Une feuille de route 12 mois priorisée, chiffrée, actionnable",
    "50% du diagnostic déduit si vous poursuivez l'accompagnement",
  ];

  const proofs = [
    { icon: BadgeCheck, label: "Consultante certifiée Notion" },
    { icon: Sparkles, label: "Ambassadrice Osez l'IA" },
    { icon: Building2, label: "Références ERP / CRM PME BTP & services" },
    { icon: GraduationCap, label: "+ de 15 ans en transformation & pilotage" },
  ];

  const problems = [
    "Les données métier sont éparpillées entre Excel, mails, têtes des collaborateurs et un logiciel vieillissant.",
    "Vous n'avez pas de vision claire sur votre rentabilité par projet, par client ou par activité.",
    "Vos équipes réinventent la roue à chaque dossier, faute de process partagés.",
    "Un éditeur ERP vous a fait une proposition à 20, 50 ou 80 K€… sans que vous sachiez si c'est la bonne réponse.",
    "Vous hésitez entre moderniser votre SI, structurer votre organisation, ou les deux — sans savoir par où commencer.",
  ];

  const whyItWorks = [
    "Je suis indépendante de tout éditeur.",
    "Je connais les deux mondes : systèmes structurants (ERP, CRM) ET systèmes agiles (Notion, IA).",
    "Je pense organisation avant outil. L'outil ne sauve jamais un process bancal.",
    "Je livre vite et serré. 7 jours, pas 3 mois. Vous décidez tant que l'élan est là.",
  ];

  const phases = [
    {
      icon: Search,
      tag: "Jours 1–3",
      title: "Phase d'immersion",
      items: [
        "Entretien dirigeant approfondi (90 min)",
        "Audit de votre SI : cartographie complète des outils, flux et données",
        "Audit organisationnel : maturité de vos process critiques",
        "3 à 5 entretiens avec vos collaborateurs clés (60 min chacun)",
      ],
    },
    {
      icon: FileText,
      tag: "Jours 4–6",
      title: "Le rapport « Cap Digital »",
      items: [
        "Cartographie SI actuelle : forces, faiblesses, risques",
        "Cartographie organisationnelle : process matures vs. immatures",
        "Matrice de décision : ERP, Notion, ou les deux",
        "Feuille de route 12 mois priorisée et chiffrée",
        "KPI de succès recommandés",
        "Plan d'attaque 90 jours prêt à lancer",
      ],
    },
    {
      icon: Presentation,
      tag: "Jour 7",
      title: "Restitution dirigeante",
      items: [
        "Présentation orale en visio ou en présentiel (2h)",
        "Espace dédié aux questions et arbitrages",
        "Vous repartez avec une décision claire",
      ],
    },
  ];

  const process = [
    {
      icon: Calendar,
      title: "Entretien gratuit de 45 min",
      desc: "Vous me racontez où vous en êtes. Je vérifie que Le Cap Digital est le bon point d'entrée pour vous. Sinon, je vous le dis franchement.",
    },
    {
      icon: ClipboardCheck,
      title: "Signature et planification",
      desc: "Devis signé, planning de la semaine d'immersion calé sous 48h.",
    },
    {
      icon: Search,
      title: "Immersion + rapport (7 jours)",
      desc: "J'embarque dans votre organisation. Je questionne. Vous continuez à faire tourner votre PME.",
    },
    {
      icon: Rocket,
      title: "Restitution + décision",
      desc: "On se retrouve. Vous repartez avec votre feuille de route. Vous décidez de la suite — avec moi ou sans moi.",
    },
  ];

  const faq = [
    {
      q: "Pourquoi 2 000 € et pas un audit gratuit ?",
      a: "Parce qu'un diagnostic gratuit serait nécessairement superficiel — ou orienté pour vous vendre une suite. Le Cap Digital est une mission à part entière, avec un livrable indépendant. Et le montant est déduit à 50% si vous poursuivez.",
    },
    {
      q: "Mon entreprise est trop petite / trop grosse ?",
      a: "Le Cap Digital est calibré pour des PME de 1 à 10 M€ de CA, typiquement 10 à 80 collaborateurs. En dessous, l'investissement n'est pas justifié. Au-dessus, l'approche reste pertinente mais le périmètre doit être adapté — on en parle lors de l'entretien gratuit.",
    },
    {
      q: "Je n'ai pas de DSI ni de service informatique. C'est un problème ?",
      a: "Au contraire. C'est précisément la situation typique dans laquelle Le Cap Digital apporte le plus de valeur. Je joue le rôle de Directrice de la Transformation Digitale à temps partagé.",
    },
    {
      q: "Êtes-vous indépendante des éditeurs (ERP, CRM, etc.) ?",
      a: "Mes recommandations sont guidées par votre intérêt. Je peux toutefois vous orienter vers des partenaires intégrateurs de confiance si besoin.",
    },
    {
      q: "Que se passe-t-il après les 7 jours ?",
      a: "Deux scénarios : (1) vous repartez avec votre feuille de route et la mettez en œuvre en interne ou avec d'autres partenaires — c'est très bien. (2) Vous choisissez de poursuivre avec l'un de mes accompagnements (ERP, Notion, Global, Suivi mensuel). Dans ce cas, 50% de la prestation de diagnostic seront déduits.",
    },
    {
      q: "Confidentialité ?",
      a: "Aucune donnée n'est partagée sans votre accord écrit. Les éventuels témoignages publics sont anonymisés sauf accord explicite.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Le Cap Digital — Diagnostic 360° PME",
        provider: {
          "@type": "Person",
          name: "Christelle Picault",
          jobTitle: "Directrice de la Transformation Digitale à temps partagé",
        },
        areaServed: "France",
        description:
          "Diagnostic stratégique SI + organisation pour PME, livré en 7 jours. Feuille de route 12 mois, matrice de décision ERP / Notion.",
        offers: {
          "@type": "Offer",
          price: "2000",
          priceCurrency: "EUR",
          url: "https://christelle-picault.fr/le-cap-digital",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Le Cap Digital — Diagnostic 360° PME en 7 jours</title>
        <meta
          name="description"
          content="Avant d'engager 20 K€ dans un ERP, dérisquez votre décision. Diagnostic stratégique SI + organisation livré en 7 jours."
        />
        <meta
          name="keywords"
          content="audit ERP PME, conseil Notion entreprise, directrice transformation digitale temps partagé"
        />
        <link rel="canonical" href="https://christelle-picault.fr/le-cap-digital" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Le Cap Digital — 7 jours pour décider" />
        <meta
          property="og:description"
          content="Diagnostic 360° SI + organisation pour PME, livré en 7 jours. Une feuille de route claire avant tout investissement lourd."
        />
        <meta property="og:url" content="https://christelle-picault.fr/le-cap-digital" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="fr_FR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Le Cap Digital — 7 jours pour décider" />
        <meta
          name="twitter:description"
          content="Diagnostic 360° SI + organisation pour PME, livré en 7 jours."
        />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-background pointer-events-none" />

        {/* Header */}
        <header className="w-full bg-background/80 backdrop-blur-lg sticky top-0 z-50 border-b border-border/30">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium hidden sm:block">Retour</span>
            </Link>
            <Button
              asChild
              className="bg-secondary hover:bg-secondary-dark text-white rounded-full px-6 py-2 shadow-lg shadow-secondary/20"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLeadCapDigital("cap_digital_header")}
                className="flex items-center gap-2"
              >
                Réserver mon entretien
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="container mx-auto px-6 py-4 relative z-10">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link to="/#offres" className="hover:text-primary transition-colors">
                Offres
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="text-foreground font-medium">Le Cap Digital</li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="relative py-10 md:py-16 lg:py-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
                  <Compass className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground/80">
                    Cap Digital — Vision 360°
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                  Avant d'investir dans un nouvel <span className="text-secondary">ERP</span>, outil de facturation, ou une nouvelle organisation, sachez précisément quoi faire, dans quel ordre, et pourquoi.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Le Cap Digital : un diagnostic 360° de votre SI et de votre organisation, livré
                  en <strong className="text-foreground">7 jours</strong>. Vous repartez avec une
                  feuille de route claire — ERP, Notion, ou les deux.
                </p>

                <ul className="space-y-3">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button asChild className="btn-premium text-base px-8 py-6">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackLeadCapDigital("cap_digital_hero")}
                      className="flex items-center justify-center gap-2"
                    >
                      Réserver mon entretien gratuit de 45 min
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Aucun engagement. Vous repartez déjà avec 2 ou 3 pistes concrètes.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border border-border/50 shadow-elegant-lg">
                  <img
                    src={ogImage}
                    alt="Le Cap Digital — 7 jours pour décider"
                    width={1200}
                    height={640}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROOFS */}
        <section className="py-12 bg-muted/30 border-y border-border/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {proofs.map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm md:text-base text-foreground/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vous dirigez une PME qui grandit. Et vous sentez que quelque chose coince.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Votre entreprise tourne. Vos équipes sont engagées. Mais en coulisses :
            </p>
            <ul className="space-y-4 mb-10">
              {problems.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50"
                >
                  <span className="text-secondary font-bold mt-0.5">•</span>
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
            <aside className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 flex gap-4">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-2">
                  Le vrai risque, ce n'est pas de ne rien faire. C'est d'investir lourdement dans
                  la mauvaise direction.
                </p>
                <p className="text-muted-foreground">
                  Un projet ERP raté coûte en moyenne 2 à 3 fois son budget initial — et 18 mois
                  de perte d'élan.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Le Cap Digital : transformer le brouillard en plan d'action.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Je radiographie votre organisation et votre système d'information. Je rencontre vos
              collaborateurs clés. J'analyse vos process critiques. Et je vous remets un rapport
              stratégique qui répond à une seule question :
            </p>
            <p className="text-xl text-foreground font-semibold mb-10 p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
              Faut-il un ERP, un espace Notion structuré, ou les deux — et dans quel ordre ?
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-6">Pourquoi ça marche</h3>
            <ul className="space-y-3">
              {whyItWorks.map((w, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-foreground/85">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ce qui est inclus
              </h2>
              <p className="text-muted-foreground">Le détail concret, jour par jour.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {phases.map(({ icon: Icon, tag, title, items }, i) => (
                <div
                  key={i}
                  className="glass-premium rounded-3xl p-8 card-premium flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
                    {tag}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
                  <ul className="space-y-2">
                    {items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-secondary mt-0.5">✓</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <aside className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/30 flex gap-6 items-start">
              <ShieldCheck className="h-12 w-12 text-secondary flex-shrink-0" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Garantie « 50% du diagnostic offert si vous poursuivez »
                </h2>
                <p className="text-foreground/85 mb-3">
                  Si à l'issue du Cap Digital vous choisissez de poursuivre avec l'un de mes
                  accompagnements (ERP, Espace Notion, ou Global), 1 000 € HT sont intégralement
                  déduits de la mission suivante.
                </p>
                <p className="text-muted-foreground">
                  Vous repartez gagnant dans tous les cas : soit avec une feuille de route, soit
                  avec 50% du diagnostic offert.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comment ça se passe
              </h2>
              <p className="text-muted-foreground">Le process en 4 étapes.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-secondary">{i + 1}</span>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICE */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <aside className="p-8 md:p-12 rounded-3xl glass-premium border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <Wallet className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Tarif & disponibilité
                </h2>
              </div>
              <div className="text-5xl font-bold text-secondary mb-2">2 000 € HT</div>
              <p className="text-muted-foreground mb-6">Forfait tout inclus</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>⏱️</span> Livré sous 7 jours après l'entretien d'immersion
                </li>
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>🎯</span> Déduit à 50% de la mission suivante si poursuite
                </li>
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>🔒</span> 2 diagnostics ouverts par mois maximum
                </li>
              </ul>

              <p className="text-sm text-muted-foreground italic">
                Pourquoi seulement 2 par mois ? Parce que je m'engage personnellement sur la
                qualité du livrable. Ce n'est pas un audit standardisé : c'est un diagnostic
                stratégique.
              </p>

              <div className="mt-8">
                <Button asChild className="btn-premium text-base px-8 py-6">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackLeadCapDigital("cap_digital_pricing")}
                    className="flex items-center gap-2"
                  >
                    Réserver mon entretien gratuit
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border/50 rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Christelle Picault
            </h2>
            <p className="text-lg text-secondary font-medium mb-6">
              Directrice de la Transformation Digitale à temps partagé pour PME
            </p>
            <p className="text-foreground/85 mb-4">
              J'aide les dirigeants de PME à passer un cap : structurer leur organisation, choisir
              les bons outils, et piloter la transformation sans s'égarer dans les modes.
            </p>
            <p className="text-muted-foreground mb-8">
              Ma différence : je pense système avant outil. Avant de vous parler d'ERP ou de
              Notion, je regarde vos process, vos flux, vos données. Et je vous dis ce qui doit
              changer — même si ce n'est pas confortable.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Consultante certifiée Notion",
                "Ambassadrice Osez l'IA",
                "Références ERP / CRM PME BTP & services",
                "Méthodologie inspirée du Lean Six Sigma (certifiée)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground/85">
                  <BadgeCheck className="h-5 w-5 text-secondary mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <aside className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/5 to-background border border-primary/20 text-center">
              <Compass className="h-12 w-12 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Prêt à transformer le brouillard en plan d'action ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Réservez votre entretien gratuit de 45 minutes. Nous regardons ensemble si Le Cap
                Digital est fait pour vous.
              </p>
              <Button asChild className="btn-premium text-base px-10 py-6">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLeadCapDigital("cap_digital_final")}
                  className="flex items-center gap-2"
                >
                  Réserver mon entretien gratuit
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                2 diagnostics ouverts par mois. Le prochain créneau d'immersion est disponible
                sous 3 à 4 semaines.
              </p>
            </aside>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CapDigital;
