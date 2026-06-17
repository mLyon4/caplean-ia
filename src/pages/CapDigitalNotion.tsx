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
  MessageSquare,
  Target,
  BarChart3,
  Gift,
  Users,
  Phone,
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

const trackLeadCapDigitalNotion = (location: string) => {
  trackEvent("Lead Cap Digital Notion", { cta_location: location });
  trackCTAClick("Réserver mon entretien gratuit", location, CALENDLY_URL);
};

const CapDigitalNotion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Un plan d'actions structuré en 3 niveaux : immédiat / 30 jours / 90 jours",
    "Un score de maturité Notion personnalisé avec axes d'amélioration concrets",
  ];

  const proofs = [
    { icon: BadgeCheck, label: "Certifiée Notion et Ambassadrice Notion et Osez IA" },
    { icon: Sparkles, label: "+25 espaces Notion analysés" },
    { icon: Building2, label: "Expertise terrain TPE, indépendants et PME" },
  ];

  const problems = [
    "Vos collaborateurs se perdent. L'information est éparpillée.",
    "Les process n'existent que dans les têtes. Votre outil est censé vous libérer - il vous ralentit.",
    "Votre Notion ne vous fait plus gagner de temps et bloque votre développement.",
  ];


  const phases = [
    {
      icon: Phone,
      tag: "J",
      title: "Appel de découverte - 45 min (J)",
      items: [
        "On cadre ensemble votre contexte, vos enjeux, vos objectifs. Je comprends comment votre équipe travaille et ce qui vous pose problème aujourd'hui.",
      ],
    },
    {
      icon: Search,
      tag: "J+1 à J+7",
      title: "Analyse approfondie de votre espace (J+1 à J+7)",
      items: [
        "J'explore votre Notion en profondeur : structure, bases de données, flux d'information, cohérence des process, usage réel vs usage prévu. Je cartographie ce qui fonctionne et ce qui freine votre développement.",
      ],
    },
    {
      icon: FileText,
      tag: "J+10",
      title: "Livraison du diagnostic complet (J+10)",
      items: [
        "Vous recevez une page Notion dédiée avec l'intégralité du diagnostic : points forts, points bloquants, priorités identifiées et plan d'actions structuré en 3 niveaux - immédiat, 30 jours, 90 jours.",
      ],
    },
    {
      icon: Presentation,
      tag: "J+10 à J+14",
      title: "Réunion de restitution - 45 min (J+10 à J+14)",
      items: [
        "On parcourt les résultats ensemble. Je réponds à vos questions et vous explique chaque recommandation. Vous repartez avec une vision claire et un cap précis.",
      ],
    },
  ];

  const deliverables = [
    {
      icon: FileText,
      title: "Page Notion avec diagnostic structuré",
      desc: "Points forts, points bloquants, priorités",
    },
    {
      icon: Target,
      title: "Plan d'actions en 3 niveaux : immédiat / 30 jours / 90 jours",
      desc: "Plan d'actions en 3 niveaux : immédiat / 30 jours / 90 jours",
    },
    {
      icon: BarChart3,
      title: "Score de maturité Notion personnalisé (sur 10) avec axes d'amélioration",
      desc: "Score de maturité Notion personnalisé (sur 10) avec axes d'amélioration",
    },
    {
      icon: Wallet,
      title: "Proposition d'accompagnement chiffrée si vous souhaitez aller plus loin",
      desc: "Proposition d'accompagnement chiffrée si vous souhaitez aller plus loin",
    },
    {
      icon: ClipboardCheck,
      title: "Bonus : template de suivi des actions post-audit offert",
      desc: "Bonus : template de suivi des actions post-audit offert",
    },
    {
      icon: MessageSquare,
      title: "Bonus : 1 session Q&A de 30 min dans les 30 jours suivant l'audit",
      desc: "Bonus : 1 session Q&A de 30 min dans les 30 jours suivant l'audit",
    },
  ];

  const process = [
    {
      icon: Calendar,
      title: "Entretien gratuit de 45 min",
      desc: "Vous me racontez où vous en êtes. Je vérifie que l'audit Notion est le bon point d'entrée pour vous. Sinon, je vous le dis franchement.",
    },
    {
      icon: ClipboardCheck,
      title: "Signature et planification",
      desc: "Devis signé, planning de l'audit calé sous 48h.",
    },
    {
      icon: Search,
      title: "Analyse + diagnostic (moins de 2 semaines)",
      desc: "J'explore votre espace Notion en profondeur. Vous continuez à faire tourner votre activité.",
    },
    {
      icon: Rocket,
      title: "Restitution + décision",
      desc: "On se retrouve. Vous repartez avec votre diagnostic et votre plan d'actions. Vous décidez de la suite — avec moi ou sans moi.",
    },
  ];

  const faq = [
    {
      q: "Pourquoi 890 € et pas un audit gratuit ?",
      a: "Parce qu'un diagnostic gratuit serait nécessairement superficiel — ou orienté pour vous vendre une suite. Le Cap Stratégique Notion est une mission à part entière, avec un livrable indépendant et actionnable.",
    },
    {
      q: "Mon espace Notion est-il trop petit / trop gros ?",
      a: "L'audit est calibré pour des espaces Notion utilisés par des équipes de 2 à 30 personnes. Que vous ayez 3 pages ou 300, je repère les leviers de croissance cachés et les blocages structurels.",
    },
    {
      q: "Je n'ai pas encore de Notion structuré. C'est un problème ?",
      a: "Au contraire. C'est une opportunité de partir d'une feuille blanche avec les bonnes pratiques. L'audit peut aussi s'appliquer à un projet de migration vers Notion.",
    },
    {
      q: "Êtes-vous indépendante de Notion ?",
      a: "Oui. Je suis certifiée Notion, mais mes recommandations sont guidées par votre intérêt. Je peux tout aussi bien vous conseiller de ne pas utiliser Notion si un autre outil est plus adapté.",
    },
    {
      q: "Que se passe-t-il après l'audit ?",
      a: "Deux scénarios : (1) vous repartez avec votre diagnostic et le mettez en œuvre en interne ou avec d'autres partenaires — c'est très bien. (2) Vous choisissez de poursuivre avec l'un de mes accompagnements (Notion, IA, ou transformation globale). Dans ce cas, je vous propose une mission chiffrée sur mesure.",
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
        name: "Cap Stratégique Notion — Diagnostic espaces Notion PME",
        provider: {
          "@type": "Person",
          name: "Christelle Picault",
          jobTitle: "Consultante certifiée Notion",
        },
        areaServed: "France",
        description:
          "Diagnostic stratégique de votre espace Notion, livré en moins de 2 semaines. Plan d'actions 3 niveaux, score de maturité, et accompagnement personnalisé.",
        offers: {
          "@type": "Offer",
          price: "890",
          priceCurrency: "EUR",
          url: "https://christelle-picault.fr/audit-strategique-notion",
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
        <title>Cap Stratégique Notion — Diagnostic pour débloquer votre croissance</title>
        <meta
          name="description"
          content="Diagnostic stratégique de votre espace Notion, livré en moins de 2 semaines. Page Notion dédiée, plan d'actions 3 niveaux, score de maturité personnalisé."
        />
        <meta
          name="keywords"
          content="audit Notion PME, diagnostic Notion, consultant Notion Lyon, espace Notion organisation"
        />
        <link rel="canonical" href="https://christelle-picault.fr/audit-strategique-notion" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cap Stratégique Notion — Moins de 2 semaines" />
        <meta
          property="og:description"
          content="Diagnostic stratégique de votre espace Notion, livré en moins de 2 semaines. Plan d'actions 3 niveaux, score de maturité, et accompagnement personnalisé."
        />
        <meta property="og:url" content="https://christelle-picault.fr/audit-strategique-notion" />
        <meta property="og:locale" content="fr_FR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cap Stratégique Notion — Moins de 2 semaines" />
        <meta
          name="twitter:description"
          content="Diagnostic stratégique de votre espace Notion, livré en moins de 2 semaines."
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
                onClick={() => trackLeadCapDigitalNotion("cap_digital_notion_header")}
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
            <li className="text-foreground font-medium">Cap Stratégique Notion</li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="relative py-10 md:py-16 lg:py-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight">
                  Posez le bon{" "}
                  <span className="relative inline-block">
                    <span className="text-secondary">diagnostic Notion</span>
                    <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                      <path d="M2 8C50 2 150 2 198 8" stroke="hsl(13, 65%, 83%)" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                  {" "}pour débloquer votre croissance.
                </h1>

                <p className="text-xl md:text-2xl font-medium text-foreground max-w-2xl">
                  Votre Notion ne vous fait plus gagner de temps et bloque votre développement.
                </p>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Le Cap Stratégique Notion : un diagnostic complet de votre espace Notion. Livré
                  sous <strong className="text-foreground">2 semaines</strong>. Vous repartez avec une vision claire et un cap précis.
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
                      onClick={() => trackLeadCapDigitalNotion("cap_digital_notion_hero")}
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

              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                  <p className="text-sm text-muted-foreground italic">
                    « Ce diagnostic va changer ça. Et vous permettre d'accélérer votre développement. »
                  </p>
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



        {/* WHAT'S INCLUDED / PHASES */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Déroulement — en moins de 2 semaines
              </h2>
              <p className="text-muted-foreground">Le détail concret, jour par jour.</p>
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
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ce que vous obtenez
              </h2>
              <p className="text-muted-foreground">Un livrable complet, actionnable, et personnalisé.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="text-5xl font-bold text-secondary mb-2">Le Cap Stratégique Notion - 890 € HT</div>
              <p className="text-muted-foreground mb-6">Forfait tout inclus</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>⏱️</span> Livré en moins de 2 semaines après l'appel de découverte
                </li>
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>🎯</span> Proposition d'accompagnement chiffrée si vous souhaitez aller plus loin
                </li>
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>🔒</span> Maximum 3 clients/mois pour maintenir un niveau d'analyse exigeant
                </li>
                <li className="flex items-center gap-3 text-foreground/85">
                  <span>🎁</span> Bonus : template de suivi post-audit + 1 session Q&A de 30 min
                </li>
              </ul>

              <p className="text-sm text-muted-foreground italic">
                Pourquoi seulement 3 par mois ? Parce que je m'engage personnellement sur la
                qualité de l'analyse. Ce n'est pas un audit standardisé : c'est un diagnostic
                stratégique personnalisé.
              </p>

              <div className="mt-8">
                <Button asChild className="btn-premium text-base px-8 py-6">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackLeadCapDigitalNotion("cap_digital_notion_pricing")}
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
              Certifiée Notion et Ambassadrice Notion et Osez IA · +25 espaces analysés
            </p>
            <p className="text-foreground/85 mb-4">
              J'aide les dirigeants de PME, TPE et indépendants à débloquer leur croissance grâce à Notion.
              Un espace bien structuré ne suffit pas — il faut qu'il serve votre stratégie et qu'il soit adopté par vos équipes.
            </p>
            <p className="text-muted-foreground mb-8">
              Ma différence : je pense organisation avant outil. Avant de vous parler de Notion,
              je regarde vos process, vos flux, vos données. Et je vous dis ce qui doit
              changer — même si ce n'est pas confortable.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Certifiée Notion et Ambassadrice Notion et Osez IA",
                "+25 espaces Notion analysés",
                "Expertise terrain TPE, indépendants et PME",
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
                Prêt à débloquer votre croissance avec Notion ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Réservez votre entretien gratuit de 45 minutes. Nous regardons ensemble si le Cap
                Stratégique Notion est fait pour vous.
              </p>
              <Button asChild className="btn-premium text-base px-10 py-6">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLeadCapDigitalNotion("cap_digital_notion_final")}
                  className="flex items-center gap-2"
                >
                  Réserver mon entretien gratuit
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                3 audits ouverts par mois maximum. Le prochain créneau est disponible
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

export default CapDigitalNotion;
