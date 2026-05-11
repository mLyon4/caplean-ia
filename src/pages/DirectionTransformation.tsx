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
  ShieldCheck,
  Eye,
  Unlock,
  Map,
  Hammer,
  Rocket,
  Flag,
  Target,
  Cog,
  FolderKanban,
  Bot,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { trackCTAClick } from "@/lib/analytics";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange";

const DirectionTransformation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const painPoints = [
    "Votre PME a grandi. Vos outils, votre organisation, vos process — eux, n'ont pas suivi.",
    "Votre projet ERP patine depuis des mois, et le prestataire ne répond plus aux vraies questions.",
    "Vos équipes travaillent avec des Excel, des mails, des têtes, des post-its. Personne ne sait où est la vérité.",
    "Vous êtes devenu le goulet d'étranglement de votre propre entreprise.",
    "Un Directeur de la Transformation à 120 K€/an chargés, ce n'est pas le moment.",
    "Et un cabinet de conseil ? Vous savez déjà : des slides, pas des résultats.",
  ];

  const transformations = [
    { before: "Vous êtes le goulet d'étranglement de votre entreprise", after: "+1 jour par semaine libéré pour la stratégie" },
    { before: "Votre information est éparpillée", after: "Notion = source de vérité unique, adoptée par toutes les équipes" },
    { before: "Votre ERP s'enlise dans la mise en place", after: "ERP cadré, déployé, intégré — projet sous contrôle" },
    { before: "Vous décidez au feeling", after: "Tableau de bord hebdo avec 5 KPI dirigeant" },
    { before: "Votre marge ops stagne", after: "+5 à +10 points de marge ops visés" },
  ];

  const responsibilities = [
    {
      emoji: "🎯",
      title: "Pilotage stratégique",
      description: "Je cadre la feuille de route 12 mois, j'anime le comité de pilotage mensuel avec vous, je tranche les arbitrages outils, process, priorités. Vous savez chaque semaine où vous en êtes.",
    },
    {
      emoji: "⚙️",
      title: "Pilotage ERP",
      description: "Je cadre votre besoin, je sélectionne (ou je reprends en main) le prestataire d'intégration, je pilote la recette, j'organise la conduite du changement et le déploiement. Votre projet ERP sort de l'ornière.",
    },
    {
      emoji: "🗂️",
      title: "Structuration Notion",
      description: "Je construis votre architecture sur-mesure : CRM, projets, OKR, pilotage dirigeant. Je connecte ERP ↔ Notion ↔ IA. Je forme vos équipes via une formation Qualiopi finançable OPCO.",
    },
    {
      emoji: "🤖",
      title: "Acculturation IA",
      description: "J'organise des ateliers IA pour vos équipes, j'intègre des agents IA Notion sur vos process critiques, j'assure la veille et l'évolution continue.",
    },
    {
      emoji: "👥",
      title: "Conduite du changement",
      description: "Je communique en interne, je forme vos collaborateurs, je transmets progressivement aux équipes pour que vous ne soyez jamais dépendant de moi à la sortie.",
    },
  ];

  const formulas = [
    {
      name: "Pilote",
      duration: "1 à 2 jours/semaine",
      ideal: "PME 1-5 M€ en transformation ciblée",
      scope: "Pilotage ERP ou structuration Notion",
      engagement: "3 mois minimum",
      price: "À partir de 3 600 € HT/mois",
    },
    {
      name: "Transformation",
      duration: "3 jours/semaine",
      ideal: "PME 5-10 M€ en refonte complète",
      scope: "Pilotage ERP + Notion + IA + change",
      engagement: "6 mois minimum",
      price: "10 000 € HT/mois",
      highlighted: true,
    },
  ];

  const includedItems = [
    "Diagnostic 360° les 15 premiers jours (ou Le Cap Digital déduit si déjà réalisé)",
    "Feuille de route 12 mois avec jalons mesurables et KPI de sortie",
    "Pilotage ERP avec vos prestataires (cadrage, recette, déploiement)",
    "Système Notion clé en main (CRM, projets, OKR, pilotage)",
    "Formation Qualiopi pour vos équipes (finançable OPCO)",
    "2 ateliers IA pour vos équipes",
    "Comité de pilotage mensuel avec vous",
    "Accès direct WhatsApp 5j/7",
    "Reporting hebdomadaire d'avancement",
  ];

  const methodSteps = [
    { emoji: "🗺️", week: "Mois 1", title: "Cadrage", desc: "Diagnostic 360° (si pas déjà fait), feuille de route 12 mois validée, mise en place du comité de pilotage. Les premières décisions sont prises." },
    { emoji: "🏗️", week: "Mois 2-3", title: "Fondations", desc: "Architecture Notion livrée, cadrage ERP et sélection ou reprise en main du prestataire, premiers KPI dirigeant en place." },
    { emoji: "🚀", week: "Mois 4-5", title: "Déploiement", desc: "ERP en déploiement, adoption Notion par toutes les équipes, ateliers IA opérationnels. Vos équipes basculent dans le nouveau système." },
    { emoji: "🏁", week: "Mois 6", title: "Autonomie", desc: "ERP en production, équipes formées, tableau de bord dirigeant pleinement opérationnel. Audit de sortie + plan de continuité." },
  ];

  const forWhom = [
    "Les dirigeants de PME de 1 à 10 M€ de chiffre d'affaires",
    "Ceux qui ont un projet ERP à lancer ou à remettre sur les rails",
    "Ceux qui veulent structurer leur organisation sans recruter un Directeur de la Transformation",
    "Ceux qui acceptent de s'impliquer dans la transformation — elle ne se sous-traite pas à 100 %",
  ];

  const notForWhom = [
    "Les TPE de moins d'1 M€ CA (trop tôt — commencez par l'Espace Notion)",
    "Les dirigeants qui veulent juste un outil sans vision (commencez par Le Cap Digital)",
    "Les dirigeants qui veulent déléguer 100 % de la réflexion (la transformation reste votre projet)",
  ];

  const trustReasons = [
    "10 missions PME menées de bout en bout (Notion + ERP/CRM + IA)",
    "100 % des dirigeants accompagnés ont vu leur temps se libérer dès le 3ème mois",
    "Consultante certifiée Notion",
    "Partenaire organisme de formation Qualiopi (finançable OPCO)",
    "Expertise croisée Notion + ERP/CRM + IA + Lean Management",
    "2 mandats simultanés maximum — pour garantir mon engagement réel sur le vôtre",
  ];

  const faqItems = [
    {
      question: "En quoi c'est différent d'un cabinet de conseil ?",
      answer: "Un cabinet vous livre un rapport et facture ses heures. Moi je prends la responsabilité opérationnelle : je tranche, je pilote vos prestataires, je forme vos équipes. Vous achetez un résultat, pas des slides.",
    },
    {
      question: "Pourquoi pas recruter un Directeur de la Transformation ?",
      answer: "Parce qu'un C-Level coûte 120 K€/an chargés, met 3 à 6 mois à être recruté et formé, et engage votre PME sur le long terme. Moi, je suis opérationnelle en 15 jours, pour 30 à 50 % du coût, et je pars quand votre système tourne tout seul.",
    },
    {
      question: "Travaillez-vous avec mon éditeur ERP ?",
      answer: "Oui. Que l'éditeur soit déjà choisi ou non, je pilote la relation avec votre prestataire d'intégration. Je parle leur langage et je tiens les jalons.",
    },
    {
      question: "Combien de temps dois-je personnellement consacrer au projet ?",
      answer: "Compter 2 à 4 heures par semaine : un point hebdo, un comité de pilotage mensuel, des arbitrages ponctuels. Le reste, je le porte.",
    },
    {
      question: "La formation est-elle finançable par mon OPCO ?",
      answer: "Oui. Je suis partenaire d'un organisme de formation certifié Qualiopi. Je vous accompagne dans le montage du dossier OPCO pour la partie formation.",
    },
    {
      question: "Que se passe-t-il à la sortie des 6 mois ?",
      answer: "Vos équipes sont autonomes. Vous pouvez basculer sur l'offre Suivi mensuel pour faire vivre votre système, ou continuer l'accompagnement à un rythme réduit, ou arrêter simplement. C'est vous qui décidez.",
    },
    {
      question: "Et si je veux arrêter avant ?",
      answer: "Après les 3 premiers mois d'engagement, vous pouvez arrêter avec un préavis de 30 jours. Zéro lock-in.",
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
        "@type": "Service",
        name: "Direction Transformation Digitale à temps partagé",
        serviceType: "Consulting",
        areaServed: "France",
        description: "Direction Transformation Digitale externalisée à temps partagé, 1 à 3 jours/semaine. Pilotage ERP, structuration Notion, formation IA pour PME 1-10 M€.",
        offers: [
          { "@type": "Offer", name: "Pilote", price: "7000", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Transformation", price: "10000", priceCurrency: "EUR" },
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
        <title>Direction Transformation Digitale à temps partagé pour PME | Christelle Picault</title>
        <meta name="description" content="Externalisez votre Direction Transformation Digitale en temps partagé : 1 à 3 jours/semaine pour piloter votre ERP, structurer votre Notion et faire passer un cap à votre PME en moins de 6 mois." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Direction Transformation Digitale à temps partagé" />
        <meta property="og:description" content="Une directrice Transformation digitale expérimentée 1 à 3 jours/semaine pour piloter ERP, Notion et IA dans votre PME." />
        <meta property="og:locale" content="fr_FR" />
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
                  onClick={() => trackCTAClick("Prendre rendez-vous", "direction_header", "calendly")}
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
            <li className="text-foreground font-medium">Direction Transformation Digitale</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative py-8 md:py-16 lg:py-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                  Externalisez votre <span className="text-secondary">Direction Transformation Digitale</span> — en temps partagé
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Une directrice Transformation digitale expérimentée de <strong className="text-foreground">1 à 3 jours par semaine</strong>, pour piloter votre ERP, structurer votre Notion et <strong className="text-foreground">faire passer un cap à votre PME</strong> en moins de 6 mois.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button asChild className="btn-premium text-base px-8 py-6">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                      onClick={() => trackCTAClick("Réserver mon entretien", "direction_hero", "calendly")}
                    >
                      Réserver mon entretien stratégique
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <span className="text-sm text-muted-foreground self-center">
                    📍 Lyon · France entière
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/20">
                  <p className="text-foreground font-medium leading-relaxed">
                    <span className="text-secondary font-bold">30 à 50 % du coût</span> d'un Directeur de la Transformation salarié — sans engagement long, sans risque RH.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                  <p className="text-sm text-muted-foreground italic">
                    « Pas une consultante qui vous facture des slides. Une consultante opérationnelle qui prend des décisions, qui tient les délais, qui parle aux prestataires — et qui vous rend libre. »
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
                  Le constat est <span className="text-gradient-secondary">sans appel</span>
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
            </div>
          </div>
        </section>

        {/* Third way */}
        <section className="py-14 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Il existe une <span className="text-gradient-secondary">3ème voie</span>
              </h2>
              <div className="glass-premium rounded-2xl md:rounded-[2rem] p-6 md:p-10 text-left">
                <div className="flex items-start gap-4">
                  <div className="text-3xl md:text-4xl flex-shrink-0">💡</div>
                  <div>
                    <p className="text-lg md:text-xl text-foreground font-semibold mb-3">
                      Une Directrice de la Transformation Digitale à temps partagé.
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Elle vient de 1 à 3 jours par semaine. Elle prend la responsabilité. Elle pilote vos prestataires, structure votre Notion, forme vos équipes — et repart quand le système tourne tout seul.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="py-14 md:py-24 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Imaginez votre PME <span className="text-gradient-secondary">dans 6 mois</span>
              </h2>
            </div>
            <div className="max-w-5xl mx-auto glass-premium rounded-2xl md:rounded-[2rem] overflow-hidden">
              <div className="grid grid-cols-2 bg-muted/40 text-foreground font-bold text-sm md:text-base">
                <div className="p-4 md:p-6 border-r border-border/50">Aujourd'hui</div>
                <div className="p-4 md:p-6 text-secondary">Dans 6 mois</div>
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

        {/* Responsibilities */}
        <section className="py-14 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Ce dont je prends la <span className="text-gradient-secondary">responsabilité</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
              {responsibilities.map((d, i) => (
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
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Choisissez votre <span className="text-gradient-secondary">rythme</span>
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
                  <p className="text-secondary font-semibold mb-6">{f.duration} · {f.ideal}</p>
                  <ul className="space-y-3 mb-6 text-sm md:text-base">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground"><strong>Périmètre :</strong> {f.scope}</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" /><span className="text-foreground"><strong>Engagement :</strong> {f.engagement}</span></li>
                  </ul>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-base md:text-lg font-bold text-foreground">{f.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto mt-8 p-5 md:p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-sm md:text-base text-foreground">
                💡 Soit <strong>30 à 50 % du coût</strong> d'un Directeur de la Transformation salarié (120 K€/an chargés + recrutement + formation). Sans engagement long. Sans risque RH.
              </p>
            </div>
          </div>
        </section>

        {/* Inclusions */}
        <section className="py-14 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Tout ce qui est <span className="text-gradient-secondary">inclus</span>
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
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-14 md:py-24 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Mes <span className="text-gradient-secondary">garanties</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="glass-premium rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Unlock className="h-7 w-7 text-secondary" />
                  <h3 className="text-lg font-bold text-foreground">🔓 Zéro lock-in</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Engagement initial de 3 mois, puis préavis 30 jours. Vous reprenez votre liberté quand vous voulez.
                </p>
              </div>
              <div className="glass-premium rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-7 w-7 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">🎯 Le Cap Digital déduit</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Si vous avez déjà réalisé mon diagnostic Le Cap Digital, 1 000 € sont déduits du 1er mois de mandat (souscription dans les 30 jours).
                </p>
              </div>
              <div className="glass-premium rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-7 w-7 text-secondary" />
                  <h3 className="text-lg font-bold text-foreground">📊 Transparence totale</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Comité de pilotage mensuel + reporting hebdo. Vous savez chaque semaine ce qui avance, ce qui bloque, ce qui arrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="py-14 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Votre parcours-type sur <span className="text-gradient-secondary">6 mois</span>
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
            <p className="text-center text-sm md:text-base text-muted-foreground italic mt-8 max-w-3xl mx-auto">
              Bascule possible vers l'offre Suivi mensuel pour maintenir l'élan.
            </p>
          </div>
        </section>

        {/* For whom / not for whom */}
        <section className="py-14 md:py-24 relative">
          <div className="absolute inset-0 bg-muted/40" />
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
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Pourquoi me faire <span className="text-gradient-secondary">confiance</span>
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
          <div className="absolute inset-0 bg-muted/40" />
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
                Ils ont <span className="text-gradient-secondary">transformé</span> leur entreprise
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
                Réservez votre entretien stratégique
              </h2>
              <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
                On fait le point sur l'état de votre transformation, vos blocages, vos priorités. Je vous dis honnêtement si ce mandat est la bonne réponse pour votre PME.
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
                  onClick={() => trackCTAClick("Réserver mon entretien", "direction_footer_cta", "calendly")}
                >
                  Réserver mon entretien
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground mt-6">
                2 mandats simultanés maximum. 1 nouveau mandat ouvert par trimestre. Prochaine disponibilité communiquée lors de l'entretien.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DirectionTransformation;
