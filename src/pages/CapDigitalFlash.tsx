import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Phone,
  ClipboardCheck,
  Search,
  FileText,
  Presentation,
  BarChart3,
  Target,
  Gift,
  ShieldCheck,
  Layers,
  Clock,
  RotateCcw,
  Wallet,
  Sparkles,
  BadgeCheck,
  GraduationCap,
  Building2,
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

const CALENDLY_URL =
  "https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange";

const trackLeadCapDigitalFlash = (location: string) => {
  trackEvent("Lead Cap Digital Flash", { cta_location: location });
  trackCTAClick("Réserver mon entretien gratuit", location, CALENDLY_URL);
};

const CapDigitalFlash = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Un diagnostic 360° de vos 4 fonctions critiques en moins de 2 semaines",
    "Un plan d'attaque clair avec feuille de route 90 jours priorisée et chiffrée",
    "Satisfait ou remboursé",
  ];

  const proofs = [
    { icon: BadgeCheck, label: "Certifiée Notion et Ambassadrice Notion et Osez IA" },
    { icon: Sparkles, label: "+25 espaces Notion analysés" },
    { icon: Building2, label: "Expertise terrain TPE, indépendants et PME" },
    { icon: GraduationCap, label: "Connaît les deux mondes : ERP/CRM et Notion agile" },
  ];

  const problems = [
    "Vos données métier sont éparpillées entre Excel, mails, têtes des collaborateurs et un logiciel vieillissant.",
    "Vous n'avez pas de vision claire sur votre rentabilité par projet, par client ou par activité.",
    "Vos équipes réinventent la roue à chaque dossier, faute de process partagés.",
    "Vous hésitez entre moderniser votre SI, structurer votre organisation, ou les deux - sans savoir par où commencer.",
  ];

  const phases = [
    {
      icon: Phone,
      tag: "J",
      title: "Cadrage - 60 min",
      items: [
        "Je vérifie que c'est le bon point d'entrée, sinon je vous le dis franchement.",
      ],
    },
    {
      icon: ClipboardCheck,
      tag: "J+1 à J+5",
      title: "Questionnaire structuré",
      items: [
        "4 fonctions critiques : facturation & finances · clients & CRM · organisation & projets · process & documentation.",
      ],
    },
    {
      icon: Search,
      tag: "J+5 à J+8",
      title: "Analyse & rapport",
      items: [
        "Forces, dysfonctionnements, risques, maturité, matrice de décision.",
      ],
    },
    {
      icon: Presentation,
      tag: "J+8 à J+14",
      title: "Restitution - 45 min",
      items: [
        "Vous repartez avec un plan d'attaque, avec moi ou sans moi.",
      ],
    },
  ];

  const deliverables = [
    {
      icon: FileText,
      title: "Rapport d'analyse complet",
      desc: "Forces, blocages, risques - un diagnostic structuré et actionnable.",
    },
    {
      icon: BarChart3,
      title: "Matrice de décision ERP/CRM vs Notion",
      desc: "La bonne orientation pour votre outillage digital.",
    },
    {
      icon: Target,
      title: "Feuille de route 90 jours priorisée et chiffrée",
      desc: "Un plan d'attaque concret avec budgets et échéances.",
    },
    {
      icon: Gift,
      title: "Bonus : 1 session Q&A 30 min",
      desc: "Dans les 30 jours suivants pour répondre à vos questions.",
    },
  ];

  const differentiators = [
    {
      icon: ShieldCheck,
      title: "Indépendante de tout éditeur",
      desc: "Aucun parti pris. Mes recommandations sont 100% orientées résultats.",
    },
    {
      icon: Layers,
      title: "Je connais les deux mondes",
      desc: "ERP/CRM structurants ET Notion agile. Je choisis l'outil adapté à votre situation.",
    },
    {
      icon: Clock,
      title: "Livré en 2 semaines",
      desc: "Vous décidez tant que l'élan est là. Pas de process interminable.",
    },
    {
      icon: RotateCcw,
      title: "Satisfait ou remboursé",
      desc: "Vous prenez zero risque. Si le diagnostic ne vous apporte pas de valeur, on s'arrête là.",
    },
  ];

  const process = [
    {
      icon: Phone,
      title: "Entretien gratuit de 45 min",
      desc: "Vous me racontez où vous en êtes. Je vérifie que le Cap Digital Flash est le bon point d'entrée pour vous. Sinon, je vous le dis franchement.",
    },
    {
      icon: ClipboardCheck,
      title: "Signature et planification",
      desc: "Devis signé, calendrier de la mission établi sous 48h.",
    },
    {
      icon: Search,
      title: "Immersion + rapport (2 semaines)",
      desc: "Je plonge dans vos 4 fonctions critiques. Vous continuez à faire tourner votre activité.",
    },
    {
      icon: Presentation,
      title: "Restitution + décision",
      desc: "On se retrouve 45 min. Vous repartez avec votre plan d'attaque. Vous décidez de la suite - avec moi ou sans moi.",
    },
  ];

  const faq = [
    {
      q: "Pourquoi 890 € et pas un audit gratuit ?",
      a: "Parce qu'un diagnostic gratuit serait nécessairement superficiel - ou orienté pour vous vendre une suite. Le Cap Digital Flash est une mission à part entière, avec un livrable indépendant et actionnable.",
    },
    {
      q: "Mon entreprise est trop petite / trop grosse ?",
      a: "Le Cap Digital Flash est calibré pour des PME de 1 à 10 M€ de CA, typiquement 10 à 80 collaborateurs. En dessous, l'investissement n'est pas justifié. Au-dessus, l'approche reste pertinente mais le périmètre doit être adapté - on en parle lors de l'entretien gratuit.",
    },
    {
      q: "Je n'ai pas de DSI ni de service informatique. C'est un problème ?",
      a: "Au contraire. C'est précisément la situation typique dans laquelle ce diagnostic apporte le plus de valeur. Je joue le rôle de Directrice de la Transformation Digitale à temps partagé.",
    },
    {
      q: "Êtes-vous indépendante des éditeurs (ERP/CRM, etc.) ?",
      a: "Oui. Mes recommandations sont guidées par votre intérêt. Je peux toutefois vous orienter vers des partenaires intégrateurs de confiance si besoin.",
    },
    {
      q: "Que se passe-t-il après les 2 semaines ?",
      a: "Deux scénarios : (1) vous repartez avec votre plan d'attaque et le mettez en œuvre en interne ou avec d'autres partenaires - c'est très bien. (2) Vous choisissez de poursuivre avec l'un de mes accompagnements (ERP/CRM, Notion, Global, Suivi mensuel).",
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
        name: "Cap Digital Flash - Diagnostic 360° PME",
        provider: {
          "@type": "Person",
          name: "Christelle Picault",
          jobTitle: "Directrice de la Transformation Digitale à temps partagé",
        },
        areaServed: "France",
        description:
          "Diagnostic 360° stratégique de 4 fonctions critiques (facturation, CRM, organisation, process) livré en 2 semaines. Matrice ERP/CRM vs Notion, feuille de route 90 jours.",
        offers: {
          "@type": "Offer",
          price: "890",
          priceCurrency: "EUR",
          url: "https://christelle-picault.fr/cap-digital-flash",
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
        <title>Cap Digital Flash - Diagnostic 360° PME en 2 semaines</title>
        <meta
          name="description"
          content="Diagnostic 360° de vos 4 fonctions critiques. Matrice ERP/CRM vs Notion, feuille de route 90 jours. Livré en 2 semaines. Satisfait ou remboursé."
        />
        <meta
          name="keywords"
          content="audit digital PME, diagnostic ERP CRM, consultant Notion Lyon, transformation digitale TPE PME"
        />
        <link rel="canonical" href="https://christelle-picault.fr/cap-digital-flash" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cap Digital Flash - Diagnostic 360° en 2 semaines" />
        <meta
          property="og:description"
          content="Diagnostic 360° de 4 fonctions critiques. Matrice ERP/CRM vs Notion, feuille de route 90 jours. Livré en 2 semaines."
        />
        <meta property="og:url" content="https://christelle-picault.fr/cap-digital-flash" />
        <meta property="og:locale" content="fr_FR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cap Digital Flash - Diagnostic 360° en 2 semaines" />
        <meta
          name="twitter:description"
          content="Diagnostic 360° de 4 fonctions critiques. Livré en 2 semaines."
        />

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
                onClick={() => trackLeadCapDigitalFlash("cap_digital_flash_header")}
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
            <li className="text-foreground font-medium">Cap Digital Flash</li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="relative py-10 md:py-16 lg:py-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-12 space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight">
                  Posez le bon diagnostic pour vous mettre en mouvement.
                </h1>

                <p className="text-xl md:text-2xl font-medium text-foreground max-w-3xl">
                  Votre éditeur vous vend son logiciel. Les gourous de l'IA, leur outil miracle. Moi, je n'ai rien à vous vendre - sauf la bonne direction.
                </p>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Le Diagnostic 360 Flash est 100 % indépendant et 100 % à distance. Pas d'immersion, pas de gros budget : juste une analyse lucide de votre organisation et un plan d'actions chiffré, en 2 semaines.
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
                      onClick={() => trackLeadCapDigitalFlash("cap_digital_flash_hero")}
                      className="flex items-center justify-center gap-2"
                    >
                      Réserver mon entretien gratuit de 45 min
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Aucun engagement. Satisfait ou remboursé.
                </p>
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
          </div>
        </section>

        {/* COMPARISON */}
        <section className="py-20 bg-muted/30 border-y border-border/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Diagnostic Flash vs Cap Digital - la différence
            </h2>

            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Flash</strong> = vous me dites. Analyse à distance, sur la base de vos réponses. Pour clarifier et prioriser.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Cap Digital</strong> = je viens voir. Immersion terrain, entretiens de vos équipes, observation de vos process réels. Pour transformer.
              </p>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-8 text-center">
              Flash ou complet ? La bonne offre selon votre moment :
            </h3>

            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-3 bg-primary/[0.06]">
                <div className="p-5 font-semibold text-foreground/70"></div>
                <div className="p-5 font-bold text-secondary text-center text-lg border-l border-border/30">
                  Flash - 890 €
                </div>
                <div className="p-5 font-bold text-primary text-center text-lg border-l border-border/30">
                  Cap Digital - 2 000 €
                </div>
              </div>

              {/* Row: Méthode */}
              <div className="grid grid-cols-3 border-t border-border/30">
                <div className="p-5 font-medium text-foreground bg-muted/20 flex items-center justify-center">
                  Méthode
                </div>
                <div className="p-5 text-muted-foreground text-center border-l border-border/30 flex items-center justify-center">
                  À distance, par questionnaires
                </div>
                <div className="p-5 text-muted-foreground text-center border-l border-border/30 flex items-center justify-center">
                  Immersion terrain
                </div>
              </div>

              {/* Row: Pour qui */}
              <div className="grid grid-cols-3 border-t border-border/30">
                <div className="p-5 font-medium text-foreground bg-muted/20 flex items-center justify-center">
                  Pour qui
                </div>
                <div className="p-5 text-muted-foreground text-center border-l border-border/30 flex items-center justify-center">
                  « Je veux y voir clair »
                </div>
                <div className="p-5 text-muted-foreground text-center border-l border-border/30 flex items-center justify-center">
                  « Je veux transformer »
                </div>
              </div>

              {/* Row: Livrable */}
              <div className="grid grid-cols-3 border-t border-border/30">
                <div className="p-5 font-medium text-foreground bg-muted/20 flex items-center justify-center">
                  Livrable
                </div>
                <div className="p-5 text-muted-foreground text-center border-l border-border/30 flex items-center justify-center">
                  Cap + plan 90 jours
                </div>
                <div className="p-5 text-muted-foreground text-center border-l border-border/30 flex items-center justify-center">
                  Feuille de route 12 mois chiffrée
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHASES */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Déroulement - en moins de 2 semaines
              </h2>
              <p className="text-muted-foreground">Le détail concret, étape par étape.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map(({ icon: Icon, tag, title, items }, i) => (
                <div
                  key={i}
                  className="glass-premium rounded-3xl p-8 card-premium flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                  {tag && (
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
                      {tag}
                    </span>
                  )}
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

        {/* DELIVERABLES */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Vos livrables
              </h2>
              <p className="text-muted-foreground">Un livrable complet, actionnable, et personnalisé.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ce qui me différencie
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comment ça se passe
              </h2>
              <p className="text-muted-foreground">Le process en 4 étapes.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors space-y-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-secondary">{i + 1}</span>
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
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
              <div className="text-5xl font-bold text-secondary mb-2">Cap Digital Flash<br />890 € HT</div>
              <p className="text-muted-foreground mb-6">Forfait tout inclus</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>⏱️</span> Livré en 2 semaines
                </li>
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>🎯</span> Feuille de route 90 jours priorisée et chiffrée
                </li>
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>🔒</span> 2 diagnostics/mois pour maintenir un niveau d'analyse exigeant
                </li>
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>🎁</span> Bonus : 1 session Q&A de 30 min dans les 30 jours suivants
                </li>
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>✅</span> Satisfait ou remboursé
                </li>
              </ul>

              <p className="text-sm text-muted-foreground italic">
                Pourquoi seulement 2 par mois ? Parce que je m'engage personnellement sur la
                qualité de l'analyse. Ce n'est pas un audit standardisé : c'est un diagnostic
                stratégique personnalisé.
              </p>

              <div className="mt-8">
                <Button asChild className="btn-premium text-base px-8 py-6">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackLeadCapDigitalFlash("cap_digital_flash_pricing")}
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

        {/* FINAL CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <aside className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/5 to-background border border-primary/20 text-center">
              <Clock className="h-12 w-12 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Prêt à débloquer votre croissance ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Réservez votre entretien gratuit de 45 minutes. Nous regardons ensemble si le Cap
                Digital Flash est fait pour vous.
              </p>
              <Button asChild className="btn-premium text-base px-10 py-6">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLeadCapDigitalFlash("cap_digital_flash_final")}
                  className="flex items-center gap-2"
                >
                  Réserver mon entretien gratuit
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                2 diagnostics ouverts par mois maximum. Le prochain créneau est disponible
                sous 2 à 3 semaines.
              </p>
            </aside>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CapDigitalFlash;
