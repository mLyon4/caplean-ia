import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Linkedin,
  Star,
  Quote,
  Building2,
  Cog,
  BarChart3,
  GraduationCap,
  Video,
  RefreshCw,
  ShieldCheck,
  Clock,
  Map,
  Hammer,
  Rocket,
  Repeat,
  Gift,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import notionSpecialistBadge from "@/assets/logos/notion-specialist-badge.png";
import notionAmbassador from "@/assets/logos/notion-ambassador.png";
import { trackCTAClick } from "@/lib/analytics";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange";

const ConsultanteNotion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const painPoints = [
    "Vous répondez aux mêmes questions de vos équipes 10 fois par jour.",
    "Les informations clés de votre entreprise sont dans des Excel, des mails, des têtes — jamais au même endroit.",
    "Vous n'avez pas de tableau de bord fiable pour piloter vos décisions.",
    "Vos collaborateurs perdent un temps fou à chercher, demander, refaire.",
    "Vous savez que votre organisation pourrait être plus performante — mais vous ne savez pas par où commencer.",
  ];

  const transformations = [
    { before: "L'information est éparpillée entre Excel, Drive, mails, têtes", after: "Une seule source de vérité, partagée, à jour" },
    { before: "Vous êtes sollicité pour la moindre décision", after: "Vos équipes savent quoi faire, où chercher, comment avancer" },
    { before: "Vous pilotez au feeling", after: "Vous pilotez avec un tableau de bord hebdo — 5 KPI clés" },
    { before: "Votre CRM est un Excel, vos projets sont dans votre tête", after: "CRM, projets, OKR connectés et automatisés dans Notion" },
    { before: "Chaque nouvel outil s'essouffle après 2 mois", after: "Vos équipes sont formées, autonomes, l'adoption tient" },
  ];

  const deliverables = [
    {
      icon: Building2,
      emoji: "🏗️",
      title: "Une architecture Notion sur-mesure",
      description: "Des bases de données interconnectées — CRM, projets, OKR, suivi, ressources — conçues pour votre métier, votre taille, votre rythme.",
    },
    {
      icon: Cog,
      emoji: "⚙️",
      title: "Des automatisations et de l'IA intégrées",
      description: "Vos workflows critiques sont automatisés : statuts, alertes, résumés, génération de contenu, qualification de leads. Vous gagnez du temps dès la mise en route.",
    },
    {
      icon: BarChart3,
      emoji: "📊",
      title: "Un tableau de bord dirigeant",
      description: "Une vue hebdomadaire claire de vos KPI clés : commercial, projets, finances, OKR. Vous décidez en 5 minutes, pas en 2 heures.",
    },
    {
      icon: GraduationCap,
      emoji: "🎓",
      title: "Une formation Qualiopi pour vos équipes",
      description: "2 sessions de formation officielles finançables par votre OPCO. Vos collaborateurs deviennent autonomes — et vous récupérez tout ou partie de votre investissement.",
    },
    {
      icon: Video,
      emoji: "📖",
      title: "Une documentation vidéo de votre espace",
      description: "Hébergée directement dans Notion. Plus de « comment on fait déjà ? » : tout est filmé, commenté, accessible.",
    },
    {
      icon: RefreshCw,
      emoji: "🔄",
      title: "Une démarche d'amélioration continue (Lean)",
      description: "Votre système ne reste pas figé : il évolue avec votre entreprise. Nous vous transmettons les bons réflexes pour qu'il vive sans nous.",
    },
  ];

  const formulas = [
    {
      name: "Essentiel",
      duration: "6 semaines",
      ideal: "PME 1-3 M€",
      scope: "CRM + projets + pilotage",
      qualiopi: "Incluse",
      price: "À partir de 4 500 € HT + formation",
    },
    {
      name: "Complet",
      duration: "9 semaines",
      ideal: "PME 3-10 M€",
      scope: "CRM + projets + OKR + pilotage + IA",
      qualiopi: "Incluse",
      price: "À partir de 7 000 € HT + formation",
      highlighted: true,
    },
  ];

  const includedItems = [
    "Atelier de cadrage (1 journée) avec cartographie de vos process critiques",
    "Architecture Notion sur-mesure (bases de données, vues, relations, rollups)",
    "Templates de pages prêts à l'emploi",
    "Automatisations natives et intégrations IA",
    "Tableau de bord dirigeant opérationnel",
    "2 sessions de formation Qualiopi pour vos équipes",
    "Documentation vidéo de votre espace",
    "Mise en place de la démarche d'amélioration continue",
    "15 jours d'ajustements offerts post-livraison",
  ];

  const methodSteps = [
    { icon: Map, emoji: "🗺️", week: "Semaine 1", title: "Cadrage", desc: "Atelier d'1 journée avec vous et 2-3 opérationnels clés. Cartographie de vos process. Validation de l'architecture cible." },
    { icon: Hammer, emoji: "🔨", week: "Semaines 2 à 6/7", title: "Construction", desc: "Création des bases, vues, automatisations, IA. Points hebdomadaires de revue. Vous voyez l'espace prendre forme en temps réel." },
    { icon: Rocket, emoji: "🚀", week: "Semaines 5-6 / 7-9", title: "Déploiement", desc: "Migration de vos données. Formation Qualiopi de vos équipes. Documentation vidéo livrée. Adoption opérationnelle." },
    { icon: Repeat, emoji: "🔄", week: "J+30", title: "Ajustements", desc: "30 jours de questions et réglages inclus. Bilan d'adoption. Bascule possible vers l'offre Suivi mensuel." },
  ];

  const forWhom = [
    "Les dirigeants de PME de 1 à 10 M€ de chiffre d'affaires",
    "Ceux qui veulent structurer leur organisation sans recruter un Directeur Opérations",
    "Ceux qui acceptent de dégager du temps pour le cadrage initial",
    "Ceux qui veulent un système adopté par leurs équipes, pas un outil de plus",
  ];

  const notForWhom = [
    "Les PME qui ont d'abord un problème d'ERP métier (commencez par Le Cap Digital)",
    "Les TPE qui n'ont pas encore d'équipe constituée (l'outil ne résoudra pas le problème d'organisation)",
    "Les dirigeants qui veulent déléguer à 100 % sans s'impliquer dans le cadrage",
  ];

  const trustReasons = [
    "Consultante certifiée Notion",
    "Organisme de formation certifié Qualiopi — formations finançables par votre OPCO",
    "Expertise croisée Notion + ERP/CRM + IA + Lean Management",
    "Méthodologie éprouvée sur PME 1 à 10 M€ CA",
    "2 espaces livrés par mois maximum — pour garantir la qualité et notre engagement réel sur le vôtre",
  ];

  const faqItems = [
    {
      question: "Combien de temps dois-je personnellement y consacrer ?",
      answer: "Environ 1 à 2 heures par semaine : un point de revue hebdo, plus l'atelier de cadrage initial d'1 journée. Tout le reste, nous le faisons.",
    },
    {
      question: "Et si Notion ne plaisait pas à mes équipes ?",
      answer: "L'adoption est notre obsession. La formation Qualiopi, la documentation vidéo et la garantie d'adoption à J+30 sont là pour ça. Les PME qui suivent la méthode adoptent à 100 %.",
    },
    {
      question: "Puis-je financer la formation par mon OPCO ?",
      answer: "Oui. Nous sommes partenaires d'un organisme de formation certifié Qualiopi.",
    },
    {
      question: "Que se passe-t-il après les 9 semaines ?",
      answer: "Vous êtes autonome. 15 jours d'ajustements sont inclus. Ensuite, vous pouvez basculer sur l'offre Suivi mensuel pour faire vivre et évoluer votre espace au rythme de votre croissance.",
    },
    {
      question: "Mon entreprise est trop petite / trop grande ?",
      answer: "L'offre est calée sur les PME entre 0,5 et 10 M€. En dessous, contactez-nous quand même — il existe peut-être une autre voie d'entrée. Au-dessus, c'est plutôt l'Accompagnement Global qui est adapté.",
    },
    {
      question: "Combien coûte vraiment le projet, tout compris ?",
      answer: "Essentiel : à partir de 4 500 € HT. Complet : à partir de 7 000 € HT. La partie formation est finançable OPCO (Qualiopi). Le devis définitif est calibré après un échange découverte gratuit de 45 minutes.",
    },
  ];

  const testimonials = [
    { content: "Christelle nous a accompagné dans notre transition numérique chez AC2R. Grâce à son travail de compréhension de notre mode de fonctionnement et à son analyse très précise, nous avons pu changer de logiciel de gestion après 17 ans. C'est notre magicienne :)", author: "Anne-Gaëlle de Kinkelin-Roux", title: "DG et Responsable du développement commercial", company: "AC2R" },
    { content: "Une vraie pro 🤩 Christelle a pris le temps d'écouter mes besoins et s'y est très facilement adaptée, avec un grand sens pédagogique. Je suis devenue autonome avec « mon » Notion hyper rapidement! Je recommande les yeux fermés 🚀", author: "Céline Mansuy Ferreira", title: "Consultante Free-lance", company: "Up Neo" },
    { content: "Son travail a été remarquable : elle a su structurer l'ensemble de manière claire et fluide, tout en gardant une logique d'utilisation simple et intuitive. Résultat : un outil bien plus efficace, adapté à mes besoins.", author: "Quentin Forgeot", title: "CEO", company: "Fireco | Agence Meta Ads" },
    { content: "Christelle a changé la donne. Elle a écouté mes besoins réels et conçu MON outil. Aujourd'hui, mon assistante et moi collaborons sur une plateforme fluide, fiable, sans superflu. Pour digitaliser avec pragmatisme : foncez !", author: "Coralie Moiny", title: "Directrice Marketing", company: "#FeeCommTuVeux" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://christellepicault.fr/#business",
        name: "Christelle Picault - Consultante Notion",
        description: "Espace Notion sur-mesure pour PME : quartier général digital livré en 6 à 9 semaines. Formation Qualiopi finançable OPCO.",
        url: "https://christellepicault.fr/consultante-notion-certifiee-notion-service-specialist-lyon-structuration-pilotage-pme",
        address: { "@type": "PostalAddress", addressLocality: "Lyon", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
        areaServed: [{ "@type": "Country", name: "France" }],
        priceRange: "€€",
      },
      {
        "@type": "Service",
        name: "Espace Notion sur-mesure pour PME",
        provider: { "@id": "https://christellepicault.fr/#business" },
        serviceType: "Consulting",
        areaServed: "France",
        description: "Espace Notion livré en 6 à 9 semaines : architecture, automatisations, IA, tableau de bord, formation Qualiopi.",
        offers: [
          { "@type": "Offer", name: "Essentiel", price: "4500", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Complet", price: "7000", priceCurrency: "EUR" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((i) => ({
          "@type": "Question",
          name: i.question,
          acceptedAnswer: { "@type": "Answer", text: i.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Espace Notion sur-mesure pour PME en 6 à 9 semaines | Christelle Picault</title>
        <meta name="description" content="Reprenez le contrôle de votre PME : un Espace Notion sur-mesure livré en 6 à 9 semaines. À partir de 4 500 € HT. Formation Qualiopi finançable OPCO." />
        <link rel="canonical" href="https://christellepicault.fr/consultante-notion-certifiee-notion-service-specialist-lyon-structuration-pilotage-pme" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Espace Notion sur-mesure pour PME en 6 à 9 semaines" />
        <meta property="og:description" content="Le quartier général digital de votre PME — adopté par vos équipes, piloté par vos KPI. Formation Qualiopi finançable OPCO." />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-b from-muted/30 via-background to-background pointer-events-none" />

        {/* Header */}
        <header className="w-full bg-background/80 backdrop-blur-lg sticky top-0 z-50 border-b border-border/30">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium hidden sm:block">Retour</span>
              </Link>
              <Button asChild className="bg-secondary hover:bg-secondary-dark text-foreground rounded-full px-6 py-2 shadow-lg shadow-secondary/20">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  onClick={() => trackCTAClick("Prendre rendez-vous", "notion_header", "calendly")}
                >
                  Prendre rendez-vous
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="container mx-auto px-6 py-4 relative z-10">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
            <li><ChevronRight className="h-4 w-4" /></li>
            <li className="text-foreground font-medium">Espace Notion sur-mesure</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative py-8 md:py-16 lg:py-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                  Accélérez la croissance de votre entreprise avec{" "}
                  <span className="text-secondary">Notion</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Un <strong className="text-foreground">Espace Notion sur-mesure</strong> qui devient le <strong className="text-foreground">quartier général digital</strong> de votre PME — adopté par vos équipes, piloté par vos KPI, prêt à grandir avec vous.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button asChild className="btn-premium text-base px-8 py-6">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                      onClick={() => trackCTAClick("Réserver mon créneau", "notion_hero", "calendly")}
                    >
                      Réserver mon créneau découverte
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <span className="text-sm text-muted-foreground self-center">
                    📍 Lyon · France entière
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="flex justify-center lg:justify-end gap-3 mb-2">
                  <img src={notionAmbassador} alt="Notion Official Ambassador" className="h-14 md:h-16 w-auto drop-shadow-md" />
                  <img src={notionSpecialistBadge} alt="Notion Service Specialist - Certification officielle" className="h-20 md:h-24 lg:h-28 w-auto drop-shadow-md" />
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/20">
                  <p className="text-foreground font-medium leading-relaxed">
                    Un quartier général digital bien conçu, c'est{" "}
                    <span className="text-secondary font-bold">+20 à +40 % de temps utile récupéré</span>{" "}
                    — sans recruter, sans changer d'outil métier.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                  <p className="text-sm text-muted-foreground italic">
                    « 8 PME sur 10 entre 1 et 10 M€ vivent ce quotidien. La cause n'est pas vos équipes. C'est l'absence d'un système. »
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-14 md:py-24 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Vos journées <span className="text-gradient-secondary">ressemblent à ça</span> ?
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4">
                {painPoints.map((point, i) => (
                  <div key={i} className="glass-premium rounded-xl md:rounded-2xl p-4 md:p-6 flex items-start gap-3 md:gap-5">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                    </div>
                    <p className="text-sm md:text-lg text-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 text-center">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Vos équipes ne perdent pas du temps à produire. Elles en perdent à <strong>chercher, demander, refaire, attendre</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="py-14 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Imaginez votre PME <span className="text-gradient-secondary">dans 9 semaines</span>
              </h2>
            </div>
            <div className="max-w-5xl mx-auto glass-premium rounded-2xl md:rounded-[2rem] overflow-hidden">
              <div className="grid grid-cols-2 bg-muted/40 text-foreground font-bold text-sm md:text-base">
                <div className="p-4 md:p-6 border-r border-border/50">Aujourd'hui</div>
                <div className="p-4 md:p-6 text-secondary">Dans 9 semaines</div>
              </div>
              {transformations.map((t, i) => (
                <div key={i} className={`grid grid-cols-2 text-sm md:text-base ${i % 2 === 0 ? "bg-background/50" : ""}`}>
                  <div className="p-4 md:p-6 border-r border-border/50 text-muted-foreground">{t.before}</div>
                  <div className="p-4 md:p-6 text-foreground font-medium">{t.after}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-14 md:py-28 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Ce que vous obtenez <span className="text-gradient-secondary">concrètement</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
              {deliverables.map((d, i) => (
                <div key={i} className="glass-premium rounded-2xl p-6 md:p-8 card-premium">
                  <div className="text-3xl md:text-4xl mb-3">{d.emoji}</div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{d.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulas */}
        <section className="py-14 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Choisissez votre <span className="text-gradient-secondary">formule</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {formulas.map((f, i) => (
                <div
                  key={i}
                  className={`glass-premium rounded-2xl md:rounded-[2rem] p-6 md:p-10 card-premium ${
                    f.highlighted ? "border-2 border-secondary/40" : ""
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{f.name}</h3>
                  <p className="text-secondary font-semibold mb-6">{f.duration} · Idéal pour {f.ideal}</p>
                  <ul className="space-y-3 mb-6 text-sm md:text-base">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground"><strong>Périmètre :</strong> {f.scope}</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground"><strong>Formation Qualiopi :</strong> {f.qualiopi}</span></li>
                  </ul>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-base md:text-lg font-bold text-foreground">{f.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto mt-8 p-5 md:p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-sm md:text-base text-foreground">
                💡 La partie formation est finançable par votre OPCO (Qualiopi). Votre <strong>reste à charge réel peut être significativement réduit</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Inclusions */}
        <section className="py-14 md:py-24 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Tout ce qui est inclus, <span className="text-gradient-secondary">sans exception</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {includedItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/30 flex items-start gap-4">
                <Gift className="h-7 w-7 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-bold text-foreground mb-1">🎁 Bonus</p>
                  <p className="text-sm md:text-base text-muted-foreground">1 session IA découverte pour vos équipes (gains de temps immédiats).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-14 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Nos <span className="text-gradient-secondary">garanties</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="glass-premium rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="h-8 w-8 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">🎯 Adoption garantie</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Si vos équipes ne sont pas autonomes à J+30 post-livraison, nous refaisons une session de formation offerte pour ajuster et reformer.
                </p>
              </div>
              <div className="glass-premium rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">⏱️ Livraison maîtrisée</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Un point hebdomadaire avec vous, des jalons clairs, pas de surprise. Vous savez toujours où nous en sommes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="py-14 md:py-28 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                La méthode — votre parcours en <span className="text-gradient-secondary">4 étapes</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
              {methodSteps.map((s, i) => (
                <div key={i} className="glass-premium rounded-2xl p-6 card-premium">
                  <div className="text-3xl mb-3">{s.emoji}</div>
                  <p className="text-xs uppercase tracking-wider text-secondary font-bold mb-1">{s.week}</p>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For whom / not for whom */}
        <section className="py-14 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="glass-premium rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Pour qui cette offre est faite</h3>
                <ul className="space-y-3">
                  {forWhom.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-premium rounded-2xl p-6 md:p-8 bg-muted/30">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Pour qui elle n'est PAS faite</h3>
                <ul className="space-y-3">
                  {notForWhom.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                      <span className="text-muted-foreground font-bold mt-0.5">✗</span>
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-14 md:py-24 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Pourquoi nous faire <span className="text-gradient-secondary">confiance</span>
                </h2>
              </div>
              <div className="space-y-3">
                {trustReasons.map((r, i) => (
                  <div key={i} className="glass-premium rounded-xl p-4 md:p-5 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-foreground">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
                <Linkedin className="h-5 w-5 text-[#0077b5]" />
                <a
                  href="https://www.linkedin.com/services/page/99439232a0ba4b836b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-[#0077b5] hover:underline font-medium"
                >
                  Voir tous les avis
                </a>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Ils ont <span className="text-gradient-secondary">structuré</span> leur entreprise
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="glass-premium rounded-2xl md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden card-premium">
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 text-secondary/10">
                    <Quote className="h-12 w-12 md:h-20 md:w-20" />
                  </div>
                  <div className="flex gap-1 mb-4 md:mb-6 relative z-10">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-4 w-4 md:h-5 md:w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm md:text-lg text-foreground mb-5 md:mb-8 relative z-10 leading-relaxed">"{t.content}"</p>
                  <div className="relative z-10">
                    <p className="font-bold text-sm md:text-base text-foreground">{t.author}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{t.title}</p>
                    <p className="text-xs md:text-sm text-secondary font-medium">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-28 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Questions <span className="text-gradient-secondary">fréquentes</span>
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4">
                {faqItems.map((item, i) => (
                  <details key={i} className="glass-premium rounded-xl md:rounded-2xl group">
                    <summary className="p-4 md:p-6 cursor-pointer list-none flex items-center justify-between gap-3 font-semibold text-foreground text-sm md:text-lg hover:text-secondary transition-colors">
                      {item.question}
                      <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">{item.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="glass-premium rounded-2xl md:rounded-[3rem] p-8 md:p-16 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-6 md:mb-8">
                <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-secondary" />
                <span className="text-xs md:text-sm font-medium text-secondary">45 minutes, gratuit & sans engagement</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6">
                Réservez votre créneau découverte
              </h2>
              <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
                On fait le point sur votre organisation actuelle, vos priorités, et nous vous disons honnêtement si l'Espace Notion est la bonne réponse pour vous.
              </p>
              <Button
                asChild
                className="bg-secondary hover:bg-secondary-dark text-foreground btn-shine text-base md:text-xl px-8 md:px-12 py-5 md:py-7 w-full sm:w-auto rounded-full shadow-md"
              >
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 md:gap-3"
                  onClick={() => trackCTAClick("Réserver mon créneau", "notion_footer_cta", "calendly")}
                >
                  Réserver mon créneau
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground mt-6">
                2 espaces livrés par mois maximum. Prochaine disponibilité communiquée lors de l'échange.
              </p>
              <p className="mt-10 text-base md:text-lg text-foreground italic max-w-2xl mx-auto">
                En 6 à 9 semaines, nous vous livrons l'espace Notion qui devient le quartier général digital de votre PME — adopté par vos équipes, piloté par vos KPI. Formation Qualiopi finançable OPCO.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ConsultanteNotion;
